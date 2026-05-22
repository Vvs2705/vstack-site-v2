'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { solutionsDetailed } from '@/lib/solutions-detailed'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { caseStudies } from '@/lib/case-studies'
import {
  FadeInUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  PulseLabel,
  AnimatedSection,
} from '@/components/animations'

export default function SolutionsDetailedSection() {
  return (
    <>
      <Section>
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Como resolvemos"
              title="Cada problema tem uma solução específica."
              description="Não vendemos ferramenta pronta. Mapeamos a dor, desenhamos a solução, entregamos resultado quantificado."
              align="center"
              className="mb-12"
            />
          </FadeInUp>

          <div className="space-y-16">
            {solutionsDetailed.map((solution, solutionIndex) => {
              const relatedCase = caseStudies[solution.relatedCase]
              const isEven = solutionIndex % 2 === 0

              return (
                <AnimatedSection key={solution.id} delay={0.05}>
                  <div className="scroll-mt-20" id={`solution-${solution.id}`}>
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                      {/* Left: Icon + Title + Problem */}
                      <SlideIn direction={isEven ? 'left' : 'right'}>
                        <div
                          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)]"
                          style={{ backgroundColor: solution.color.muted, borderColor: solution.color.border }}
                        >
                          <solution.icon className="h-7 w-7" style={{ color: solution.color.accent }} />
                        </div>

                        <h2 className="font-display text-3xl font-bold text-[var(--text-1)] mb-6">
                          {solution.title}
                        </h2>

                        <div className="mb-8">
                          <PulseLabel className="block text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-3)] mb-3">
                            O Problema
                          </PulseLabel>
                          <p className="text-[14px] leading-7 text-[var(--text-2)]">
                            {solution.problem}
                          </p>
                        </div>

                        <Link
                          href={`/cases/${relatedCase.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                          style={{ color: solution.color.accent }}
                        >
                          Ver case: {relatedCase.company}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </SlideIn>

                      {/* Right: Solution + Results */}
                      <SlideIn direction={isEven ? 'right' : 'left'} delay={0.1}>
                        <div className="space-y-8">
                          {/* Solution steps */}
                          <div>
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-3)] mb-4">
                              Nossa Solução
                            </p>
                            <StaggerContainer className="space-y-3" delay={0.15}>
                              {solution.solution.map((step, index) => (
                                <StaggerItem key={index}>
                                  <div className="flex gap-3">
                                    <div
                                      className="mt-1 h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                                      style={{ backgroundColor: solution.color.accent }}
                                    >
                                      {index + 1}
                                    </div>
                                    <p className="text-[14px] leading-6 text-[var(--text-2)]">
                                      {step}
                                    </p>
                                  </div>
                                </StaggerItem>
                              ))}
                            </StaggerContainer>
                          </div>

                          {/* Results */}
                          <div>
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-3)] mb-4">
                              Resultado Quantificado
                            </p>
                            <StaggerContainer className="space-y-2" delay={0.2}>
                              {solution.results.map((result, index) => (
                                <StaggerItem key={index}>
                                  <Surface
                                    className="p-4"
                                    style={{
                                      backgroundColor: solution.color.muted,
                                      borderColor: solution.color.border,
                                      borderWidth: '1px',
                                    }}
                                  >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-3)] mb-2">
                                      {result.metric}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-[12px] text-[var(--text-3)] mb-1">Antes</p>
                                        <p className="text-[13px] font-semibold text-[var(--text-2)]">
                                          {result.before}
                                        </p>
                                      </div>
                                      <ArrowRight className="h-4 w-4 text-[var(--text-3)]" />
                                      <div className="text-right">
                                        <p className="text-[12px] text-[var(--text-3)] mb-1">Depois</p>
                                        <p className="text-[13px] font-semibold" style={{ color: solution.color.accent }}>
                                          {result.after}
                                        </p>
                                      </div>
                                    </div>
                                    <p className="mt-3 text-[12px] font-semibold" style={{ color: solution.color.accent }}>
                                      {result.highlight}
                                    </p>
                                  </Surface>
                                </StaggerItem>
                              ))}
                            </StaggerContainer>
                          </div>
                        </div>
                      </SlideIn>
                    </div>

                    {/* Divider */}
                    {solutionsDetailed[solutionsDetailed.length - 1].id !== solution.id && (
                      <div className="mt-16 border-b border-[var(--border)]" />
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Comparison Section */}
      <Section tone="deep" className="border-y border-[var(--border)]">
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Por que somos diferentes"
              title="Nós vs. agências genéricas"
              description="A diferença não está só em preço, mas em responsabilidade e resultado."
              align="center"
              className="mb-10"
            />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 font-semibold text-[var(--text-1)]" style={{ width: '35%' }}>
                      Garantia de Resultado
                    </td>
                    <td className="py-4 px-4 text-[var(--text-2)]">
                      Você vê ROI em 90 dias ou devolvemos
                    </td>
                    <td className="py-4 px-4 text-[var(--text-3)]">
                      &quot;Orçamento sob solicitação&quot;
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 font-semibold text-[var(--text-1)]">Entrega</td>
                    <td className="py-4 px-4 text-[var(--text-2)]">
                      SaaS escalável + código seu = evolui depois
                    </td>
                    <td className="py-4 px-4 text-[var(--text-3)]">
                      Ferramentas off-the-shelf limitadas
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-4 pr-4 font-semibold text-[var(--text-1)]">Processo</td>
                    <td className="py-4 px-4 text-[var(--text-2)]">
                      Padrão com opções (você decide evolução)
                    </td>
                    <td className="py-4 px-4 text-[var(--text-3)]">
                      Tudo custom, sem padronização
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[var(--text-1)]">Pós-deploy</td>
                    <td className="py-4 px-4 text-[var(--text-2)]">
                      Suporte 24/7 + dashboards de uso + relatórios
                    </td>
                    <td className="py-4 px-4 text-[var(--text-3)]">
                      Você fica sozinho
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </>
  )
}
