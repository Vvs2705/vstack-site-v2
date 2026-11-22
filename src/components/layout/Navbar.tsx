'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import VStackLogo from '@/components/brand/VStackLogo'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { PRODUCT_LINKS, SERVICES } from '@/lib/services'
import { whatsappLink } from '@/lib/contact'

// Menu fala a língua de quem compra: serviços primeiro, produtos próprios num submenu.
type NavItem = { label: string; href: string }

const NAV_LINKS: NavItem[] = SERVICES.map((service) => ({ label: service.navLabel, href: service.href }))
const ABOUT_LINK: NavItem = { label: 'Sobre', href: '/sobre' }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()
  const isProductActive = PRODUCT_LINKS.some((link) => pathname.startsWith(link.href))

  const renderDesktopLink = (link: NavItem) => {
    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
    return (
      <li key={link.href}>
        <Link
          href={link.href}
          aria-current={isActive ? 'page' : undefined}
          className={`group relative pb-1 text-[14px] font-semibold transition-colors duration-200 ${
            isActive ? 'text-[var(--text-1)]' : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
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
  }

  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)]"
      style={{ background: 'var(--nav-blur)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-[1.01]" aria-label="V-STACK SOLUTIONS">
          <VStackLogo />
        </Link>

        <ul className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {NAV_LINKS.map(renderDesktopLink)}
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setProductsOpen(false)
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false)
            }}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((value) => !value)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 pb-1 text-[14px] font-semibold leading-[1.6] transition-colors duration-200 ${
                isProductActive ? 'text-[var(--text-1)]' : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
              }`}
            >
              Produtos
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <ul className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-2 shadow-[var(--shadow)]">
                  {PRODUCT_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setProductsOpen(false)}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--accent-muted)]"
                      >
                        <span className="block text-[14px] font-semibold text-[var(--text-1)]">{link.label}</span>
                        <span className="block text-[12px] text-[var(--text-2)]">{link.note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {renderDesktopLink(ABOUT_LINK)}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/cotacao" className="btn-primary min-h-[44px] px-5 py-2.5 text-[14px]">
            Pedir orçamento
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)]"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            {isOpen ?<X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="menu-mobile" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[var(--border)] bg-[var(--bg-card)] px-5 py-5 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {[...NAV_LINKS, ABOUT_LINK].map((link) => {
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
            <p className="px-3 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-3)]">Produtos</p>
            {PRODUCT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 py-2 text-[14px] font-semibold text-[var(--text-2)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-2 border-t border-[var(--border)] pt-4">
              <a
                href={whatsappLink('DIAGNÓSTICO')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary min-h-[48px] px-4 py-3 text-[15px]"
              >
                Pedir orçamento no WhatsApp
              </a>
              <Link href="/cotacao" onClick={() => setIsOpen(false)} className="btn-outline min-h-[48px] px-4 py-3 text-[15px]">
                Preencher formulário
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

