'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'ContaFlow', href: '/solucoes#contaflow' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <svg className="h-8 w-8" viewBox="0 0 80 70" fill="none" aria-hidden="true">
              <polygon points="0,0 20,0 40,40 60,0 80,0 40,70" fill="#2D3748" />
              <polygon points="20,0 40,0 40,40" fill="#3D4B61" />
              <polygon points="40,0 60,0 40,40" fill="#252D3D" />
              <polygon points="34,36 40,48 46,36 40,40" fill="#F07028" />
            </svg>
            <span className="font-display text-[15px] font-bold tracking-[0.07em] text-[var(--text-primary)]">
              V-STACK <span className="text-[var(--accent)]">SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium tracking-[0.02em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contato"
              className="btn-primary px-5 py-2 text-[13px] font-medium"
            >
              Fale conosco
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-card)]">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[var(--border)]">
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="block btn-primary px-4 py-2.5 text-[13px] text-center font-medium"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
