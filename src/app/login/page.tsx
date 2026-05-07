import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Acesse sua conta V-STACK SOLUTIONS para acompanhar seus pedidos.',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <LoginClient />
}
