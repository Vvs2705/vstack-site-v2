import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import MetricBox from '@/components/ui/MetricBox'
import MiniLineChart from '@/components/charts/MiniLineChart'
import ProgressBar from '@/components/ui/ProgressBar'

interface ContaFlowSectionProps {
  eyebrow?: string
  badge?: string
  headline?: string
  description?: string
  features?: string
}

const DEFAULT_FEATURES = 'Conciliação bancária automática,Integração com Open Banking BR,Relatórios e dashboards em tempo real,Alertas inteligentes e anomalias'

const DEFAULT_DASHBOARD_DATA = {
  entradas: 84200,
  saidas: 31450,
  conciliacao: 247,
  saldo: 52750,
  chartData: [45, 52, 38, 65, 48, 72, 58, 81, 64, 75, 82, 78],
}

export default function ContaFlowSection({
  eyebrow     = 'ContaFlow',
  badge       = 'ACESSO ANTECIPADO',
  headline    = 'Automação financeira que fecha o mês no prazo',
  description = 'Chega de planilhas manuais e conciliações que levam dias. O ContaFlow integra seus dados financeiros, automatiza lançamentos e gera relatórios em tempo real.',
  features    = DEFAULT_FEATURES,
}: ContaFlowSectionProps) {
  const featureList = features.split(',').map((f) => f.trim()).filter(Boolean)
  const dashboardData = DEFAULT_DASHBOARD_DATA

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
        <div className="relative group">
          {/* Multiple glow layers for depth */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"
               style={{ boxShadow: '0 0 60px rgba(240,112,40,0.25)' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
               style={{ boxShadow: '0 0 40px rgba(99,102,241,0.15)' }} />

          <Card className="relative border-[var(--border)] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-deep)] group-hover:border-[var(--accent)]/60 transition-all duration-500 backdrop-blur-sm"
                style={{ boxShadow: '0 40px 120px rgba(240,112,40,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
            {/* Gradient top line */}
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                 style={{ background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)' }} />

            <CardContent className="p-6">
              {/* Status header */}
              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-[var(--text-3)] font-medium">
                    ContaFlow · Dashboard · Atualizado há 2 min
                  </span>
                </div>
              </div>

              {/* KPI Grid 2x2 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <MetricBox
                  label="Entradas"
                  value={`R$ ${dashboardData.entradas.toLocaleString('pt-BR')}`}
                  icon={TrendingUp}
                  trend={{ direction: 'up', value: '+12%' }}
                  accent={false}
                />
                <MetricBox
                  label="Saídas"
                  value={`R$ ${dashboardData.saidas.toLocaleString('pt-BR')}`}
                  icon={TrendingDown}
                  trend={{ direction: 'down', value: '-5%' }}
                  accent={false}
                />
              </div>

              {/* Mini Chart */}
              <div className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
                <p className="text-xs text-[var(--text-3)] mb-3 uppercase tracking-widest">
                  Fluxo últimos 12 meses
                </p>
                <MiniLineChart data={dashboardData.chartData} />
              </div>

              {/* Progress */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4 mb-4">
                <ProgressBar
                  value={dashboardData.conciliacao}
                  max={250}
                  label="Conciliação automática"
                  showPercentage={false}
                  color="accent"
                />
              </div>

              {/* Saldo destacado */}
              <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                    Saldo Líquido
                  </span>
                  <span className="font-display text-2xl font-bold text-[var(--text-1)]">
                    R$ {dashboardData.saldo.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
