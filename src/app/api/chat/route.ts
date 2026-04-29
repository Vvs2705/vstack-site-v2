import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateChatResponse } from '@/lib/openai'
import { ChatMessageSchema } from '@/lib/validations'
import { sanitizeString, extractIp } from '@/lib/security'
import { randomBytes } from 'crypto'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = ChatMessageSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const { message, sessionToken, visitorName, visitorEmail } = parsed.data
    const sanitizedMessage = sanitizeString(message)
    const ip = extractIp(request)
    const userAgent = request.headers.get('user-agent') || undefined

    // Buscar ou criar sessão
    let session = await prisma.chatSession.findUnique({
      where: { sessionToken },
      include: { messages: { orderBy: { createdAt: 'asc' }, take: 20 } },
    })

    if (!session) {
      session = await prisma.chatSession.create({
        data: {
          sessionToken,
          visitorName,
          visitorEmail,
          ipAddress: ip,
          userAgent,
        },
        include: { messages: true },
      })
    }

    // Salvar mensagem do usuário
    await prisma.chatMessage.create({
      data: { sessionId: session.id, role: 'user', content: sanitizedMessage },
    })

    // Montar histórico para OpenAI
    const history = session.messages.map(m => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }))
    history.push({ role: 'user', content: sanitizedMessage })

    // Gerar resposta
    const assistantReply = await generateChatResponse(history)

    // Salvar resposta da IA
    await prisma.chatMessage.create({
      data: { sessionId: session.id, role: 'assistant', content: assistantReply },
    })

    // Audit log
    await prisma.auditLog.create({
      data: {
        action:     'chat_message',
        entityType: 'ChatSession',
        entityId:   session.id,
        ipAddress:  ip,
        userAgent,
      },
    })

    return NextResponse.json({ reply: assistantReply, sessionId: session.id })
  } catch (error) {
    console.error('[CHAT API ERROR]', error)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}

// Iniciar nova sessão
export async function GET() {
  const sessionToken = randomBytes(32).toString('hex')
  return NextResponse.json({ sessionToken })
}
