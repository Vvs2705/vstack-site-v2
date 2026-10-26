'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Section } from '@/components/primitives/Layout'
import { whatsappLink } from '@/lib/contact'

// Links externos (WhatsApp) abrem em nova aba; internos usam o roteador.
function CtaLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

interface CTASectionProps {
  headline?: string
  description?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

export default function CTASection({
  headline = 'Vamos tirar o seu projeto do papel?',
  description = 'Conte o que você precisa: site, sistema, automação ou jogo. Retornamos em até 24 horas úteis com as perguntas que faltam e o próximo passo, sem compromisso.',
  ctaPrimaryLabel = 'Pedir orçamento no WhatsApp',
  ctaPrimaryHref = whatsappLink('DIAGNÓSTICO'),
  ctaSecondaryLabel = 'Preencher formulário',
  ctaSecondaryHref = '/cotacao',
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
            className="text-balance text-[var(--text-1)]"
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
              <CtaLink href={ctaPrimaryHref} className="btn-primary inline-flex min-h-[48px] w-full px-7 py-3 text-[15px] sm:w-auto">
                {ctaPrimaryLabel}
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <CtaLink href={ctaSecondaryHref} className="btn-outline inline-flex min-h-[48px] w-full px-7 py-3 text-[15px] sm:w-auto">
                {ctaSecondaryLabel}
              </CtaLink>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
