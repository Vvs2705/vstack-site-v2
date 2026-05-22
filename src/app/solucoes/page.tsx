import type { Metadata } from 'next'
import CookieBanner from '@/components/CookieBanner'
import ChatWidget from '@/components/chat/ChatWidget'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CTASection from '@/components/sections/CTASection'
import SolutionsGridSection from '@/components/sections/SolutionsGridSection'
import { Container, Section } from '@/components/primitives/Layout'

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
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">O que entregamos</p>
              <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                Soluções para tirar a operação do improviso.
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                Atuamos onde há retrabalho, sistemas desconectados, dados pouco confiáveis e decisões lentas. O objetivo é simples: transformar processo em software útil.
              </p>
            </div>
          </Container>
        </Section>

        <SolutionsGridSection />

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
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
