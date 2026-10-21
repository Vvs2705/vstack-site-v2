import { NextRequest, NextResponse } from 'next/server'
import { prisma, tryDb } from '@/lib/prisma'
import { sendEmail } from '@/lib/resend'
import { ContatoSchema } from '@/lib/validations'
import { sanitizeObject, extractIp } from '@/lib/security'
import { trackConversion } from '@/lib/analytics'

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
    const lead = await tryDb('contato', prisma.lead.create({
      data: {
        ...data,
        source:    'contato',
        ipAddress: ip,
        userAgent: request.headers.get('user-agent') || undefined,
      },
    }))

    // Enviar email de notificação
    const notified = await sendEmail('contato:interno', {
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
        <p><small>ID: ${lead?.id ?? 'não salvo (banco fora do ar)'}</small></p>
      `,
    })

    // Sem banco e sem e-mail o lead se perderia: só aí devolve erro
    if (!lead && !notified) {
      return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }

    // Email de confirmação para o cliente
    await sendEmail('contato:cliente', {
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
    if (lead) {
      await tryDb('contato:audit', prisma.auditLog.create({
        data: { action: 'lead_created', entityType: 'Lead', entityId: lead.id, ipAddress: ip },
      }))
    }

    await trackConversion('lead_form_submitted', {
      form: 'contato',
      interest: data.interest,
      hasCompany: Boolean(data.company),
      hasPhone: Boolean(data.phone),
    })

    return NextResponse.json({ success: true, id: lead?.id ?? null }, { status: 201 })
  } catch (error) {
    console.error('[CONTATO API ERROR]', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
