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

const BAR_HEIGHTS = ['40%', '65%', '40%', '100%', '65%', '100%', '65%', '25%', '65%', '100%', '65%', '100%']
const BAR_ACTIVE   = [false, false, false, true, true, true, true, false, false, true, true, true]

export default function HeroSection({
  badge            = 'ContaFlow · Em breve',
  headline         = 'Sistemas que trabalham',
  headlineAccent   = 'cresce.',
  subtext          = 'A V-STACK SOLUTIONS desenvolve automações inteligentes, APIs enterprise e produtos SaaS que transformam operação em vantagem competitiva.',
  ctaPrimaryLabel  = 'Conheça o ContaFlow',
  ctaPrimaryHref   = '/cotacao',
  ctaSecondaryLabel = 'Fale com um especialista',
  ctaSecondaryHref  = '/contato',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-[72px] sm:py-20 bg-[var(--bg-primary)]">
      <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--accent-light)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {badge}
            </div>

            <h1 className="font-display text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]">
              {headline}<br />
              enquanto você <span className="text-[var(--accent)]">{headlineAccent}</span>
            </h1>

            <p className="max-w-[440px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {subtext}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={ctaPrimaryHref} className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold">
                {ctaPrimaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={ctaSecondaryHref} className="btn-secondary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold">
                {ctaSecondaryLabel}
              </Link>
            </div>
          </div>

          {/* Right — product card */}
          <div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">ContaFlow</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">Automação financeira inteligente</p>
                </div>
                <span className="rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--accent-light)]">
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
                    <span className={`block font-display text-xl font-bold ${m.accent ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                      {m.value}
                    </span>
                    <span className="block mt-1 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-1 h-10 mb-5">
                {BAR_HEIGHTS.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: h, background: BAR_ACTIVE[i] ? 'var(--accent)' : 'rgba(240,112,40,0.18)' }} />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                Sistema operacional · Integração ativa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
