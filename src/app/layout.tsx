import type { Metadata } from 'next'
import { Geist, JetBrains_Mono, Syne } from 'next/font/google'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import VercelAnalytics from '@/components/analytics/VercelAnalytics'
import RootLayoutWrapper from '@/components/providers/RootLayoutWrapper'
import JsonLd from '@/components/seo/JsonLd'
import { OG_DEFAULTS, organizationJsonLd, SITE_URL, websiteJsonLd } from '@/lib/structured-data'
import { cn } from '@/lib/utils'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  title: {
    default: 'V-STACK SOLUTIONS | Sites, sistemas, automação e jogos',
    template: '%s | V-STACK SOLUTIONS',
  },
  description:
    'Criação de sites, sistemas sob medida, automação com IA e jogos sob encomenda para empresas que querem vender mais e trabalhar melhor. Orçamento pelo WhatsApp.',
  keywords: [
    'criação de sites',
    'site profissional',
    'desenvolvimento de jogos',
    'desenvolvimento de software',
    'automação de processos',
    'inteligência artificial para empresas',
    'integração de sistemas',
    'sistemas sob medida',
    'consultoria tecnológica',
    'agentes de IA',
    'automação financeira',
    'FiscWise',
  ],
  authors: [{ name: 'V-STACK SOLUTIONS' }],
  creator: 'V-STACK SOLUTIONS',
  publisher: 'V-STACK SOLUTIONS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...OG_DEFAULTS,
    type: 'website',
    title: 'V-STACK SOLUTIONS | Sites, sistemas, automação e jogos',
    description:
      'Sites que trazem clientes, sistemas que organizam a operação, automação com IA e jogos sob encomenda.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V-STACK SOLUTIONS | Sites, sistemas, automação e jogos',
    description:
      'Sites que trazem clientes, sistemas que organizam a operação, automação com IA e jogos sob encomenda.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        'h-full antialiased font-sans',
        syne.variable,
        jetbrainsMono.variable,
        geist.variable
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D1422" />
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <RootLayoutWrapper>
          {children}
        </RootLayoutWrapper>
        <VercelAnalytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
