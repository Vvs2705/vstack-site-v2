import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import DorForm from '@/components/forms/DorForm'
import { AlertCircle, Lightbulb, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Envie Sua Dor | V-STACK SOLUTIONS',
  description: 'Compartilhe os desafios da sua empresa. Vamos analisar e propor soluções personalizadas para resolver seus problemas.',
}

export default function EnvieSuaDorPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-sm font-medium text-[var(--accent)] mb-6">
                <AlertCircle className="h-4 w-4" />
                Compartilhe Seu Desafio
              </div>
              
              <h1 className="font-display text-5xl font-bold gradient-text mb-6">
                Envie Sua Dor
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Conte-nos sobre os desafios que sua empresa enfrenta. Nossa equipe analisará e apresentará soluções personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Why Share */}
        <section className="py-12 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Análise Especializada',
                  description: 'Nossa equipe técnica avaliará seu desafio e identificará oportunidades de melhoria',
                },
                {
                  icon: Target,
                  title: 'Soluções Personalizadas',
                  description: 'Propomos abordagens específicas para resolver seu problema de forma eficiente',
                },
                {
                  icon: TrendingUp,
                  title: 'Resultados Mensuráveis',
                  description: 'Focamos em soluções que geram impacto real e ROI comprovado',
                },
              ].map((item, idx) => (
                <div key={idx} className="card-vstack text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                      <item.icon className="h-7 w-7 text-[var(--accent)]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DorForm />
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-12 bg-[var(--bg-card)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-vstack p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
                Sua Privacidade é Garantida
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                Todas as informações compartilhadas são tratadas com total confidencialidade. 
                Você pode optar por enviar anonimamente se preferir. Seus dados são protegidos 
                conforme a LGPD e nunca serão compartilhados com terceiros.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
