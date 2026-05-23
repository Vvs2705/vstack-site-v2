'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FiscWiseFAQItem } from '@/lib/fiscwise-faq'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FiscWiseFAQSectionProps {
  faqs: FiscWiseFAQItem[]
  title?: string
  description?: string
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

interface FAQItemProps {
  item: FiscWiseFAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  const paragraphs = item.answer.split('\n\n').filter(Boolean)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 },
        },
      }}
      className={cn(
        'rounded-[var(--radius-card)] border bg-[var(--bg-card)] transition-colors duration-200',
        isOpen
          ? 'border-[var(--accent-border)]'
          : 'border-[var(--border)] hover:border-[var(--border-strong)]'
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        id={`faq-btn-${item.id}`}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-[var(--radius-card)]"
      >
        <span className="font-display text-[15px] font-semibold leading-6 text-[var(--text-1)]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center transition-colors duration-200',
            isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-3)]'
          )}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pt-1 space-y-3">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[14px] leading-7 text-[var(--text-2)]">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FiscWiseFAQSection({
  faqs,
  title,
  description,
}: FiscWiseFAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div
      ref={ref}
      role="region"
      aria-label={title ?? 'Perguntas frequentes sobre o FiscWise'}
    >
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h3 className="font-display text-2xl font-bold text-[var(--text-1)]">{title}</h3>
          )}
          {description && (
            <p className="mt-2 text-[15px] leading-7 text-[var(--text-2)]">{description}</p>
          )}
        </div>
      )}

      <motion.div
        className="space-y-3"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: {} }}
      >
        {faqs.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}
