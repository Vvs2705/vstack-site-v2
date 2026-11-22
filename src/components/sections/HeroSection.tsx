import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/primitives/Layout'
import ProductCard from '@/components/ui/ProductCard'
import { PROOF_PRODUCTS } from '@/lib/social-proof'
import { whatsappLink } from '@/lib/contact'

// Só fatos verificáveis: prazo de retorno e orçamento gratuito já são
// compromissos do site (/cotacao); o FiscWise é produto próprio em produção.
const TRUST = ['Resposta em até 24h úteis', 'Orçamento sem compromisso', 'Criadores do FiscWise']

/**
 * Primeira dobra. Server Component: o h1 (LCP) é HTML puro, sem esperar
 * hidratação. Em 3 a 5 segundos o visitante precisa saber O QUE fazemos (h1),
 * PARA QUÊ (lede), COMO começar (WhatsApp / diagnóstico) e ver a PROVA: os
 * produtos próprios, que são o portfólio real do site.
 */
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow reveal mb-5">Sites · Sistemas · Automação · Jogos</p>

            <h1 className="text-balance text-[var(--text-1)]">
              Sites, sistemas e automação que fazem sua empresa{' '}
              <span className="text-[var(--accent)]">vender mais.</span>
            </h1>

            <p className="reveal mt-6 max-w-xl text-pretty text-[18px] leading-8 text-[var(--text-2)]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              Criamos o site que traz clientes, o sistema que organiza a operação e a automação que tira o trabalho repetido das suas mãos. Você fala direto com quem constrói, e a prova está ao lado: produtos próprios que a gente desenhou, publicou e mantém.
            </p>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
              <a
                href={whatsappLink('DIAGNÓSTICO')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[52px] w-full px-7 py-3 text-[16px] sm:w-auto"
              >
                Pedir orçamento no WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/envie-sua-dor" className="btn-secondary min-h-[52px] w-full px-7 py-3 text-[16px] sm:w-auto">
                Descrever meu problema
              </Link>
            </div>

            <ul className="reveal mt-7 flex flex-wrap gap-x-6 gap-y-2" style={{ '--reveal-delay': '240ms' } as React.CSSProperties}>
              {TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] font-medium text-[var(--text-2)]">
                  <Check className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div role="group" aria-labelledby="hero-produtos">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <p id="hero-produtos" className="eyebrow">
                Produtos próprios · nossa prova
              </p>
              <span className="text-[12px] text-[var(--text-3)]">esquemas ilustrativos das telas</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {PROOF_PRODUCTS.map((product, index) => (
                <li
                  key={product.name}
                  className="reveal"
                  style={{ '--reveal-delay': `${200 + index * 90}ms` } as React.CSSProperties}
                >
                  <ProductCard product={product} compact />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
