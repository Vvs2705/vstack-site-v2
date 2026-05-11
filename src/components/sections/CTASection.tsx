import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/primitives/Layout'

interface CTASectionProps {
  headline?: string
  description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

export default function CTASection({
  headline = 'Pronto para transformar sua operação?',
  description = 'Conte onde a operação trava. Em até 24 horas úteis, retornamos com uma leitura técnica e um caminho possível de implementação.',
  ctaPrimaryLabel = 'Solicitar diagnóstico',
  ctaPrimaryHref = '/cotacao',
  ctaSecondaryLabel = 'Enviar minha dor',
  ctaSecondaryHref = '/envie-sua-dor',
}: CTASectionProps) {
  return (
    <Section spacing="xl" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(240,112,40,0.13),transparent_34rem)]" />
      <Container size="md">
        <div className="text-center">
          <p className="eyebrow mb-4">Próximo passo</p>
          <h2 className="font-display text-balance text-3xl font-bold leading-tight text-[var(--text-1)] sm:text-5xl">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-8 text-[var(--text-2)]">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ctaPrimaryHref} className="btn-primary px-7 py-3.5 text-[14px]">
              {ctaPrimaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={ctaSecondaryHref} className="btn-outline px-7 py-3.5 text-[14px]">
              {ctaSecondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
