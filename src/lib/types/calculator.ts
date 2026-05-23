export type TaxRegime = 'simples_nacional' | 'lucro_presumido' | 'lucro_real'
export type UserPlan = 'FREE' | 'INTERMEDIARIO' | 'PREMIUM'

export interface SimulateRegimeRequest {
  revenue: number
  sector: string
  employee_count: number
  current_regime?: TaxRegime
}

export interface TaxScenario {
  regime: TaxRegime
  regime_label: string
  total_tax: number
  effective_rate: number
  monthly_tax: number
  breakdown: Record<string, number>
}

export interface RegimeRecommendation {
  recommended_regime: TaxRegime
  recommended_label: string
  savings_vs_current: number
  reasoning: string
}

export interface SimulateRegimeResponse {
  scenarios: TaxScenario[]
  recommendation: RegimeRecommendation | null
  ai_analysis: string | null
  simulation_id: string | null
}

export interface SimulateIcmsRequest {
  state_origin: string
  state_destination: string
  product_value: number
  ncm_code?: string
}

export interface SimulateIcmsResponse {
  icms_rate: number
  icms_value: number
  difal_value: number | null
  total_tax: number
  details: string
  simulation_id: string | null
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface ChatRequest {
  message: string
  context?: {
    revenue?: number
    sector?: string
    regime?: TaxRegime
  }
  history?: Array<{ role: 'user' | 'assistant'; content: string }>
}

export interface ChatResponse {
  reply: string
  messages_remaining: number | null
}

export interface Simulation {
  id: string
  type: 'regime' | 'icms' | 'pis_cofins'
  summary: string
  created_at: string
  result_snapshot: Record<string, unknown>
}

export interface SimulationsResponse {
  simulations: Simulation[]
  total: number
}

export interface PlanGating {
  plan: UserPlan
  canUseAI: boolean
  canExportPDF: boolean
  canSeeFiscalBenefits: boolean
  monthlyMessagesLimit: number | null
  messagesUsed: number
}
