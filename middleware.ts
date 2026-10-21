import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit, type Duration } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { jwtVerify } from 'jose'

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
const JWT_SECRET = process.env.JWT_SECRET ? new TextEncoder().encode(process.env.JWT_SECRET) : null

// Sem Upstash o site continua no ar: formulários seguem sem limite e o login admin fecha (503).
const redis = UPSTASH_URL && UPSTASH_TOKEN
  ? new Redis({ url: UPSTASH_URL, token: UPSTASH_TOKEN, retry: { retries: 1 } })
  : null

if (!redis) console.error('[RATE LIMIT] UPSTASH_REDIS_REST_URL/TOKEN ausentes: rate limit desligado')

function limiter(tokens: number, window: Duration, prefix: string) {
  // timeout: se o Redis não responder em 1,5 s, o Ratelimit libera com reason 'timeout'
  return redis
    ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(tokens, window), prefix, timeout: 1500 })
    : null
}

// Rate limits por rota
const rateLimits = {
  contact:   limiter(5,   '1 h',  'rl:contact'),
  chat:      limiter(30,  '1 h',  'rl:chat'),
  cotacao:   limiter(3,   '1 h',  'rl:cotacao'),
  dor:       limiter(5,   '1 h',  'rl:dor'),
  adminAuth: limiter(10,  '15 m', 'rl:admin-auth'),
  default:   limiter(100, '1 m',  'rl:default'),
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

function getRateLimiter(pathname: string) {
  if (pathname.startsWith('/api/contato'))                  return rateLimits.contact
  if (pathname.startsWith('/api/fiscwise/calculator/chat')) return rateLimits.chat
  if (pathname.startsWith('/api/cotacao'))                  return rateLimits.cotacao
  if (pathname.startsWith('/api/dor'))                      return rateLimits.dor
  if (pathname.startsWith('/api/admin/auth'))               return rateLimits.adminAuth
  return rateLimits.default
}

function json(body: object, status: number, headers: Record<string, string> = {}) {
  return new NextResponse(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  })
}

async function isValidToken(token: string | undefined): Promise<boolean> {
  if (!token || !JWT_SECRET) return false
  try {
    await jwtVerify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
}

async function rateLimit(request: NextRequest, pathname: string): Promise<NextResponse | null> {
  const failClosed = pathname.startsWith('/api/admin/auth')
  const limiter = getRateLimiter(pathname)

  let result: Awaited<ReturnType<Ratelimit['limit']>> | null = null
  if (limiter) {
    try {
      result = await limiter.limit(getClientIp(request))
    } catch (error) {
      console.error('[RATE LIMIT] Upstash indisponível:', error instanceof Error ? error.message : error)
    }
  }

  if (!result || result.reason === 'timeout') {
    return failClosed
      ? json({ error: 'Serviço temporariamente indisponível. Tente novamente em instantes.' }, 503, { 'Retry-After': '30' })
      : null
  }

  if (!result.success) {
    return json({ error: 'Muitas requisições. Tente novamente em alguns minutos.' }, 429, {
      'X-RateLimit-Limit': result.limit.toString(),
      'X-RateLimit-Remaining': result.remaining.toString(),
      'Retry-After': '60',
    })
  }

  return null
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ─── Rate limiting em todas as rotas API ──────────────────────────────────
  if (pathname.startsWith('/api/')) {
    const blocked = await rateLimit(request, pathname)
    if (blocked) return blocked
  }

  // ─── Proteção de rotas de cliente autenticado ─────────────────────────────
  if (pathname.startsWith('/pedidos')) {
    const token = request.cookies.get('vstack_session')?.value

    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('returnTo', pathname)
      return NextResponse.redirect(loginUrl)
    }

    if (!(await isValidToken(token))) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('vstack_session')
      return response
    }
  }

  // ─── Proteção de rotas admin ──────────────────────────────────────────────
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    if (!(await isValidToken(token))) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('admin_token')
      return response
    }
  }

  // ─── Bloquear acesso direto a rotas admin da API sem autenticação ─────────
  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth')) {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return json({ error: 'Não autorizado' }, 401)
    }

    if (!(await isValidToken(token))) {
      return json({ error: 'Token inválido ou expirado' }, 401)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Incluir rotas API, admin e pedidos
    '/api/:path*',
    '/admin/:path*',
    '/pedidos/:path*',
  ],
}
