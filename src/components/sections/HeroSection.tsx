import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

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

const BAR_HEIGHTS = ['40%', '65%', '40%', '100%', '65%', '100%', '65%', '25%', '65%', '100%', '65%', '100%']
const BAR_ACTIVE  = [false, false, false, true, true, true, true, false, false, true, true, true]

const STATS = [
  { value: '98%', label: 'precisão' },
  { value: '-72h', label: 'fechamento' },
  { value: '3×', label: 'produtividade' },
]

export default function HeroSection({
  badge            = 'ContaFlow · Acesso Antecipado',
  headline         = 'Sistemas que trabalham',
  headlineAccent   = 'cresce.',
  subtext          = 'A V-STACK SOLUTIONS desenvolve automações inteligentes, APIs enterprise e produtos SaaS que transformam operação em vantagem competitiva.',
  ctaPrimaryLabel  = 'Conheça o ContaFlow',
  ctaPrimaryHref   = '/cotacao',
  ctaSecondaryLabel = 'Fale com um especialista',
  ctaSecondaryHref  = '/contato',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[var(--bg)]">
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(240,112,40,0.12) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(240,112,40,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[var(--accent)]">
              <Zap className="h-3 w-3 fill-current" />
              {badge}
            </div>

            <h1 className="font-display text-[40px] sm:text-[50px] lg:text-[56px] font-bold leading-[1.08] tracking-tight text-[var(--text-1)]">
              {headline}<br />
              enquanto você{' '}
              <span className="gradient-text">{headlineAccent}</span>
            </h1>

            <p className="max-w-[440px] text-[15px] leading-relaxed text-[var(--text-2)]">
              {subtext}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-[var(--text-1)]">{s.value}</p>
                  <p className="text-[11px] text-[var(--text-3)] uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={ctaPrimaryHref} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold">
                {ctaPrimaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={ctaSecondaryHref} className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold">
                {ctaSecondaryLabel}
              </Link>
            </div>
          </div>

          {/* Right — product card */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl"
                 style={{ boxShadow: '0 0 80px rgba(240,112,40,0.12)' }} />

            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
                 style={{ boxShadow: 'var(--shadow)' }}>
              {/* Gradient top line */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                   style={{ background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)' }} />

              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-1)]">ContaFlow</h3>
                  <p className="text-xs text-[var(--text-3)] mt-0.5">Automação financeira inteligente</p>
                </div>
                <span className="rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--accent)]">
                  EM BREVE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { value: '98%', label: 'Precisão', accent: true },
                  { value: '-72h', label: 'Fechamento', accent: false },
                  { value: 'Auto', label: 'Conciliação', accent: false },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-[var(--bg-deep)] border border-[var(--border)] p-3 text-center">
                    <span className={`block font-display text-xl font-bold ${m.accent ? 'text-[var(--accent)]' : 'text-[var(--text-1)]'}`}>
                      {m.value}
                    </span>
                    <span className="block mt-1 text-[10px] uppercase tracking-widest text-[var(--text-3)]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-1 h-12 mb-5">
                {BAR_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-300"
                    style={{
                      height: h,
                      background: BAR_ACTIVE[i]
                        ? 'linear-gradient(to top, var(--accent), var(--accent-light))'
                        : 'rgba(240,112,40,0.15)',
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-[var(--text-3)]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                Sistema operacional · Integração ativa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
