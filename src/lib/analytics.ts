import { track } from '@vercel/analytics/server'
import { track as trackClient } from '@vercel/analytics'

type AnalyticsPrimitive = string | number | boolean | null | undefined
type AnalyticsProperties = Record<string, AnalyticsPrimitive>

/**
 * Server-side conversion tracking (Vercel Analytics).
 * Mantido para uso em Server Actions / route handlers.
 */
export async function trackConversion(name: string, properties?: AnalyticsProperties) {
  try {
    await track(name, properties)
  } catch (error) {
    console.warn('[ANALYTICS TRACK ERROR]', error)
  }
}

// ---------------------------------------------------------------------------
// Camada de eventos client-side
// ---------------------------------------------------------------------------
//
// Despacha CADA evento para dois destinos, de forma defensiva:
//   1. gtag (GA4) — só se `window.gtag` existir (depende de
//      NEXT_PUBLIC_GA_MEASUREMENT_ID; ver GoogleAnalytics.tsx).
//   2. Vercel Analytics (client) — sempre que estiver no browser.
//
// Tudo é no-op silencioso fora do browser ou quando o destino não existe,
// então pode ser chamado com segurança a partir de qualquer client component.

type GtagFn = (
  command: 'event' | 'config' | 'js' | 'set',
  targetOrName: string | Date,
  params?: Record<string, AnalyticsPrimitive>
) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

/** Sanitiza props removendo `undefined`/`null` para os destinos não reclamarem. */
function cleanParams(params?: AnalyticsProperties): AnalyticsProperties {
  if (!params) return {}
  const out: AnalyticsProperties = {}
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      out[key] = value
    }
  }
  return out
}

/**
 * Evento genérico. Use os helpers tipados abaixo sempre que possível;
 * este é a base para casos não cobertos.
 */
export function trackEvent(name: string, params?: AnalyticsProperties): void {
  if (typeof window === 'undefined') return

  const safeParams = cleanParams(params)

  // GA4 (gtag) — defensivo: só dispara se o script GA4 carregou.
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, safeParams)
    }
  } catch (error) {
    console.warn('[ANALYTICS GTAG ERROR]', error)
  }

  // Vercel Analytics (client).
  try {
    trackClient(name, safeParams)
  } catch (error) {
    console.warn('[ANALYTICS VERCEL ERROR]', error)
  }
}

/** Clique em um CTA (botão/link de ação). */
export function trackCTAClick(label: string, location: string, params?: AnalyticsProperties): void {
  trackEvent('cta_click', { label, location, ...cleanParams(params) })
}

/** Envio bem-sucedido de formulário (com produto/projeto quando houver). */
export function trackFormSubmit(form: string, params?: AnalyticsProperties): void {
  trackEvent('form_submit', { form, ...cleanParams(params) })
}

/** Clique em link de WhatsApp. */
export function trackWhatsAppClick(location: string, params?: AnalyticsProperties): void {
  trackEvent('whatsapp_click', { location, ...cleanParams(params) })
}

/** Seleção de um plano de um produto (ex.: pricing de SessãoInk, Fretamento Pro, ERP-V). */
export function trackPlanSelect(plan: string, product: string, params?: AnalyticsProperties): void {
  trackEvent('plan_select', { plan, product, ...cleanParams(params) })
}
