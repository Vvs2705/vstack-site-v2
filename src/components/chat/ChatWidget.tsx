'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
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
      } catch (error) {
        console.error('Erro ao iniciar sessão:', error)
      }
    }

    if (isOpen && !sessionToken) {
      initializeSession()
    }

    return () => {
      isMounted = false
    }
  }, [isOpen, sessionToken])

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (visitorName.trim()) {
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
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading || !sessionToken) return

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input.trim(),
          sessionToken,
          visitorName: visitorName || undefined,
          visitorEmail: visitorEmail || undefined,
        }),
      })

      const data = await res.json()

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.reply,
            timestamp: new Date(),
          },
        ])
      } else {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }
    } catch (error) {
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
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl accent-glow"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] flex-col rounded-2xl bg-[var(--bg-card)] shadow-2xl border border-[var(--border-strong)]">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-[var(--accent)] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-white">
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

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {showNameForm ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="text-center">
                  <h4 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                    Bem-vindo!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Como podemos chamá-lo?
                  </p>
                </div>
                <form onSubmit={handleNameSubmit} className="w-full space-y-3">
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    placeholder="Seu email (opcional)"
                    className="w-full rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary px-4 py-2 text-sm font-medium"
                  >
                    Iniciar Conversa
                  </button>
                </form>
              </div>
            ) : (
              <>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.role === 'user'
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-[var(--bg-deep)] text-[var(--text-primary)] border border-[var(--border)]'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </p>
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
                    <div className="max-w-[80%] rounded-2xl bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-3">
                      <Loader2 className="h-5 w-5 animate-spin text-[var(--accent)]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {!showNameForm && (
            <form onSubmit={handleSendMessage} className="border-t border-[var(--border)] p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  disabled={isLoading}
                  className="flex-1 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white transition-colors hover:bg-[var(--accent-light)] disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Enviar mensagem"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}
