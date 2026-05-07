import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  badge?: string
  headline?: string
  headlineAccent?: string
  subtext?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

const STATS = [
  { value: '98%', label: 'Precisão' },
  { value: '-72h', label: 'Tempo Fechamento' },
  { value: '100%', label: 'Auto Conciliação' },
]

// Heights in percent (relative to chart area), active = 6th bar (index 5)
const BAR_HEIGHTS = [45, 60, 38, 72, 55, 100, 65]
const BAR_LABELS  = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
const BAR_ACTIVE  = 5

export default function HeroSection({
  badge             = 'Automação · IA · Integração',
  headline          = 'Tecnologia que',
  headlineAccent    = 'transforma',
  subtext           = 'Desenvolvemos soluções sob medida em automação, inteligência artificial e integração de sistemas — para você focar no que importa.',
  ctaPrimaryLabel   = 'Solicitar Cotação Gratuita',
  ctaPrimaryHref    = '/cotacao',
  ctaSecondaryLabel = 'Envie Sua Dor',
  ctaSecondaryHref  = '/envie-sua-dor',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[var(--bg)]">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(240,112,40,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(240,112,40,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[var(--accent)]">
              <span
                className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0"
                aria-hidden="true"
              />
              {badge}
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[1.08] tracking-tight text-[var(--text-1)]"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}
            >
              {headline}
              <br />
              <span className="gradient-text">{headlineAccent}</span> seu
              <br />
              negócio
            </h1>

            {/* Subtext */}
            <p className="max-w-[440px] text-[15px] leading-relaxed text-[var(--text-2)]">
              {subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={ctaPrimaryHref} className="btn-primary px-6 py-3 text-[14px] font-semibold">
                {ctaPrimaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href={ctaSecondaryHref} className="btn-outline px-6 py-3 text-[14px] font-semibold">
                {ctaSecondaryLabel}
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-0 pt-2">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="text-center px-5 first:pl-0">
                    <span
                      className="block font-display font-bold text-[var(--text-1)]"
                      style={{ fontSize: '22px' }}
                    >
                      {stat.value}
                    </span>
                    <span className="block text-[11px] uppercase tracking-[0.1em] text-[var(--text-3)] mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                  {i < STATS.length - 1 && (
                    <span
                      className="h-8 w-px bg-[var(--border-strong)] flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — product card */}
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

              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                  <span className="text-[12px] font-medium text-[var(--text-2)]">ContaFlow · Ao Vivo</span>
                </div>
                <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[var(--accent)]">
                  ACESSO ANTECIPADO
                </span>
              </div>

              {/* Metrics 2x2 */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5">
                  <p className="text-[11px] text-[var(--text-3)] mb-1">Entradas / Mês</p>
                  <p className="font-display text-[18px] font-bold" style={{ color: '#22C55E' }}>
                    R$ 84.2k
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5">
                  <p className="text-[11px] text-[var(--text-3)] mb-1">Saídas / Mês</p>
                  <p className="font-display text-[18px] font-bold text-[var(--accent)]">
                    R$ 31.4k
                  </p>
                </div>
              </div>

              {/* Conciliation progress */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-3.5 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-[var(--text-3)]">Conciliação automática</span>
                  <span className="text-[11px] font-semibold text-[var(--text-2)]">247 / 250 itens</span>
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
                <p className="text-[11px] text-[var(--text-3)] mb-3">Receita — Últimas 7 Semanas</p>
                <div className="flex items-end gap-1.5 h-16" aria-hidden="true">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-[3px] transition-opacity duration-200"
                      style={{
                        height: `${h}%`,
                        background: i === BAR_ACTIVE
                          ? 'linear-gradient(to top, var(--accent), var(--accent-light))'
                          : 'var(--accent-muted)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mt-1.5" aria-hidden="true">
                  {BAR_LABELS.map((lbl, i) => (
                    <div key={i} className="flex-1 text-center text-[9px] text-[var(--text-3)]">
                      {lbl}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
