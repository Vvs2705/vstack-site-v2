import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { SERVICES } from '@/lib/services'
import { whatsappLink } from '@/lib/contact'

/**
 * "O que fazemos": as 4 frentes (fonte única em lib/services.ts) em grade 2x2.
 * Server Component; a entrada ao rolar é CSS puro (.reveal-scroll).
 */
export default function ServicesSection({ id = 'servicos' }: { id?: string }) {
  return (
    <Section spacing="lg" id={id} tone="muted" className="border-y border-[var(--border)]">
      <Container>
        <div className="reveal-scroll">
          <SectionHeader
            eyebrow="O que fazemos"
            title="Quatro frentes, um time que constrói do começo ao fim."
            description="Escolha a que resolve o seu problema hoje e evolua a partir dela. Não sabe qual é? Descreva a situação e indicamos o caminho mais direto."
            className="mb-12"
          />
        </div>

        <ul className="grid gap-5 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <li key={service.id} className="reveal-scroll">
                <Surface className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                      <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-[var(--text-3)]">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="text-[20px] text-[var(--text-1)]">{service.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-[var(--text-2)]">{service.promise}</p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[14px] leading-6 text-[var(--text-2)]">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-5">
                    <Link
                      href={service.href}
                      aria-label={`Ver detalhes: ${service.title}`}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-[var(--accent)] hover:text-[var(--accent-light)]"
                    >
                      Ver detalhes
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href={whatsappLink(service.whatsappTopic)}
                      aria-label={`Pedir orçamento no WhatsApp: ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-[14px] font-semibold text-[var(--text-2)] hover:text-[var(--text-1)]"
                    >
                      Pedir orçamento
                    </a>
                  </div>
                </Surface>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
