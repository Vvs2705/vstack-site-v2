import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import SolucoesHero from '@/components/sections/SolucoesHero'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList, OG_DEFAULTS } from '@/lib/structured-data'
import SolutionsDetailedSection from '@/components/sections/SolutionsDetailedSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

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

        {/* Ordem do mockup 02: serviços → produtos → como funciona → chamada. */}
        <SolutionsDetailedSection />
        <SocialProofSection />
        <ProcessSection />

        <CTASection
          headline="Não sabe por onde começar?"
          description="Conte o seu problema. Indicamos se o melhor caminho é um site, um sistema, uma automação, um jogo ou uma combinação, e retornamos em até 24 horas úteis."
        />
      </main>

      <Footer />
    </>
  )
}
