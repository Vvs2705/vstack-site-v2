'use client'

import Script from 'next/script'
import { useSyncExternalStore } from 'react'
import { CONSENT_EVENT, CONSENT_KEY } from '@/lib/analytics'

/**
 * Google Analytics 4 (GA4) loader.
 *
 * Só injeta o gtag.js quando as duas condições valem:
 *   1. `NEXT_PUBLIC_GA_MEASUREMENT_ID` está definido na Vercel;
 *   2. o visitante clicou em "Aceitar todos" no CookieBanner (LGPD).
 *
 * O aceite carrega o GA na hora, sem recarregar a página: o banner dispara
 * `CONSENT_EVENT`. A camada de eventos em `src/lib/analytics.ts` despacha
 * para o `window.gtag` que este script registra.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

function hasConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const consented = useSyncExternalStore(subscribe, hasConsent, () => false)

  if (!measurementId || !consented) {
    return null
  }

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}
