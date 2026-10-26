'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CONSENT_EVENT, CONSENT_KEY } from '@/lib/analytics'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem(CONSENT_KEY)
    if (!cookieConsent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(CONSENT_KEY, value)
    window.dispatchEvent(new Event(CONSENT_EVENT))
    setIsVisible(false)
  }

  const handleAccept = () => saveConsent('accepted')
  const handleReject = () => saveConsent('rejected')

  if (!isVisible) return null

  // Barra compacta: não pode esconder o título e os botões da primeira tela no celular.
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-4 animate-slide-up" role="region" aria-label="Aviso de cookies">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-3 shadow-[var(--shadow)] sm:flex-row sm:items-center sm:gap-4 sm:px-5">
        <p className="flex-1 text-[13px] leading-5 text-[var(--text-2)]">
          Usamos cookies essenciais e analíticos, conforme a{' '}
          <Link href="/privacidade" className="font-semibold text-[var(--accent)] hover:underline">
            LGPD
          </Link>
          .{' '}
          <Link href="/cookies" className="underline hover:text-[var(--accent)]">
            Preferências
          </Link>
        </p>
        <div className="flex gap-2">
          <button onClick={handleReject} className="btn-secondary min-h-[40px] flex-1 px-4 py-2 text-[13px] sm:flex-none">
            Só essenciais
          </button>
          <button onClick={handleAccept} className="btn-primary min-h-[40px] flex-1 px-4 py-2 text-[13px] sm:flex-none">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
