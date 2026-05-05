'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'ContaFlow', href: '/solucoes#contaflow' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const isDark = theme === 'dark'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)]"
      style={{ background: 'var(--nav-blur)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <svg className="h-8 w-8 transition-transform group-hover:scale-105" viewBox="0 0 80 70" fill="none" aria-hidden="true">
              <polygon points="0,0 20,0 40,40 60,0 80,0 40,70" fill="#2D3748" />
              <polygon points="20,0 40,0 40,40" fill="#3D4B61" />
              <polygon points="40,0 60,0 40,40" fill="#252D3D" />
              <polygon points="34,36 40,48 46,36 40,40" fill="#F07028" />
            </svg>
            <span className="font-display text-[15px] font-bold tracking-[0.07em] text-[var(--text-1)]">
              V-STACK <span className="text-[var(--accent)]">SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium tracking-[0.02em] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Alternar tema"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-2)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors"
              >
                {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            )}
            <Link
              href="/contato"
              className="btn-primary px-5 py-2 text-[13px] font-medium"
            >
              Fale conosco
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Alternar tema"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-2)]"
              >
                {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
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
                className="block py-2.5 text-[13px] font-medium text-[var(--text-2)] hover:text-[var(--accent)] transition-colors"
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
