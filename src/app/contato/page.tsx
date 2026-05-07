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

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'contato@vstack-solutions.com.br',
    href: 'mailto:contato@vstack-solutions.com.br',
  },
  {
    Icon: Phone,
    label: 'Telefone',
    value: '+55 (11) 99999-9999',
    href: 'tel:+5511999999999',
  },
  {
    Icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, SP · Brasil',
    href: undefined,
  },
  {
    Icon: Clock,
    label: 'Atendimento',
    value: 'Seg–Sex: 9h às 18h · Sáb: 9h às 13h',
    href: undefined,
  },
]

export default function ContatoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-14 bg-[var(--bg)]">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              Fale conosco
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-1)] leading-tight max-w-xl mb-4">
              Entre em contato
            </h1>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-xl">
              Estamos prontos para ouvir seus desafios e apresentar as melhores soluções para seu negócio.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                      <Icon className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-3)] font-semibold mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-[13px] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[13px] text-[var(--text-2)]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-4 mt-2">
                  <p className="text-[12px] font-semibold text-[var(--accent)] mb-1">Resposta garantida</p>
                  <p className="text-[13px] text-[var(--text-2)] leading-relaxed">
                    Respondemos todas as mensagens em até 24 horas úteis. Para urgências, use o chat online.
                  </p>
                </div>
              </div>

              {/* Form */}
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
