import Link from 'next/link'
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import VStackLogo from '@/components/brand/VStackLogo'
import { Container } from '@/components/primitives/Layout'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/contact'
import { PRODUCT_LINKS } from '@/lib/services'

const SOLUTIONS = [
  { label: 'Criação de sites', href: '/criacao-de-sites' },
  { label: 'Sistemas sob medida', href: '/sistemas-sob-medida' },
  { label: 'Automação de processos', href: '/automacao-de-processos' },
  { label: 'Agentes de IA', href: '/agentes-de-ia' },
  { label: 'Integração de sistemas', href: '/integracao-de-sistemas' },
  { label: 'Jogos sob encomenda', href: '/jogos' },
]

const COMPANY = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Todas as soluções', href: '/solucoes' },
  { label: 'Conteúdos', href: '/conteudos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
  { label: 'Pedir orçamento', href: '/cotacao' },
  { label: 'Envie sua dor', href: '/envie-sua-dor' },
]

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/vstack-solutions', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/vstack-solutions', Icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/vstacksolutions', Icon: Instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-deep)]">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <VStackLogo />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-7 text-[var(--text-2)]">
              Sites, sistemas sob medida, automação com IA e jogos para empresas que querem vender mais e trabalhar melhor.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-3)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Soluções" links={SOLUTIONS} />
          <FooterColumn title="Produtos" links={PRODUCT_LINKS.map(({ label, href }) => ({ label, href }))} />
          <FooterColumn title="Empresa" links={COMPANY} />

          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-3)]">Contato</p>
            <div className="space-y-3 text-[14px] text-[var(--text-2)]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 transition-colors hover:text-[var(--text-1)]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
              <a href={whatsappLink('DIAGNÓSTICO')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-[var(--text-1)]">
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                São Paulo, SP · Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-6 sm:flex-row">
          <p className="text-[12px] text-[var(--text-3)]">© {year} V-STACK SOLUTIONS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacidade" className="text-[12px] text-[var(--text-3)] hover:text-[var(--accent)]">Privacidade</Link>
            <Link href="/termos" className="text-[12px] text-[var(--text-3)] hover:text-[var(--accent)]">Termos</Link>
            <Link href="/cookies" className="text-[12px] text-[var(--text-3)] hover:text-[var(--accent)]">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-3)]">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[14px] text-[var(--text-2)] transition-colors hover:text-[var(--text-1)]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
