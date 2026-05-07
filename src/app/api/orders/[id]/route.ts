import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth-server'
import { prisma } from '@/lib/prisma'
import { buildOrderResponse } from '@/lib/orders'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getAuthUser()
  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const { id } = await params

  const order = await prisma.order.findFirst({
    where: { id, userId: user.id },
    include: { items: true, events: { orderBy: { createdAt: 'asc' } } },
  })

  if (!order) {
    return NextResponse.json({ error: 'Pedido não encontrado' }, { status: 404 })
  }

  return NextResponse.json({ order: buildOrderResponse(order) })
}
