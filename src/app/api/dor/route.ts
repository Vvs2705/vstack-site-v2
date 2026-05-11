import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { DorSchema } from '@/lib/validations'
import { sanitizeObject, extractIp } from '@/lib/security'

export const runtime = 'nodejs'

const URGENCY_LABELS: Record<string, string> = {
  baixa:   '🟢 Baixa',
  media:   '🟡 Média',
  alta:    '🔴 Alta',
  critica: '🚨 Crítica',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = DorSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const data = sanitizeObject(parsed.data)
    const ip = extractIp(request)

    const dor = await prisma.dorCliente.create({
      data: { ...data, ipAddress: ip },
    })

    // Notificação interna
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL!,
      to:      process.env.LEADS_EMAIL!,
      subject: `🩺 Nova Dor do Cliente — ${URGENCY_LABELS[data.urgency]} — ${data.title}`,
      html: `
        <h2>Nova dor de cliente recebida</h2>
        <p><strong>Urgência:</strong> ${URGENCY_LABELS[data.urgency]}</p>
        <p><strong>Título:</strong> ${data.title}</p>
        ${data.company ?`<p><strong>Empresa:</strong> ${data.company} (${data.sector || '—'})</p>` : ''}
        ${!data.isAnonymous ?`<p><strong>Contato:</strong> ${data.name} — ${data.email}</p>` : '<p><em>Enviado anonimamente</em></p>'}
        <h3>Descrição do Problema</h3>
        <blockquote>${data.description}</blockquote>
        <h3>Impacto no Negócio</h3>
        <blockquote>${data.impact}</blockquote>
        <h3>Como Resolvem Hoje</h3>
        <blockquote>${data.currentSolution || 'Não resolvem / Não informado'}</blockquote>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/dores/${dor.id}">Ver no painel admin</a></p>
      `,
    })

    await prisma.auditLog.create({
      data: { action: 'dor_submitted', entityType: 'DorCliente', entityId: dor.id, ipAddress: ip },
    })

    return NextResponse.json({ success: true, id: dor.id }, { status: 201 })
  } catch (error) {
    console.error('[DOR API ERROR]', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
