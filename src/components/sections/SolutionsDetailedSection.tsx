'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { whatsappLink } from '@/lib/contact'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, AnimatedSection } from '@/components/animations'

const DIFFERENCES = [
  {
    topic: 'Quem atende você',
    us: 'Quem constrói: a conversa é direto com quem desenha e desenvolve.',
    others: 'Atendimento comercial que repassa para outra equipe.',
  },
  {
    topic: 'O que é entregue',
    us: 'Site ou sistema feito para o seu processo, integrado ao que você já usa.',
    others: 'Modelo pronto adaptado, que obriga você a mudar o processo.',
  },
  {
    topic: 'Antes de começar',
    us: 'Proposta com escopo, prazo e valor definidos e aprovados por você.',
    others: '"Orçamento sob consulta" que muda no meio do caminho.',
  },
  {
    topic: 'Depois da entrega',
    us: 'Suporte e evolução combinados em contrato, com medição de uso.',
    others: 'Você fica sozinho quando algo para de funcionar.',
  },
]

export default function SolutionsDetailedSection() {
  return (
    <>
      <Section>
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Como resolvemos"
              title="Cada problema pede uma solução específica."
              description="Não vendemos pacote genérico. Entendemos o seu problema e indicamos o caminho mais direto, seja um site, um sistema, uma automação ou um jogo."
              align="center"
              className="mb-12"
            />
          </FadeInUp>

          <div className="space-y-6">
            {SERVICES.map((service) => (
              <AnimatedSection key={service.id} delay={0.05}>
                <Surface className="scroll-mt-24 p-6 sm:p-8" id={`solucao-${service.id}`}>
                  <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                        <service.icon className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
                      </div>
                      <h2 className="text-[var(--text-1)]">{service.title}</h2>
                      <p className="mt-4 text-[15px] leading-7 text-[var(--text-2)]">
                        <strong className="text-[var(--text-1)]">O problema:</strong> {service.pain}
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-[var(--text-2)]">
                        <strong className="text-[var(--text-1)]">O que fazemos:</strong> {service.promise}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between gap-6">
                      <ul className="space-y-3">
                        {service.bullets.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-6 text-[var(--text-2)]">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href={service.href} className="btn-outline min-h-[44px] px-5 py-2.5 text-[14px]">
                          Ver detalhes
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href={whatsappLink(service.whatsappTopic)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary min-h-[44px] px-5 py-2.5 text-[14px]"
                        >
                          Pedir orçamento
                        </a>
                      </div>
                    </div>
                  </div>
                </Surface>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep" className="border-y border-[var(--border)]">
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Por que somos diferentes"
              title="V-STACK vs. fornecedores genéricos"
              description="A diferença está em quem faz, no que é entregue e em quem responde depois."
              align="center"
              className="mb-10"
            />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-[14px]">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left">
                    <th className="py-3 pr-4" scope="col"><span className="sr-only">Aspecto</span></th>
                    <th className="py-3 px-4 font-bold text-[var(--accent)]" scope="col">V-STACK</th>
                    <th className="py-3 px-4 font-semibold text-[var(--text-3)]" scope="col">Fornecedor genérico</th>
                  </tr>
                </thead>
                <tbody>
                  {DIFFERENCES.map((row) => (
                    <tr key={row.topic} className="border-b border-[var(--border)] last:border-0">
                      <th scope="row" className="py-4 pr-4 text-left font-semibold text-[var(--text-1)]">{row.topic}</th>
                      <td className="py-4 px-4 text-[var(--text-2)]">{row.us}</td>
                      <td className="py-4 px-4 text-[var(--text-3)]">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </>
  )
}
