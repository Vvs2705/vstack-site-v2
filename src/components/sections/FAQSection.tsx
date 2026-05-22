'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Container, Section } from '@/components/primitives/Layout'
import { FAQ, FAQ_CATEGORIES, type FAQCategory, type FAQItem } from '@/lib/faq'
import { cn } from '@/lib/utils'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface FAQItemRowProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItemRow({ item, isOpen, onToggle, index }: FAQItemRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE, delay: index * 0.045 }}
      className={cn(
        'overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-card)] transition-colors duration-200',
        isOpen ? 'border-[var(--accent-border)] shadow-[var(--shadow-sm)]' : 'hover:border-[var(--border-strong)]',
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold leading-snug text-[var(--text-1)] sm:text-[15px]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="mt-0.5 shrink-0 text-[var(--accent)]"
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p className="border-t border-[var(--border)] px-5 py-4 text-[14px] leading-relaxed text-[var(--text-2)]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface FAQSectionProps {
  /** Limit how many items are shown; omit to show all */
  limit?: number
  /** Show category filter tabs */
  showFilter?: boolean
  /** Override eyebrow text */
  eyebrow?: string
  /** Override title text */
  title?: string
}

export default function FAQSection({
  limit,
  showFilter = true,
  eyebrow = 'Dúvidas',
  title = 'Perguntas frequentes',
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'Todas'>('Todas')
  const [openId, setOpenId] = useState<string | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered: FAQItem[] =
    activeCategory === 'Todas'
      ? FAQ
      : FAQ.filter((item) => item.category === activeCategory)

  const visible = limit ? filtered.slice(0, limit) : filtered

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id))
  }

  const allCategories: Array<FAQCategory | 'Todas'> = ['Todas', ...FAQ_CATEGORIES]

  return (
    <Section
      tone="muted"
      spacing="xl"
      className="border-t border-[var(--border)]"
    >
      <Container size="lg">
        {/* Header */}
        <div ref={ref} className="mb-10 text-center">
          <motion.p
            className="eyebrow mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            className="font-display text-balance text-3xl font-bold leading-tight tracking-[-0.01em] text-[var(--text-1)] sm:text-4xl"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: 0.07 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 0.14 }}
          >
            Respostas diretas sobre processo, tecnologia, prazo e retorno — sem rodeios.
          </motion.p>
        </div>

        {/* Category filter */}
        {showFilter && (
          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
          >
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenId(null)
                }}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_3px_var(--accent-muted)]'
                    : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text-1)]',
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Accordion list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="mx-auto max-w-3xl space-y-2"
          >
            {visible.map((item, index) => (
              <FAQItemRow
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
