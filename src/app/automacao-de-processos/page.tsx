import SeoLandingPage from '@/components/sections/SeoLandingPage'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('automacao-de-processos')

export default function AutomacaoDeProcessosPage() {
  return <SeoLandingPage page={getSeoServicePage('automacao-de-processos')} />
}
