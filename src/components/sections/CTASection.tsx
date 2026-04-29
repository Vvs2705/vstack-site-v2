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
  description       = 'Conte-nos sobre seus desafios e descubra como podemos ajudar.',
  ctaPrimaryLabel   = 'Solicitar Cotação Gratuita',
  ctaPrimaryHref    = '/cotacao',
  ctaSecondaryLabel = 'Envie Sua Dor',
  ctaSecondaryHref  = '/envie-sua-dor',
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          {headline}
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
          {description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-center">
          <Link href={ctaPrimaryHref} className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
            {ctaPrimaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={ctaSecondaryHref} className="btn-secondary inline-flex items-center px-6 py-3 text-sm font-semibold">
            {ctaSecondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
