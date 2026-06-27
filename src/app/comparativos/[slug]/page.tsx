import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import ComparativoTable from '@/components/comparativos/ComparativoTable'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { breadcrumbList } from '@/lib/structured-data'
import { comparativos, getComparativo, comparativoUrl } from '@/lib/comparativos'
import type { Comparativo } from '@/lib/comparativos'

interface ComparativoPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return comparativos.map((comparativo) => ({ slug: comparativo.slug }))
}

export async function generateMetadata({ params }: ComparativoPageProps): Promise<Metadata> {
  const { slug } = await params
  const comparativo = getComparativo(slug)

  if (!comparativo) {
    return {}
  }

  return {
    // metaTitle é mantido ≤ 60 chars na fonte de dados (comparativos.ts).
    title: comparativo.metaTitle,
    description: comparativo.metaDescription,
    keywords: [
      'comparativo',
      comparativo.product.name,
      comparativo.eyebrow,
      'V-STACK SOLUTIONS',
    ],
    alternates: {
      canonical: `/comparativos/${comparativo.slug}`,
    },
    openGraph: {
      title: `${comparativo.metaTitle} | V-STACK SOLUTIONS`,
      description: comparativo.metaDescription,
      type: 'article',
      url: comparativoUrl(comparativo.slug),
    },
  }
}

function faqPageJsonLd(comparativo: Comparativo) {
  if (!comparativo.faqs || comparativo.faqs.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${comparativoUrl(comparativo.slug)}#faq`,
    mainEntity: comparativo.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default async function ComparativoPage({ params }: ComparativoPageProps) {
  const { slug } = await params
  const comparativo = getComparativo(slug)

  if (!comparativo) {
    notFound()
  }

  const breadcrumbJsonLd = breadcrumbList([
    { name: 'Início', url: '/' },
    { name: 'Comparativos', url: '/comparativos' },
    { name: comparativo.metaTitle, url: `/comparativos/${comparativo.slug}` },
  ])

  const faqJsonLd = faqPageJsonLd(comparativo)

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <JsonLd data={breadcrumbJsonLd} />
        {faqJsonLd && <JsonLd data={faqJsonLd} />}

        {/* Cabeçalho */}
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container size="lg">
            <nav
              aria-label="Trilha de navegação"
              className="flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <Link href="/" className="text-[var(--text-3)] hover:text-[var(--accent)]">
                Início
              </Link>
              <span aria-hidden className="text-[var(--text-3)]">›</span>
              <Link href="/comparativos" className="text-[var(--accent)] hover:text-[var(--accent-light)]">
                Comparativos
              </Link>
              <span aria-hidden className="text-[var(--text-3)]">›</span>
              <span className="text-[var(--text-3)]">{comparativo.metaTitle}</span>
            </nav>

            <p className="eyebrow mt-6">{comparativo.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-display text-balance text-[36px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[52px]">
              {comparativo.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[var(--text-2)]">
              {comparativo.intro}
            </p>
          </Container>
        </Section>

        {/* Tabela comparativa */}
        <Section>
          <Container size="lg">
            <SectionHeader
              eyebrow="Critério a critério"
              title="Como cada opção se compara"
              description="Cada linha é um critério de decisão. As células trazem o estado (Sim / Parcial / Não / Depende) e uma nota honesta — sem fabricar recursos ou números."
            />
            <div className="mt-8">
              <ComparativoTable
                caption={`Comparativo: ${comparativo.heading}`}
                columns={comparativo.columns}
                rows={comparativo.rows}
              />
            </div>
            <p className="mt-4 text-[12px] leading-5 text-[var(--text-3)]">
              Legenda — <strong className="font-semibold text-[var(--text-2)]">Sim</strong>: atende;{' '}
              <strong className="font-semibold text-[var(--text-2)]">Parcial</strong>: atende em parte;{' '}
              <strong className="font-semibold text-[var(--text-2)]">Não</strong>: não atende;{' '}
              <strong className="font-semibold text-[var(--text-2)]">Depende</strong>: varia conforme o
              caso ou a ferramenta. Comparações com categorias de concorrentes são qualitativas e públicas
              — não afirmamos recursos específicos de produtos de terceiros sem fonte verificável.
            </p>
          </Container>
        </Section>

        {/* Veredito honesto + CTA */}
        <Section tone="muted">
          <Container size="lg">
            <SectionHeader
              eyebrow="Veredito honesto"
              title={`Quando o ${comparativo.product.name} é a escolha certa`}
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Surface className="p-6">
                <h3 className="font-display text-[18px] font-bold text-[var(--text-1)]">
                  Faz sentido quando…
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-2)]">
                  {comparativo.verdict.bestFor}
                </p>
              </Surface>
              <Surface className="p-6">
                <h3 className="font-display text-[18px] font-bold text-[var(--text-1)]">
                  Pode não fazer sentido quando…
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-2)]">
                  {comparativo.verdict.notFor}
                </p>
              </Surface>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href={comparativo.cta.href} className="btn-primary px-6 py-3.5 text-[14px]">
                {comparativo.cta.label}
              </Link>
              <Link
                href={`/cotacao?produto=${comparativo.product.href.replace('/', '')}`}
                className="btn-outline px-6 py-3.5 text-[14px]"
              >
                Falar com a V-STACK
              </Link>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        {comparativo.faqs && comparativo.faqs.length > 0 && (
          <Section>
            <Container size="lg">
              <SectionHeader eyebrow="Perguntas frequentes" title="Dúvidas comuns sobre esta comparação" />
              <dl className="mt-8 grid gap-4">
                {comparativo.faqs.map((faq) => (
                  <Surface as="div" key={faq.question} className="p-6">
                    <dt className="font-display text-[16px] font-bold text-[var(--text-1)]">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-7 text-[var(--text-2)]">
                      {faq.answer}
                    </dd>
                  </Surface>
                ))}
              </dl>
            </Container>
          </Section>
        )}

        {/* Outros comparativos */}
        <Section tone="muted" className="border-t border-[var(--border)]">
          <Container size="lg">
            <SectionHeader eyebrow="Continue comparando" title="Outros comparativos" />
            <ul className="mt-8 grid list-none gap-5 p-0 md:grid-cols-3">
              {comparativos
                .filter((other) => other.slug !== comparativo.slug)
                .map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/comparativos/${other.slug}`}
                      className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg)] p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow)]"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                        {other.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-[17px] font-bold leading-snug text-[var(--text-1)] group-hover:text-[var(--accent)]">
                        {other.heading}
                      </h3>
                    </Link>
                  </li>
                ))}
            </ul>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
