import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import SolucoesHero from '@/components/sections/SolucoesHero'
import { Container, Section } from '@/components/primitives/Layout'

// Lazy-load heavy sections below the fold
const SolutionsDetailedSection = dynamic(() => import('@/components/sections/SolutionsDetailedSection'))
const SolutionsGridSection = dynamic(() => import('@/components/sections/SolutionsGridSection'))
const CTASection = dynamic(() => import('@/components/sections/CTASection'))

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'Automação de processos, agentes de IA, integração de sistemas e desenvolvimento sob medida para empresas que precisam escalar com menos retrabalho.',
  keywords: ['automação de processos', 'agentes de IA', 'integração de sistemas', 'sistemas sob medida', 'FiscWise'],
  openGraph: {
    title: 'Soluções | V-STACK SOLUTIONS',
    description:
      'Tecnologia aplicada para reduzir retrabalho, integrar sistemas e criar operações mais previsíveis.',
    type: 'website',
  },
}

export default function SolucoesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <SolucoesHero />

        <SolutionsDetailedSection />

        <Section className="border-t border-[var(--border)]">
          <Container>
            <SolutionsGridSection />
          </Container>
        </Section>

        <CTASection
          headline="Qual parte da sua operação mais trava hoje?"
          description="Envie o contexto. Nós ajudamos a identificar se o melhor caminho é automação, IA, integração, produto interno ou uma combinação dos quatro."
          ctaPrimaryLabel="Solicitar diagnóstico"
          ctaPrimaryHref="/cotacao"
          ctaSecondaryLabel="Enviar minha dor"
          ctaSecondaryHref="/envie-sua-dor"
        />
      </main>

      <Footer />
    </>
  )
}
