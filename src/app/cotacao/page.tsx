import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import CotacaoForm from '@/components/forms/CotacaoForm'
import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solicitar Cotação | V-STACK SOLUTIONS',
  description: 'Solicite uma cotação personalizada para seu projeto. Receba uma proposta detalhada em até 24 horas.',
}

const BENEFITS = [
  { Icon: Clock,           title: 'Resposta em 24h',      description: 'Proposta detalhada em até 1 dia útil' },
  { Icon: Shield,          title: 'Sem Compromisso',       description: 'Cotação gratuita e sem obrigações' },
  { Icon: Award,           title: 'Consultoria Inclusa',   description: 'Análise técnica do seu projeto' },
  { Icon: HeadphonesIcon,  title: 'Suporte Dedicado',      description: 'Acompanhamento personalizado' },
]

export default function CotacaoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-14 bg-[var(--bg)]">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              Proposta gratuita
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-1)] leading-tight max-w-xl mb-4">
              Solicite uma cotação
            </h1>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-xl">
              Preencha o formulário e receba uma proposta personalizada para seu projeto em até 24 horas.
            </p>
          </div>
        </section>

        {/* Benefits strip */}
        <section className="border-b border-[var(--border)] bg-[var(--bg-deep)] py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {BENEFITS.map(({ Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[var(--text-1)] mb-0.5">{title}</p>
                    <p className="text-[12px] text-[var(--text-3)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CotacaoForm />
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
