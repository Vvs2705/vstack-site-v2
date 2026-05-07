import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import type { SessionToken } from '@/lib/types/auth'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('vstack_session')?.value

  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 })
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)
    const session = payload as unknown as SessionToken

    return NextResponse.json({
      user: {
        id: session.userId,
        name: session.name,
        email: session.email,
        image: session.image,
        provider: 'google',
      },
    })
  } catch {
    return NextResponse.json({ user: null }, { status: 200 })
  }
}
