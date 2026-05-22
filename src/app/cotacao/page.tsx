import type { Metadata } from 'next'
import { ClipboardCheck, Clock, FileSearch, ShieldCheck } from 'lucide-react'
import CotacaoForm from '@/components/forms/CotacaoForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section, Surface } from '@/components/primitives/Layout'

export const metadata: Metadata = {
  title: 'Solicitar Diagnóstico',
  description:
    'Solicite um diagnóstico para automação, IA, integração de sistemas ou desenvolvimento sob medida. Receba uma análise inicial do caminho técnico recomendado.',
  openGraph: {
    title: 'Solicitar Diagnóstico | V-STACK SOLUTIONS',
    description: 'Receba uma análise inicial para transformar seu desafio operacional em solução técnica.',
  },
}

const BENEFITS = [
  {
    icon: FileSearch,
    title: 'Leitura técnica',
    description: 'Entendemos escopo, integrações, riscos e impacto antes de estimar.',
  },
  {
    icon: Clock,
    title: 'Retorno objetivo',
    description: 'Você recebe uma direção inicial em até 24 horas úteis.',
  },
  {
    icon: ClipboardCheck,
    title: 'Sem compromisso',
    description: 'O diagnóstico inicial não exige contratação.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidencial',
    description: 'Informações tratadas com discrição e foco técnico.',
  },
]

export default function CotacaoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Diagnóstico técnico</p>
              <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                Conte o desafio. Nós desenhamos o caminho possível.
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                O formulário abaixo ajuda a separar o que precisa de automação, integração, IA ou sistema sob medida. A resposta não é genérica: parte do seu contexto.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="deep" spacing="md" className="border-b border-[var(--border)]">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
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
            <CotacaoForm />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
