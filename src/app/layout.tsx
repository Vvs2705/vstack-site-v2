import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vstack-solution.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "V Stack Solution - Transformação Digital com IA e Automação",
    template: "%s | V Stack Solution",
  },
  description:
    "Especialistas em desenvolvimento de software, automação inteligente, integração de sistemas e soluções SaaS. Transforme seu negócio com tecnologia de ponta e inteligência artificial.",
  keywords: [
    "desenvolvimento de software",
    "automação inteligente",
    "inteligência artificial",
    "integração de sistemas",
    "SaaS",
    "transformação digital",
    "consultoria tecnológica",
    "API",
    "chatbots",
    "RPA",
    "ContaFlow",
  ],
  authors: [{ name: "V Stack Solution" }],
  creator: "V Stack Solution",
  publisher: "V Stack Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "V Stack Solution",
    title: "V Stack Solution - Transformação Digital com IA e Automação",
    description:
      "Especialistas em desenvolvimento de software, automação inteligente, integração de sistemas e soluções SaaS.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "V Stack Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V Stack Solution - Transformação Digital com IA e Automação",
    description:
      "Especialistas em desenvolvimento de software, automação inteligente, integração de sistemas e soluções SaaS.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Substituir após verificação no Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E2535" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
