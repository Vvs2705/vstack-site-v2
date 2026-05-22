import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Surface } from '@/components/primitives/Layout'
import { caseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Cases de Estudo | V-STACK',
  description: 'Histórias reais de empresas que transformaram operações com V-STACK. LogTech, MediServe, FinFlow e mais.',
}

export default function CasesPage() {
  return (
    <main>
      <section className="pt-20 pb-12 sm:pt-32 sm:pb-16">
        <Container>
          <span className="inline-block mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
            Resultados Reais
          </span>

          <h1 className="font-display text-balance leading-[1.08] tracking-[-0.025em] text-[var(--text-1)] mb-6 max-w-3xl">
            De 5 dias para 1 hora. De 20h para 1h. De 8% de erro para 0,2%.
          </h1>

          <p className="text-lg leading-8 text-[var(--text-2)] max-w-2xl">
            Empresas reais, números reais. Confira como LogTech, MediServe e FinFlow transformaram suas operações com soluções V-STACK.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(caseStudies).map((caseStudy) => (
              <Link key={caseStudy.slug} href={`/cases/${caseStudy.slug}`}>
                <Surface className="h-full p-6 hover:border-[var(--accent-border)] transition-colors group">
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-2">
                      {caseStudy.industry}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors">
                      {caseStudy.company}
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-[var(--text-2)] mb-6 line-clamp-3">
                    {caseStudy.challenge}
                  </p>

                  <div className="space-y-3 mb-6">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index}>
                        <p className="text-[10px] text-[var(--text-3)] mb-1 uppercase font-semibold">
                          {result.metric}
                        </p>
                        <p className="font-display text-sm font-bold text-[var(--accent)]">
                          {result.improvement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                    Ler case
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Surface>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--bg-deep)] border-t border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-4">
              Seu número pode ser diferente.
            </h2>

            <p className="text-lg text-[var(--text-2)] mb-8">
              Cada indústria, cada operação tem suas regras. Vamos mapear seu processo real e mostrar o número exato que faz sentido para você.
            </p>

            <Link href="/envie-sua-dor" className="btn-primary px-6 py-3.5 inline-flex items-center gap-2">
              Descrever meu desafio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
