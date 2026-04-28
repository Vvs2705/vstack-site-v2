import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SignJWT } from 'jose'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const LoginSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(8),
})

export async function POST(request: NextRequest) {
  try {
    const body   = await request.json()
    const parsed = LoginSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 400 })
    }

    const { email, password } = parsed.data

    const user = await prisma.adminUser.findUnique({ where: { email } })

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      // Não revelar se é email ou senha inválida
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 })
    }

    // Gerar JWT
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const token  = await new SignJWT({ sub: user.id, email: user.email, role: user.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('8h')
      .sign(secret)

    // Atualizar último login
    await prisma.adminUser.update({
      where: { id: user.id },
      data:  { lastLoginAt: new Date() },
    })

    await prisma.auditLog.create({
      data: {
        action:     'admin_login',
        entityType: 'AdminUser',
        entityId:   user.id,
        ipAddress:  request.headers.get('x-forwarded-for') || undefined,
      },
    })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge:   60 * 60 * 8, // 8 horas
      path:     '/',
    })

    return response
  } catch (error) {
    console.error('[ADMIN AUTH ERROR]', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
