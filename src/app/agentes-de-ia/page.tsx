import AgentDemo from '@/components/AgentDemo'
import SeoLandingPage from '@/components/sections/SeoLandingPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('agentes-de-ia')

export default function AgentesDeIAPage() {
  const page = getSeoServicePage('agentes-de-ia')
  const breadcrumbJsonLd = breadcrumbList([
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes' },
    { name: page.eyebrow, url: `/${page.slug}` },
  ])

  // A demo interativa (client-side) é injetada DENTRO do <main> do
  // SeoLandingPage, via slot `afterContent` — depois do conteúdo da landing e
  // antes do <Footer>. AgentDemo é autossuficiente (traz a própria <Section>,
  // espaçamento, tokens e CTA).
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SeoLandingPage page={page} afterContent={<AgentDemo />} />
    </>
  )
}
