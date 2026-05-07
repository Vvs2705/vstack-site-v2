'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Package, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

interface NavLink {
  label: string
  href: string
  accent?: boolean
}

const NAV_LINKS: NavLink[] = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'ContaFlow', href: '/solucoes#contaflow', accent: true },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [mounted] = useState(true)
  const { theme, setTheme } = useTheme()
  const { user, isAuthenticated, isLoading, signInWithGoogle, signOut } = useAuth()

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
                  className={`text-[13px] font-medium tracking-[0.02em] transition-colors ${
                    link.accent
                      ? 'text-[var(--accent)] font-semibold hover:text-[var(--accent-light)]'
                      : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + auth */}
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

            {/* Auth section */}
            {!isLoading && (
              <>
                {isAuthenticated && user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen((v) => !v)}
                      className="flex items-center gap-2 h-8 px-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent-border)] transition-colors"
                      aria-label="Menu do usuário"
                      aria-expanded={isUserMenuOpen}
                      aria-haspopup="menu"
                    >
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={22}
                          height={22}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-[22px] w-[22px] rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
                          <span className="text-[10px] font-bold text-[var(--accent)]">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="text-[12px] font-medium text-[var(--text-1)] max-w-[100px] truncate">
                        {user.name.split(' ')[0]}
                      </span>
                      <ChevronDown className="h-3 w-3 text-[var(--text-3)]" aria-hidden="true" />
                    </button>

                    {isUserMenuOpen && (
                      <>
                        {/* Backdrop */}
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsUserMenuOpen(false)}
                          aria-hidden="true"
                        />
                        {/* Dropdown */}
                        <div
                          role="menu"
                          className="absolute right-0 top-10 z-20 w-48 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-[var(--shadow-sm)] py-1.5 overflow-hidden"
                        >
                          <div className="px-3 py-2 border-b border-[var(--border)]">
                            <p className="text-[12px] font-medium text-[var(--text-1)] truncate">
                              {user.name}
                            </p>
                            <p className="text-[11px] text-[var(--text-3)] truncate">{user.email}</p>
                          </div>
                          <Link
                            href="/pedidos"
                            role="menuitem"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-2)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
                          >
                            <Package className="h-3.5 w-3.5" aria-hidden="true" />
                            Meus Pedidos
                          </Link>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false)
                              signOut()
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-2)] hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                            Sair
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/envie-sua-dor"
                      className="text-[13px] font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors px-2 py-1"
                    >
                      Envie Sua Dor
                    </Link>
                    <button
                      onClick={signInWithGoogle}
                      className="text-[13px] font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors px-2 py-1"
                    >
                      Entrar
                    </button>
                    <Link
                      href="/cotacao"
                      className="btn-primary px-5 py-2 text-[13px] font-medium"
                    >
                      Solicitar Cotação
                    </Link>
                  </>
                )}
              </>
            )}
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
              aria-expanded={isOpen}
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
                className={`block py-2.5 text-[13px] font-medium transition-colors ${
                  link.accent
                    ? 'text-[var(--accent)] hover:text-[var(--accent-light)]'
                    : 'text-[var(--text-2)] hover:text-[var(--accent)]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-[var(--border)] space-y-2">
              {isAuthenticated && user ? (
                <>
                  {/* User info */}
                  <div className="flex items-center gap-2.5 py-2">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={28}
                        height={28}
                        className="rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
                        <span className="text-[11px] font-bold text-[var(--accent)]">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-[var(--text-1)] truncate">{user.name}</p>
                      <p className="text-[11px] text-[var(--text-3)] truncate">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    href="/pedidos"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 block btn-outline px-4 py-2.5 text-[13px] text-center font-medium"
                  >
                    <Package className="h-4 w-4" aria-hidden="true" />
                    Meus Pedidos
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      signOut()
                    }}
                    className="w-full text-[13px] font-medium text-red-600 hover:text-red-700 py-2.5 transition-colors"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/envie-sua-dor"
                    onClick={() => setIsOpen(false)}
                    className="block btn-outline px-4 py-2.5 text-[13px] text-center font-medium"
                  >
                    Envie Sua Dor
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      signInWithGoogle()
                    }}
                    className="block w-full btn-outline px-4 py-2.5 text-[13px] text-center font-medium"
                  >
                    Entrar com Google
                  </button>
                  <Link
                    href="/cotacao"
                    onClick={() => setIsOpen(false)}
                    className="block btn-primary px-4 py-2.5 text-[13px] text-center font-medium"
                  >
                    Solicitar Cotação
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
