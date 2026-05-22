'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/primitives/Layout'

export default function SolucoesHero() {
  return (
    <Section spacing="xl" className="border-b border-[var(--border)]">
      <Container>
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            O que entregamos
          </motion.p>

          <motion.h1
            className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[56px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            Soluções para tirar a operação do improviso.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            Atuamos onde há retrabalho, sistemas desconectados, dados pouco confiáveis e decisões lentas. O objetivo é simples: transformar processo em software útil.
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}
