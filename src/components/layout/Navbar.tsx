'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Package, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import VStackLogo from '@/components/brand/VStackLogo'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'FiscWise', href: '/fiscwise', accent: true },
  { label: 'Conteúdos', href: '/conteudos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, isAuthenticated, isLoading, signInWithGoogle, signOut } = useAuth()
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

        <ul className="hidden items-center gap-8 md:flex">
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
          {!isLoading && (
            isAuthenticated && user ?(
              <UserMenu
                user={user}
                isOpen={isUserMenuOpen}
                onToggle={() => setIsUserMenuOpen((value) => !value)}
                onClose={() => setIsUserMenuOpen(false)}
                onSignOut={signOut}
              />
            ) : (
              <>
                <button
                  onClick={signInWithGoogle}
                  className="flex h-11 items-center px-3 text-[13px] font-semibold text-[var(--text-2)] transition-colors hover:text-[var(--text-1)]"
                >
                  Entrar
                </button>
                <Link href="/cotacao" className="btn-primary min-h-[44px] px-5 py-2.5 text-[13px]">
                  Solicitar diagnóstico
                </Link>
              </>
            )
          )}
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

interface UserMenuProps {
  user: { name: string; email: string; image?: string | null }
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  onSignOut: () => void
}

function UserMenu({ user, isOpen, onToggle, onClose, onSignOut }: UserMenuProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex h-11 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-2.5 transition-colors hover:border-[var(--accent-border)]"
        aria-label="Menu do usuário"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {user.image ?(
          <Image src={user.image} alt={user.name} width={24} height={24} className="rounded-full object-cover" />
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[10px] font-bold text-[var(--accent)]">
            {user.name.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="max-w-[110px] truncate text-[12px] font-semibold text-[var(--text-1)]">{user.name.split(' ')[0]}</span>
        <ChevronDown className="h-3 w-3 text-[var(--text-3)]" />
      </button>

      {isOpen && (
        <>
          <button className="fixed inset-0 z-10 cursor-default" onClick={onClose} aria-label="Fechar menu" />
          <div role="menu" className="absolute right-0 top-11 z-20 w-52 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] py-2 shadow-[var(--shadow-sm)]">
            <div className="border-b border-[var(--border)] px-3 pb-3 pt-1">
              <p className="truncate text-[12px] font-semibold text-[var(--text-1)]">{user.name}</p>
              <p className="truncate text-[11px] text-[var(--text-3)]">{user.email}</p>
            </div>
            <Link href="/pedidos" role="menuitem" onClick={onClose} className="flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-[var(--text-2)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]">
              <Package className="h-4 w-4" />
              Meus pedidos
            </Link>
            <button
              role="menuitem"
              onClick={() => {
                onClose()
                onSignOut()
              }}
              className="flex w-full items-center gap-2.5 px-3 py-2.5 text-[13px] text-[var(--text-2)] hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </>
      )}
    </div>
  )
}
