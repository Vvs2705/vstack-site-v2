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
  { icon: '⚡', title: 'Automação de processos', description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.' },
  { icon: '🤖', title: 'Inteligência artificial', description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio.' },
  { icon: '🔗', title: 'Integrações enterprise', description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação.' },
  { icon: '📦', title: 'Produtos SaaS', description: 'Desenvolvemos produtos digitais do zero ao product-market fit.' },
]

export default function PillarsSection({
  sectionLabel = 'O que fazemos',
  headline     = 'Tecnologia aplicada a resultados reais',
  pillars      = DEFAULT_PILLARS,
}: PillarsSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-2.5">
          {sectionLabel}
        </p>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-10 max-w-[340px] leading-tight">
          {headline}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/60 p-6 transition-colors hover:border-[var(--accent-border)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-base">
                {pillar.icon}
              </div>
              <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
