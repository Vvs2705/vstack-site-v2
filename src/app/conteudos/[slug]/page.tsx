import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import { Container, Section } from '@/components/primitives/Layout'
import { articles, getArticle } from '@/lib/articles'
import { articleJsonLd } from '@/lib/structured-data'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vstack-solutions.com.br'

// Breadcrumb definido localmente (Home › Conteúdos › {artigo}) para não acoplar
// esta página a um helper compartilhado.
function buildBreadcrumbJsonLd(article: { title: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conteúdos',
        item: `${SITE_URL}/conteudos`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/conteudos/${article.slug}`,
      },
    ],
  }
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [article.category, 'V-STACK SOLUTIONS', 'automação', 'inteligência artificial'],
    alternates: {
      canonical: `/conteudos/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | V-STACK SOLUTIONS`,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <JsonLd data={articleJsonLd(article)} />
        <JsonLd data={buildBreadcrumbJsonLd(article)} />

        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container size="lg">
            <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-2 text-[13px] font-semibold">
              <Link href="/" className="text-[var(--text-3)] hover:text-[var(--accent)]">
                Início
              </Link>
              <span aria-hidden className="text-[var(--text-3)]">›</span>
              <Link href="/conteudos" className="text-[var(--accent)] hover:text-[var(--accent-light)]">
                Conteúdos
              </Link>
              <span aria-hidden className="text-[var(--text-3)]">›</span>
              <span className="text-[var(--text-3)]">{article.title}</span>
            </nav>
            <p className="eyebrow mt-6">{article.category} · {article.readingTime}</p>
            <h1 className="mt-4 max-w-4xl font-display text-balance text-[36px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[54px]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[var(--text-2)]">
              {article.hero}
            </p>
          </Container>
        </Section>

        <Section>
          <Container size="lg">
            <article className="grid gap-10 lg:grid-cols-[1fr_280px]">
              <div className="space-y-10">
                {article.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--text-1)]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-[16px] leading-8 text-[var(--text-2)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="h-fit rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-3)]">
                  Próximo passo
                </p>
                <div className="mt-4 grid gap-3">
                  {article.relatedLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="btn-outline px-4 py-3 text-center text-[13px]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </aside>
            </article>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
