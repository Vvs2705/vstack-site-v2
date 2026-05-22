'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'

export default function SolutionsGridSection() {
  return (
    <>
      <Section>
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Cases"
              title="Empresas que já transformaram operação com V-STACK."
              description="De 5 dias para 1 hora. De 20h para 1h. De 8% de erro para 0,2%. Histórias reais com números reais."
              align="center"
              className="mb-10"
            />
          </FadeInUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-3" delay={0.05}>
            <StaggerItem>
              <Link href="/cases/logtech" className="block h-full">
                <Surface className="h-full p-6 hover:border-[var(--accent-border)] transition-colors group">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-2">Logística</p>
                  <h3 className="font-display text-xl font-bold text-[var(--text-1)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    LogTech
                  </h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)] mb-4">
                    15h semanais de digitação manual reduziram para 30 minutos
                  </p>
                  <p className="font-display text-sm font-bold text-[var(--accent)] mb-4">-87% em tempo</p>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                    Ler case
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Surface>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/cases/mediservice" className="block h-full">
                <Surface className="h-full p-6 hover:border-[var(--accent-border)] transition-colors group">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-2">Saúde</p>
                  <h3 className="font-display text-xl font-bold text-[var(--text-1)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    MediServe
                  </h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)] mb-4">
                    20h por semana de resposta manual caíram para 1h de revisão
                  </p>
                  <p className="font-display text-sm font-bold text-[var(--accent)] mb-4">-95% em tempo</p>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                    Ler case
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Surface>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/cases/finflow" className="block h-full">
                <Surface className="h-full p-6 hover:border-[var(--accent-border)] transition-colors group">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-2">Fintech</p>
                  <h3 className="font-display text-xl font-bold text-[var(--text-1)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    FinFlow
                  </h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)] mb-4">
                    5 dias de reconciliação manual agora é 1 hora de validação
                  </p>
                  <p className="font-display text-sm font-bold text-[var(--accent)] mb-4">-98% em retrabalho</p>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                    Ler case
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Surface>
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                Ver todos os cases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInUp>
        </Container>
      </Section>

      <Section tone="deep" className="border-y border-[var(--border)]">
        <Container>
          <FadeInUp>
            <SectionHeader
              eyebrow="Produto em destaque"
              title="FiscWise: automação financeira para fechar o mês com previsibilidade."
              description="A primeira frente de produto da V-STACK: conciliação bancária, relatórios e alertas para operações financeiras que precisam sair da planilha."
              align="center"
              className="mb-10"
            />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            {projects.length > 0 ? (
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-1">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} {...project} />
                ))}
              </div>
            ) : (
              <Surface className="p-8 text-center">
                <p className="text-[14px] text-[var(--text-2)]">Novos cases serão publicados em breve.</p>
              </Surface>
            )}
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/fiscwise" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                Conhecer o FiscWise
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </>
  )
}
