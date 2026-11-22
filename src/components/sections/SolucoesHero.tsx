import Link from 'next/link'
import { Container, Section } from '@/components/primitives/Layout'
import { SERVICES } from '@/lib/services'

export default function SolucoesHero() {
  return (
    <Section spacing="xl" className="border-b border-[var(--border)]">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow reveal mb-4">O que entregamos</p>

          <h1 className="text-balance text-[var(--text-1)]">
            Sites, sistemas, automação e jogos para a sua empresa crescer.
          </h1>

          <p className="reveal mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
            Do site que traz clientes ao sistema que organiza a operação: escolha a frente que resolve o seu problema hoje e evolua a partir dela.
          </p>

          <nav aria-label="Ir para" className="reveal mt-8" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
            <ul className="flex flex-wrap gap-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#solucao-${service.id}`}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 text-[14px] font-semibold text-[var(--text-2)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#produtos"
                  className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 text-[14px] font-semibold text-[var(--text-2)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                >
                  Produtos próprios
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  )
}
