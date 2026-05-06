import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import SolutionsGridSection from '@/components/sections/SolutionsGridSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Soluções | V-STACK SOLUTIONS',
  description: 'Projetos e case studies desenvolvidos pela V-STACK SOLUTIONS. Conheça nossas soluções em automação, IA e integração de sistemas.',
  keywords: ['portfólio', 'projetos', 'case studies', 'ContaFlow', 'automação financeira', 'SaaS'],
  openGraph: {
    title: 'Soluções | V-STACK SOLUTIONS',
    description: 'Projetos e case studies desenvolvidos pela V-STACK SOLUTIONS',
    type: 'website',
  },
}

export default function SolucoesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-14">
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />

        <SolutionsGridSection
          eyebrow="Portfólio"
          headline="Projetos e Case Studies"
          description="Conheça as soluções que desenvolvemos para resolver desafios reais de empresas como a sua. Do conceito à implementação, cada projeto é uma história de transformação digital."
        />

        <CTASection
          headline="Viu algo interessante?"
          description="Converse com nossa equipe e descubra como podemos criar uma solução customizada para o seu negócio."
          ctaPrimaryLabel="Solicitar Cotação Gratuita"
          ctaPrimaryHref="/cotacao"
          ctaSecondaryLabel="Envie Sua Dor"
          ctaSecondaryHref="/envie-sua-dor"
        />
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
