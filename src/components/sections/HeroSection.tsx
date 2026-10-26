'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Layout'
import { HeroGlowOrb } from '@/components/ui/AnimatedIcon'
import { SERVICES } from '@/lib/services'
import { whatsappLink } from '@/lib/contact'

const EASE = [0.22, 1, 0.36, 1] as const

// Só fatos verificáveis: prazo de retorno e orçamento gratuito já são
// compromissos do site (/cotacao); o FiscWise é produto próprio em produção.
const TRUST = ['Resposta em até 24h úteis', 'Orçamento sem compromisso', 'Criadores do FiscWise']

/**
 * Primeira dobra: em 3 a 5 segundos o visitante precisa saber O QUE fazemos
 * (título), PARA QUÊ (subtítulo), COMO começar (WhatsApp) e onde clicar para
 * o serviço dele (os 4 cartões).
 */
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroGlowOrb className="absolute left-1/4 top-0 h-[30rem] w-[30rem] -translate-x-1/2 bg-[var(--accent-muted)] blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Sites · Sistemas · Automação · Jogos
            </motion.p>

            <motion.h1
              className="text-balance text-[var(--text-1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            >
              Sites, sistemas e automação que fazem sua empresa{' '}
              <span className="text-[var(--accent)]">vender mais.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-pretty text-[18px] leading-8 text-[var(--text-2)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
            >
              Criamos o site que traz clientes, o sistema que organiza a operação e a automação que tira o trabalho repetido das suas mãos. Você fala direto com quem constrói.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
            >
              <a
                href={whatsappLink('DIAGNÓSTICO')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[52px] w-full px-7 py-3 text-[16px] sm:w-auto"
              >
                Pedir orçamento no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/solucoes" className="btn-secondary min-h-[52px] w-full px-7 py-3 text-[16px] sm:w-auto">
                Ver todas as soluções
              </Link>
            </motion.div>

            <motion.ul
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] font-medium text-[var(--text-2)]">
                  <Check className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            aria-label="O que fazemos"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
          >
            {SERVICES.map(({ id, icon: Icon, title, promise, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--accent-border)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-[17px] font-bold leading-snug text-[var(--text-1)]">{title}</span>
                  <span className="mt-1.5 flex-1 text-[14px] leading-6 text-[var(--text-2)]">{promise}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)]">
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
