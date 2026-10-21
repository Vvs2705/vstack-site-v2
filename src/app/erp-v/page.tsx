import type { Metadata } from 'next'
import ProductLanding from '@/components/product/ProductLanding'
import { erpVLanding } from '@/lib/products/erp-v'
import { OG_DEFAULTS } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: erpVLanding.metaTitle,
  description: erpVLanding.metaDescription,
  alternates: { canonical: 'https://www.vstack-solutions.com.br/erp-v' },
  openGraph: {
    ...OG_DEFAULTS,
    title: erpVLanding.metaTitle,
    description: erpVLanding.metaDescription,
    url: 'https://www.vstack-solutions.com.br/erp-v',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: erpVLanding.metaTitle,
    description: erpVLanding.metaDescription,
  },
}

export default function ErpVPage() {
  return <ProductLanding data={erpVLanding} />
}
