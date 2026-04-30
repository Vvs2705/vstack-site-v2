import type { NextConfig } from 'next'

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // X-Frame-Options removido - conflita com frame-ancestors no CSP
  // Builder.io precisa carregar o site em iframe
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://cdn.builder.io",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.builder.io",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob: https://cdn.builder.io https://*.builder.io",
      "connect-src 'self' https://api.openai.com https://vitals.vercel-insights.com https://cdn.builder.io https://*.builder.io",
      // Permitir que Builder.io carregue o site em iframe
      "frame-ancestors 'self' https://*.builder.io https://builder.io https://preview.builder.codes",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
