import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAuthUser } from '@/lib/auth-server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import OrdersClient from './OrdersClient'

export const metadata: Metadata = {
  title: 'Meus Pedidos',
  description: 'Acompanhe o status dos seus projetos e pedidos.',
  robots: { index: false, follow: false },
}

export default async function PedidosPage() {
  const user = await getAuthUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-14">
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />
        <OrdersClient user={user} />
      </main>
      <Footer />
    </>
  )
}
