import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/primitives/Layout'
import { whatsappLink } from '@/lib/contact'

// Links externos (WhatsApp) abrem em nova aba; internos usam o roteador.
function CtaLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

interface CTASectionProps {
  eyebrow?: string
  headline?: string
  description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

/**
 * Chamada final. Server Component: sem JS de animação (entrada via CSS) e sem
 * gradiente de fundo, só um painel com borda e o acento nos botões.
 */
export default function CTASection({
  eyebrow = 'Próximo passo',
  headline = 'Vamos tirar o seu projeto do papel?',
  description = 'Conte o que você precisa: site, sistema, automação ou jogo. Retornamos em até 24 horas úteis com as perguntas que faltam e o próximo passo, sem compromisso.',
  ctaPrimaryLabel = 'Pedir orçamento no WhatsApp',
  ctaPrimaryHref = whatsappLink('DIAGNÓSTICO'),
  ctaSecondaryLabel = 'Preencher formulário',
  ctaSecondaryHref = '/cotacao',
}: CTASectionProps) {
  return (
    <Section spacing="lg">
      <Container size="lg">
        <div className="reveal-scroll rounded-[var(--radius-panel)] border border-[var(--accent-border)] bg-[var(--bg-card)] px-6 py-12 text-center shadow-[var(--shadow-sm)] sm:px-12 sm:py-16">
          <p className="eyebrow mb-4">{eyebrow}</p>

          <h2 className="mx-auto max-w-2xl text-balance text-[var(--text-1)]">{headline}</h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-8 text-[var(--text-2)]">{description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href={ctaPrimaryHref} className="btn-primary min-h-[48px] w-full px-7 py-3 text-[15px] sm:w-auto">
              {ctaPrimaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={ctaSecondaryHref} className="btn-outline min-h-[48px] w-full px-7 py-3 text-[15px] sm:w-auto">
              {ctaSecondaryLabel}
            </CtaLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
