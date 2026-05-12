import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CookieBanner from '@/components/CookieBanner'
import ChatWidget from '@/components/chat/ChatWidget'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import CTASection from '@/components/sections/CTASection'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { serviceJsonLd } from '@/lib/structured-data'
import type { SeoServicePage } from '@/lib/seo-service-pages'

interface SeoLandingPageProps {
  page: SeoServicePage
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <JsonLd data={serviceJsonLd(page)} />

        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-4xl">
              <p className="eyebrow mb-4">{page.eyebrow}</p>
              <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[58px]">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/cotacao" className="btn-primary px-7 py-3.5 text-[14px]">
                  {page.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/envie-sua-dor" className="btn-outline px-7 py-3.5 text-[14px]">
                  {page.secondaryCta}
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeader
                eyebrow="Quando faz sentido"
                title="Sinais de que esta frente pode gerar retorno."
                description="O ponto de partida é reconhecer a dor operacional antes de escolher ferramenta, tecnologia ou escopo."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {page.painPoints.map((item) => (
                  <Surface key={item} className="p-5">
                    <p className="text-[14px] leading-7 text-[var(--text-2)]">{item}</p>
                  </Surface>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="deep" className="border-y border-[var(--border)]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Resultado esperado</p>
                <h2 className="font-display text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                  O que precisa melhorar depois da implantação.
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--text-2)]">
                  {page.proof}
                </p>
              </div>
              <div className="space-y-3">
                {page.outcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <p className="text-[14px] leading-7 text-[var(--text-2)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeader
              eyebrow="Como conduzimos"
              title="Diagnóstico primeiro, implementação depois."
              description="Esse formato reduz desperdício, evita solução superdimensionada e cria uma entrega inicial com impacto visível."
              align="center"
              className="mb-10"
            />
            <div className="grid gap-4 md:grid-cols-4">
              {page.process.map((step, index) => (
                <Surface key={step} className="p-5">
                  <span className="font-display text-3xl font-bold text-[var(--accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-[14px] leading-7 text-[var(--text-2)]">{step}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        <CTASection
          headline="Quer saber se este é o caminho certo?"
          description="Envie o contexto da operação. Nós avaliamos prioridade, impacto e o primeiro passo mais seguro para transformar a dor em solução."
          ctaPrimaryLabel={page.primaryCta}
          ctaPrimaryHref="/cotacao"
          ctaSecondaryLabel={page.secondaryCta}
          ctaSecondaryHref="/envie-sua-dor"
        />
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
