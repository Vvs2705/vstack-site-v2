'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Package, ChevronRight, RefreshCw } from 'lucide-react'
import type { AuthUser } from '@/lib/types/auth'
import type { Order, OrdersResponse } from '@/lib/types/order'
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types/order'
import { formatCurrency, formatDate } from '@/lib/format'

interface Props {
  user: AuthUser
}

type FetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: OrdersResponse }
  | { status: 'error'; message: string }

export default function OrdersClient({ user }: Props) {
  const [state, setState] = useState<FetchState>({ status: 'loading' })
  const [page, setPage] = useState(1)

  const fetchOrders = useCallback(async (p: number) => {
    setState({ status: 'loading' })
    try {
      const res = await fetch(`/api/orders?page=${p}`, { credentials: 'include' })
      if (!res.ok) throw new Error('Falha ao carregar pedidos')
      const data = (await res.json()) as OrdersResponse
      setState({ status: 'success', data })
    } catch (err) {
      setState({
        status: 'error',
        message: err instanceof Error ? err.message : 'Erro desconhecido',
      })
    }
  }, [])

  useEffect(() => {
    fetchOrders(page)
  }, [fetchOrders, page])

  const totalPages =
    state.status === 'success' ? Math.ceil(state.data.total / state.data.pageSize) : 0

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-[var(--text-1)]">Meus Pedidos</h1>
          <p className="mt-1 text-[13px] text-[var(--text-2)]">
            Olá, {user.name.split(' ')[0]}! Acompanhe seus projetos abaixo.
          </p>
        </div>
        <button
          onClick={() => fetchOrders(page)}
          disabled={state.status === 'loading'}
          className="flex items-center gap-1.5 text-[13px] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors disabled:opacity-50"
          aria-label="Atualizar pedidos"
        >
          <RefreshCw
            className={`h-4 w-4 ${state.status === 'loading' ? 'animate-spin' : ''}`}
          />
          Atualizar
        </button>
      </div>

      {/* States */}
      {state.status === 'loading' && <OrdersSkeleton />}

      {state.status === 'error' && (
        <div
          role="alert"
          className="flex flex-col items-center gap-4 py-16 text-center"
        >
          <Package className="h-10 w-10 text-[var(--text-3)]" aria-hidden="true" />
          <p className="text-[var(--text-2)]">{state.message}</p>
          <button
            onClick={() => fetchOrders(page)}
            className="btn-primary px-5 py-2 text-[13px] font-medium"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {state.status === 'success' && state.data.orders.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <Package className="h-12 w-12 text-[var(--text-3)]" aria-hidden="true" />
          <h2 className="font-display text-lg font-semibold text-[var(--text-1)]">
            Nenhum pedido ainda
          </h2>
          <p className="text-[13px] text-[var(--text-2)] max-w-xs">
            Quando você contratar um projeto, ele aparecerá aqui.
          </p>
          <Link href="/cotacao" className="btn-primary px-6 py-2.5 text-[13px] font-medium">
            Solicitar Cotação
          </Link>
        </div>
      )}

      {state.status === 'success' && state.data.orders.length > 0 && (
        <>
          <ul className="space-y-3" aria-label="Lista de pedidos">
            {state.data.orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </ul>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-[13px] rounded-lg border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent-border)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              <span className="text-[13px] text-[var(--text-2)]">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-[13px] rounded-lg border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent-border)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function OrderCard({ order }: { order: Order }) {
  return (
    <li>
      <Link
        href={`/pedidos/${order.id}`}
        className="group flex items-center gap-4 p-4 sm:p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-[var(--accent-border)] transition-colors"
        aria-label={`Ver detalhes do pedido: ${order.title}`}
      >
        {/* Icon */}
        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center">
          <Package className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h2 className="text-[14px] font-semibold text-[var(--text-1)] truncate">
              {order.title}
            </h2>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${ORDER_STATUS_COLORS[order.status]}`}
            >
              {ORDER_STATUS_LABELS[order.status]}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 text-[12px] text-[var(--text-3)]">
            <span>{formatDate(order.createdAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{formatCurrency(order.total)}</span>
          </div>
        </div>

        {/* Arrow */}
        <ChevronRight
          className="flex-shrink-0 h-4 w-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors"
          aria-hidden="true"
        />
      </Link>
    </li>
  )
}

function OrdersSkeleton() {
  return (
    <ul className="space-y-3" aria-busy="true" aria-label="Carregando pedidos">
      {Array.from({ length: 4 }).map((_, i) => (
        <li
          key={i}
          className="h-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl animate-pulse"
        />
      ))}
    </ul>
  )
}
