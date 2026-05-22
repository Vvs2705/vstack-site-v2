'use client'

import { SlideIn, FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { Container, Section, Surface } from '@/components/primitives/Layout'

interface Milestone {
  year: string
  title: string
  text: string
}

const MILESTONES: Milestone[] = [
  {
    year: '2021',
    title: 'O problema ficou óbvio',
    text: 'Trabalhando em projetos de tecnologia, percebemos o mesmo padrão repetido: operações financeiras presas em planilhas, times de 5 pessoas fazendo trabalho que deveria ser automático.',
  },
  {
    year: '2022',
    title: 'Primeiro sistema real',
    text: 'Construímos o primeiro protótipo de conciliação financeira para uma PME. Em 3 semanas, o fechamento mensal caiu de 5 dias para menos de 1 dia.',
  },
  {
    year: '2023',
    title: 'A empresa tomou forma',
    text: 'Fundamos formalmente a V-STACK SOLUTIONS. Mais clientes, mais problemas reais resolvidos — e a convicção de que o mercado precisava de engenharia aplicada, não de consultoria genérica.',
  },
  {
    year: '2024',
    title: 'IA como pilar central',
    text: 'Integramos IA ao núcleo dos produtos. Não como feature de marketing, mas como motor real de automação: agentes que detectam anomalias, sugerem ações e aprendem com os dados da operação.',
  },
]

export default function OriginStorySection() {
  return (
    <Section className="border-t border-[var(--border)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left: narrative */}
          <SlideIn direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Nossa origem</p>
              <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-[-0.015em] text-[var(--text-1)] sm:text-4xl">
                Nascemos de um problema que vimos repetido em toda empresa que visitamos.
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--text-2)]">
                <p>
                  A maioria das PMEs brasileiras não tem problema de produto — tem problema de operação. Times talentosos presos em processos manuais, dados espalhados em silos e decisões tomadas com uma semana de atraso.
                </p>
                <p>
                  A V-STACK foi fundada com uma crença simples: engenharia bem aplicada resolve isso. Não é necessário um time de 50 pessoas nem anos de transformação digital. É necessário diagnóstico honesto e execução focada.
                </p>
                <p>
                  Cada produto que construímos começa com a mesma pergunta: qual parte da operação precisa parar de depender de um humano para não travar?
                </p>
              </div>

              {/* Manifesto card */}
              <Surface className="mt-8 border-l-2 border-[var(--accent)] p-6">
                <p className="text-[14px] italic leading-7 text-[var(--text-2)]">
                  &ldquo;Tecnologia que não resolve um problema operacional real não é inovação — é distração. Preferimos construir sistemas chatos que funcionam do que demos que impressionam mas não escalam.&rdquo;
                </p>
                <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                  Vinicius Sousa — Fundador, V-STACK SOLUTIONS
                </p>
              </Surface>
            </div>
          </SlideIn>

          {/* Right: timeline */}
          <FadeInUp delay={0.15}>
            <StaggerContainer className="relative space-y-0" delay={0.1}>
              {/* Vertical line */}
              <div
                className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent"
                aria-hidden="true"
              />

              {MILESTONES.map((milestone, index) => (
                <StaggerItem key={milestone.year}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* Dot */}
                    <div className="relative z-10 mt-1 flex h-10 w-10 flex-none items-center justify-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full transition-all ${
                          index === 0
                            ? 'bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]'
                            : 'bg-[var(--border-strong)]'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <Surface className="flex-1 p-5 transition-all hover:border-[var(--border-hover)]">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-display text-[13px] font-bold tabular-nums text-[var(--accent)]">
                          {milestone.year}
                        </span>
                        <div className="h-px flex-1 bg-[var(--border)]" />
                      </div>
                      <h3 className="font-display text-[16px] font-bold text-[var(--text-1)]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[var(--text-2)]">
                        {milestone.text}
                      </p>
                    </Surface>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  )
}
