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
    description: 'Eliminamos tarefas manuais e repetitivas com fluxos inteligentes que trabalham 24/7 por você.',
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    description: 'Modelos de IA integrados à sua operação — classificação, previsão, geração de conteúdo e análise.',
  },
  {
    icon: '🔗',
    title: 'Integração de Sistemas',
    description: 'Conectamos seus sistemas legados e plataformas SaaS em um ecossistema unificado e sem silos.',
  },
  {
    icon: '📦',
    title: 'Desenvolvimento SaaS',
    description: 'Produtos digitais completos — do MVP escalável à plataforma enterprise com arquitetura sólida.',
  },
]

export default function PillarsSection({
  sectionLabel = 'Nossas Soluções',
  headline     = 'O que construímos para você',
  pillars      = DEFAULT_PILLARS,
}: PillarsSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-12">
          <div>
            <p className="eyebrow mb-3">{sectionLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--text-1)] mb-0">
              {headline}
            </h2>
          </div>
          <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-md">
            Cada solução é projetada para eliminar fricção, reduzir custo operacional e escalar junto com o seu negócio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-7 cursor-default group transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(240,112,40,0.12)]"
            >
              {/* Radial gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, var(--accent-muted), transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="relative z-10 w-[46px] h-[46px] rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center text-xl mb-5">
                {pillar.icon}
              </div>

              <h3 className="relative z-10 font-display text-[15px] font-bold text-[var(--text-1)] mb-2">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-[13px] text-[var(--text-2)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
