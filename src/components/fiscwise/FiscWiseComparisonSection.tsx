'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, BadgeCheck, Landmark, CircleDollarSign, Zap, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CompetitorDifferential } from '@/lib/fiscwise-faq'

// ─── Icon map ─────────────────────────────────────────────────────────────────
// Maps the icon string names used in fiscwise-faq.ts to actual Lucide components.

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  BadgeCheck,
  Landmark,
  CircleDollarSign,
  Zap,
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface FiscWiseComparisonSectionProps {
  comparisons: CompetitorDifferential[]
}

// ─── Card ─────────────────────────────────────────────────────────────────────

interface ComparisonCardProps {
  item: CompetitorDifferential
}

function ComparisonCard({ item }: ComparisonCardProps) {
  const Icon = item.icon ? ICON_MAP[item.icon] : null

  return (
    <motion.div
      role="listitem"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(
        'group flex flex-col gap-4 rounded-[var(--radius-card)]',
        'border border-[var(--border)] bg-[var(--bg-card)]',
        'px-5 py-6',
        'shadow-[var(--shadow-sm)]',
        // Hover: lift + glow + border color change
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1.5',
        'hover:border-[var(--accent-border)]',
        'hover:shadow-[var(--shadow-glow)]'
      )}
    >
      {Icon && (
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
            'border border-[var(--accent-border)] bg-[var(--accent-muted)]',
            'text-[var(--accent)] transition-colors duration-300',
            'group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)]'
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
      )}

      <div>
        <h3 className="mb-1.5 font-display text-[15px] font-bold leading-snug text-[var(--text-1)]">
          {item.title}
        </h3>
        <p className="text-[13px] leading-6 text-[var(--text-2)]">{item.description}</p>
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FiscWiseComparisonSection({ comparisons }: FiscWiseComparisonSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      role="list"
      aria-label="Diferenciais competitivos do FiscWise"
      className={cn(
        'mt-10 grid gap-4',
        // 1 col mobile → 2 cols tablet → 5 cols desktop (5 cards)
        'grid-cols-1 sm:grid-cols-2 xl:grid-cols-5'
      )}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
    >
      {comparisons.map((item) => (
        <ComparisonCard key={item.title} item={item} />
      ))}
    </motion.div>
  )
}
