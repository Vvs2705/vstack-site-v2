import SeoLandingPage from '@/components/sections/SeoLandingPage'
import { getSeoServiceMetadata, getSeoServicePage } from '@/lib/seo-service-pages'

export const metadata = getSeoServiceMetadata('sistemas-sob-medida')

export default function SistemasSobMedidaPage() {
  return <SeoLandingPage page={getSeoServicePage('sistemas-sob-medida')} />
}
