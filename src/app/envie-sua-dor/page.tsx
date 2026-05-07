import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import DorForm from '@/components/forms/DorForm'
import { Lightbulb, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Envie Sua Dor | V-STACK SOLUTIONS',
  description: 'Compartilhe os desafios da sua empresa. Vamos analisar e propor soluções personalizadas para resolver seus problemas.',
}

const WHY_ITEMS = [
  {
    Icon: Lightbulb,
    title: 'Análise especializada',
    description: 'Nossa equipe técnica avaliará seu desafio e identificará oportunidades de melhoria.',
  },
  {
    Icon: Target,
    title: 'Soluções personalizadas',
    description: 'Propomos abordagens específicas para resolver seu problema de forma eficiente.',
  },
  {
    Icon: TrendingUp,
    title: 'Resultados mensuráveis',
    description: 'Focamos em soluções que geram impacto real e ROI comprovado.',
  },
]

export default function EnvieSuaDorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-14 bg-[var(--bg)]">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              Compartilhe seu desafio
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-1)] leading-tight max-w-xl mb-4">
              Envie sua dor
            </h1>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-xl">
              Conte-nos sobre os desafios que sua empresa enfrenta. Nossa equipe analisará e apresentará soluções personalizadas.
            </p>
          </div>
        </section>

        {/* Why share */}
        <section className="border-b border-[var(--border)] bg-[var(--bg-deep)] py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WHY_ITEMS.map(({ Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-[13px] font-bold text-[var(--text-1)] mb-1">{title}</h3>
                    <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <DorForm />
          </div>
        </section>

        {/* Privacy note */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-deep)] py-10">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-[12px] text-[var(--text-3)] leading-relaxed">
              Todas as informações são tratadas com total confidencialidade. Você pode enviar anonimamente se preferir.
              Dados protegidos conforme a LGPD e nunca compartilhados com terceiros.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
