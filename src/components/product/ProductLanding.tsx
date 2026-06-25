import Link from 'next/link'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Container, Section, Surface, SectionHeader } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import type { ProductLandingData } from '@/lib/products/types'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vstack-solutions.com.br'

/**
 * Landing page de venda reutilizável para produtos próprios da Vstack.
 * Identidade visual da marca (header laranja) + accent próprio do produto no conteúdo.
 * CTAs apontam para o fluxo real de conversão (/cotacao?produto=<slug>).
 */
export default function ProductLanding({ data }: { data: ProductLandingData }) {
  const accent = data.accent
  const ctaHref = `/cotacao?produto=${data.slug}`

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.name,
    applicationCategory: data.seoCategory,
    operatingSystem: 'Web',
    description: data.metaDescription,
    url: `${SITE_URL}/${data.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'V-STACK SOLUTIONS',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${ctaHref}`,
    },
    featureList: data.seoFeatureList,
  }

  const breadcrumbJsonLd = breadcrumbList([
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes' },
    { name: data.name, url: `/${data.slug}` },
  ])

  // Botão primário usa o accent do produto (coesão por produto).
  const primaryBtnStyle = { backgroundColor: accent, color: '#ffffff' }

  return (
    <>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        {/* Linha de acento do produto */}
        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: accent, opacity: 0.1 }}
            />
          </div>
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-2xl">
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{ backgroundColor: `${accent}1a`, color: accent, border: `1px solid ${accent}40` }}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
                  {data.badge}
                </div>

                <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[var(--text-1)] sm:text-5xl">
                  {data.heroTitle}
                </h1>

                <p className="mt-5 text-pretty text-lg font-medium leading-8 text-[var(--text-2)]">
                  {data.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={ctaHref}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-6 text-[14px] font-semibold shadow-[var(--shadow-sm)] transition hover:opacity-90"
                    style={primaryBtnStyle}
                  >
                    {data.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="#planos"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border border-[var(--border-strong)] px-6 text-[14px] font-semibold text-[var(--text-1)] transition hover:border-[var(--border-hover)]"
                  >
                    {data.secondaryCta}
                  </Link>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  {data.heroHighlights.map((h) => (
                    <li key={h} className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-2)]">
                      <Check className="h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cartão de destaque (sem depender de imagem) */}
              <FadeInUp>
                <Surface className="p-6 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
                    {data.name}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--text-2)]">{data.painsSubtitle ?? data.heroSubtitle}</p>
                  <div className="mt-6 grid gap-3">
                    {data.outcomes.slice(0, 4).map((o) => (
                      <div key={o} className="flex items-start gap-3 rounded-[var(--radius-btn)] border border-[var(--border)] bg-[var(--bg)] p-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} aria-hidden />
                        <span className="text-[13px] leading-6 text-[var(--text-1)]">{o}</span>
                      </div>
                    ))}
                  </div>
                </Surface>
              </FadeInUp>
            </div>
          </Container>
        </section>

        {/* ── Problema / dores ── */}
        <Section tone="deep" spacing="lg">
          <Container>
            <SectionHeader eyebrow="O problema" title={data.painsTitle} description={data.painsSubtitle} />
            <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.pains.map((p) => (
                <StaggerItem key={p.title}>
                  <Surface className="h-full p-6" interactive>
                    <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{p.title}</h3>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--text-2)]">{p.description}</p>
                  </Surface>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* ── Funcionalidades ── */}
        <Section id="funcionalidades" tone="default" spacing="lg">
          <Container>
            <SectionHeader eyebrow="O que o produto faz" title={data.featuresTitle} description={data.featuresSubtitle} />
            <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2">
              {data.features.map((f) => (
                <StaggerItem key={f.title}>
                  <Surface className="h-full p-6" interactive>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{f.title}</h3>
                      {f.highlight && (
                        <span
                          className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                          style={{ backgroundColor: `${accent}1a`, color: accent }}
                        >
                          {f.highlight}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-[14px] leading-7 text-[var(--text-2)]">{f.description}</p>
                  </Surface>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* ── Como funciona ── */}
        <Section tone="muted" spacing="lg">
          <Container>
            <SectionHeader eyebrow="Como funciona" title={data.stepsTitle} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.steps.map((s) => (
                <div key={s.step} className="relative">
                  <span className="font-display text-4xl font-black" style={{ color: `${accent}33` }}>
                    {s.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-[var(--text-1)]">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-[var(--text-2)]">{s.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Resultados ── */}
        <Section tone="default" spacing="lg">
          <Container>
            <SectionHeader eyebrow="Resultados" title={data.outcomesTitle} align="center" className="mx-auto" />
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {data.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} aria-hidden />
                  <span className="text-[14px] leading-6 text-[var(--text-1)]">{o}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* ── Planos ── */}
        <Section id="planos" tone="deep" spacing="lg">
          <Container>
            <SectionHeader eyebrow="Planos" title={data.pricingTitle} description={data.pricingSubtitle} align="center" className="mx-auto" />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {data.plans.map((plan) => (
                <Surface
                  key={plan.name}
                  className="flex flex-col p-7"
                  style={plan.highlighted ? { borderColor: accent, boxShadow: `0 0 0 1px ${accent}` } : undefined}
                >
                  {plan.highlighted && (
                    <span className="mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]" style={{ backgroundColor: accent, color: '#fff' }}>
                      Recomendado
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-[var(--text-1)]">{plan.name}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-[var(--text-2)]">{plan.description}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-black text-[var(--text-1)]">{plan.price}</span>
                    {plan.period && <span className="text-[13px] text-[var(--text-3)]">{plan.period}</span>}
                  </div>
                  <ul className="mt-5 grid flex-1 gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] leading-6 text-[var(--text-2)]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ctaHref}
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 text-[13px] font-semibold transition hover:opacity-90"
                    style={plan.highlighted ? primaryBtnStyle : { border: `1px solid ${accent}`, color: accent }}
                  >
                    {plan.ctaLabel ?? data.primaryCta}
                  </Link>
                </Surface>
              ))}
            </div>
            {data.pricingNote && (
              <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-6 text-[var(--text-3)]">{data.pricingNote}</p>
            )}
          </Container>
        </Section>

        {/* ── FAQ ── */}
        <Section tone="default" spacing="lg">
          <Container size="lg">
            <SectionHeader eyebrow="Perguntas frequentes" title="Tudo o que você precisa saber" align="center" className="mx-auto" />
            <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--border)] overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)]">
              {data.faq.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14px] font-semibold text-[var(--text-1)] [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="shrink-0 text-[var(--text-3)] transition-transform group-open:rotate-45" style={{ color: accent }} aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[14px] leading-7 text-[var(--text-2)]">{item.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── CTA final ── */}
        <Section tone="muted" spacing="lg">
          <Container>
            <div
              className="relative isolate overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] px-6 py-14 text-center sm:px-12"
              style={{ background: `linear-gradient(135deg, ${accent}14, transparent)` }}
            >
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-[var(--text-1)] sm:text-4xl">
                {data.finalCtaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]">{data.finalCtaSubtitle}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={ctaHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 text-[14px] font-semibold shadow-[var(--shadow-sm)] transition hover:opacity-90"
                  style={primaryBtnStyle}
                >
                  {data.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border border-[var(--border-strong)] px-7 text-[14px] font-semibold text-[var(--text-1)] transition hover:border-[var(--border-hover)]"
                >
                  Falar com o time
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
