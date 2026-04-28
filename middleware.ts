import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { jwtVerify } from 'jose'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Rate limits por rota
const rateLimits = {
  contact:  new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5,  '1 h'),  prefix: 'rl:contact' }),
  chat:     new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(30, '1 h'),  prefix: 'rl:chat' }),
  cotacao:  new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(3,  '1 h'),  prefix: 'rl:cotacao' }),
  dor:      new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5,  '1 h'),  prefix: 'rl:dor' }),
  default:  new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(100,'1 m'),  prefix: 'rl:default' }),
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

function getRateLimiter(pathname: string) {
  if (pathname.startsWith('/api/contato'))  return rateLimits.contact
  if (pathname.startsWith('/api/chat'))     return rateLimits.chat
  if (pathname.startsWith('/api/cotacao'))  return rateLimits.cotacao
  if (pathname.startsWith('/api/dor'))      return rateLimits.dor
  return rateLimits.default
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ─── Rate limiting em todas as rotas API ──────────────────────────────────
  if (pathname.startsWith('/api/')) {
    const ip = getClientIp(request)
    const limiter = getRateLimiter(pathname)
    const { success, limit, remaining } = await limiter.limit(ip)

    if (!success) {
      return new NextResponse(
        JSON.stringify({ error: 'Muitas requisições. Tente novamente em alguns minutos.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'Retry-After': '60',
          },
        }
      )
    }
  }

  // ─── Proteção de rotas admin ──────────────────────────────────────────────
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
      await jwtVerify(token, secret)
    } catch {
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('admin_token')
      return response
    }
  }

  // ─── Bloquear acesso direto a rotas admin da API sem autenticação ─────────
  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth')) {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: 'Não autorizado' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
      await jwtVerify(token, secret)
    } catch {
      return new NextResponse(
        JSON.stringify({ error: 'Token inválido ou expirado' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*', '/admin/:path*'],
}
