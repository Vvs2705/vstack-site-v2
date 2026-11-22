'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { DorSchema, type DorInput } from '@/lib/validations'
import { trackFormSubmit } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { z } from 'zod'

const INPUT_CLASS =
  'w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]'

const URGENCY_OPTIONS = [
  { value: 'baixa' as const, label: 'Baixa', hint: 'sem pressa' },
  { value: 'media' as const, label: 'Média', hint: 'neste trimestre' },
  { value: 'alta' as const, label: 'Alta', hint: 'neste mês' },
  { value: 'critica' as const, label: 'Crítica', hint: 'travando a operação' },
]

const REQUIRED_TOTAL = 4

/** Bloco numerado: um tema por vez, com estado de concluído. Só apresentação. */
function Block({
  number,
  title,
  hint,
  done,
  optional = false,
  children,
}: {
  number: number
  title: string
  hint: string
  done: boolean
  optional?: boolean
  children: React.ReactNode
}) {
  const headingId = `dor-bloco-${number}`
  return (
    <section aria-labelledby={headingId} className="space-y-4">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[13px] font-bold transition-colors',
            done
              ? 'border-transparent bg-[var(--accent)] text-white'
              : 'border-[var(--border-strong)] bg-[var(--bg-deep)] text-[var(--text-2)]',
          )}
        >
          {done ? <Check className="h-4 w-4" /> : number}
        </span>
        <div>
          <h3 id={headingId} className="text-[18px] text-[var(--text-1)]">
            {title}
            {optional && <span className="ml-2 text-[13px] font-normal text-[var(--text-3)]">(opcional)</span>}
          </h3>
          <p className="mt-0.5 text-[13px] leading-6 text-[var(--text-2)]">{hint}</p>
        </div>
      </div>
      <div className="space-y-4 sm:pl-10">{children}</div>
    </section>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-danger">
      {message}
    </p>
  )
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-[var(--text-1)]">
      {children}
    </label>
  )
}

const EMPTY_FORM: Partial<DorInput> = {
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
}

export default function DorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<Partial<DorInput>>(EMPTY_FORM)

  const updateField = <K extends keyof DorInput>(field: K, value: DorInput[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // '' não passa no z.email() opcional: campo vazio vira undefined
      const validated = DorSchema.parse({ ...formData, email: formData.email || undefined })

      const res = await fetch('/api/dor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar dor')
      }

      trackFormSubmit('dor', {
        urgency: validated.urgency,
        isAnonymous: validated.isAnonymous,
      })

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

  // Progresso visível: conta só os campos obrigatórios que já passam no schema.
  const titleOk = (formData.title ?? '').trim().length >= 5
  const descriptionOk = (formData.description ?? '').trim().length >= 30
  const impactOk = (formData.impact ?? '').trim().length >= 10
  const urgencyOk = Boolean(formData.urgency)
  const requiredDone = [titleOk, descriptionOk, impactOk, urgencyOk].filter(Boolean).length

  if (isSuccess) {
    return (
      <div role="status" aria-live="polite" className="card-vstack max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
            <Check className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="font-display text-3xl font-bold gradient-text">
          Dor recebida
        </h2>
        <p className="text-[var(--text-2)] text-lg">
          Obrigado por descrever o problema. Vamos analisar impacto, urgência e caminhos possíveis.
        </p>
        {!formData.isAnonymous && formData.email && (
          <p className="text-sm text-[var(--text-3)]">
            Enviamos uma confirmação para <strong>{formData.email}</strong>
          </p>
        )}
        <button
          onClick={() => {
            setIsSuccess(false)
            setFormData(EMPTY_FORM)
          }}
          className="btn-secondary px-6 py-3"
        >
          Enviar outra dor
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-vstack mx-auto w-full max-w-3xl space-y-8 p-5 sm:p-8">
      {/* Progresso */}
      <div>
        <div className="flex items-center justify-between gap-3 text-[13px]">
          <span className="font-semibold text-[var(--text-1)]" id="dor-progress-label">
            {requiredDone === REQUIRED_TOTAL ? 'Pronto para enviar' : 'Campos obrigatórios'}
          </span>
          <span className="font-mono text-[var(--text-2)]">
            {requiredDone} de {REQUIRED_TOTAL}
          </span>
        </div>
        <div
          role="progressbar"
          aria-labelledby="dor-progress-label"
          aria-valuemin={0}
          aria-valuemax={REQUIRED_TOTAL}
          aria-valuenow={requiredDone}
          aria-valuetext={`${requiredDone} de ${REQUIRED_TOTAL} campos obrigatórios preenchidos`}
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--border)]"
        >
          <div
            className="h-full w-full origin-left rounded-full bg-[var(--accent)] transition-transform duration-500 ease-out"
            style={{ transform: `scaleX(${requiredDone / REQUIRED_TOTAL})` }}
          />
        </div>
      </div>

      {/* 1 · A dor */}
      <Block
        number={1}
        title="Qual é a dor?"
        hint="Em uma frase e depois com detalhes. Quanto mais claro, mais rápido indicamos o caminho."
        done={titleOk && descriptionOk}
      >
        <div>
          <FieldLabel htmlFor="dor-title">Título da dor * (mínimo 5 caracteres)</FieldLabel>
          <input
            id="dor-title"
            type="text"
            value={formData.title}
            onChange={(e) => updateField('title', e.target.value)}
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'dor-error-title' : undefined}
            className={INPUT_CLASS}
            placeholder="Ex: Processos manuais consomem muito tempo"
            required
          />
          <FieldError id="dor-error-title" message={errors.title} />
        </div>

        <div>
          <FieldLabel htmlFor="dor-description">Descrição detalhada * (mínimo 30 caracteres)</FieldLabel>
          <textarea
            id="dor-description"
            value={formData.description}
            onChange={(e) => updateField('description', e.target.value)}
            rows={5}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? 'dor-error-description' : undefined}
            className={cn(INPUT_CLASS, 'resize-none')}
            placeholder="Descreva em detalhes o problema que você enfrenta..."
            required
          />
          <FieldError id="dor-error-description" message={errors.description} />
        </div>
      </Block>

      {/* 2 · O impacto */}
      <Block
        number={2}
        title="Qual o impacto?"
        hint="Custo, tempo, erro ou risco. É isso que define a prioridade."
        done={impactOk && urgencyOk}
      >
        <div>
          <FieldLabel htmlFor="dor-impact">Impacto no negócio * (mínimo 10 caracteres)</FieldLabel>
          <textarea
            id="dor-impact"
            value={formData.impact}
            onChange={(e) => updateField('impact', e.target.value)}
            rows={3}
            aria-invalid={Boolean(errors.impact)}
            aria-describedby={errors.impact ? 'dor-error-impact' : undefined}
            className={cn(INPUT_CLASS, 'resize-none')}
            placeholder="Como isso afeta sua empresa? (custos, tempo, produtividade...)"
            required
          />
          <FieldError id="dor-error-impact" message={errors.impact} />
        </div>

        <div role="group" aria-labelledby="dor-urgency-label" aria-describedby={errors.urgency ? 'dor-error-urgency' : undefined}>
          <p id="dor-urgency-label" className="mb-2 text-sm font-medium text-[var(--text-1)]">
            Nível de urgência *
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {URGENCY_OPTIONS.map((option) => {
              const selected = formData.urgency === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => updateField('urgency', option.value)}
                  className={cn(
                    'min-h-[56px] rounded-lg border px-3 py-2 text-left transition-colors',
                    selected
                      ? 'border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--text-1)]'
                      : 'border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-2)] hover:border-[var(--accent-border)]',
                  )}
                >
                  <span className="block text-sm font-semibold">{option.label}</span>
                  <span className="block text-[12px] text-[var(--text-3)]">{option.hint}</span>
                </button>
              )
            })}
          </div>
          <FieldError id="dor-error-urgency" message={errors.urgency} />
        </div>

        <div>
          <FieldLabel htmlFor="dor-current">
            Solução atual <span className="font-normal text-[var(--text-3)]">(se houver)</span>
          </FieldLabel>
          <textarea
            id="dor-current"
            value={formData.currentSolution}
            onChange={(e) => updateField('currentSolution', e.target.value)}
            rows={3}
            aria-invalid={Boolean(errors.currentSolution)}
            aria-describedby={errors.currentSolution ? 'dor-error-currentSolution' : undefined}
            className={cn(INPUT_CLASS, 'resize-none')}
            placeholder="Como você lida com isso hoje? Por que não é suficiente?"
          />
          <FieldError id="dor-error-currentSolution" message={errors.currentSolution} />
        </div>
      </Block>

      {/* 3 · Contato (opcional) */}
      <Block
        number={3}
        title="Como falamos com você?"
        hint="Sem contato não conseguimos responder. Se preferir, envie de forma anônima."
        done={Boolean(formData.isAnonymous) || Boolean(formData.email?.trim())}
        optional
      >
        <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] p-4">
          <input
            type="checkbox"
            id="isAnonymous"
            checked={formData.isAnonymous}
            onChange={(e) => updateField('isAnonymous', e.target.checked)}
            className="h-5 w-5 rounded border-[var(--border)] bg-[var(--bg-card)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
          />
          <label htmlFor="isAnonymous" className="cursor-pointer text-sm font-medium text-[var(--text-1)]">
            Enviar anonimamente (seus dados não serão compartilhados)
          </label>
        </div>

        {!formData.isAnonymous && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <FieldLabel htmlFor="dor-name">Seu nome</FieldLabel>
              <input
                id="dor-name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'dor-error-name' : undefined}
                className={INPUT_CLASS}
                placeholder="Nome completo"
              />
              <FieldError id="dor-error-name" message={errors.name} />
            </div>

            <div>
              <FieldLabel htmlFor="dor-email">E-mail</FieldLabel>
              <input
                id="dor-email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'dor-error-email' : undefined}
                className={INPUT_CLASS}
                placeholder="seu@email.com"
              />
              <FieldError id="dor-error-email" message={errors.email} />
            </div>

            <div>
              <FieldLabel htmlFor="dor-company">Empresa</FieldLabel>
              <input
                id="dor-company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? 'dor-error-company' : undefined}
                className={INPUT_CLASS}
                placeholder="Nome da empresa"
              />
              <FieldError id="dor-error-company" message={errors.company} />
            </div>

            <div>
              <FieldLabel htmlFor="dor-sector">Setor</FieldLabel>
              <input
                id="dor-sector"
                type="text"
                value={formData.sector}
                onChange={(e) => updateField('sector', e.target.value)}
                aria-invalid={Boolean(errors.sector)}
                aria-describedby={errors.sector ? 'dor-error-sector' : undefined}
                className={INPUT_CLASS}
                placeholder="Ex: Tecnologia, Varejo..."
              />
              <FieldError id="dor-error-sector" message={errors.sector} />
            </div>
          </div>
        )}
      </Block>

      {errors.submit && (
        <div role="alert" className="rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
          {errors.submit}
        </div>
      )}

      <div className="space-y-3 border-t border-[var(--border)] pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex min-h-[52px] w-full items-center justify-center gap-2 px-6 py-4 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            'Enviar para análise'
          )}
        </button>

        <p className="text-center text-xs text-[var(--text-3)]">
          Ao enviar, você concorda que a V-STACK SOLUTIONS pode entrar em contato para discutir soluções.
        </p>
      </div>
    </form>
  )
}
