import type { Metadata } from 'next'
import ProductLanding from '@/components/product/ProductLanding'
import { sessaoinkLanding } from '@/lib/products/sessaoink'

export const metadata: Metadata = {
  title: 'SessãoInk — Gestão para tatuadores',
  description:
    'O sistema que organiza seu estúdio de tatuagem: agenda, clientes, financeiro com comissões por artista, portfólio, consentimento assinado e portal público por slug.',
  openGraph: {
    title: 'SessãoInk — Gestão para tatuadores',
    description:
      'Agenda, clientes, financeiro com comissão por artista, portfólio, consentimento assinado e página pública. O sistema feito para tatuadores e estúdios.',
    url: 'https://www.vstack-solutions.com.br/sessaoink',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SessãoInk — Gestão para tatuadores',
    description:
      'Agenda, financeiro com comissão por artista, portfólio, consentimento assinado e portal público. Feito para tatuadores e estúdios.',
  },
}

export default function SessaoInkPage() {
  return <ProductLanding data={sessaoinkLanding} />
}
