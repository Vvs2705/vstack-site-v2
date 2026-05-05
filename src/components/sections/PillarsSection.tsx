interface PillarItem {
  icon: string
  title: string
  description: string
}

interface PillarsSectionProps {
  sectionLabel?: string
  headline?: string
  pillars?: PillarItem[]
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    icon: '⚡',
    title: 'Automação de Processos',
    description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.',
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio com resultados mensuráveis.',
  },
  {
    icon: '🔗',
    title: 'Integrações Enterprise',
    description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação sem atrito.',
  },
  {
    icon: '📦',
    title: 'Produtos SaaS',
    description: 'Desenvolvemos produtos digitais do zero ao product-market fit com entregas ágeis.',
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              {/* Gradient top on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
              />
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(240,112,40,0.05), transparent 60%)' }} />

              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] text-lg">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-[var(--text-1)] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-[var(--text-2)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
