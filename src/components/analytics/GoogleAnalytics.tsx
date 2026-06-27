import Script from 'next/script'

/**
 * Google Analytics 4 (GA4) loader.
 *
 * Degrada de forma graciosa: se `NEXT_PUBLIC_GA_MEASUREMENT_ID` não estiver
 * definido (ainda não há propriedade GA4 criada na Vercel), o componente
 * retorna `null` e nada é injetado na página — não quebra build nem produção.
 *
 * Quando o ID existir, injeta o gtag.js manualmente via `next/script` com
 * strategy `afterInteractive` (o pacote `@next/third-parties` não está
 * instalado neste projeto). A camada de eventos em `src/lib/analytics.ts`
 * despacha para o `window.gtag` que este script registra.
 *
 * TODO (Vinicius): criar a propriedade GA4 e definir
 * `NEXT_PUBLIC_GA_MEASUREMENT_ID` (ex.: "G-XXXXXXXXXX") nas variáveis de
 * ambiente da Vercel para ativar a coleta.
 */
export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // No-op gracioso enquanto não existe propriedade GA4 / env configurada.
  if (!measurementId) {
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
