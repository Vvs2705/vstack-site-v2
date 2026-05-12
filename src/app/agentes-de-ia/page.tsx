import SeoLandingPage from '@/components/sections/SeoLandingPage'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('agentes-de-ia')

export default function AgentesDeIAPage() {
  return <SeoLandingPage page={getSeoServicePage('agentes-de-ia')} />
}
