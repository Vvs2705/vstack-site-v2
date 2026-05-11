import Link from 'next/link'
import { ArrowRight, Bot, Code2, Network, Workflow } from 'lucide-react'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'

const SERVICES = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    description: 'Transforme tarefas repetitivas em fluxos monitoráveis que reduzem erro e liberam tempo do time.',
    href: '/cotacao?interest=automacao',
  },
  {
    icon: Bot,
    title: 'Agentes de IA aplicados',
    description: 'Use IA para classificar, responder, analisar e apoiar decisões dentro do processo real da empresa.',
    href: '/cotacao?interest=ia',
  },
  {
    icon: Network,
    title: 'Integração de sistemas',
    description: 'Conecte ERPs, CRMs, bancos, APIs e ferramentas internas sem depender de retrabalho manual.',
    href: '/cotacao?interest=integracao',
  },
  {
    icon: Code2,
    title: 'Sistemas sob medida',
    description: 'Construa plataformas, portais e produtos SaaS com arquitetura preparada para evolução.',
    href: '/cotacao?interest=saas',
  },
]

export default function SolutionsGridSection() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow="Soluções"
              title="Escolha tecnologia pelo problema que ela resolve."
              description="Nosso trabalho é organizar a operação, integrar dados e criar sistemas que deixam o crescimento menos dependente de esforço manual."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map(({ icon: Icon, title, description, href }) => (
                <Surface key={title} interactive className="p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{description}</p>
                  <Link href={href} className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[var(--accent)]">
                    Conversar sobre isso
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Surface>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="deep" className="border-y border-[var(--border)]">
        <Container>
          <SectionHeader
            eyebrow="Produto em destaque"
            title="ContaFlow: automação financeira para fechar o mês com previsibilidade."
            description="A primeira frente de produto da V-STACK: conciliação bancária, relatórios e alertas para operações financeiras que precisam sair da planilha."
            align="center"
            className="mb-10"
          />

          {projects.length > 0 ?(
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
        </Container>
      </Section>
    </>
  )
}
