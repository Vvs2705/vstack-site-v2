import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-deep)] border-t border-[var(--border)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] accent-glow">
                <span className="font-display text-xl font-bold text-white">V</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-bold text-white">V-STACK</span>
                <span className="font-display text-lg font-semibold text-[var(--accent)]">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Transformamos desafios empresariais em soluções tecnológicas inovadoras através de
              automação, IA e integração de sistemas.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/vstack-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/vstack-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/vstacksolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-display text-base font-semibold text-[var(--text-primary)] mb-4">
              Soluções
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solucoes#automacao"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Automação de Processos
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#ia"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#integracao"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Integração de Sistemas
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#saas"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Desenvolvimento SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#contaflow"
                  className="text-sm text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors font-medium"
                >
                  ContaFlow
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-display text-base font-semibold text-[var(--text-primary)] mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/envie-sua-dor"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Envie Sua Dor
                </Link>
              </li>
              <li>
                <Link
                  href="/cotacao"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Solicitar Cotação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-base font-semibold text-[var(--text-primary)] mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@vstack-solutions.com.br"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  contato@vstack-solutions.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5511999999999"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-secondary)]">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)] text-center md:text-left">
              © {currentYear} V-STACK SOLUTIONS. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacidade"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
