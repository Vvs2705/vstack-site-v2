import type { Metadata } from 'next'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'
import ChatWidget from '@/components/chat/ChatWidget'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section } from '@/components/primitives/Layout'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Conteúdos sobre automação, IA e sistemas',
  description:
    'Guias práticos sobre automação de processos, agentes de IA, integração de sistemas e desenvolvimento sob medida para empresas.',
  keywords: [
    'automação de processos',
    'agentes de IA',
    'integração de sistemas',
    'sistemas sob medida',
    'transformação digital',
  ],
  openGraph: {
    title: 'Conteúdos | V-STACK SOLUTIONS',
    description:
      'Guias práticos para empresas que querem reduzir retrabalho, organizar processos e usar tecnologia com mais clareza.',
    type: 'website',
  },
}

export default function ConteudosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Conteúdos</p>
              <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                Decisões melhores antes de contratar tecnologia.
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                Artigos diretos para entender quando automatizar, integrar sistemas,
                usar IA ou criar uma solução própria para a operação.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/conteudos/${article.slug}`}
                  className="group rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow)]"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                    {article.category} · {article.readingTime}
                  </p>
                  <h2 className="mt-4 font-display text-[22px] font-bold leading-tight text-[var(--text-1)] group-hover:text-[var(--accent)]">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-7 text-[var(--text-2)]">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
