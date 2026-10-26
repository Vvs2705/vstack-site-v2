'use client'

import { ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { PROOF_PRODUCTS, type ProofProduct } from '@/lib/social-proof'

// ─── Proof product card ───────────────────────────────────────────────────────

function ProofProductCard({ product }: { product: ProofProduct }) {
  const isProduction = product.status === 'production'

  const inner = (
    <>
      {/* Top accent line — slides in on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="eyebrow !text-[var(--text-3)]">{product.domain}</p>
        <span
          className={
            isProduction
              ? 'rounded-full bg-success/10 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-success'
              : 'rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[var(--accent)]'
          }
        >
          {product.statusLabel.toUpperCase()}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-[var(--text-1)]">{product.name}</h3>
      <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{product.pitch}</p>

      {product.href && (
        <span
          className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        >
          Conhecer
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  )

  if (product.href) {
    return (
      <Surface
        as="a"
        href={product.href}
        interactive
        className="group relative flex h-full flex-col overflow-hidden p-6 cursor-pointer"
      >
        {inner}
      </Surface>
    )
  }

  return (
    <Surface interactive className="group relative flex h-full flex-col overflow-hidden p-6">
      {inner}
    </Surface>
  )
}

// ─── SocialProofSection ───────────────────────────────────────────────────────

export default function SocialProofSection() {
  return (
    <Section tone="muted" spacing="xl" className="border-y border-[var(--border)]">
      <Container>
        {/* ── Header ── */}
        <div className="max-w-3xl">
          <FadeInUp>
            <SectionHeader
              eyebrow="Por que confiar na V-STACK"
              title={
                <>
                  Não só construímos software.{' '}
                  <span className="text-[var(--accent)]">A gente também opera o nosso.</span>
                </>
              }
              description="A prova de que entregamos não é um logo na parede: são produtos próprios que nós mesmos construímos, colocamos no ar e mantemos. Este site também é nosso, do design ao formulário que chega no nosso e-mail."
            />
          </FadeInUp>
        </div>

        {/* ── Proof products ── */}
        <FadeInUp delay={0.05}>
          <p className="mt-16 mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--text-3)]">
            Nossos produtos próprios
          </p>
        </FadeInUp>
        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.05}
        >
          {PROOF_PRODUCTS.map((product) => (
            <StaggerItem key={product.name} className="h-full">
              <ProofProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </Container>
    </Section>
  )
}
