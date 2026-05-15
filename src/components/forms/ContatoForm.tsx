'use client'

import { useState } from 'react'
import { Send, Check, Loader2 } from 'lucide-react'
import { ContatoSchema, type ContatoInput } from '@/lib/validations'
import { z } from 'zod'

type ContactInterest = ContatoInput['interest']

export default function ContatoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<Partial<ContatoInput>>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    interest: undefined,
  })

  const updateField = <K extends keyof ContatoInput>(field: K, value: ContatoInput[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validated = ContatoSchema.parse(formData)

      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
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
        setErrors({ submit: 'Erro ao enviar mensagem. Tente novamente.' })
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
          Diagnóstico solicitado
        </h2>
        <p className="text-[var(--text-2)] text-lg">
          Recebemos sua mensagem. Nossa equipe vai avaliar o contexto e responder em até 24 horas úteis.
        </p>
        <p className="text-sm text-[var(--text-3)]">
          Enviamos uma confirmação para <strong>{formData.email}</strong>
        </p>
        <button
          onClick={() => {
            setIsSuccess(false)
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              message: '',
              interest: undefined,
            })
          }}
          className="btn-secondary px-6 py-3"
        >
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-vstack max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="font-display text-2xl font-bold text-[var(--text-1)] mb-2">
          Fale com um especialista
        </h3>
        <p className="text-[var(--text-2)]">
          Descreva o cenário da sua empresa para iniciarmos com uma conversa objetiva.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none"
              placeholder="Seu nome"
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
              Empresa
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none"
              placeholder="Nome da empresa"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-400">{errors.company}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none"
              placeholder="seu@email.com"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
              Telefone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none"
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
            Interesse *
          </label>
          <select
            value={formData.interest || ''}
            onChange={(e) => updateField('interest', e.target.value as ContactInterest)}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none"
            required
          >
            <option value="">Selecione uma opção...</option>
            <option value="automacao">Automação de Processos</option>
            <option value="ia">Inteligência Artificial</option>
            <option value="integracao">Integração de Sistemas</option>
            <option value="saas">Desenvolvimento SaaS</option>
            <option value="contaflow">ContaFlow (Gestão Financeira)</option>
            <option value="outro">Outro</option>
          </select>
          {errors.interest && (
            <p className="mt-1 text-sm text-red-400">{errors.interest}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-1)] mb-2">
            Mensagem * (mínimo 10 caracteres)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            rows={6}
            className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3 text-[var(--text-1)] focus:border-[var(--accent)] focus:outline-none resize-none"
            placeholder="Conte-nos sobre o que você precisa..."
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
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
            Solicitar contato
            <Send className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-[var(--text-3)]">
        Ao enviar, você concorda com nossa política de privacidade e termos de uso.
      </p>
    </form>
  )
}
