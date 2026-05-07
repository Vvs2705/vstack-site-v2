import Link from 'next/link'

export default function OrderNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-display text-2xl font-bold text-[var(--text-1)] mb-2">
        Pedido não encontrado
      </h1>
      <p className="text-[13px] text-[var(--text-2)] mb-8">
        Este pedido não existe ou não pertence à sua conta.
      </p>
      <Link href="/pedidos" className="btn-primary px-6 py-2.5 text-[13px] font-medium">
        Ver meus pedidos
      </Link>
    </div>
  )
}
