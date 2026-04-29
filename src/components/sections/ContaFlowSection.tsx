interface ContaFlowSectionProps {
  eyebrow?: string
  badge?: string
  headline?: string
  description?: string
  features?: string
}

const DEFAULT_FEATURES = 'Conciliação bancária automática,Integração com Open Banking BR,Relatórios e dashboards em tempo real,Alertas inteligentes e anomalias'

export default function ContaFlowSection({
  eyebrow     = 'ContaFlow',
  badge       = 'ACESSO ANTECIPADO',
  headline    = 'Automação financeira que fecha o mês no prazo',
  description = 'Chega de planilhas manuais e conciliações que levam dias. O ContaFlow integra seus dados financeiros, automatiza lançamentos e gera relatórios em tempo real.',
  features    = DEFAULT_FEATURES,
}: ContaFlowSectionProps) {
  const featureList = features.split(',').map((f) => f.trim()).filter(Boolean)

  return (
    <section className="py-16 sm:py-20 border-y border-[var(--border)] bg-[var(--accent)]/[0.02]">
      <div className="max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center px-6 lg:px-8">

        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-widest text-[var(--accent)] uppercase">
              {eyebrow}
            </span>
            <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--accent-light)]">
              {badge}
            </span>
          </div>

          <h2 className="font-display text-[28px] sm:text-3xl font-bold text-[var(--text-primary)] leading-tight max-w-sm">
            {headline}
          </h2>

          <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] max-w-md">
            {description}
          </p>

          <ul className="space-y-3">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[13px] text-[var(--text-secondary)]">
                <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[9px] font-bold text-[var(--accent)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — dashboard card */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-6">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs text-[var(--text-muted)]">ContaFlow · Dashboard</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
              <span className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">Entradas</span>
              <span className="font-display text-xl font-bold text-green-400">R$ 84.200</span>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
              <span className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">Saídas</span>
              <span className="font-display text-xl font-bold text-[var(--accent)]">R$ 31.450</span>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
            <div className="mb-2.5 flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span>Conciliação automática</span>
              <span className="text-green-400">247/250 itens</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[98.8%] rounded-full bg-[var(--accent)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
