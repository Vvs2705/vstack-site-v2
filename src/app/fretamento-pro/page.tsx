import type { Metadata } from 'next'
import ProductLanding from '@/components/product/ProductLanding'
import { fretamentoProLanding } from '@/lib/products/fretamento-pro'

export const metadata: Metadata = {
  title: fretamentoProLanding.metaTitle,
  description: fretamentoProLanding.metaDescription,
  alternates: { canonical: 'https://www.vstack-solutions.com.br/fretamento-pro' },
  openGraph: {
    title: fretamentoProLanding.metaTitle,
    description: fretamentoProLanding.metaDescription,
    url: 'https://www.vstack-solutions.com.br/fretamento-pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: fretamentoProLanding.metaTitle,
    description: fretamentoProLanding.metaDescription,
  },
}

export default function FretamentoProPage() {
  return <ProductLanding data={fretamentoProLanding} />
}
