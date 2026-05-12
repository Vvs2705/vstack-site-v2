import SeoLandingPage from '@/components/sections/SeoLandingPage'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('integracao-de-sistemas')

export default function IntegracaoDeSistemasPage() {
  return <SeoLandingPage page={getSeoServicePage('integracao-de-sistemas')} />
}
