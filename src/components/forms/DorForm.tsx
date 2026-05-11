'use client'

import { useState } from 'react'
import { AlertCircle, Check, Loader2 } from 'lucide-react'
import { DorSchema, type DorInput } from '@/lib/validations'
import { z } from 'zod'

export default function DorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<Partial<DorInput>>({
    name: '',
    email: '',
    company: '',
    sector: '',
    title: '',
    description: '',
    impact: '',
    urgency: undefined,
    currentSolution: '',
    isAnonymous: false,
  })

  const updateField = <K extends keyof DorInput>(field: K, value: DorInput[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validated = DorSchema.parse(formData)

      const res = await fetch('/api/dor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar dor')
      }

      setIsSuccess(true)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        setErrors({ submit: 'Erro ao enviar. Tente novamente.' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="card-vstack max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
            <Check className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="font-display text-3xl font-bold gradient-text">
          Dor recebida
        </h2>
        <p className="text-[var(--text-secondary)] text-lg">
          Obrigado por descrever o problema. Vamos analisar impacto, urgência e caminhos possíveis.
        </p>
        {!formData.isAnonymous && formData.email && (
          <p className="text-sm text-[var(--text-muted)]">
            Enviamos uma confirmação para <strong>{formData.email}</strong>
          </p>
        )}
        <button
          onClick={() => {
            setIsSuccess(false)
            setFormData({
              name: '',
              email: '',
              company: '',
              sector: '',
              title: '',
              description: '',
              impact: '',
              urgency: undefined,
              currentSolution: '',
              isAnonymous: false,
            })
          }}
          className="btn-secondary px-6 py-3"
        >
          Enviar outra dor
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-vstack max-w-3xl mx-auto space-y-6">
      <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)]">
        <AlertCircle className="h-6 w-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1">
            Descreva a dor da operação
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Quanto mais claro for o problema, mais rápido conseguimos identificar se vale automatizar,
            integrar sistemas ou criar uma solução sob medida.
          </p>
        </div>
      </div>

      {/* Anonymous Toggle */}
      <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)]">
        <input
          type="checkbox"
          id="isAnonymous"
          checked={formData.isAnonymous}
          onChange={(e) => updateField('isAnonymous', e.target.checked)}
          className="h-5 w-5 rounded border-[var(--border)] bg-[var(--bg-card)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
        />
        <label htmlFor="isAnonymous" className="text-sm font-medium text-[var(--text-primary)] cursor-pointer">
          Enviar anonimamente (seus dados não serão compartilhados)
        </label>
      </div>

      {/* Contact Info (optional if anonymous) */}
      {!formData.isAnonymous && (
        <div className="space-y-4">
          <h4 className="font-display text-lg font-semibold text-[var(--text-primary)]">
            Informações de Contato (Opcional)
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Nome completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Empresa
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Nome da empresa"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-400">{errors.company}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Setor
              </label>
              <input
                type="text"
                value={formData.sector}
                onChange={(e) => updateField('sector', e.target.value)}
                className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ex: Tecnologia, Varejo..."
              />
              {errors.sector && (
                <p className="mt-1 text-sm text-red-400">{errors.sector}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pain Point Details */}
      <div className="space-y-4">
        <h4 className="font-display text-lg font-semibold text-[var(--text-primary)]">
          Detalhes da Dor *
        </h4>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Título da dor * (mínimo 5 caracteres)
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateField('title', e.target.value)}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
            placeholder="Ex: Processos manuais consomem muito tempo"
            required
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-400">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Descrição detalhada * (mínimo 30 caracteres)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => updateField('description', e.target.value)}
            rows={5}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
            placeholder="Descreva em detalhes o problema que você enfrenta..."
            required
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-400">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Impacto no Negócio * (mínimo 10 caracteres)
          </label>
          <textarea
            value={formData.impact}
            onChange={(e) => updateField('impact', e.target.value)}
            rows={3}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
            placeholder="Como isso afeta sua empresa?(custos, tempo, produtividade...)"
            required
          />
          {errors.impact && (
            <p className="mt-1 text-sm text-red-400">{errors.impact}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Nível de urgência *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: 'baixa' as const, label: 'Baixa', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
              { value: 'media' as const, label: 'Média', color: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' },
              { value: 'alta' as const, label: 'Alta', color: 'bg-orange-500/10 border-orange-500/30 text-orange-400' },
              { value: 'critica' as const, label: 'Crítica', color: 'bg-red-500/10 border-red-500/30 text-red-400' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateField('urgency', option.value)}
                className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                  formData.urgency === option.value
                    ?option.color
                    : 'border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-secondary)] hover:border-[var(--accent-border)]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {errors.urgency && (
            <p className="mt-1 text-sm text-red-400">{errors.urgency}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Solução Atual (se houver)
          </label>
          <textarea
            value={formData.currentSolution}
            onChange={(e) => updateField('currentSolution', e.target.value)}
            rows={3}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
            placeholder="Como você lida com isso hoje?Por que não é suficiente?"
          />
          {errors.currentSolution && (
            <p className="mt-1 text-sm text-red-400">{errors.currentSolution}</p>
          )}
        </div>
      </div>

      {errors.submit && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
          {errors.submit}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ?(
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar para análise
            <AlertCircle className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-[var(--text-muted)]">
        Ao enviar, você concorda que a V-STACK SOLUTIONS pode entrar em contato para discutir soluções.
      </p>
    </form>
  )
}
