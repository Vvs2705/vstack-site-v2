/**
 * Social Proof data — "Software house que constrói E OPERA os próprios SaaS".
 *
 * REGRA DE OURO: nada aqui é fabricado.
 * - Os "proof products" são SaaS próprios reais da V-STACK (alguns em produção,
 *   outros em desenvolvimento) — usados como prova viva de capacidade técnica.
 * - Os números-âncora são apenas valores derivados/verificáveis — nunca inventados.
 */

// ─── Produtos próprios como prova de capacidade ───────────────────────────────

export type ProofStatus = 'production' | 'developing'

/** Esquema visual do cartão (silhueta genérica da tela, sem dados reais). */
export type ProofVisual = 'dashboard' | 'agenda' | 'route' | 'modules'

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
  /** Link interno da página dedicada do produto */
  href: string
  /** Silhueta usada no cartão (TODO: trocar por captura real de cada produto) */
  visual: ProofVisual
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
    visual: 'dashboard',
  },
  {
    name: 'SessãoInk',
    domain: 'Gestão para tatuadores',
    pitch:
      'Plataforma de gestão de estúdio e agenda para tatuadores: agendamento, controle de sessões e fluxo financeiro num só lugar.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
    href: '/sessaoink',
    visual: 'agenda',
  },
  {
    name: 'Gestão Fretamento Pro',
    domain: 'Frota & Fretamento',
    pitch:
      'Operação de frota e fretamento sob controle: roteirização, gestão de viagens e visibilidade da operação para empresas de transporte.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
    href: '/fretamento-pro',
    visual: 'route',
  },
  {
    name: 'Ecossistema Fiscal (ERP-V)',
    domain: 'ERP & Fiscal',
    pitch:
      'Espinha dorsal fiscal e de ERP que conecta nota, estoque e financeiro — a base sobre a qual nossos produtos e integrações se apoiam.',
    status: 'developing',
    statusLabel: 'Em desenvolvimento',
    href: '/erp-v',
    visual: 'modules',
  },
]

// Depoimentos, cases e números-âncora foram removidos (eram ilustrativos). Só
// voltam com cliente real, autorização por escrito e números conferidos.
