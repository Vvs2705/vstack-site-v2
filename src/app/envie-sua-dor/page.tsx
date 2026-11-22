import type { Metadata } from 'next'
import { Lightbulb, LockKeyhole, Target, TrendingUp } from 'lucide-react'
import DorForm from '@/components/forms/DorForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section } from '@/components/primitives/Layout'
import { whatsappLink } from '@/lib/contact'
import { OG_DEFAULTS } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Envie sua dor',
  description:
    'Descreva um gargalo operacional da sua empresa. A V-STACK SOLUTIONS analisa oportunidades de automação, IA, integração ou sistema sob medida.',
  openGraph: {
    ...OG_DEFAULTS,
    title: 'Envie sua dor | V-STACK SOLUTIONS',
    description: 'Conte onde sua operação trava e receba uma leitura técnica inicial.',
  },
}

const WHY_ITEMS = [
  {
    icon: Lightbulb,
    title: 'Clareza sobre o problema',
    description: 'Ajudamos a transformar uma dor operacional em hipótese técnica objetiva.',
  },
  {
    icon: Target,
    title: 'Caminho recomendado',
    description: 'Indicamos se faz sentido automatizar, integrar, aplicar IA ou criar um sistema.',
  },
  {
    icon: TrendingUp,
    title: 'Foco em impacto',
    description: 'Priorizamos problemas que reduzem custo, tempo, erro ou risco operacional.',
  },
]

export default function EnvieSuaDorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <Section spacing="lg">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
              {/* Esquerda: por que contar a dor + o que acontece depois. Fixa ao rolar o formulário. */}
              <div className="lg:sticky lg:top-24">
                <p className="eyebrow reveal mb-4">Envie sua dor</p>
                <h1 className="font-display text-balance text-[30px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[38px]">
                  Toda boa solução começa com uma dor bem descrita.
                </h1>
                <p className="reveal mt-5 max-w-xl text-[16px] leading-8 text-[var(--text-2)]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
                  Se você ainda não sabe exatamente o que pedir, comece por aqui. Conte o que trava, onde acontece e qual impacto isso causa.
                </p>

                <ul className="mt-8 space-y-5">
                  {WHY_ITEMS.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                        <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[15px] font-bold text-[var(--text-1)]">{title}</p>
                        <p className="mt-0.5 text-[14px] leading-6 text-[var(--text-2)]">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-start gap-3 rounded-[var(--radius-card)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-4">
                  <LockKeyhole className="mt-0.5 h-5 w-5 flex-none text-[var(--accent)]" aria-hidden="true" />
                  <p className="text-[13px] leading-6 text-[var(--text-2)]">
                    As informações são tratadas com confidencialidade. Você pode enviar anonimamente se preferir. Dados protegidos conforme a LGPD.
                  </p>
                </div>

                <p className="mt-6 text-[14px] text-[var(--text-2)]">
                  Prefere falar direto?{' '}
                  <a
                    href={whatsappLink('DIAGNÓSTICO')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Abrir o WhatsApp
                  </a>
                </p>
              </div>

              <DorForm />
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
