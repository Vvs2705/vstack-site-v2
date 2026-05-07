import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ContaFlowSectionProps {
  eyebrow?: string
  badge?: string
  headline?: string
  description?: string
  features?: string
}

const DEFAULT_FEATURES = 'Conciliação bancária automática,Integração com Open Banking BR,Relatórios e dashboards em tempo real,Alertas inteligentes e anomalias'

// Bar chart data — 7 bars, Mar (index 5) is the active/tallest
const BAR_DATA = [
  { label: 'Out', height: 42 },
  { label: 'Nov', height: 58 },
  { label: 'Dez', height: 35 },
  { label: 'Jan', height: 70 },
  { label: 'Fev', height: 52 },
  { label: 'Mar', height: 100 },
  { label: 'Abr', height: 63 },
]
const BAR_ACTIVE = 5

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

          {/* CTA */}
          <Link
            href="/cotacao"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold"
          >
            Quero Acesso Antecipado
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Right — dashboard card */}
        <div className="relative">
          <div
            className="border border-[var(--border)] rounded-[var(--radius-card)] bg-[var(--bg-card)] p-6 relative overflow-hidden"
            style={{ boxShadow: 'var(--shadow)' }}
          >
            {/* Gradient top line */}
            <div
              className="absolute inset-x-0 top-0 h-[2px] opacity-70"
              style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
              aria-hidden="true"
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="text-[12px] font-medium text-[var(--text-2)]">ContaFlow · Dashboard</span>
              </div>
              <span className="text-[11px] text-[var(--text-3)]">Maio 2025</span>
            </div>

            {/* Metrics 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5">
                <p className="text-[11px] text-[var(--text-3)] mb-1">Entradas</p>
                <p className="font-display text-[18px] font-bold" style={{ color: '#22C55E' }}>
                  R$ 84.200
                </p>
                <p className="text-[10px] font-semibold mt-0.5" style={{ color: '#22C55E' }}>
                  +12%
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5">
                <p className="text-[11px] text-[var(--text-3)] mb-1">Saídas</p>
                <p className="font-display text-[18px] font-bold text-[var(--accent)]">
                  R$ 31.450
                </p>
                <p className="text-[10px] font-semibold text-[var(--accent)] mt-0.5">
                  ↑4%
                </p>
              </div>
            </div>

            {/* Conciliation progress */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5 mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[var(--text-3)]">247 / 250</span>
                <span className="text-[11px] text-[var(--text-3)]">3 itens pendentes</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[var(--bg)] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: '98.8%',
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                  }}
                  role="progressbar"
                  aria-valuenow={247}
                  aria-valuemin={0}
                  aria-valuemax={250}
                />
              </div>
            </div>

            {/* Bar chart */}
            <div>
              <p className="text-[11px] text-[var(--text-3)] mb-3">Receita Mensal</p>
              <div className="flex items-end gap-1.5 h-16" aria-hidden="true">
                {BAR_DATA.map((bar, i) => (
                  <div
                    key={bar.label}
                    className="flex-1 rounded-t-[3px] transition-opacity duration-200"
                    style={{
                      height: `${bar.height}%`,
                      background: i === BAR_ACTIVE
                        ? 'linear-gradient(to top, var(--accent), var(--accent-light))'
                        : 'var(--accent-muted)',
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-1.5" aria-hidden="true">
                {BAR_DATA.map((bar) => (
                  <div key={bar.label} className="flex-1 text-center text-[9px] text-[var(--text-3)]">
                    {bar.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
