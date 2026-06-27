import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import { Container, Section } from '@/components/primitives/Layout'
import { breadcrumbList } from '@/lib/structured-data'
import { comparativos } from '@/lib/comparativos'

export const metadata: Metadata = {
  title: 'Comparativos de sistemas e ERPs',
  description:
    'Comparativos honestos entre os produtos da V-STACK e as alternativas do mercado: FiscWise para contadores, SessãoInk para tatuadores e ERP sob medida vs. ERP pronto.',
  keywords: [
    'comparativo de sistemas',
    'sistema para escritório contábil',
    'sistema para tatuador',
    'erp sob medida vs erp pronto',
    'FiscWise',
    'SessãoInk',
    'ERP-V',
  ],
  alternates: {
    canonical: '/comparativos',
  },
  openGraph: {
    title: 'Comparativos | V-STACK SOLUTIONS',
    description:
      'Comparativos honestos para decidir entre os produtos da V-STACK e as alternativas do mercado, com o veredito de quando cada um faz sentido.',
    type: 'website',
  },
}

const breadcrumbJsonLd = breadcrumbList([
  { name: 'Início', url: '/' },
  { name: 'Comparativos', url: '/comparativos' },
])

export default function ComparativosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <JsonLd data={breadcrumbJsonLd} />

        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <nav
                aria-label="Trilha de navegação"
                className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
              >
                <Link href="/" className="text-[var(--text-3)] hover:text-[var(--accent)]">
                  Início
                </Link>
                <span aria-hidden className="text-[var(--text-3)]">›</span>
                <span className="text-[var(--text-3)]">Comparativos</span>
              </nav>
              <p className="eyebrow mb-4">Comparativos</p>
              <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]">
                Comparativos honestos antes de decidir.
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]">
                Como os produtos da V-STACK se posicionam diante das alternativas do
                mercado — com critérios claros e o veredito honesto de quando cada
                opção faz (ou não) mais sentido para a sua operação.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <ul className="grid list-none gap-5 p-0 md:grid-cols-3">
              {comparativos.map((comparativo) => (
                <li key={comparativo.slug}>
                  <Link
                    href={`/comparativos/${comparativo.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow)]"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {comparativo.eyebrow}
                    </p>
                    <h2 className="mt-4 font-display text-[22px] font-bold leading-tight text-[var(--text-1)] group-hover:text-[var(--accent)]">
                      {comparativo.heading}
                    </h2>
                    <p className="mt-4 flex-1 text-[14px] leading-7 text-[var(--text-2)]">
                      {comparativo.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]">
                      Ver comparativo
                      <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
