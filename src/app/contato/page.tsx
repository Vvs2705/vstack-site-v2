import type { Metadata } from 'next'
import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import CookieBanner from '@/components/CookieBanner'
import ChatWidget from '@/components/chat/ChatWidget'
import ContatoForm from '@/components/forms/ContatoForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section, Surface } from '@/components/primitives/Layout'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a V-STACK SOLUTIONS para discutir automação, IA, integrações ou desenvolvimento de sistemas sob medida para sua empresa.',
  openGraph: {
    title: 'Contato | V-STACK SOLUTIONS',
    description: 'Converse com especialistas em automação, IA e sistemas sob medida.',
  },
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@vstack-solutions.com.br',
    href: 'mailto:contato@vstack-solutions.com.br',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, SP · Brasil',
  },
  {
    icon: Clock,
    label: 'Retorno',
    value: 'Até 24 horas úteis',
  },
]

export default function ContatoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="eyebrow mb-4">Contato</p>
                <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                  Vamos entender o seu cenário antes de propor tecnologia.
                </h1>
              </div>
              <p className="max-w-xl text-[16px] leading-8 text-[var(--text-2)]">
                Use este canal para conversas iniciais, parcerias ou dúvidas. Se você já sabe o problema que quer resolver, o caminho mais rápido é solicitar um diagnóstico.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <Surface key={label} className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-3)]">{label}</p>
                      {href ?(
                        <a href={href} className="mt-1 block text-[14px] font-semibold text-[var(--text-1)] hover:text-[var(--accent)]">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[14px] font-semibold text-[var(--text-1)]">{value}</p>
                      )}
                    </div>
                  </Surface>
                ))}

                <Surface className="border-[var(--accent-border)] bg-[var(--accent-muted)] p-5">
                  <MessageCircle className="mb-3 h-5 w-5 text-[var(--accent)]" />
                  <h2 className="font-display text-lg font-bold text-[var(--text-1)]">Para uma resposta melhor</h2>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--text-2)]">
                    Descreva qual processo trava, quais sistemas estão envolvidos e qual impacto isso gera hoje. Quanto mais contexto, mais preciso será o retorno.
                  </p>
                </Surface>
              </div>

              <ContatoForm />
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
