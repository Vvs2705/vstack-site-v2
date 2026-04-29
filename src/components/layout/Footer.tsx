import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react'

const SOLUCOES = [
  { label: 'Automação de Processos', href: '/solucoes#automacao' },
  { label: 'Inteligência Artificial', href: '/solucoes#ia' },
  { label: 'Integração de Sistemas', href: '/solucoes#integracao' },
  { label: 'Desenvolvimento SaaS', href: '/solucoes#saas' },
  { label: 'ContaFlow', href: '/solucoes#contaflow', accent: true },
]

const EMPRESA = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
  { label: 'Envie Sua Dor', href: '/envie-sua-dor' },
  { label: 'Solicitar Cotação', href: '/cotacao' },
]

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/vstack-solutions', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/vstack-solutions', Icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/vstacksolutions', Icon: Instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-deep)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <svg className="h-8 w-8 flex-shrink-0" viewBox="0 0 80 70" fill="none" aria-hidden="true">
                <polygon points="0,0 20,0 40,40 60,0 80,0 40,70" fill="#2D3748" />
                <polygon points="20,0 40,0 40,40" fill="#3D4B61" />
                <polygon points="40,0 60,0 40,40" fill="#252D3D" />
                <polygon points="34,36 40,48 46,36 40,40" fill="#F07028" />
              </svg>
              <span className="font-display text-[14px] font-bold tracking-[0.07em] text-[var(--text-primary)]">
                V-STACK <span className="text-[var(--accent)]">SOLUTIONS</span>
              </span>
            </Link>

            <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-[220px]">
              Transformamos desafios empresariais em soluções tecnológicas através de automação, IA e integração.
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
              Soluções
            </p>
            <ul className="space-y-2.5">
              {SOLUCOES.map(({ label, href, accent }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[13px] transition-colors ${
                      accent
                        ? 'text-[var(--accent)] hover:text-[var(--accent-light)] font-medium'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
              Empresa
            </p>
            <ul className="space-y-2.5">
              {EMPRESA.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@vstack-solutions.com.br"
                  className="flex items-start gap-2.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[var(--accent)] flex-shrink-0 mt-px" />
                  contato@vstack-solutions.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-2.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[var(--accent)] flex-shrink-0" />
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-[var(--text-muted)]">
                <MapPin className="h-4 w-4 text-[var(--accent)] flex-shrink-0 mt-px" />
                São Paulo, SP · Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            © {year} V-STACK SOLUTIONS · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacidade', href: '/privacidade' },
              { label: 'Termos de Uso', href: '/termos' },
              { label: 'Cookies', href: '/cookies' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
