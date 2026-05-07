import type { Metadata } from 'next'
import { redirect, notFound } from 'next/navigation'
import { getAuthUser } from '@/lib/auth-server'
import { prisma } from '@/lib/prisma'
import { buildOrderResponse } from '@/lib/orders'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import OrderDetailClient from './OrderDetailClient'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Pedido #${id.slice(0, 8).toUpperCase()}`,
    robots: { index: false, follow: false },
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const user = await getAuthUser()

  if (!user) {
    redirect('/login')
  }

  const { id } = await params

  const raw = await prisma.order.findFirst({
    where: { id, userId: user.id },
    include: { items: true, events: { orderBy: { createdAt: 'asc' } } },
  })

  if (!raw) {
    notFound()
  }

  const order = buildOrderResponse(raw)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-14">
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />
        <OrderDetailClient order={order} user={user} />
      </main>
      <Footer />
    </>
  )
}
