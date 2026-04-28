'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react'
import { CotacaoSchema, type CotacaoInput } from '@/lib/validations'
import { z } from 'zod'

type Step = 1 | 2 | 3 | 4

export default function CotacaoForm() {
  const [step, setStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<Partial<CotacaoInput>>({
    companyName: '',
    companySector: '',
    companySize: undefined,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactRole: '',
    projectType: [],
    projectBudget: undefined,
    projectTimeline: undefined,
    projectDescription: '',
    currentTools: '',
    mainChallenge: '',
  })

  const updateField = (field: keyof CotacaoInput, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const toggleProjectType = (type: string) => {
    const current = formData.projectType || []
    const updated = current.includes(type as any)
      ? current.filter((t) => t !== type)
      : [...current, type as any]
    updateField('projectType', updated)
  }

  const validateStep = (currentStep: Step): boolean => {
    const stepErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.companyName?.trim()) stepErrors.companyName = 'Nome da empresa é obrigatório'
      if (!formData.companySector?.trim()) stepErrors.companySector = 'Setor é obrigatório'
      if (!formData.companySize) stepErrors.companySize = 'Porte da empresa é obrigatório'
    }

    if (currentStep === 2) {
      if (!formData.contactName?.trim()) stepErrors.contactName = 'Nome é obrigatório'
      if (!formData.contactEmail?.trim()) {
        stepErrors.contactEmail = 'Email é obrigatório'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        stepErrors.contactEmail = 'Email inválido'
      }
    }

    if (currentStep === 3) {
      if (!formData.projectType?.length) stepErrors.projectType = 'Selecione ao menos um tipo'
      if (!formData.projectBudget) stepErrors.projectBudget = 'Orçamento é obrigatório'
      if (!formData.projectTimeline) stepErrors.projectTimeline = 'Prazo é obrigatório'
      if (!formData.projectDescription?.trim() || formData.projectDescription.length < 20) {
        stepErrors.projectDescription = 'Descrição deve ter no mínimo 20 caracteres'
      }
      if (!formData.mainChallenge?.trim() || formData.mainChallenge.length < 10) {
        stepErrors.mainChallenge = 'Desafio deve ter no mínimo 10 caracteres'
      }
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4) as Step)
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1) as Step)
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const validated = CotacaoSchema.parse(formData)

      const res = await fetch('/api/cotacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar cotação')
      }

      setIsSuccess(true)
      setStep(4)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        setErrors({ submit: 'Erro ao enviar cotação. Tente novamente.' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="mb-8 flex items-center justify-center gap-2">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-all ${
              s < step
                ? 'bg-[var(--accent)] text-white'
                : s === step
                ? 'bg-[var(--accent)] text-white scale-110'
                : 'bg-[var(--bg-deep)] text-[var(--text-muted)] border border-[var(--border)]'
            }`}
          >
            {s < step ? <Check className="h-5 w-5" /> : s}
          </div>
          {s < 3 && (
            <div
              className={`h-1 w-12 transition-all ${
                s < step ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )

  if (step === 4 && isSuccess) {
    return (
      <div className="card-vstack max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
            <Check className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="font-display text-3xl font-bold gradient-text">
          Cotação Enviada com Sucesso!
        </h2>
        <p className="text-[var(--text-secondary)] text-lg">
          Recebemos sua solicitação e nossa equipe entrará em contato em até 24 horas úteis.
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Enviamos uma confirmação para <strong>{formData.contactEmail}</strong>
        </p>
        <button
          onClick={() => {
            setStep(1)
            setIsSuccess(false)
            setFormData({
              companyName: '',
              companySector: '',
              companySize: undefined,
              contactName: '',
              contactEmail: '',
              contactPhone: '',
              contactRole: '',
              projectType: [],
              projectBudget: undefined,
              projectTimeline: undefined,
              projectDescription: '',
              currentTools: '',
              mainChallenge: '',
            })
          }}
          className="btn-secondary px-6 py-3"
        >
          Nova Cotação
        </button>
      </div>
    )
  }

  return (
    <div className="card-vstack max-w-3xl mx-auto">
      {renderStepIndicator()}

      {/* Step 1: Empresa */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
              Informações da Empresa
            </h3>
            <p className="text-[var(--text-secondary)]">
              Conte-nos sobre sua organização
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Nome da Empresa *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ex: Acme Corporation"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Setor de Atuação *
              </label>
              <input
                type="text"
                value={formData.companySector}
                onChange={(e) => updateField('companySector', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ex: Tecnologia, Varejo, Saúde..."
              />
              {errors.companySector && (
                <p className="mt-1 text-sm text-red-400">{errors.companySector}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Porte da Empresa *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '1-10', label: '1-10 funcionários' },
                  { value: '11-50', label: '11-50 funcionários' },
                  { value: '51-200', label: '51-200 funcionários' },
                  { value: '201+', label: '201+ funcionários' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('companySize', option.value)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                      formData.companySize === option.value
                        ? 'border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)]'
                        : 'border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-secondary)] hover:border-[var(--accent-border)]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {errors.companySize && (
                <p className="mt-1 text-sm text-red-400">{errors.companySize}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button onClick={handleNext} className="btn-primary px-6 py-3 flex items-center gap-2">
              Próximo
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Contato */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
              Dados de Contato
            </h3>
            <p className="text-[var(--text-secondary)]">
              Como podemos entrar em contato com você?
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => updateField('contactName', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Seu nome"
              />
              {errors.contactName && (
                <p className="mt-1 text-sm text-red-400">{errors.contactName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Email Corporativo *
              </label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => updateField('contactEmail', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="seu@email.com"
              />
              {errors.contactEmail && (
                <p className="mt-1 text-sm text-red-400">{errors.contactEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Telefone
              </label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => updateField('contactPhone', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Cargo
              </label>
              <input
                type="text"
                value={formData.contactRole}
                onChange={(e) => updateField('contactRole', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ex: CTO, Gerente de TI..."
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button onClick={handleBack} className="btn-secondary px-6 py-3 flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              Voltar
            </button>
            <button onClick={handleNext} className="btn-primary px-6 py-3 flex items-center gap-2">
              Próximo
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Projeto */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
              Detalhes do Projeto
            </h3>
            <p className="text-[var(--text-secondary)]">
              Conte-nos sobre o que você precisa
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Tipo de Projeto * (selecione um ou mais)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'automacao', label: 'Automação' },
                  { value: 'ia', label: 'Inteligência Artificial' },
                  { value: 'integracao', label: 'Integração de Sistemas' },
                  { value: 'saas', label: 'Desenvolvimento SaaS' },
                  { value: 'outro', label: 'Outro' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => toggleProjectType(option.value)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                      formData.projectType?.includes(option.value as any)
                        ? 'border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)]'
                        : 'border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-secondary)] hover:border-[var(--accent-border)]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Orçamento Estimado *
                </label>
                <select
                  value={formData.projectBudget || ''}
                  onChange={(e) => updateField('projectBudget', e.target.value)}
                  className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="ate-10k">Até R$ 10.000</option>
                  <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                  <option value="50k-200k">R$ 50.000 - R$ 200.000</option>
                  <option value="200k+">Acima de R$ 200.000</option>
                </select>
                {errors.projectBudget && (
                  <p className="mt-1 text-sm text-red-400">{errors.projectBudget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Prazo Desejado *
                </label>
                <select
                  value={formData.projectTimeline || ''}
                  onChange={(e) => updateField('projectTimeline', e.target.value)}
                  className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="urgente">Urgente (até 1 mês)</option>
                  <option value="1-3meses">1-3 meses</option>
                  <option value="3-6meses">3-6 meses</option>
                  <option value="6meses+">Mais de 6 meses</option>
                </select>
                {errors.projectTimeline && (
                  <p className="mt-1 text-sm text-red-400">{errors.projectTimeline}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Descrição do Projeto * (mínimo 20 caracteres)
              </label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => updateField('projectDescription', e.target.value)}
                rows={4}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
                placeholder="Descreva o que você precisa..."
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-400">{errors.projectDescription}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Ferramentas Atuais
              </label>
              <input
                type="text"
                value={formData.currentTools}
                onChange={(e) => updateField('currentTools', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ex: Salesforce, SAP, Google Workspace..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Principal Desafio * (mínimo 10 caracteres)
              </label>
              <textarea
                value={formData.mainChallenge}
                onChange={(e) => updateField('mainChallenge', e.target.value)}
                rows={3}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
                placeholder="Qual o maior desafio que você enfrenta hoje?"
              />
              {errors.mainChallenge && (
                <p className="mt-1 text-sm text-red-400">{errors.mainChallenge}</p>
              )}
            </div>
          </div>

          {errors.submit && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
              {errors.submit}
            </div>
          )}

          <div className="flex justify-between">
            <button onClick={handleBack} className="btn-secondary px-6 py-3 flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              Voltar
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Cotação
                  <Check className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
