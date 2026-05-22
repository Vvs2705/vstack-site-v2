'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Section } from '@/components/primitives/Layout'

interface CTASectionProps {
  headline?: string
  description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

export default function CTASection({
  headline = 'Pronto para transformar sua operação?',
  description = 'Conte onde a operação trava. Em até 24 horas úteis, retornamos com uma leitura técnica e um caminho possível de implementação.',
  ctaPrimaryLabel = 'Solicitar diagnóstico',
  ctaPrimaryHref = '/cotacao',
  ctaSecondaryLabel = 'Enviar minha dor',
  ctaSecondaryHref = '/envie-sua-dor',
}: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section spacing="xl" className="relative isolate overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--accent-muted),transparent_34rem)]" />

      <Container size="md">
        <div className="text-center" ref={ref}>
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Próximo passo
          </motion.p>

          <motion.h2
            className="font-display text-balance text-3xl font-bold leading-tight text-[var(--text-1)] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {headline}
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-8 text-[var(--text-2)]"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href={ctaPrimaryHref} className="btn-primary inline-flex min-h-[44px] w-full px-7 py-3 text-[14px] sm:w-auto">
                {ctaPrimaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href={ctaSecondaryHref} className="btn-outline inline-flex min-h-[44px] w-full px-7 py-3 text-[14px] sm:w-auto">
                {ctaSecondaryLabel}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
