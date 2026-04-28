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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="card-vstack relative shadow-2xl">
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-start gap-4 pr-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
              <Cookie className="h-6 w-6 text-[var(--accent)]" />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1">
                  Cookies e Privacidade
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Utilizamos cookies essenciais para garantir o funcionamento adequado do site e cookies
                  analíticos para melhorar sua experiência. Seus dados são tratados conforme a{' '}
                  <Link href="/privacidade" className="text-[var(--accent)] hover:underline">
                    LGPD
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleAccept}
                  className="btn-primary px-6 py-2.5 text-sm font-medium"
                >
                  Aceitar Todos
                </button>
                <button
                  onClick={handleReject}
                  className="btn-secondary px-6 py-2.5 text-sm font-medium"
                >
                  Apenas Essenciais
                </button>
                <Link
                  href="/cookies"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-center sm:text-left"
                >
                  Gerenciar Preferências
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
