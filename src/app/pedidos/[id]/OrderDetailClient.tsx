'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Circle, Clock, XCircle } from 'lucide-react'
import type { Order, OrderStatus, OrderStatusEvent } from '@/lib/types/order'
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types/order'
import type { AuthUser } from '@/lib/types/auth'
import { formatCurrency, formatDate, formatDateTime } from '@/lib/format'

interface Props {
  order: Order
  user: AuthUser
}

export default function OrderDetailClient({ order }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/pedidos"
        className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar para pedidos
      </Link>

      {/* Header */}
      <div className="flex flex-wrap items-start gap-4 mb-8">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="font-display text-xl font-bold text-[var(--text-1)]">{order.title}</h1>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${ORDER_STATUS_COLORS[order.status]}`}
            >
              {ORDER_STATUS_LABELS[order.status]}
            </span>
          </div>
          <p className="text-[12px] text-[var(--text-3)]">
            Pedido #{order.id.slice(0, 8).toUpperCase()} · Criado em {formatDate(order.createdAt)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: timeline + description */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Timeline */}
          <section
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6"
            aria-labelledby="timeline-heading"
          >
            <h2
              id="timeline-heading"
              className="font-display text-[14px] font-semibold text-[var(--text-1)] mb-6"
            >
              Histórico do Pedido
            </h2>
            <StatusTimeline timeline={order.timeline} status={order.status} />
          </section>

          {/* Description */}
          {order.description && (
            <section
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6"
              aria-labelledby="desc-heading"
            >
              <h2
                id="desc-heading"
                className="font-display text-[14px] font-semibold text-[var(--text-1)] mb-3"
              >
                Descrição do Projeto
              </h2>
              <p className="text-[13px] text-[var(--text-2)] leading-relaxed">
                {order.description}
              </p>
            </section>
          )}

          {/* Notes */}
          {order.notes && (
            <section className="bg-[var(--accent-muted)] border border-[var(--accent-border)] rounded-xl p-5">
              <p className="text-[13px] text-[var(--text-1)] font-medium mb-1">Observações</p>
              <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{order.notes}</p>
            </section>
          )}
        </div>

        {/* Right column: summary */}
        <div className="space-y-4">
          {/* Dates */}
          <section
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5"
            aria-labelledby="dates-heading"
          >
            <h2
              id="dates-heading"
              className="font-display text-[13px] font-semibold text-[var(--text-1)] mb-4"
            >
              Datas
            </h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-[11px] font-medium text-[var(--text-3)] uppercase tracking-wide mb-0.5">
                  Criado em
                </dt>
                <dd className="text-[13px] text-[var(--text-1)]">{formatDate(order.createdAt)}</dd>
              </div>
              {order.estimatedDelivery && (
                <div>
                  <dt className="text-[11px] font-medium text-[var(--text-3)] uppercase tracking-wide mb-0.5">
                    Entrega estimada
                  </dt>
                  <dd className="text-[13px] text-[var(--text-1)]">
                    {formatDate(order.estimatedDelivery)}
                  </dd>
                </div>
              )}
              {order.deliveredAt && (
                <div>
                  <dt className="text-[11px] font-medium text-[var(--text-3)] uppercase tracking-wide mb-0.5">
                    Entregue em
                  </dt>
                  <dd className="text-[13px] text-emerald-600 font-medium">
                    {formatDateTime(order.deliveredAt)}
                  </dd>
                </div>
              )}
            </dl>
          </section>

          {/* Financial summary */}
          <section
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5"
            aria-labelledby="financial-heading"
          >
            <h2
              id="financial-heading"
              className="font-display text-[13px] font-semibold text-[var(--text-1)] mb-4"
            >
              Resumo Financeiro
            </h2>

            {/* Items */}
            {order.items.length > 0 && (
              <ul className="space-y-2 mb-4" aria-label="Itens do pedido">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between text-[12px]">
                    <span className="text-[var(--text-2)]">
                      {item.name}
                      {item.quantity > 1 && (
                        <span className="text-[var(--text-3)]"> ×{item.quantity}</span>
                      )}
                    </span>
                    <span className="text-[var(--text-1)] font-medium">
                      {formatCurrency(item.total)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="border-t border-[var(--border)] pt-3 space-y-1.5">
              {order.subtotal !== order.total && (
                <div className="flex justify-between text-[12px]">
                  <span className="text-[var(--text-2)]">Subtotal</span>
                  <span className="text-[var(--text-1)]">{formatCurrency(order.subtotal)}</span>
                </div>
              )}
              <div className="flex justify-between text-[14px] font-semibold">
                <span className="text-[var(--text-1)]">Total</span>
                <span className="text-[var(--accent)]">{formatCurrency(order.total)}</span>
              </div>
            </div>
          </section>

          {/* Help */}
          <div className="text-center">
            <p className="text-[12px] text-[var(--text-3)] mb-2">
              Dúvidas sobre este pedido?
            </p>
            <Link
              href="/contato"
              className="text-[13px] text-[var(--accent)] hover:underline font-medium"
            >
              Fale com a equipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusTimeline({
  timeline,
  status,
}: {
  timeline: OrderStatusEvent[]
  status: OrderStatus
}) {
  const isCancelled = status === 'cancelled'

  return (
    <ol aria-label="Timeline de status do pedido" className="relative">
      {timeline.map((event, index) => {
        const isLast = index === timeline.length - 1
        const isCancelledStep = event.status === 'cancelled'

        return (
          <li key={event.status} className="relative flex gap-4">
            {/* Vertical line */}
            {!isLast && (
              <div
                className={`absolute left-4 top-8 bottom-0 w-px ${
                  event.isCompleted ?'bg-[var(--accent)]' : 'bg-[var(--border)]'
                }`}
                aria-hidden="true"
              />
            )}

            {/* Icon */}
            <div className="flex-shrink-0 z-10">
              <TimelineIcon
                isCompleted={event.isCompleted}
                isCurrent={event.isCurrent}
                isCancelled={isCancelledStep}
              />
            </div>

            {/* Content */}
            <div className={`pb-6 ${isLast ?'' : ''}`}>
              <p
                className={`text-[13px] font-semibold ${
                  event.isCurrent
                    ?isCancelled
                      ?'text-red-600'
                      : 'text-[var(--accent)]'
                    : event.isCompleted
                    ?'text-[var(--text-1)]'
                    : 'text-[var(--text-3)]'
                }`}
              >
                {event.label}
              </p>
              <p
                className={`text-[12px] mt-0.5 ${
                  event.isCompleted || event.isCurrent
                    ?'text-[var(--text-2)]'
                    : 'text-[var(--text-3)]'
                }`}
              >
                {event.description}
              </p>
              {event.timestamp && (event.isCompleted || event.isCurrent) && (
                <p className="text-[11px] text-[var(--text-3)] mt-1">
                  {formatDateTime(event.timestamp)}
                </p>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

function TimelineIcon({
  isCompleted,
  isCurrent,
  isCancelled,
}: {
  isCompleted: boolean
  isCurrent: boolean
  isCancelled: boolean
}) {
  const base = 'h-8 w-8 mt-0'

  if (isCancelled && isCurrent) {
    return <XCircle className={`${base} text-red-500`} aria-hidden="true" />
  }
  if (isCompleted && !isCurrent) {
    return <CheckCircle2 className={`${base} text-[var(--accent)]`} aria-hidden="true" />
  }
  if (isCurrent) {
    return (
      <div className="h-8 w-8 flex items-center justify-center" aria-hidden="true">
        <Clock className="h-6 w-6 text-[var(--accent)] animate-pulse" />
      </div>
    )
  }
  return <Circle className={`${base} text-[var(--border)]`} aria-hidden="true" />
}
