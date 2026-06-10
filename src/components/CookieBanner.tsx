'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('vstack-cookie-consent')
    if (!cookieConsent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('vstack-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('vstack-cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="card-vstack relative shadow-2xl !p-4 sm:!p-6">
          <button
            onClick={handleReject}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pr-10">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
              <Cookie className="h-6 w-6 text-[var(--accent)]" />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1">
                  Cookies e Privacidade
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Usamos cookies essenciais e analíticos, conforme a{' '}
                  <Link href="/privacidade" className="text-[var(--accent)] hover:underline">
                    LGPD
                  </Link>
                  .{' '}
                  <Link
                    href="/cookies"
                    className="text-[var(--text-secondary)] underline hover:text-[var(--accent)] transition-colors"
                  >
                    Gerenciar preferências
                  </Link>
                </p>
              </div>

              <div className="flex flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="btn-primary flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium"
                >
                  Aceitar todos
                </button>
                <button
                  onClick={handleReject}
                  className="btn-secondary flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium"
                >
                  Apenas essenciais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
