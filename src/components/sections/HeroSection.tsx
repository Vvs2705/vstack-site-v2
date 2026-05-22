'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Layout'
import { HeroGlowOrb } from '@/components/ui/AnimatedIcon'

const SOLUTIONS = [
  { label: 'Automação', desc: 'Elimine retrabalho manual' },
  { label: 'Inteligência Artificial', desc: 'Decisões mais inteligentes' },
  { label: 'Integração de Sistemas', desc: 'Operação conectada' },
  { label: 'Sistemas Sob Medida', desc: 'Tech customizada pra você' },
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroGlowOrb className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 bg-[var(--accent-muted)] blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[rgba(45,55,72,0.16)] blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)] sm:px-3.5 sm:py-2 sm:text-[11px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            V-STACK SOLUTIONS
          </motion.div>

          {/* Main headline - addresses the pain point */}
          <motion.h1
            className="max-w-4xl font-display text-balance leading-[1.08] tracking-[-0.025em] text-[var(--text-1)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            Sua operação gasta tempo demais com retrabalho?<br />Nós resolvemos isso.
          </motion.h1>

          {/* Subheading - the solution promise */}
          <motion.p
            className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[var(--text-2)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            Automação, IA, integração de sistemas e desenvolvimento sob medida. <strong>Tudo</strong> para reduzir retrabalho, organizar sua operação e permitir que você escale com clareza.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="sm:flex-none">
              <Link href="/solucoes" className="btn-primary inline-flex min-h-[44px] w-full px-6 py-3 text-[14px] sm:w-auto">
                Entender nossas soluções
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="sm:flex-none">
              <Link href="/cotacao" className="btn-secondary inline-flex min-h-[44px] w-full px-6 py-3 text-[14px] sm:w-auto">
                Solicitar diagnóstico
              </Link>
            </motion.div>
          </motion.div>

          {/* Solutions grid - what we offer */}
          <motion.div
            className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            {SOLUTIONS.map((solution, i) => (
              <motion.div
                key={solution.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-4 hover:border-[var(--accent-border)] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
              >
                <strong className="block font-display text-base font-bold text-[var(--text-1)]">
                  {solution.label}
                </strong>
                <span className="mt-1 block text-[13px] text-[var(--text-2)]">
                  {solution.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust signal - case study teaser */}
          <motion.div
            className="mt-16 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-3">Case FiscWise</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-1)] mb-2">
              De 5 dias fechando mês a 1 dia. Sem erros.
            </h3>
            <p className="text-[var(--text-2)]">
              Um cliente reduziu o tempo de fechamento mensal de 5 dias para 1, eliminando erros manuais e economizando R$ 18k/mês em folha. Tudo com automação financeira.
            </p>
            <Link href="/fiscwise" className="mt-4 inline-flex items-center text-[var(--accent)] font-semibold text-sm hover:gap-3 gap-2 transition-all">
              Ver case completo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
