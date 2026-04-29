import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import ContatoForm from '@/components/forms/ContatoForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | V-STACK SOLUTIONS',
  description: 'Entre em contato com a V-STACK SOLUTIONS. Estamos prontos para transformar seus desafios em soluções tecnológicas inovadoras.',
}

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl font-bold gradient-text mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Estamos prontos para ouvir seus desafios e apresentar as melhores soluções para seu negócio
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                    Informações de Contato
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Nossa equipe está disponível para atendê-lo. Entre em contato através dos canais abaixo ou preencha o formulário.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                      <Mail className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contato@vstack-solutions.com.br"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        contato@vstack-solutions.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                      <Phone className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">
                        Telefone
                      </h3>
                      <a
                        href="tel:+5511999999999"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        +55 (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">
                        Localização
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                      <Clock className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">
                        Horário de Atendimento
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-vstack p-6 bg-[var(--accent-muted)] border-[var(--accent-border)]">
                  <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                    Resposta Rápida
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Respondemos todas as mensagens em até 24 horas úteis. Para urgências, utilize nosso chat online.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContatoForm />
              </div>
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
