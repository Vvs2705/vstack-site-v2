import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  headline?:           string
  description?:        string
  ctaPrimaryLabel?:    string
  ctaPrimaryHref?:     string
  ctaSecondaryLabel?:  string
  ctaSecondaryHref?:   string
}

export default function CTASection({
  headline          = 'Pronto para transformar seu negócio?',
  description       = 'Conte-nos sobre seus desafios e descubra como podemos ajudar a levar seu negócio ao próximo nível.',
  ctaPrimaryLabel   = 'Solicitar Cotação Gratuita',
  ctaPrimaryHref    = '/cotacao',
  ctaSecondaryLabel = 'Envie Sua Dor',
  ctaSecondaryHref  = '/envie-sua-dor',
}: CTASectionProps) {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[var(--bg)]">
      {/* Radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(240,112,40,0.10) 0%, transparent 70%)' }}
      />
      {/* Grid pattern overlay (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="eyebrow mb-4">Próximo passo</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--text-2)] mb-8 max-w-md mx-auto">
          {description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-center">
          <Link
            href={ctaPrimaryHref}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
          >
            {ctaPrimaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={ctaSecondaryHref}
            className="btn-secondary inline-flex items-center px-7 py-3.5 text-sm font-semibold"
          >
            {ctaSecondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
