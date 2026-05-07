export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'in_progress'
  | 'review'
  | 'delivered'
  | 'completed'
  | 'cancelled'

export interface OrderStatusEvent {
  status: OrderStatus
  label: string
  description: string
  timestamp: string
  isCompleted: boolean
  isCurrent: boolean
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  unitPrice: number
  total: number
}

export interface Order {
  id: string
  userId: string
  title: string
  description: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  total: number
  currency: 'BRL'
  timeline: OrderStatusEvent[]
  notes: string | null
  deliveredAt: string | null
  estimatedDelivery: string | null
  createdAt: string
  updatedAt: string
}

export interface OrdersResponse {
  orders: Order[]
  total: number
  page: number
  pageSize: number
}

export interface OrderDetailResponse {
  order: Order
}

// Status labels em pt-BR
export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Aguardando Confirmação',
  confirmed: 'Confirmado',
  in_progress: 'Em Desenvolvimento',
  review: 'Em Revisão',
  delivered: 'Entregue',
  completed: 'Concluído',
  cancelled: 'Cancelado',
}

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  pending: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  confirmed: 'text-blue-600 bg-blue-50 border-blue-200',
  in_progress: 'text-[var(--accent)] bg-orange-50 border-orange-200',
  review: 'text-purple-600 bg-purple-50 border-purple-200',
  delivered: 'text-green-600 bg-green-50 border-green-200',
  completed: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  cancelled: 'text-red-600 bg-red-50 border-red-200',
}
