'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Section, SectionHeader } from '@/components/primitives/Layout'
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/animations'
import {
  INTEGRATIONS,
  INTEGRATIONS_BY_CATEGORY,
  CATEGORY_LABELS,
  type Integration,
  type IntegrationCategory,
} from '@/lib/integrations'
import { cn } from '@/lib/utils'

// ─── Integration Badge ────────────────────────────────────────────────────────

interface BadgeProps {
  integration: Integration
}

function IntegrationBadge({ integration }: BadgeProps) {
  const { name, abbr, color, href } = integration

  const Tag = href ? 'a' : 'div'
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag
        {...linkProps}
        title={name}
        aria-label={name}
        className={cn(
          'group relative flex flex-col items-center justify-center gap-2.5',
          'rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)]',
          'p-4 text-center',
          'transition-all duration-300',
          'hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)]',
          href && 'cursor-pointer',
        )}
      >
        {/* Color dot / logo placeholder */}
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-[11px] font-bold tracking-wide shadow-sm"
          style={{
            backgroundColor: color,
            boxShadow: `0 4px 14px ${color}44`,
          }}
          aria-hidden="true"
        >
          {abbr.length > 3 ? abbr.slice(0, 3) : abbr}
        </span>

        <span className="text-[12px] font-medium leading-tight text-[var(--text-2)] transition-colors duration-200 group-hover:text-[var(--text-1)]">
          {name}
        </span>

        {/* Glow ring on hover */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 ring-2 ring-[var(--accent)] transition-opacity duration-300 group-hover:opacity-30"
          aria-hidden="true"
        />
      </Tag>
    </motion.div>
  )
}

// ─── Category Filter ──────────────────────────────────────────────────────────

type FilterKey = 'all' | IntegrationCategory

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'banks', label: CATEGORY_LABELS.banks },
  { key: 'payments', label: CATEGORY_LABELS.payments },
  { key: 'erps', label: CATEGORY_LABELS.erps },
  { key: 'crms', label: CATEGORY_LABELS.crms },
  { key: 'apis', label: CATEGORY_LABELS.apis },
]

// ─── IntegrationsSection ──────────────────────────────────────────────────────

export default function IntegrationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const visible =
    activeFilter === 'all'
      ? INTEGRATIONS
      : INTEGRATIONS_BY_CATEGORY[activeFilter]

  return (
    <Section tone="muted" spacing="lg">
      <Container>
        {/* Two-column layout: text left, grid right on large screens */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">

          {/* ── Left: header + filter tabs ── */}
          <FadeInUp>
            <SectionHeader
              eyebrow="Integrações"
              title="Conecta com o que você já usa."
              description="Falamos com seus sistemas. Bancos brasileiros, ERPs, CRMs e ferramentas de pagamento — conectamos sem precisar trocar nada do que sua equipe já domina."
            />

            {/* Stat callout */}
            <motion.div
              className="mt-8 flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--accent-border)] bg-[var(--accent-muted)] px-5 py-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--accent)] text-xl font-black"
                aria-hidden="true"
              >
                25+
              </span>
              <p className="text-[13px] leading-6 text-[var(--text-2)]">
                Integrações nativas com os sistemas mais usados no mercado brasileiro
              </p>
            </motion.div>

            {/* Filter tabs — with animated active indicator */}
            <div
              className="mt-8 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filtrar por categoria"
            >
              {FILTER_TABS.map(({ key, label }) => {
                const isActive = activeFilter === key
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(key)}
                    className={cn(
                      'relative min-h-[44px] rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200',
                      isActive
                        ? 'text-white'
                        : 'border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-2)] hover:border-[var(--border-hover)] hover:text-[var(--text-1)]',
                    )}
                  >
                    {/* Animated background pill */}
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-sm"
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                )
              })}
            </div>
          </FadeInUp>

          {/* ── Right: badge grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <StaggerContainer
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-4"
                delay={0.04}
              >
                {visible.map((integration) => (
                  <StaggerItem key={integration.id}>
                    <IntegrationBadge integration={integration} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom note */}
        <FadeInUp delay={0.2}>
          <p className="mt-10 text-center text-[13px] text-[var(--text-3)]">
            Não encontrou o sistema que usa?{' '}
            <a
              href="/contato"
              className="underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
            >
              Fale com a gente
            </a>{' '}
            — integramos qualquer sistema com API.
          </p>
        </FadeInUp>
      </Container>
    </Section>
  )
}
