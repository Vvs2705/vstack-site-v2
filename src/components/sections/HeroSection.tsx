import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container, Surface } from '@/components/primitives/Layout'

const STATS = [
  { value: '98%', label: 'precisão operacional' },
  { value: '-72h', label: 'no fechamento mensal' },
  { value: '24/7', label: 'automação ativa' },
]

const BAR_HEIGHTS = [42, 58, 36, 70, 52, 100, 64]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-18 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--accent-muted)] blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[rgba(45,55,72,0.16)] blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Automação, IA e sistemas sob medida
            </div>

            <h1 className="max-w-2xl font-display text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--text-1)] sm:text-[52px] lg:text-[58px]">
              Automação inteligente para operações escaláveis.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-[16px] leading-8 text-[var(--text-2)]">
              A V-STACK SOLUTIONS cria automações, integrações e produtos digitais para transformar processos travados em uma operação clara, escalável e mensurável.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cotacao" className="btn-primary px-6 py-3.5 text-[14px]">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solucoes" className="btn-secondary px-6 py-3.5 text-[14px]">
                Ver soluções
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-[var(--border)] pl-4 first:border-l-0 first:pl-0">
                  <strong className="block font-display text-2xl font-bold text-[var(--text-1)]">
                    {stat.value}
                  </strong>
                  <span className="mt-1 block text-[11px] leading-4 text-[var(--text-3)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Surface className="relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div>
                  <p className="text-[12px] font-semibold text-[var(--text-3)]">ContaFlow</p>
                  <h2 className="font-display text-xl font-bold text-[var(--text-1)]">
                    Operação financeira em tempo real
                  </h2>
                </div>
                <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[var(--accent)]">
                  LIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Metric title="Entradas" value="R$ 84,2k" tone="success" />
                <Metric title="Saídas" value="R$ 31,4k" tone="accent" />
              </div>

              <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
                <div className="mb-3 flex items-center justify-between text-[12px] text-[var(--text-2)]">
                  <span>Conciliação automática</span>
                  <strong className="text-[var(--text-1)]">247 / 250</strong>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-card)]">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]" />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[12px] font-medium text-[var(--text-2)]">Receita semanal</p>
                  <p className="text-[11px] text-[var(--text-3)]">últimos 7 ciclos</p>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {BAR_HEIGHTS.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[var(--accent-muted)]"
                      style={{
                        height: `${height}%`,
                        background: index === 5 ? 'linear-gradient(to top, var(--accent), var(--accent-light))' : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-2">
                {['Open Banking conectado', 'Alertas de anomalia ativos', 'Relatórios prontos para gestão'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[var(--text-2)]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                    {item}
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Metric({ title, value, tone }: { title: string; value: string; tone: 'success' | 'accent' }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
      <p className="text-[12px] text-[var(--text-3)]">{title}</p>
      <p className="mt-1 font-display text-2xl font-bold" style={{ color: tone === 'success' ? '#22c55e' : 'var(--accent)' }}>
        {value}
      </p>
    </div>
  )
}
