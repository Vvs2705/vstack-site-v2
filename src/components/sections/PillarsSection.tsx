import { LucideIcon } from 'lucide-react'
import { Zap, Bot, Link2, Package } from 'lucide-react'
import FeatureCard from '@/components/ui/FeatureCard'

interface PillarItem {
  icon: LucideIcon
  title: string
  description: string
  color: 'orange' | 'blue' | 'green' | 'purple'
}

interface PillarsSectionProps {
  sectionLabel?: string
  headline?: string
  pillars?: PillarItem[]
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.',
    color: 'orange',
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio com resultados mensuráveis.',
    color: 'blue',
  },
  {
    icon: Link2,
    title: 'Integrações Enterprise',
    description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação sem atrito.',
    color: 'green',
  },
  {
    icon: Package,
    title: 'Produtos SaaS',
    description: 'Desenvolvemos produtos digitais do zero ao product-market fit com entregas ágeis.',
    color: 'purple',
  },
]

export default function PillarsSection({
  sectionLabel = 'O que fazemos',
  headline     = 'Tecnologia aplicada a resultados reais',
  pillars      = DEFAULT_PILLARS,
}: PillarsSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-2.5">{sectionLabel}</p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-1)] max-w-[360px] leading-tight">
            {headline}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              color={pillar.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
