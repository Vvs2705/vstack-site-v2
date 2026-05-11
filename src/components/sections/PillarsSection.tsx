import { Bot, Code2, Network, Workflow } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'

const PILLARS = [
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Fluxos que reduzem trabalho manual, erro operacional e dependência de planilhas.',
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    description: 'Agentes, classificação, análise e geração de conteúdo conectados ao seu processo real.',
  },
  {
    icon: Network,
    title: 'Integração de Sistemas',
    description: 'APIs, ERPs, CRMs, bancos e ferramentas internas trabalhando no mesmo ecossistema.',
  },
  {
    icon: Code2,
    title: 'Produtos SaaS',
    description: 'MVPs e plataformas escaláveis com arquitetura preparada para crescimento.',
  },
]

export default function PillarsSection() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Capacidades"
            title="Quatro frentes para destravar a operação"
            description="A entrega não começa pela tecnologia. Começa pelo diagnóstico do gargalo, pela clareza do processo e pela construção do que realmente muda o resultado."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <Surface key={title} interactive className="group relative overflow-hidden p-6">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{description}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
