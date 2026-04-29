import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { ContatoSchema } from '@/lib/validations'
import { sanitizeObject, extractIp } from '@/lib/security'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = ContatoSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const data = sanitizeObject(parsed.data)
    const ip = extractIp(request)

    // Salvar lead no banco
    const lead = await prisma.lead.create({
      data: {
        ...data,
        source:    'contato',
        ipAddress: ip,
        userAgent: request.headers.get('user-agent') || undefined,
      },
    })

    // Enviar email de notificação
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL!,
      to:      process.env.LEADS_EMAIL!,
      subject: `🔔 Novo Lead — ${data.name} (${data.company || 'sem empresa'})`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Empresa:</strong> ${data.company || '—'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone || '—'}</p>
        <p><strong>Interesse:</strong> ${data.interest}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote>${data.message}</blockquote>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/leads/${lead.id}">Ver no painel admin</a></p>
      `,
    })

    // Email de confirmação para o cliente
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL!,
      to:      data.email,
      subject: 'Recebemos seu contato — V-STACK SOLUTIONS',
      html: `
        <h2>Olá, ${data.name}!</h2>
        <p>Recebemos seu contato e retornaremos em até <strong>24 horas úteis</strong>.</p>
        <p>Equipe V-STACK SOLUTIONS</p>
      `,
    })

    // Audit log
    await prisma.auditLog.create({
      data: { action: 'lead_created', entityType: 'Lead', entityId: lead.id, ipAddress: ip },
    })

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (error) {
    console.error('[CONTATO API ERROR]', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
