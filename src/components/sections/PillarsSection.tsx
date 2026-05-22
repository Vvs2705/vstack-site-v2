import { Bot, Code2, Network, Workflow } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'

const PILLARS = [
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Você para de depender de planilha, tarefa manual e retrabalho. Seu time ganha horas por semana e o processo roda com consistência — mesmo quando ninguém está olhando.',
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    description: 'Seu negócio para de desperdiçar dados que já tem. Agentes de IA classificam, analisam e tomam decisões de rotina para você — integrados ao processo real, não a um chatbot genérico.',
  },
  {
    icon: Network,
    title: 'Integração de Sistemas',
    description: 'Seus sistemas param de viver em mundos separados. ERP, CRM, banco e ferramentas internas passam a falar a mesma língua — sem exportação manual, sem dados desatualizados.',
  },
  {
    icon: Code2,
    title: 'Produtos SaaS',
    description: 'Você para de adaptar seu negócio a software de prateleira que não serve. Construímos exatamente o que a sua operação precisa, com arquitetura que aguenta crescer junto com você.',
  },
]

export default function PillarsSection() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="O que resolvemos"
            title="Cada entrega começa por um gargalo real"
            description="Não vendemos tecnologia por tecnologia. Identificamos onde sua operação trava, propõe a solução mais direta e entregamos o que realmente muda o resultado — sem enrolação."
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
