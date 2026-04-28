import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import CotacaoForm from '@/components/forms/CotacaoForm'
import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solicitar Cotação | V Stack Solution',
  description: 'Solicite uma cotação personalizada para seu projeto. Receba uma proposta detalhada em até 24 horas.',
}

export default function CotacaoPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl font-bold gradient-text mb-6">
                Solicite uma Cotação
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Preencha o formulário abaixo e receba uma proposta personalizada para seu projeto em até 24 horas
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Resposta em 24h',
                  description: 'Proposta detalhada em até 1 dia útil',
                },
                {
                  icon: Shield,
                  title: 'Sem Compromisso',
                  description: 'Cotação gratuita e sem obrigações',
                },
                {
                  icon: Award,
                  title: 'Consultoria Inclusa',
                  description: 'Análise técnica do seu projeto',
                },
                {
                  icon: HeadphonesIcon,
                  title: 'Suporte Dedicado',
                  description: 'Acompanhamento personalizado',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="card-vstack text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                      <benefit.icon className="h-7 w-7 text-[var(--accent)]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
