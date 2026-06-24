'use client'

import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import {
  PROOF_PRODUCTS,
  PROOF_TESTIMONIALS,
  PROOF_STATS,
  type ProofProduct,
} from '@/lib/social-proof'

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
              ? 'rounded-full bg-[#22c55e]/10 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#22c55e]'
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

// ─── Testimonial card ─────────────────────────────────────────────────────────

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  // Iniciais para o avatar (sem foto fabricada).
  const initials = author
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <Surface className="flex h-full flex-col p-6">
      <Quote className="h-7 w-7 flex-none text-[var(--accent)]" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[14px] leading-7 text-[var(--text-2)]">
        “{quote}”
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
        <span
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--accent-muted)] text-[12px] font-bold text-[var(--accent)]"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-bold text-[var(--text-1)]">{author}</p>
          <p className="truncate text-[12px] text-[var(--text-3)]">{role}</p>
        </div>
      </div>
    </Surface>
  )
}

// ─── SocialProofSection ───────────────────────────────────────────────────────

export default function SocialProofSection() {
  return (
    <Section tone="muted" spacing="xl" className="border-y border-[var(--border)]">
      <Container>
        {/* ── Header + stats ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <FadeInUp>
            <SectionHeader
              eyebrow="Por que confiar na Vstack"
              title={
                <>
                  Não só construímos software.{' '}
                  <span className="text-[var(--accent)]">A gente também opera o nosso.</span>
                </>
              }
              description="A prova de que entregamos não é um logo na parede — são produtos SaaS próprios que estão no ar, sob nossa responsabilidade, todos os dias. Quem constrói e mantém os próprios produtos sabe exatamente o que o seu negócio precisa."
            />
          </FadeInUp>

          {/* Stat row */}
          <FadeInUp delay={0.1}>
            <dl className="grid grid-cols-3 gap-4 sm:gap-6">
              {PROOF_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-black leading-none text-[var(--accent)] sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-[12px] leading-5 text-[var(--text-3)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
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

        {/* ── Testimonials ── */}
        {PROOF_TESTIMONIALS.length > 0 && (
          <>
            <FadeInUp delay={0.05}>
              <p className="mt-16 mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--text-3)]">
                O que os clientes dizem
              </p>
            </FadeInUp>
            <StaggerContainer
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              delay={0.05}
            >
              {PROOF_TESTIMONIALS.map((t) => (
                <StaggerItem key={t.author} className="h-full">
                  <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInUp delay={0.1}>
              <p className="mt-10 text-center text-[13px] text-[var(--text-3)]">
                Quer ver os números por trás de cada um?{' '}
                <Link
                  href="/cases"
                  className="font-semibold text-[var(--accent)] underline underline-offset-2 transition-colors hover:text-[var(--accent-light)]"
                >
                  Conheça os cases completos
                </Link>
              </p>
            </FadeInUp>
          </>
        )}
      </Container>
    </Section>
  )
}
