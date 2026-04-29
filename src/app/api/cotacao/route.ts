import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { resend } from '@/lib/resend'
import { CotacaoSchema } from '@/lib/validations'
import { sanitizeObject, extractIp } from '@/lib/security'

export const runtime = 'nodejs'

const BUDGET_LABELS: Record<string, string> = {
  'ate-10k': 'Até R$ 10.000',
  '10k-50k': 'R$ 10.000 – R$ 50.000',
  '50k-200k': 'R$ 50.000 – R$ 200.000',
  '200k+': 'Acima de R$ 200.000',
}

const TIMELINE_LABELS: Record<string, string> = {
  'urgente':    'Urgente (< 1 mês)',
  '1-3meses':  '1 a 3 meses',
  '3-6meses':  '3 a 6 meses',
  '6meses+':   'Mais de 6 meses',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = CotacaoSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const data = sanitizeObject(parsed.data)
    const ip = extractIp(request)

    const cotacao = await prisma.cotacao.create({
      data: { ...data, ipAddress: ip },
    })

    // Notificação interna detalhada
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL!,
      to:      process.env.LEADS_EMAIL!,
      subject: `📋 Nova Cotação — ${data.companyName} | ${data.projectType.join(', ')}`,
      html: `
        <h2>Nova solicitação de cotação</h2>
        <hr/>
        <h3>Empresa</h3>
        <p><strong>Nome:</strong> ${data.companyName}</p>
        <p><strong>Setor:</strong> ${data.companySector}</p>
        <p><strong>Porte:</strong> ${data.companySize} colaboradores</p>
        <h3>Contato</h3>
        <p><strong>Nome:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.contactEmail}</p>
        <p><strong>Cargo:</strong> ${data.contactRole || '—'}</p>
        <h3>Projeto</h3>
        <p><strong>Tipo:</strong> ${data.projectType.join(', ')}</p>
        <p><strong>Orçamento:</strong> ${BUDGET_LABELS[data.projectBudget]}</p>
        <p><strong>Prazo:</strong> ${TIMELINE_LABELS[data.projectTimeline]}</p>
        <p><strong>Ferramentas atuais:</strong> ${data.currentTools || '—'}</p>
        <h3>Descrição do Projeto</h3>
        <blockquote>${data.projectDescription}</blockquote>
        <h3>Principal Desafio</h3>
        <blockquote>${data.mainChallenge}</blockquote>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/cotacoes/${cotacao.id}">Ver no painel admin</a></p>
      `,
    })

    await prisma.auditLog.create({
      data: { action: 'cotacao_submitted', entityType: 'Cotacao', entityId: cotacao.id, ipAddress: ip },
    })

    return NextResponse.json({ success: true, id: cotacao.id }, { status: 201 })
  } catch (error) {
    console.error('[COTACAO API ERROR]', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
