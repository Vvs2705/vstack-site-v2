import type { Order, OrderEvent, OrderItem } from '@prisma/client'
import type { Order as OrderResponse, OrderStatus, OrderStatusEvent } from '@/lib/types/order'
import { ORDER_STATUS_LABELS } from '@/lib/types/order'

type OrderWithRelations = Order & {
  items: OrderItem[]
  events: OrderEvent[]
}

const STATUS_SEQUENCE: OrderStatus[] = [
  'pending',
  'confirmed',
  'in_progress',
  'review',
  'delivered',
  'completed',
]

export function buildOrderResponse(order: OrderWithRelations): OrderResponse {
  const currentStatus = order.status as OrderStatus
  const currentIndex = STATUS_SEQUENCE.indexOf(currentStatus)

  const seenStatuses = new Set(order.events.map((event) => event.status as OrderStatus))

  const timeline: OrderStatusEvent[] = STATUS_SEQUENCE.map((status, index) => {
    const event = order.events.find((orderEvent) => orderEvent.status === status)
    const isCompleted = seenStatuses.has(status) || index < currentIndex
    const isCurrent = status === currentStatus

    return {
      status,
      label: ORDER_STATUS_LABELS[status],
      description: event?.description ?? defaultDescription(status),
      timestamp: event?.createdAt.toISOString() ?? '',
      isCompleted,
      isCurrent,
    }
  })

  if (currentStatus === 'cancelled') {
    const cancelEvent = order.events.find((event) => event.status === 'cancelled')
    timeline.push({
      status: 'cancelled',
      label: ORDER_STATUS_LABELS.cancelled,
      description: cancelEvent?.description ?? 'Pedido cancelado.',
      timestamp: cancelEvent?.createdAt.toISOString() ?? order.updatedAt.toISOString(),
      isCompleted: true,
      isCurrent: true,
    })
  }

  return {
    id: order.id,
    userId: order.userId,
    title: order.title,
    description: order.description,
    status: currentStatus,
    items: order.items.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      total: item.total,
    })),
    subtotal: order.subtotal,
    total: order.total,
    currency: 'BRL',
    timeline,
    notes: order.notes,
    deliveredAt: order.deliveredAt?.toISOString() ?? null,
    estimatedDelivery: order.estimatedDelivery?.toISOString() ?? null,
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
  }
}

function defaultDescription(status: OrderStatus): string {
  const map: Record<OrderStatus, string> = {
    pending: 'Seu pedido foi recebido e aguarda confirmação.',
    confirmed: 'Pedido confirmado. Iniciando planejamento.',
    in_progress: 'Nossa equipe está desenvolvendo a solução.',
    review: 'Realizando revisão de qualidade.',
    delivered: 'Solução entregue para sua avaliação.',
    completed: 'Pedido concluído com sucesso.',
    cancelled: 'Pedido cancelado.',
  }
  return map[status]
}
