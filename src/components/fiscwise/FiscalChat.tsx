'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Sparkles, Lock, AlertCircle, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Surface } from '@/components/primitives/Layout'
import { cn } from '@/lib/utils'
import { FiscalChatSchema, type FiscalChatInput } from '@/lib/validations'
import { sendFiscalChat } from '@/lib/fiscwise-calculator-api'
import type { ChatMessage, UserPlan } from '@/lib/types/calculator'

interface Props {
  plan: UserPlan
  monthlyMessagesLimit: number | null
  messagesUsed: number
}

const PLAN_LABELS: Record<UserPlan, string> = {
  FREE: 'Gratuito',
  INTERMEDIARIO: 'Intermediário',
  PREMIUM: 'Premium',
}

export function FiscalChat({ plan, monthlyMessagesLimit, messagesUsed }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usedCount, setUsedCount] = useState(messagesUsed)
  const bottomRef = useRef<HTMLDivElement>(null)

  const canUseAI = plan === 'INTERMEDIARIO' || plan === 'PREMIUM'
  const remaining =
    monthlyMessagesLimit !== null ? monthlyMessagesLimit - usedCount : null
  const isLimitReached = remaining !== null && remaining <= 0

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<FiscalChatInput, 'message'>>({
    resolver: zodResolver(FiscalChatSchema.pick({ message: true })),
  })

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = useCallback(
    async (data: Pick<FiscalChatInput, 'message'>) => {
      if (!canUseAI || isLimitReached) return

      const userMessage: ChatMessage = {
        role: 'user',
        content: data.message,
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, userMessage])
      reset()
      setIsLoading(true)
      setError(null)

      try {
        const history = messages.slice(-10).map((m) => ({
          role: m.role,
          content: m.content,
        }))

        const response = await sendFiscalChat({
          message: data.message,
          history,
        })

        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.reply,
          timestamp: new Date().toISOString(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setUsedCount((prev) => prev + 1)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao enviar mensagem.')
      } finally {
        setIsLoading(false)
      }
    },
    [canUseAI, isLimitReached, messages, reset]
  )

  if (!canUseAI) {
    return (
      <Surface className="flex flex-col items-center justify-center gap-4 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)]">
          <Lock className="h-7 w-7 text-[var(--text-3)]" />
        </div>
        <div>
          <h3 className="font-display text-[16px] font-bold text-[var(--text-1)]">
            Assistente IA disponível no plano Intermediário
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-[14px] leading-6 text-[var(--text-2)]">
            Tire dúvidas sobre tributos, obrigações e planejamento fiscal com um
            assistente especializado. Plano {PLAN_LABELS[plan]} não inclui este recurso.
          </p>
        </div>
      </Surface>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header com limite */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[var(--accent)]" />
          <span className="text-[13px] font-semibold text-[var(--text-1)]">
            Assistente Fiscal com IA
          </span>
        </div>
        {remaining !== null && (
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 text-[11px] font-bold',
              remaining <= 5
                ? 'bg-danger/10 text-danger'
                : 'border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-3)]'
            )}
            aria-label={`${remaining} mensagens restantes este mês`}
          >
            {remaining} msg restantes
          </span>
        )}
        {plan === 'PREMIUM' && (
          <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--accent)]">
            Ilimitado
          </span>
        )}
      </div>

      {/* Área de mensagens */}
      <Surface
        className="flex h-[400px] flex-col overflow-hidden"
        role="log"
        aria-label="Histórico da conversa fiscal"
        aria-live="polite"
      >
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot className="h-10 w-10 text-[var(--text-3)]" />
              <div>
                <p className="text-[14px] font-medium text-[var(--text-2)]">
                  Assistente Fiscal pronto para ajudar
                </p>
                <p className="mt-1 text-[12px] text-[var(--text-3)]">
                  Pergunte sobre regimes tributários, ICMS, PIS/COFINS ou planejamento fiscal.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {[
                  'Qual regime é melhor para minha empresa?',
                  'Como reduzir a carga tributária?',
                  'O que é o Simples Nacional?',
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() =>
                      sendMessage({ message: suggestion })
                    }
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 text-[12px] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={`${msg.timestamp}-${index}`}
              className={cn(
                'flex gap-3',
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              )}
            >
              <div
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                  msg.role === 'user'
                    ? 'bg-[var(--accent)] text-white'
                    : 'border border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-2)]'
                )}
                aria-hidden="true"
              >
                {msg.role === 'user' ? (
                  <User className="h-3.5 w-3.5" />
                ) : (
                  <Bot className="h-3.5 w-3.5" />
                )}
              </div>
              <div
                className={cn(
                  'max-w-[75%] rounded-2xl px-4 py-2.5 text-[14px] leading-6',
                  msg.role === 'user'
                    ? 'rounded-tr-sm bg-[var(--accent)] text-white'
                    : 'rounded-tl-sm border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-1)]'
                )}
              >
                <p className="whitespace-pre-line">{msg.content}</p>
                <time
                  dateTime={msg.timestamp}
                  className={cn(
                    'mt-1 block text-[10px]',
                    msg.role === 'user' ? 'text-white/70' : 'text-[var(--text-3)]'
                  )}
                >
                  {new Date(msg.timestamp).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3" aria-label="Assistente digitando...">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-deep)]">
                <Bot className="h-3.5 w-3.5 text-[var(--text-2)]" />
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2.5">
                <span className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-block h-2 w-2 animate-bounce rounded-full bg-[var(--text-3)]"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input de mensagem */}
        <div className="border-t border-[var(--border)] p-3">
          {error && (
            <div
              role="alert"
              className="mb-2 flex items-center gap-2 text-[12px] text-danger"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {error}
            </div>
          )}

          {isLimitReached ? (
            <p className="text-center text-[13px] text-[var(--text-3)]">
              Limite de mensagens atingido este mês. Faça upgrade para continuar.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(sendMessage)}
              className="flex items-end gap-2"
            >
              <div className="flex-1">
                <Textarea
                  placeholder="Pergunte sobre tributos, regimes ou planejamento fiscal..."
                  rows={1}
                  aria-label="Mensagem para o assistente fiscal"
                  aria-describedby={errors.message ? 'chat-msg-error' : undefined}
                  aria-invalid={!!errors.message}
                  className="min-h-[38px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(sendMessage)()
                    }
                  }}
                  {...register('message')}
                />
                {errors.message && (
                  <p id="chat-msg-error" className="sr-only">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                size="icon"
                aria-label="Enviar mensagem"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </Surface>

      <p className="text-[11px] text-[var(--text-3)]">
        Respostas geradas por IA. Consulte sempre um contador para decisões fiscais.
      </p>
    </div>
  )
}
