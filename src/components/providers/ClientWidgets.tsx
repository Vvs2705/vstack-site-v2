'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics'
import { whatsappLink } from '@/lib/contact'

// Widgets that require browser APIs — loaded client-side only
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false })

const CTA_PATHS = ['/cotacao', '/contato', '/envie-sua-dor']

// ponytail: um listener só mede CTA e WhatsApp do site inteiro (home, rodapé,
// ProductLanding...) sem transformar Server Components em Client Components.
// CTA = link para página de conversão; rótulo = data-cta ou o texto do link.
function trackClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.('a')
  if (!link) return

  const area = link.dataset.area || (link.closest('footer') ? 'footer' : link.closest('nav, header') ? 'navbar' : 'page')
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
      <a
        href={whatsappLink('DIAGNÓSTICO')}
        target="_blank"
        rel="noopener noreferrer"
        data-area="floating"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-[var(--shadow)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8f4e]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.23 9.41-9.42 9.41zm8.02-17.43A11.3 11.3 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.64-1.48a11.3 11.3 0 0 0 5.79 1.48h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
        </svg>
      </a>
      <CookieBanner />
    </>
  )
}
