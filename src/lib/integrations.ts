export type IntegrationCategory = 'banks' | 'payments' | 'erps' | 'crms' | 'apis'

export interface Integration {
  id: string
  name: string
  category: IntegrationCategory
  /** Two-letter abbreviation or short tag for the colored badge */
  abbr: string
  /** Brand color used for the badge background tint */
  color: string
  /** Optional external link */
  href?: string
}

export const CATEGORY_LABELS: Record<IntegrationCategory, string> = {
  banks: 'Bancos',
  payments: 'Pagamentos',
  erps: 'ERPs',
  crms: 'CRMs',
  apis: 'APIs',
}

export const INTEGRATIONS: Integration[] = [
  // ─── Bancos ─────────────────────────────────────────────────────────────────
  {
    id: 'nubank',
    name: 'Nubank',
    category: 'banks',
    abbr: 'Nu',
    color: '#8A05BE',
  },
  {
    id: 'itau',
    name: 'Itaú',
    category: 'banks',
    abbr: 'Itaú',
    color: '#003082',
  },
  {
    id: 'bradesco',
    name: 'Bradesco',
    category: 'banks',
    abbr: 'Brad',
    color: '#CC092F',
  },
  {
    id: 'caixa',
    name: 'Caixa',
    category: 'banks',
    abbr: 'CEF',
    color: '#0070AF',
  },
  {
    id: 'santander',
    name: 'Santander',
    category: 'banks',
    abbr: 'Sant',
    color: '#EC0000',
  },
  {
    id: 'btg',
    name: 'BTG Pactual',
    category: 'banks',
    abbr: 'BTG',
    color: '#1A3557',
  },

  // ─── Pagamentos ──────────────────────────────────────────────────────────────
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payments',
    abbr: 'Str',
    color: '#635BFF',
    href: 'https://stripe.com',
  },
  {
    id: 'wise',
    name: 'Wise',
    category: 'payments',
    abbr: 'Wise',
    color: '#00B9FF',
    href: 'https://wise.com',
  },
  {
    id: 'pix',
    name: 'Pix / Bacen',
    category: 'payments',
    abbr: 'Pix',
    color: '#32BCAD',
  },
  {
    id: 'pagarme',
    name: 'Pagar.me',
    category: 'payments',
    abbr: 'PGM',
    color: '#0DB14B',
  },
  {
    id: 'asaas',
    name: 'Asaas',
    category: 'payments',
    abbr: 'Asa',
    color: '#FF5000',
  },

  // ─── ERPs ────────────────────────────────────────────────────────────────────
  {
    id: 'sap',
    name: 'SAP',
    category: 'erps',
    abbr: 'SAP',
    color: '#0070F2',
    href: 'https://sap.com',
  },
  {
    id: 'oracle',
    name: 'Oracle ERP',
    category: 'erps',
    abbr: 'ORC',
    color: '#C74634',
    href: 'https://oracle.com',
  },
  {
    id: 'dynamics',
    name: 'MS Dynamics',
    category: 'erps',
    abbr: 'Dyn',
    color: '#0078D4',
  },
  {
    id: 'totvs',
    name: 'TOTVS',
    category: 'erps',
    abbr: 'TOT',
    color: '#E31C79',
  },
  {
    id: 'omie',
    name: 'Omie',
    category: 'erps',
    abbr: 'OMI',
    color: '#F26522',
  },

  // ─── CRMs ────────────────────────────────────────────────────────────────────
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crms',
    abbr: 'SF',
    color: '#00A1E0',
    href: 'https://salesforce.com',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crms',
    abbr: 'Hub',
    color: '#FF7A59',
    href: 'https://hubspot.com',
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crms',
    abbr: 'PD',
    color: '#1A1F36',
  },
  {
    id: 'rdstation',
    name: 'RD Station',
    category: 'crms',
    abbr: 'RDS',
    color: '#006EFF',
  },

  // ─── APIs / Infra ────────────────────────────────────────────────────────────
  {
    id: 'nfe',
    name: 'NF-e / SEFAZ',
    category: 'apis',
    abbr: 'NFe',
    color: '#2E7D32',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'apis',
    abbr: 'OAI',
    color: '#10A37F',
    href: 'https://openai.com',
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'apis',
    abbr: 'n8n',
    color: '#EA4B71',
    href: 'https://n8n.io',
  },
  {
    id: 'make',
    name: 'Make',
    category: 'apis',
    abbr: 'MKE',
    color: '#6D00CC',
    href: 'https://make.com',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'apis',
    abbr: 'Zap',
    color: '#FF4A00',
    href: 'https://zapier.com',
  },
]

export const INTEGRATIONS_BY_CATEGORY = INTEGRATIONS.reduce<
  Record<IntegrationCategory, Integration[]>
>(
  (acc, item) => {
    acc[item.category].push(item)
    return acc
  },
  { banks: [], payments: [], erps: [], crms: [], apis: [] },
)
