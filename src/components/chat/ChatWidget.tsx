'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2, MessageCircle, Send, X } from 'lucide-react'
import { track } from '@vercel/analytics'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionToken, setSessionToken] = useState<string | null>(null)
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [showNameForm, setShowNameForm] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    let isMounted = true

    const initializeSession = async () => {
      try {
        const res = await fetch('/api/chat', { method: 'GET' })
        const data = await res.json()

        if (isMounted && data.sessionToken) {
          setSessionToken(data.sessionToken)
          setMessages([
            {
              role: 'assistant',
              content: 'Olá! Sou o assistente virtual da V-STACK SOLUTIONS. Como posso ajudá-lo hoje?',
              timestamp: new Date(),
            },
          ])
        }
      } catch {
        if (isMounted) {
          setMessages([
            {
              role: 'assistant',
              content: 'Não consegui iniciar o chat agora. Tente novamente em alguns instantes.',
              timestamp: new Date(),
            },
          ])
        }
      }
    }

    if (isOpen && !sessionToken) {
      void initializeSession()
    }

    return () => {
      isMounted = false
    }
  }, [isOpen, sessionToken])

  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!visitorName.trim()) return

    track('chat_lead_started', {
      hasEmail: Boolean(visitorEmail.trim()),
    })
    setShowNameForm(false)
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: `Prazer em conhecê-lo, ${visitorName}! Como posso ajudá-lo hoje?`,
        timestamp: new Date(),
      },
    ])
  }

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!input.trim() || isLoading || !sessionToken) return

    const message = input.trim()
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: message,
        timestamp: new Date(),
      },
    ])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          sessionToken,
          visitorName: visitorName || undefined,
          visitorEmail: visitorEmail || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.reply) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply,
          timestamp: new Date(),
        },
      ])
      track('chat_message_sent')
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => {
            track('chat_opened')
            setIsOpen(true)
          }}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-3 bottom-3 z-50 flex h-[min(620px,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px]">
          <div className="flex items-center justify-between bg-[var(--accent)] px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-semibold text-white sm:text-base">
                  V-STACK ASSISTANT
                </h3>
                <p className="text-xs text-white/80">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-white/20"
              aria-label="Fechar chat"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {showNameForm ? (
              <div className="flex h-full flex-col justify-center space-y-4">
                <div className="text-center">
                  <h4 className="mb-2 font-display text-lg font-semibold text-[var(--text-primary)]">
                    Bem-vindo!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Como podemos chamá-lo?
                  </p>
                </div>
                <form onSubmit={handleNameSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(event) => setVisitorName(event.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    value={visitorEmail}
                    onChange={(event) => setVisitorEmail(event.target.value)}
                    placeholder="Seu email (opcional)"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                  />
                  <button type="submit" className="btn-primary w-full px-4 py-2 text-sm font-medium">
                    Iniciar conversa
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={`${msg.timestamp.toISOString()}-${index}`}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[84%] rounded-2xl px-4 py-2 ${
                        msg.role === 'user'
                          ? 'bg-[var(--accent)] text-white'
                          : 'border border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-primary)]'
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                      <span
                        className={`mt-1 block text-xs ${
                          msg.role === 'user' ? 'text-white/70' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-3">
                      <Loader2 className="h-5 w-5 animate-spin text-[var(--accent)]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {!showNameForm && (
            <form onSubmit={handleSendMessage} className="border-t border-[var(--border)] p-3 sm:p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Digite sua mensagem..."
                  disabled={isLoading}
                  className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-white transition-colors hover:bg-[var(--accent-light)] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Enviar mensagem"
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}
