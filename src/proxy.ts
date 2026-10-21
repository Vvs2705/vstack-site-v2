import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit, type Duration } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

// Sem Upstash (ou com ele fora do ar) o site continua no ar: as rotas seguem sem limite
// e o erro vai para o log. Formulário de lead nunca pode cair por causa do rate limit.
const redis = UPSTASH_URL && UPSTASH_TOKEN
  ? new Redis({ url: UPSTASH_URL, token: UPSTASH_TOKEN, retry: { retries: 1 } })
  : null

if (!redis) console.error('[RATE LIMIT] UPSTASH_REDIS_REST_URL/TOKEN ausentes: rate limit desligado')

function limiter(tokens: number, window: Duration, prefix: string) {
  // timeout: se o Redis não responder em 1,5 s, o Ratelimit libera a requisição
  return redis
    ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(tokens, window), prefix, timeout: 1500 })
    : null
}

// Rate limits por rota
const rateLimits = {
  contact: limiter(5,   '1 h', 'rl:contact'),
  chat:    limiter(30,  '1 h', 'rl:chat'),
  cotacao: limiter(3,   '1 h', 'rl:cotacao'),
  dor:     limiter(5,   '1 h', 'rl:dor'),
  default: limiter(100, '1 m', 'rl:default'),
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
  return rateLimits.default
}

export async function proxy(request: NextRequest) {
  const limiter = getRateLimiter(request.nextUrl.pathname)
  if (!limiter) return NextResponse.next()

  try {
    const { success, limit, remaining } = await limiter.limit(getClientIp(request))

    if (!success) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'Retry-After': '60',
          },
        }
      )
    }
  } catch (error) {
    console.error('[RATE LIMIT] Upstash indisponível:', error instanceof Error ? error.message : error)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
