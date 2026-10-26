'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp } from '@/components/animations'

export default function SolutionsGridSection() {
  return (
    <>
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
                <p className="text-[14px] text-[var(--text-2)]">Novos projetos serão publicados em breve.</p>
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
