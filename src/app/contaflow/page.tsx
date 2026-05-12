import SeoLandingPage from '@/components/sections/SeoLandingPage'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('contaflow')

export default function ContaFlowPage() {
  return <SeoLandingPage page={getSeoServicePage('contaflow')} />
}
