import type { Metadata } from 'next'
import { OG_DEFAULTS } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description:
    'Dúvidas sobre automação de processos, agentes de IA, integrações, sistemas sob medida, investimento e implantação com a V-STACK SOLUTIONS.',
  openGraph: {
    ...OG_DEFAULTS,
    title: 'Perguntas Frequentes | V-STACK SOLUTIONS',
    description:
      'Entenda como a V-STACK SOLUTIONS conduz diagnóstico, automação, IA, integração de sistemas e desenvolvimento sob medida.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
