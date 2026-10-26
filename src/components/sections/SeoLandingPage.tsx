import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import CTASection from '@/components/sections/CTASection'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { serviceJsonLd } from '@/lib/structured-data'
import { whatsappLink } from '@/lib/contact'
import type { SeoServicePage } from '@/lib/seo-service-pages'

interface SeoLandingPageProps {
  page: SeoServicePage
  /**
   * Conteúdo opcional renderizado DENTRO do <main>, após o conteúdo da landing
   * e ANTES do <Footer>. Slot retrocompatível: quando omitido, a landing
   * renderiza exatamente como antes.
   */
  afterContent?: React.ReactNode
}

export default function SeoLandingPage({ page, afterContent }: SeoLandingPageProps) {
  const whatsappHref = whatsappLink(page.whatsappTopic)
  const quoteHref = `/cotacao?produto=${page.quoteType}`

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <JsonLd data={serviceJsonLd(page)} />

        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-4xl">
              <p className="eyebrow mb-4">{page.eyebrow}</p>
              <h1 className="text-balance text-[var(--text-1)]">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-[48px] px-7 py-3.5 text-[15px]">
                  {page.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href={quoteHref} className="btn-outline min-h-[48px] px-7 py-3.5 text-[15px]">
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
                eyebrow="Você se reconhece?"
                title="Sinais de que está na hora."
                description="O ponto de partida é o problema que você vive hoje, não a tecnologia."
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

        {page.packages && (
          <Section tone="deep" className="border-t border-[var(--border)]">
            <Container>
              <SectionHeader
                eyebrow="Formatos"
                title="Escolha o ponto de partida."
                description="Cada projeto recebe proposta com escopo, prazo e valor fechados antes de começar."
                align="center"
                className="mb-10"
              />
              <div className="grid gap-4 md:grid-cols-3">
                {page.packages.map((pkg) => (
                  <Surface key={pkg.name} className="flex flex-col p-6">
                    <h3 className="text-[20px] text-[var(--text-1)]">{pkg.name}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[var(--text-2)]">{pkg.forWho}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[14px] leading-6 text-[var(--text-2)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 min-h-[44px] px-5 py-2.5 text-[14px]">
                      Pedir orçamento
                    </a>
                  </Surface>
                ))}
              </div>
            </Container>
          </Section>
        )}

        <Section tone="deep" className="border-y border-[var(--border)]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">O que você ganha</p>
                <h2 className="text-[var(--text-1)]">
                  O que muda depois da entrega.
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
              title="Do primeiro contato ao projeto no ar."
              description="Você sabe o que vai receber, quando e por quanto antes de começarmos."
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
          headline="Vamos conversar sobre o seu projeto?"
          description="Conte o que você precisa. Retornamos em até 24 horas úteis com as perguntas que faltam e o próximo passo, sem compromisso."
          ctaPrimaryLabel={page.primaryCta}
          ctaPrimaryHref={whatsappHref}
          ctaSecondaryLabel={page.secondaryCta}
          ctaSecondaryHref={quoteHref}
        />

        {afterContent}
      </main>

      <Footer />
    </>
  )
}
