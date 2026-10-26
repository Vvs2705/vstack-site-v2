import type { Article } from '@/lib/articles'
import type { SeoServicePage } from '@/lib/seo-service-pages'

// Host canônico fixo (não vem do env): o NEXT_PUBLIC_SITE_URL da Vercel apontava para o
// domínio sem www, que redireciona, e 31 páginas herdavam canonical/og:url errados.
export const SITE_URL = 'https://www.vstack-solutions.com.br'
const siteUrl = SITE_URL

// O Next não faz merge profundo do openGraph: a página que define o seu perde url, imagem
// e siteName da raiz. Toda página espalha isto antes dos próprios campos.
export const OG_DEFAULTS = {
  locale: 'pt_BR',
  url: './', // resolve por página, como o canonical
  siteName: 'V-STACK SOLUTIONS',
  images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'V-STACK SOLUTIONS' }],
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'V-STACK SOLUTIONS',
    description:
      'Criação de sites, sistemas sob medida, automação com IA e jogos sob encomenda para empresas.',
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

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
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
