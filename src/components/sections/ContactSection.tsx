import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/contact'

const CHANNELS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    note: 'O caminho mais rápido. Retorno em até 24 horas úteis.',
    href: whatsappLink('DIAGNÓSTICO'),
    external: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: CONTACT_EMAIL,
    note: 'Para conversas iniciais, parcerias e dúvidas.',
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: Send,
    label: 'Formulário',
    value: 'Pedir orçamento',
    note: 'Conte o projeto em etapas curtas e receba a proposta por escrito.',
    href: '/cotacao',
    external: false,
  },
] as const

/** Fecho da home: os canais de contato reais do site, lado a lado. */
export default function ContactSection() {
  return (
    <Section spacing="md" id="contato-rapido" tone="deep" className="border-t border-[var(--border)]">
      <Container>
        <div className="reveal-scroll">
          <SectionHeader
            eyebrow="Contato"
            title="Escolha o canal que for mais fácil para você."
            className="mb-10"
          />
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, note, href, external }) => {
            const body = (
              <Surface interactive className="flex h-full flex-col p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                  <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-3)]">{label}</p>
                <p className="mt-1 flex items-center gap-1.5 break-all text-[16px] font-semibold text-[var(--text-1)]">
                  {value}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                </p>
                <p className="mt-2 text-[14px] leading-6 text-[var(--text-2)]">{note}</p>
              </Surface>
            )
            return (
              <li key={label} className="reveal-scroll">
                {external || href.startsWith('mailto:') ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block h-full rounded-[var(--radius-card)]"
                  >
                    {body}
                  </a>
                ) : (
                  <Link href={href} className="block h-full rounded-[var(--radius-card)]">
                    {body}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
