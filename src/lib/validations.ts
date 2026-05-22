import { z } from 'zod'

export const ContatoSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(100).trim(),
  company: z.string().max(100).trim().optional(),
  email: z.string().email('Email inválido').max(254).trim().transform((value) => value.toLowerCase()),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, 'Mensagem muito curta').max(2000).trim(),
  interest: z.enum(['automacao', 'ia', 'integracao', 'saas', 'contaflow', 'outro']),
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

export const ChatMessageSchema = z.object({
  message: z.string().min(1).max(500).trim(),
  sessionToken: z.string().min(20).max(100),
  visitorName: z.string().max(100).optional(),
  visitorEmail: z.string().email().optional(),
})

export type ContatoInput = z.infer<typeof ContatoSchema>
export type CotacaoInput = z.infer<typeof CotacaoSchema>
export type DorInput = z.infer<typeof DorSchema>
export type ChatInput = z.infer<typeof ChatMessageSchema>
