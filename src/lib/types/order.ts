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
  pending: 'text-warning bg-warning/10 border-warning/20',
  confirmed: 'text-info bg-info/10 border-info/20',
  in_progress: 'text-[var(--accent)] bg-orange-50 border-orange-200',
  review: 'text-purple-600 bg-purple-50 border-purple-200',
  delivered: 'text-success bg-success/10 border-success/20',
  completed: 'text-success bg-success/10 border-success/20',
  cancelled: 'text-danger bg-danger/10 border-danger/20',
}
