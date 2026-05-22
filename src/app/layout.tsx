import type { Metadata } from 'next'
import { DM_Sans, Geist, JetBrains_Mono, Syne } from 'next/font/google'
import VercelAnalytics from '@/components/analytics/VercelAnalytics'
import RootLayoutWrapper from '@/components/providers/RootLayoutWrapper'
import JsonLd from '@/components/seo/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/structured-data'
import { cn } from '@/lib/utils'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vstack-solutions.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'V-STACK SOLUTIONS - Automação, IA e Sistemas Sob Medida',
    template: '%s | V-STACK SOLUTIONS',
  },
  description:
    'Automação de processos, agentes de IA, integrações e sistemas sob medida para empresas que precisam reduzir retrabalho, organizar a operação e escalar com tecnologia.',
  keywords: [
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
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'V-STACK SOLUTIONS',
    title: 'V-STACK SOLUTIONS - Automação, IA e Sistemas Sob Medida',
    description:
      'Automação de processos, agentes de IA, integrações e sistemas sob medida para empresas que precisam escalar com clareza operacional.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'V-STACK SOLUTIONS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V-STACK SOLUTIONS - Automação, IA e Sistemas Sob Medida',
    description:
      'Automação de processos, agentes de IA, integrações e sistemas sob medida para empresas que precisam escalar com clareza operacional.',
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
        dmSans.variable,
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
      </body>
    </html>
  )
}
