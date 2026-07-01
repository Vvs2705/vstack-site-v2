/**
 * Social Proof data — "Software house que constrói E OPERA os próprios SaaS".
 *
 * REGRA DE OURO: nada aqui é fabricado.
 * - Os "proof products" são SaaS próprios reais da Vstack (alguns em produção,
 *   outros em desenvolvimento) — usados como prova viva de capacidade técnica.
 * - Os depoimentos são reaproveitados de src/lib/case-studies.ts (clientes reais).
 * - Os números-âncora são apenas valores derivados/verificáveis — nunca inventados.
 */

import { caseStudies } from '@/lib/case-studies'

// ─── Produtos próprios como prova de capacidade ───────────────────────────────

export type ProofStatus = 'production' | 'developing'

export interface ProofProduct {
  /** Nome do produto SaaS próprio */
  name: string
  /** Domínio / mercado que o produto atende */
  domain: string
  /** Uma frase do que ele resolve (curta, concreta) */
  pitch: string
  /** Estágio real — em produção ou em desenvolvimento */
  status: ProofStatus
  /** Rótulo curto do estágio para o badge */
  statusLabel: string
  /** Link interno se houver página dedicada (senão undefined) */
  href?: string
}

export const PROOF_PRODUCTS: ProofProduct[] = [
  {
    name: 'FiscWise',
    domain: 'Contábil / Fiscal',
    pitch:
      'Automatiza a operação financeira da empresa — da conciliação bancária via Open Banking ao relatório executivo — e transforma o fechamento mensal num processo previsível.',
    status: 'production',
    statusLabel: 'Em produção',
    href: '/fiscwise',
  },
  {
    name: 'SessãoInk',
    domain: 'Gestão para tatuadores',
    pitch:
      'Plataforma de gestão de estúdio e agenda para tatuadores: agendamento, controle de sessões e fluxo financeiro num só lugar.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
  },
  {
    name: 'Gestão Fretamento Pro',
    domain: 'Frota & Fretamento',
    pitch:
      'Operação de frota e fretamento sob controle: roteirização, gestão de viagens e visibilidade da operação para empresas de transporte.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
  },
  {
    name: 'Ecossistema Fiscal (ERP-V)',
    domain: 'ERP & Fiscal',
    pitch:
      'Espinha dorsal fiscal e de ERP que conecta nota, estoque e financeiro — a base sobre a qual nossos produtos e integrações se apoiam.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
  },
]

// ─── Depoimentos reais (reaproveitados dos case studies) ──────────────────────

export interface ProofTestimonial {
  quote: string
  author: string
  role: string
  company: string
  industry: string
}

/**
 * Extrai os depoimentos REAIS já cadastrados em case-studies.ts.
 * Single source of truth — se um case mudar, este carrossel acompanha.
 */
export const PROOF_TESTIMONIALS: ProofTestimonial[] = Object.values(caseStudies)
  .filter((c) => c.testimonial)
  .map((c) => ({
    quote: c.testimonial!.quote,
    author: c.testimonial!.author,
    role: c.testimonial!.role,
    company: c.company,
    industry: c.industry,
  }))

// ─── Números-âncora ───────────────────────────────────────────────────────────
// Apenas valores derivados/verificáveis — NUNCA um número inventado.

export interface ProofStat {
  /** Valor a exibir (pode ser placeholder textual) */
  value: string
  /** Rótulo do que o número representa */
  label: string
  /** true quando o valor ainda precisa ser confirmado pelo Vinicius */
  pending?: boolean
}

export const PROOF_STATS: ProofStat[] = [
  {
    // Derivado de PROOF_PRODUCTS — número real de SaaS próprios listados.
    value: `${PROOF_PRODUCTS.length}`,
    label: 'SaaS próprios que construímos e operamos',
  },
  {
    // "25+" era um número não verificável. Trocado por um valor qualitativo até
    // o Vinicius confirmar a contagem real de integrações (pending).
    value: 'Nativas',
    label: 'Integrações com o mercado brasileiro (e-CAC, NFS-e, Open Banking)',
    pending: true,
  },
  {
    // Derivado de PROOF_TESTIMONIALS — nº real de cases com depoimento cadastrados.
    value: `${PROOF_TESTIMONIALS.length}`,
    label: 'Cases reais entregues — Logística, Saúde e Fintech',
  },
]
