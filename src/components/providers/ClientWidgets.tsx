'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics'

// Widgets that require browser APIs — loaded client-side only
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false })

const CTA_PATHS = ['/cotacao', '/contato', '/envie-sua-dor']

// ponytail: um listener só mede CTA e WhatsApp do site inteiro (home, rodapé,
// ProductLanding...) sem transformar Server Components em Client Components.
// CTA = link para página de conversão; rótulo = data-cta ou o texto do link.
function trackClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.('a')
  if (!link) return

  const area = link.closest('footer') ? 'footer' : link.closest('nav, header') ? 'navbar' : 'page'
  const page = window.location.pathname

  if (/wa\.me|whatsapp\.com/.test(link.href)) {
    trackWhatsAppClick(area, { page })
    return
  }

  const url = new URL(link.href, window.location.href)
  if (url.origin !== window.location.origin || !CTA_PATHS.includes(url.pathname)) return

  const label = link.dataset.cta || link.textContent?.trim().slice(0, 60) || url.pathname
  trackCTAClick(label, area, { page, href: url.pathname + url.search })
}

export default function ClientWidgets() {
  useEffect(() => {
    document.addEventListener('click', trackClick)
    return () => document.removeEventListener('click', trackClick)
  }, [])

  return (
    <>
      <CookieBanner />
    </>
  )
}
