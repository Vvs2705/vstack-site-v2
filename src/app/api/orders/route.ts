import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth-server'
import { prisma } from '@/lib/prisma'
import { buildOrderResponse } from '@/lib/orders'

const PAGE_SIZE = 10

export async function GET(request: NextRequest) {
  const user = await getAuthUser()
  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const page = Math.max(1, Number(searchParams.get('page') ?? '1'))

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: { userId: user.id },
      include: { items: true, events: { orderBy: { createdAt: 'asc' } } },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.order.count({ where: { userId: user.id } }),
  ])

  return NextResponse.json({
    orders: orders.map(buildOrderResponse),
    total,
    page,
    pageSize: PAGE_SIZE,
  })
}
