'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import VStackLogo from '@/components/brand/VStackLogo'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'FiscWise', href: '/fiscwise', accent: true },
  { label: 'SessãoInk', href: '/sessaoink' },
  { label: 'Fretamento Pro', href: '/fretamento-pro' },
  { label: 'ERP-V', href: '/erp-v' },
  { label: 'Conteúdos', href: '/conteudos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)]"
      style={{ background: 'var(--nav-blur)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-[1.01]" aria-label="V-STACK SOLUTIONS">
          <VStackLogo />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative pb-1 text-[13px] font-semibold transition-colors duration-200 ${
                    link.accent
                      ? isActive
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--accent)] hover:text-[var(--accent-light)]'
                      : isActive
                        ? 'text-[var(--text-1)]'
                        : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[var(--accent)] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/cotacao" className="btn-primary min-h-[44px] px-5 py-2.5 text-[13px]">
            Solicitar diagnóstico
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)]"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ?<X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-card)] px-5 py-5 md:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center rounded-xl px-3 py-3 text-[14px] font-semibold transition-colors ${
                    isActive
                      ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
                      : 'text-[var(--text-2)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="grid gap-2 border-t border-[var(--border)] pt-4">
              <Link href="/envie-sua-dor" onClick={() => setIsOpen(false)} className="btn-outline min-h-[44px] px-4 py-3 text-[14px]">
                Enviar minha dor
              </Link>
              <Link href="/cotacao" onClick={() => setIsOpen(false)} className="btn-primary min-h-[44px] px-4 py-3 text-[14px]">
                Solicitar diagnóstico
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

