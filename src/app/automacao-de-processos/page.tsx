import SeoLandingPage from '@/components/sections/SeoLandingPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('automacao-de-processos')

export default function AutomacaoDeProcessosPage() {
  const page = getSeoServicePage('automacao-de-processos')
  const breadcrumbJsonLd = breadcrumbList([
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes' },
    { name: page.eyebrow, url: `/${page.slug}` },
  ])

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SeoLandingPage page={page} />
    </>
  )
}
