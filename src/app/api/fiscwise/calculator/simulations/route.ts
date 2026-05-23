import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.FISCWISE_BACKEND_URL ?? 'http://localhost:8000'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get('cookie')
    const headers: HeadersInit = {}
    if (cookieHeader) headers['cookie'] = cookieHeader

    const res = await fetch(`${BACKEND_URL}/api/v1/calculator/simulations`, {
      headers,
      cache: 'no-store',
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: (data as { detail?: string }).detail ?? 'Erro no servidor' },
        { status: res.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro interno'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
