import { NextRequest, NextResponse } from 'next/server'
import { SimulateRegimeSchema } from '@/lib/validations'

const BACKEND_URL = process.env.FISCWISE_BACKEND_URL ?? 'http://localhost:8000'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = SimulateRegimeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const res = await fetch(`${BACKEND_URL}/api/v1/calculator/simulate-regime`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
      // Forward session cookie so backend can identify user plan
      ...(request.headers.get('cookie')
        ? { headers: { 'Content-Type': 'application/json', cookie: request.headers.get('cookie')! } }
        : {}),
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
