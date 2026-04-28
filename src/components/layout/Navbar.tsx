'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [solucoesOpen, setSolucoesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] accent-glow transition-transform group-hover:scale-110">
              <span className="font-display text-xl font-bold text-white">V</span>
            </div>
            <span className="font-display text-xl font-bold gradient-text hidden sm:block">
              V Stack Solution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/sobre"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Sobre
            </Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                onMouseEnter={() => setSolucoesOpen(true)}
                onMouseLeave={() => setSolucoesOpen(false)}
              >
                Soluções
                <ChevronDown className="h-4 w-4" />
              </button>

              {solucoesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-xl py-2"
                  onMouseEnter={() => setSolucoesOpen(true)}
                  onMouseLeave={() => setSolucoesOpen(false)}
                >
                  <Link
                    href="/solucoes#automacao"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    Automação de Processos
                  </Link>
                  <Link
                    href="/solucoes#ia"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    Inteligência Artificial
                  </Link>
                  <Link
                    href="/solucoes#integracao"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    Integração de Sistemas
                  </Link>
                  <Link
                    href="/solucoes#saas"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    Desenvolvimento SaaS
                  </Link>
                  <div className="my-1 border-t border-[var(--border)]" />
                  <Link
                    href="/solucoes#contaflow"
                    className="block px-4 py-2 text-sm text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors font-medium"
                  >
                    ContaFlow
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contato"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/envie-sua-dor" className="btn-secondary px-4 py-2 text-sm">
              Envie Sua Dor
            </Link>
            <Link href="/cotacao" className="btn-primary px-4 py-2 text-sm">
              Solicitar Cotação
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-card)]">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/sobre"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Sobre
            </Link>

            <div className="space-y-2">
              <p className="py-2 text-sm font-medium text-[var(--text-primary)]">Soluções</p>
              <Link
                href="/solucoes#automacao"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Automação de Processos
              </Link>
              <Link
                href="/solucoes#ia"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Inteligência Artificial
              </Link>
              <Link
                href="/solucoes#integracao"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Integração de Sistemas
              </Link>
              <Link
                href="/solucoes#saas"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Desenvolvimento SaaS
              </Link>
              <Link
                href="/solucoes#contaflow"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 text-sm text-[var(--accent)] font-medium transition-colors"
              >
                ContaFlow
              </Link>
            </div>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Contato
            </Link>

            <div className="pt-4 space-y-3 border-t border-[var(--border)]">
              <Link
                href="/envie-sua-dor"
                onClick={() => setIsOpen(false)}
                className="block btn-secondary px-4 py-3 text-sm text-center"
              >
                Envie Sua Dor
              </Link>
              <Link
                href="/cotacao"
                onClick={() => setIsOpen(false)}
                className="block btn-primary px-4 py-3 text-sm text-center"
              >
                Solicitar Cotação
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
