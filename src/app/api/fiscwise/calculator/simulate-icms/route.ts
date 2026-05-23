import { NextRequest, NextResponse } from 'next/server'
import { SimulateIcmsSchema } from '@/lib/validations'

const BACKEND_URL = process.env.FISCWISE_BACKEND_URL ?? 'http://localhost:8000'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = SimulateIcmsSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const cookieHeader = request.headers.get('cookie')
    const headers: HeadersInit = { 'Content-Type': 'application/json' }
    if (cookieHeader) headers['cookie'] = cookieHeader

    const res = await fetch(`${BACKEND_URL}/api/v1/calculator/simulate-icms`, {
      method: 'POST',
      headers,
      body: JSON.stringify(parsed.data),
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
