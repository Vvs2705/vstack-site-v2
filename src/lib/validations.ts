import { z } from 'zod'

export const ContatoSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(100).trim(),
  company: z.string().max(100).trim().optional(),
  email: z.string().email('Email inválido').max(254).trim().transform((value) => value.toLowerCase()),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, 'Mensagem muito curta').max(2000).trim(),
  interest: z.enum(['automacao', 'ia', 'integracao', 'saas', 'fiscwise', 'outro']),
})

export const CotacaoSchema = z.object({
  companyName: z.string().min(2).max(100).trim(),
  companySector: z.string().min(2).max(100).trim(),
  companySize: z.enum(['1-10', '11-50', '51-200', '201+']),
  contactName: z.string().min(2).max(100).trim(),
  contactEmail: z.string().email().max(254).trim().transform((value) => value.toLowerCase()),
  contactPhone: z.string().max(20).optional(),
  contactRole: z.string().max(100).optional(),
  projectType: z.array(z.enum(['automacao', 'ia', 'integracao', 'saas', 'fiscwise', 'outro'])).min(1),
  projectBudget: z.enum(['ate-10k', '10k-50k', '50k-200k', '200k+']),
  projectTimeline: z.enum(['urgente', '1-3meses', '3-6meses', '6meses+']),
  projectDescription: z.string().min(20).max(3000).trim(),
  currentTools: z.string().max(500).optional(),
  mainChallenge: z.string().min(10).max(1000).trim(),
})

export const DorSchema = z.object({
  name: z.string().max(100).trim().optional(),
  email: z.string().email().max(254).trim().transform((value) => value.toLowerCase()).optional(),
  company: z.string().max(100).trim().optional(),
  sector: z.string().max(100).trim().optional(),
  title: z.string().min(5).max(200).trim(),
  description: z.string().min(30).max(5000).trim(),
  impact: z.string().min(10).max(1000).trim(),
  urgency: z.enum(['baixa', 'media', 'alta', 'critica']),
  currentSolution: z.string().max(1000).optional(),
  isAnonymous: z.boolean().default(false),
})

export const SimulateRegimeSchema = z.object({
  revenue: z.number().min(1, 'Receita deve ser maior que zero').max(100_000_000),
  sector: z.string().min(2, 'Setor obrigatório').max(100),
  employee_count: z.number().int().min(0).max(10_000),
  current_regime: z.enum(['simples_nacional', 'lucro_presumido', 'lucro_real']).optional(),
})

export const SimulateIcmsSchema = z.object({
  state_origin: z.string().length(2, 'UF de origem inválida').toUpperCase(),
  state_destination: z.string().length(2, 'UF de destino inválida').toUpperCase(),
  product_value: z.number().min(0.01, 'Valor deve ser maior que zero'),
  ncm_code: z.string().max(10).optional(),
})

export const FiscalChatSchema = z.object({
  message: z.string().min(1, 'Mensagem obrigatória').max(1000).trim(),
  context: z
    .object({
      revenue: z.number().optional(),
      sector: z.string().optional(),
      regime: z.enum(['simples_nacional', 'lucro_presumido', 'lucro_real']).optional(),
    })
    .optional(),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string(),
      })
    )
    .max(20)
    .optional(),
})

export type ContatoInput = z.infer<typeof ContatoSchema>
export type CotacaoInput = z.infer<typeof CotacaoSchema>
export type DorInput = z.infer<typeof DorSchema>
export type SimulateRegimeInput = z.infer<typeof SimulateRegimeSchema>
export type SimulateIcmsInput = z.infer<typeof SimulateIcmsSchema>
export type FiscalChatInput = z.infer<typeof FiscalChatSchema>
