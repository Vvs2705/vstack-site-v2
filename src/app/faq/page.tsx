import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import FAQSection from '@/components/sections/FAQSection'
import { Container, Section } from '@/components/primitives/Layout'

export const metadata = {
  title: 'Perguntas Frequentes | V-STACK SOLUTIONS',
  description:
    'Respostas diretas sobre diagnóstico, automação, IA, integrações e desenvolvimento sob medida para empresas que precisam resolver problemas reais.',
}

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-14">
        {/* Hero */}
        <Section tone="deep" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Perguntas frequentes</p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--text-1)] sm:text-5xl">
                Respostas diretas para decidir o próximo passo.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-2)]">
                Reunimos as dúvidas mais comuns sobre diagnóstico, automação, IA,
                integrações e desenvolvimento sob medida para empresas em operação.
              </p>
            </div>
          </Container>
        </Section>

        {/* Animated FAQ accordion — all items, all categories */}
        <FAQSection showFilter eyebrow="Dúvidas" title="Perguntas frequentes" />

        {/* Bottom CTA */}
        <Section tone="deep" className="border-t border-[var(--border)]">
          <Container className="text-center">
            <p className="eyebrow mb-3">Ainda em dúvida?</p>
            <h2 className="font-display text-3xl font-semibold text-[var(--text-1)]">
              Transforme a dúvida em um diagnóstico objetivo.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-2)]">
              Conte o que trava sua operação hoje. Nós avaliamos o cenário e indicamos
              um caminho possível, sem empurrar ferramenta antes da hora.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/cotacao"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/envie-sua-dor"
                className="btn-outline inline-flex px-6 py-3 text-sm font-semibold"
              >
                Enviar minha dor
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
