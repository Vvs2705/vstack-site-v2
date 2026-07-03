'use client'

import { useEffect } from 'react'
import { trackWhatsAppClick } from '@/lib/analytics'

// ponytail: um listener delegado pega todo <a href*="wa.me"> do site (footer, contato,
// fiscwise, futuros) — sem instrumentar link por link. Inerte até o GA4 ter ID.
export default function WhatsAppTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (target?.closest('a[href*="wa.me"]')) {
        trackWhatsAppClick(window.location.pathname)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
