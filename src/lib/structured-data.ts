import type { Article } from '@/lib/articles'
import type { SeoServicePage } from '@/lib/seo-service-pages'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vstack-solutions.com.br'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'V-STACK SOLUTIONS',
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    image: `${siteUrl}/og-image.png`,
    email: 'vinicius@vstack-solutions.com.br',
    telephone: '+55-11-97335-8775',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://linkedin.com/company/vstack-solutions',
      'https://github.com/vstack-solutions',
      'https://instagram.com/vstacksolutions',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'V-STACK SOLUTIONS',
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'pt-BR',
  }
}

export function serviceJsonLd(page: SeoServicePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/${page.slug}#service`,
    name: page.eyebrow,
    serviceType: page.eyebrow,
    description: page.metaDescription,
    url: `${siteUrl}/${page.slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/cotacao`,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'BRL',
      },
    },
  }
}

export function articleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteUrl}/conteudos/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: `${siteUrl}/conteudos/${article.slug}`,
    image: `${siteUrl}/og-image.png`,
    author: {
      '@id': `${siteUrl}/#organization`,
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'pt-BR',
  }
}
