import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container, Surface } from '@/components/primitives/Layout'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'
import type { CaseStudySlug } from '@/lib/case-studies'

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug as CaseStudySlug)
  if (!caseStudy) return { title: 'Case não encontrado | V-STACK' }

  return {
    title: `${caseStudy.company} - Case de Estudo | V-STACK`,
    description: `Como ${caseStudy.company} (${caseStudy.industry}) alcançou ${caseStudy.results[0].improvement} em ${caseStudy.results[0].metric.toLowerCase()}`,
    openGraph: {
      title: `${caseStudy.company} - Case de Estudo`,
      description: caseStudy.challenge,
      type: 'article',
    }
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug as CaseStudySlug)
  if (!caseStudy) notFound()

  const breadcrumbJsonLd = breadcrumbList([
    { name: 'Início', url: '/' },
    { name: 'Cases', url: '/cases' },
    { name: caseStudy.company, url: `/cases/${caseStudy.slug}` },
  ])

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="pt-20 pb-12 sm:pt-32 sm:pb-16">
        <Container>
          <Link href="/solucoes" className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar para soluções
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              Case de Estudo
            </span>

            <h1 className="font-display text-balance leading-[1.08] tracking-[-0.025em] text-[var(--text-1)] mb-6">
              {caseStudy.company}: Transformação de <span className="gradient-text">{caseStudy.results[0].metric.toLowerCase()}</span>
            </h1>

            <p className="text-lg text-[var(--text-2)] mb-2">
              <strong>{caseStudy.industry}</strong>
            </p>
            <p className="text-lg leading-8 text-[var(--text-2)]">
              {caseStudy.challenge}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 border-t border-[var(--border)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-6">
                O Desafio
              </h2>
              <p className="text-[var(--text-2)] leading-8">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-6">
                A Solução
              </h2>
              <p className="text-[var(--text-2)] leading-8">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--bg-deep)] border-t border-b border-[var(--border)]">
        <Container>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-8">
            Resultados Mensuráveis
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudy.results.map((result, index) => (
              <Surface key={index} className="p-6">
                <p className="text-sm font-semibold text-[var(--accent)] mb-4">
                  {result.metric}
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] text-[var(--text-3)] mb-1">Antes</p>
                    <p className="font-display text-lg font-bold text-[var(--text-2)]">
                      {result.before}
                    </p>
                  </div>

                  <div className="flex items-center justify-center h-8">
                    <ArrowRight className="h-4 w-4 text-[var(--accent)]" />
                  </div>

                  <div>
                    <p className="text-[11px] text-[var(--text-3)] mb-1">Depois</p>
                    <p className="font-display text-lg font-bold text-[var(--accent)]">
                      {result.after}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--text-3)]">Melhoria</p>
                    <p className="text-sm font-bold text-[var(--text-1)]">
                      {result.improvement}
                    </p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-6">
                Timeline
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                    <div className="w-0.5 h-12 bg-[var(--accent-muted)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Semanas 1-2</p>
                    <p className="text-sm text-[var(--text-2)]">Mapeamento e descoberta do processo</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                    <div className="w-0.5 h-12 bg-[var(--accent-muted)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Semanas 2-3</p>
                    <p className="text-sm text-[var(--text-2)]">Implementação em paralelo com sistema atual</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Go-live + 30-60 dias</p>
                    <p className="text-sm text-[var(--text-2)]">Monitoramento e ajustes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-[var(--radius-card)] bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                <p className="text-xs text-[var(--text-3)] mb-1">Payback</p>
                <p className="font-display text-2xl font-bold text-[var(--accent)]">
                  {caseStudy.payback}
                </p>
              </div>
            </div>

            {caseStudy.testimonial && (
              <Surface className="p-6 lg:p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-[var(--accent)]">★</span>
                  ))}
                </div>

                <blockquote className="mb-6">
                  <p className="font-display text-lg leading-8 text-[var(--text-1)]">
                    &quot;{caseStudy.testimonial.quote}&quot;
                  </p>
                </blockquote>

                <div className="border-t border-[var(--border)] pt-4">
                  <p className="font-semibold text-[var(--text-1)]">
                    {caseStudy.testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--text-2)]">
                    {caseStudy.testimonial.role}
                  </p>
                </div>
              </Surface>
            )}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--bg-deep)] border-t border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-6">
              Pronto para transformar sua operação?
            </h2>

            <p className="text-lg text-[var(--text-2)] mb-8">
              Cada negócio é único. Vamos mapear seus números, seu processo, e mostrar quanto você pode economizar em 30 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/envie-sua-dor" className="btn-primary px-6 py-3.5">
                Mapear minha situação
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/sobre" className="btn-secondary px-6 py-3.5">
                Conhecer nosso processo
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
