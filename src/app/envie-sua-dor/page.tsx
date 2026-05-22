import type { Metadata } from 'next'
import { Lightbulb, LockKeyhole, Target, TrendingUp } from 'lucide-react'
import DorForm from '@/components/forms/DorForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section, Surface } from '@/components/primitives/Layout'

export const metadata: Metadata = {
  title: 'Envie sua dor',
  description:
    'Descreva um gargalo operacional da sua empresa. A V-STACK SOLUTIONS analisa oportunidades de automação, IA, integração ou sistema sob medida.',
  openGraph: {
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
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="eyebrow mb-4">Envie sua dor</p>
                <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                  Toda boa solução começa com uma dor bem descrita.
                </h1>
              </div>
              <p className="max-w-xl text-[16px] leading-8 text-[var(--text-2)]">
                Se você ainda não sabe exatamente o que pedir, comece por aqui. Conte o que trava, onde acontece e qual impacto isso causa.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="deep" spacing="md" className="border-b border-[var(--border)]">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {WHY_ITEMS.map(({ icon: Icon, title, description }) => (
                <Surface key={title} className="p-5">
                  <Icon className="mb-4 h-5 w-5 text-[var(--accent)]" />
                  <h2 className="font-display text-base font-bold text-[var(--text-1)]">{title}</h2>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--text-2)]">{description}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <DorForm />
          </Container>
        </Section>

        <Section tone="deep" spacing="md" className="border-t border-[var(--border)]">
          <Container size="md">
            <div className="flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-5">
              <LockKeyhole className="mt-1 h-5 w-5 flex-none text-[var(--accent)]" />
              <p className="text-[13px] leading-7 text-[var(--text-2)]">
                As informações são tratadas com confidencialidade. Você pode enviar anonimamente se preferir. Dados protegidos conforme a LGPD.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
