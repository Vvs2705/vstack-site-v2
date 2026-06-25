/**
 * Tipo compartilhado das landing pages de produto da Vstack.
 * Cada produto exporta um objeto `ProductLandingData` (em src/lib/products/<slug>.ts)
 * e a rota `src/app/<slug>/page.tsx` apenas renderiza <ProductLanding data={...} />.
 *
 * REGRA DE OURO (consistente com o resto do site): nada de número/cliente/depoimento
 * fabricado. Funcionalidades reais/planejadas, copy de venda confiante. Preços que
 * ainda não estão definidos vão como `pricingNote` com TODO para o Vinicius cravar.
 */

export interface ProductPlan {
  /** Nome do plano (ex: "Essencial", "Pro", "Enterprise") */
  name: string
  /** Valor exibido. Use 'Sob consulta' quando o preço real ainda não estiver definido. */
  price: string
  /** Período do preço (ex: "/mês"). Opcional. */
  period?: string
  /** Uma linha de posicionamento do plano. */
  description: string
  /** Itens inclusos no plano. */
  features: string[]
  /** Destaca o plano como recomendado. */
  highlighted?: boolean
  /** Rótulo do botão do plano (default: CTA primário do produto). */
  ctaLabel?: string
}

export interface ProductFeature {
  title: string
  description: string
  /** Selo curto opcional (ex: "Multi-tenant", "Tempo real"). */
  highlight?: string
}

export interface ProductPain {
  title: string
  description: string
}

export interface ProductStep {
  /** Número do passo, ex: "01". */
  step: string
  title: string
  description: string
}

export interface ProductFaqItem {
  q: string
  a: string
}

export interface ProductLandingData {
  /** Slug da rota top-level, ex: "sessaoink" → /sessaoink */
  slug: string
  /** Nome comercial do produto, ex: "SessãoInk" */
  name: string
  /** Cor de identidade do produto (hex). Usada nos acentos visuais e CTA. */
  accent: string

  /* ── SEO ── */
  metaTitle: string
  metaDescription: string
  /** applicationCategory do schema SoftwareApplication. */
  seoCategory: string
  /** featureList do schema SoftwareApplication. */
  seoFeatureList: string[]

  /* ── Hero ── */
  badge: string
  heroTitle: string
  heroSubtitle: string
  /** 3 a 4 chips de destaque rápido (benefícios/marcos). */
  heroHighlights: string[]
  primaryCta: string
  secondaryCta: string

  /* ── Problema ── */
  painsTitle: string
  painsSubtitle?: string
  pains: ProductPain[]

  /* ── Funcionalidades ── */
  featuresTitle: string
  featuresSubtitle?: string
  features: ProductFeature[]

  /* ── Como funciona ── */
  stepsTitle: string
  steps: ProductStep[]

  /* ── Resultados / benefícios ── */
  outcomesTitle: string
  outcomes: string[]

  /* ── Planos ── */
  pricingTitle: string
  pricingSubtitle?: string
  plans: ProductPlan[]
  /** Observação sob a tabela (ex: aviso de preço a confirmar). */
  pricingNote?: string

  /* ── FAQ ── */
  faq: ProductFaqItem[]

  /* ── CTA final ── */
  finalCtaTitle: string
  finalCtaSubtitle: string
}
