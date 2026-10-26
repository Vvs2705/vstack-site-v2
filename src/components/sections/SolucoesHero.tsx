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
            className="text-balance text-[var(--text-1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            Sites, sistemas, automação e jogos para a sua empresa crescer.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-2)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            Do site que traz clientes ao sistema que organiza a operação: escolha a frente que resolve o seu problema hoje e evolua a partir dela.
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}
