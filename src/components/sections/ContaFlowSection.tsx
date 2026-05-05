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
    <section className="py-16 sm:py-20 border-y border-[var(--border)] bg-[var(--bg-deep)]">
      <div className="max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center px-6 lg:px-8">

        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-sm font-bold tracking-widest text-[var(--accent)] uppercase">
              {eyebrow}
            </span>
            <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[var(--accent)]">
              {badge}
            </span>
          </div>

          <h2 className="font-display text-[28px] sm:text-3xl font-bold text-[var(--text-1)] leading-tight max-w-sm">
            {headline}
          </h2>

          <p className="text-[14px] leading-relaxed text-[var(--text-2)] max-w-md">
            {description}
          </p>

          <ul className="space-y-3">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[13px] text-[var(--text-2)]">
                <span className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[9px] font-bold text-[var(--accent)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — dashboard card */}
        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
             style={{ boxShadow: 'var(--shadow-sm)' }}>
          {/* Gradient top line */}
          <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
               style={{ background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)' }} />

          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-[var(--text-3)] font-medium">ContaFlow · Dashboard</span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
              <span className="block text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-1.5">Entradas</span>
              <span className="font-display text-xl font-bold text-green-400">R$ 84.200</span>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
              <span className="block text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-1.5">Saídas</span>
              <span className="font-display text-xl font-bold text-[var(--accent)]">R$ 31.450</span>
            </div>
          </div>

          {/* Conciliação progress */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4 mb-3">
            <div className="mb-2.5 flex items-center justify-between text-xs text-[var(--text-3)]">
              <span>Conciliação automática</span>
              <span className="text-green-400 font-semibold">247/250 itens</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
              <div
                className="h-full rounded-full"
                style={{ width: '98.8%', background: 'linear-gradient(90deg, var(--accent), var(--accent-light))' }}
              />
            </div>
          </div>

          {/* Saldo */}
          <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">Saldo Líquido</span>
              <span className="font-display text-xl font-bold text-[var(--text-1)]">R$ 52.750</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
