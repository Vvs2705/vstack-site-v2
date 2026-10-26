import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import SolucoesHero from '@/components/sections/SolucoesHero'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList, OG_DEFAULTS } from '@/lib/structured-data'
import { Container, Section } from '@/components/primitives/Layout'

// Lazy-load heavy sections below the fold
const SolutionsDetailedSection = dynamic(() => import('@/components/sections/SolutionsDetailedSection'))
const SolutionsGridSection = dynamic(() => import('@/components/sections/SolutionsGridSection'))
const CTASection = dynamic(() => import('@/components/sections/CTASection'))

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'Criação de sites, sistemas sob medida, automação com IA e jogos sob encomenda para empresas que querem vender mais e trabalhar melhor.',
  keywords: ['criação de sites', 'sistemas sob medida', 'automação de processos', 'agentes de IA', 'desenvolvimento de jogos'],
  openGraph: {
    ...OG_DEFAULTS,
    title: 'Soluções | V-STACK SOLUTIONS',
    description:
      'Sites, sistemas sob medida, automação com IA e jogos sob encomenda.',
    type: 'website',
  },
}

const breadcrumbJsonLd = breadcrumbList([
  { name: 'Início', url: '/' },
  { name: 'Soluções', url: '/solucoes' },
])

export default function SolucoesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
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
          headline="Não sabe por onde começar?"
          description="Conte o seu problema. Indicamos se o melhor caminho é um site, um sistema, uma automação, um jogo ou uma combinação, e retornamos em até 24 horas úteis."
        />
      </main>

      <Footer />
    </>
  )
}
