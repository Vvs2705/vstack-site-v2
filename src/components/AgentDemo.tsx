'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CornerDownLeft,
  Sparkles,
  User,
} from 'lucide-react'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*  Roteiro determinístico (intent -> resposta). Sem rede, sem segredos.       */
/* -------------------------------------------------------------------------- */

interface ScriptedAnswer {
  /** Diagnóstico curto que o "agente" devolve. */
  reply: string
  /** Passos que o agente "executaria" — exibidos como plano de ação. */
  steps: string[]
}

interface Intent {
  id: string
  /** Termos que disparam a intent (lowercase, sem acento). */
  keywords: string[]
  answer: ScriptedAnswer
}

/** Sugestões clicáveis = atalho para as intents mais comuns. */
const SUGGESTIONS: { label: string; query: string }[] = [
  { label: 'Respondo a mesma pergunta o dia todo', query: 'meu time responde a mesma pergunta toda hora no atendimento' },
  { label: 'Triagem de e-mails e chamados', query: 'preciso triar e-mails e chamados que chegam misturados' },
  { label: 'Lanço dados em vários sistemas', query: 'lanço o mesmo dado no crm, no erp e na planilha' },
  { label: 'Faço relatório toda semana na mão', query: 'gasto horas montando relatório no excel toda semana' },
]

const INTENTS: Intent[] = [
  {
    id: 'atendimento',
    keywords: ['pergunta', 'atendimento', 'duvida', 'suporte', 'cliente', 'whatsapp', 'responder', 'faq', 'chat'],
    answer: {
      reply:
        'Entendi: o gargalo é responder, de novo e de novo, perguntas que já têm resposta. Um agente da Vstack atua como triagem de primeira linha — lê a mensagem, busca o contexto certo na sua base e responde com a informação real do cliente, escalando para uma pessoa só quando é exceção.',
      steps: [
        'Mapeia as 5–10 perguntas que mais consomem tempo do time.',
        'Conecta a base de conhecimento, FAQ e histórico do cliente.',
        'Responde o que é padrão e encaminha o que é exceção para a fila certa.',
        'Registra cada atendimento com tempo de resposta e acurácia para auditoria.',
      ],
    },
  },
  {
    id: 'triagem',
    keywords: ['triagem', 'email', 'e-mail', 'chamado', 'ticket', 'classificar', 'priorizar', 'fila', 'encaminhar', 'documento'],
    answer: {
      reply:
        'Esse é um caso clássico de triagem: tudo chega no mesmo lugar e alguém precisa ler para decidir prioridade e dono. Um agente da Vstack classifica cada entrada, extrai os campos relevantes e direciona para a fila certa na primeira vez — sem ninguém parar para ler item por item.',
      steps: [
        'Define as categorias e regras de prioridade junto com o time.',
        'Lê cada e-mail/chamado e extrai assunto, urgência e responsável.',
        'Encaminha para a fila ou pessoa certa automaticamente.',
        'Marca como "exceção" só o que foge da regra, para revisão humana.',
      ],
    },
  },
  {
    id: 'integracao',
    keywords: ['sistema', 'integr', 'crm', 'erp', 'planilha', 'lanc', 'duplicado', 'sincroniz', 'api', 'banco', 'faturamento'],
    answer: {
      reply:
        'O problema aqui não é falta de esforço — é o mesmo dado sendo digitado em três lugares. Um agente conectado às suas integrações observa a origem confiável e propaga a informação para os demais sistemas, mantendo tudo sincronizado e com log de cada alteração.',
      steps: [
        'Identifica qual sistema é a fonte de verdade para cada tipo de dado.',
        'Conecta CRM, ERP, faturamento e planilhas via integração segura.',
        'Sincroniza em tempo real: lança uma vez, aparece em todo lugar.',
        'Mantém log automático: quem mudou o quê, quando e por quê.',
      ],
    },
  },
  {
    id: 'relatorio',
    keywords: ['relatorio', 'relat', 'excel', 'dashboard', 'planilha', 'indicador', 'kpi', 'metrica', 'consolidar', 'fechamento'],
    answer: {
      reply:
        'Montar relatório na mão é trabalho que se repete idêntico toda semana — perfeito para um agente. Ele coleta os dados das fontes certas, aplica as regras de cálculo e entrega o relatório pronto no formato que a sua liderança já espera, na hora combinada.',
      steps: [
        'Mapeia quais números a liderança realmente usa para decidir.',
        'Coleta os dados das fontes (banco, planilha, sistema) automaticamente.',
        'Aplica as regras de cálculo e consolida em um único painel confiável.',
        'Entrega no horário combinado e avisa quando algo sai do esperado.',
      ],
    },
  },
  {
    id: 'cobranca',
    keywords: ['cobranc', 'cobrar', 'inadimpl', 'pagamento', 'boleto', 'financeiro', 'receber', 'atraso'],
    answer: {
      reply:
        'Cobrança manual costuma escorregar: alguém esquece, o cliente já pagou, ou o tom sai errado. Um agente acompanha os vencimentos, dispara lembretes no tom certo e registra cada interação — deixando o time só para os casos que precisam de negociação humana.',
      steps: [
        'Acompanha vencimentos e identifica quem está em atraso de verdade.',
        'Envia lembretes personalizados no canal e tom adequados.',
        'Concilia pagamentos recebidos para não cobrar quem já pagou.',
        'Escala para o time apenas os casos que pedem negociação.',
      ],
    },
  },
]

/** Resposta padrão quando nenhuma intent casa — nunca deixa o usuário sem retorno. */
const FALLBACK: ScriptedAnswer = {
  reply:
    'Anotado. Pelo que você descreveu, há um processo repetitivo consumindo tempo do time — exatamente onde um agente da Vstack gera retorno. O caminho começa por um diagnóstico curto: entender a dor, medir o tempo gasto hoje e desenhar o primeiro passo mais seguro.',
  steps: [
    'Diagnóstico da dor: o que mais consome tempo e gera erro hoje.',
    'Desenho do agente: dados, regras e onde ele atua.',
    'Piloto em paralelo ao time, sem risco para a operação.',
    'Implantação com painel de qualidade: acurácia, tempo e satisfação.',
  ],
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

function resolveAnswer(input: string): ScriptedAnswer {
  const text = normalize(input)
  let best: { intent: Intent; score: number } | null = null

  for (const intent of INTENTS) {
    const score = intent.keywords.reduce(
      (acc, kw) => (text.includes(kw) ? acc + 1 : acc),
      0
    )
    if (score > 0 && (best === null || score > best.score)) {
      best = { intent, score }
    }
  }

  return best ? best.intent.answer : FALLBACK
}

/* -------------------------------------------------------------------------- */
/*  Hook: efeito de digitação respeitando prefers-reduced-motion.              */
/* -------------------------------------------------------------------------- */

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

type Phase = 'idle' | 'thinking' | 'typing' | 'done'

/* -------------------------------------------------------------------------- */
/*  Componente principal.                                                      */
/* -------------------------------------------------------------------------- */

export default function AgentDemo() {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed, setTyped] = useState('')
  const [answer, setAnswer] = useState<ScriptedAnswer | null>(null)

  const reduceMotion = usePrefersReducedMotion()
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const responseRef = useRef<HTMLDivElement>(null)

  // Limpa timers pendentes ao desmontar.
  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(clearTimeout)
  }, [])

  const run = useCallback(
    (query: string) => {
      const clean = query.trim()
      if (!clean || phase === 'thinking' || phase === 'typing') return

      // Reset
      timers.current.forEach(clearTimeout)
      timers.current = []
      setSubmitted(clean)
      setTyped('')

      const resolved = resolveAnswer(clean)
      setAnswer(resolved)
      setPhase('thinking')

      // Movimento reduzido: pula a animação, mostra direto.
      if (reduceMotion) {
        setTyped(resolved.reply)
        setPhase('done')
        return
      }

      // 1) "Pensando" por um instante.
      timers.current.push(
        setTimeout(() => {
          setPhase('typing')

          // 2) Efeito de digitação. Avança em pequenos blocos para reduzir o
          //    número de re-renders (menos setState = melhor INP) sem perder a
          //    sensação de "digitando".
          const full = resolved.reply
          const STEP = 2
          let i = 0
          const tick = () => {
            i = Math.min(i + STEP, full.length)
            setTyped(full.slice(0, i))
            if (i < full.length) {
              timers.current.push(setTimeout(tick, 18))
            } else {
              setPhase('done')
            }
          }
          timers.current.push(setTimeout(tick, 18))
        }, 650)
      )
    },
    [phase, reduceMotion]
  )

  // Leva o foco/scroll para a resposta quando ela começa a surgir.
  useEffect(() => {
    if (phase === 'thinking' && responseRef.current) {
      responseRef.current.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'nearest',
      })
    }
  }, [phase, reduceMotion])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(input)
  }

  const isBusy = phase === 'thinking' || phase === 'typing'
  const showResponse = phase !== 'idle' && answer !== null

  return (
    <Section tone="deep" className="border-y border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="Demonstração interativa"
          title="Veja como um agente da Vstack leria a sua dor."
          description="Descreva, em uma frase, o que mais trava a sua operação. O agente abaixo devolve um diagnóstico e o plano de ação que executaria."
          align="center"
          className="mb-10"
        />

        <div className="mx-auto max-w-3xl">
          <Surface className="overflow-hidden">
            {/* Barra superior: identifica claramente que é uma demo. */}
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--bg-deep)] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[13px] font-bold text-[var(--text-1)]">
                  Agente Vstack
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Simulação
              </span>
            </div>

            <div className="p-5 sm:p-6">
              {/* Formulário de entrada. */}
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <label
                  htmlFor="agent-demo-input"
                  className="text-[13px] font-semibold text-[var(--text-1)]"
                >
                  Descreva sua dor operacional
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    id="agent-demo-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ex.: meu time responde a mesma pergunta o dia inteiro"
                    autoComplete="off"
                    maxLength={200}
                    aria-describedby="agent-demo-hint"
                    className="min-h-[44px] flex-1 rounded-[var(--radius-btn)] border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2.5 text-[14px] text-[var(--text-1)] outline-none transition placeholder:text-[var(--text-3)] focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent-border)]"
                  />
                  <button
                    type="submit"
                    disabled={isBusy || input.trim().length === 0}
                    className="btn-primary min-h-[44px] px-5 py-2.5 text-[14px] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Simular agente
                    <CornerDownLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p id="agent-demo-hint" className="text-[12px] text-[var(--text-3)]">
                  Demonstração com respostas roteirizadas. Nenhum dado é enviado a servidores.
                </p>
              </form>

              {/* Sugestões rápidas. */}
              <div className="mt-4">
                <p className="mb-2 text-[12px] font-medium text-[var(--text-2)]">
                  Ou comece por um exemplo:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      disabled={isBusy}
                      onClick={() => {
                        setInput(s.query)
                        run(s.query)
                      }}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 text-[12px] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-border)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Área de conversa / resposta. */}
              <div
                ref={responseRef}
                className="mt-6 space-y-4"
                role="log"
                aria-live="polite"
                aria-label="Conversa simulada com o agente"
              >
                {showResponse && (
                  <>
                    {/* Mensagem do usuário. */}
                    <div className="flex flex-row-reverse gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white"
                        aria-hidden="true"
                      >
                        <User className="h-3.5 w-3.5" />
                      </span>
                      <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[var(--accent)] px-4 py-2.5 text-[14px] leading-6 text-white">
                        {submitted}
                      </div>
                    </div>

                    {/* Resposta do agente. */}
                    <div className="flex flex-row gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-deep)] text-[var(--text-2)]"
                        aria-hidden="true"
                      >
                        <Bot className="h-3.5 w-3.5" />
                      </span>
                      <div className="max-w-[85%] flex-1">
                        {phase === 'thinking' ? (
                          <div className="inline-flex rounded-2xl rounded-tl-sm border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3">
                            <span className="flex gap-1" aria-label="Agente analisando">
                              {[0, 1, 2].map((i) => (
                                <span
                                  key={i}
                                  className="inline-block h-2 w-2 animate-bounce rounded-full bg-[var(--text-3)]"
                                  style={{ animationDelay: `${i * 0.15}s` }}
                                  aria-hidden="true"
                                />
                              ))}
                            </span>
                          </div>
                        ) : (
                          <div className="rounded-2xl rounded-tl-sm border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[14px] leading-6 text-[var(--text-1)]">
                            <p className="whitespace-pre-line">
                              {typed}
                              {phase === 'typing' && (
                                <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-[var(--accent)]" aria-hidden="true" />
                              )}
                            </p>

                            {/* Plano de ação aparece quando termina de "digitar". */}
                            {answer && phase === 'done' && (
                              <div className="mt-4 border-t border-[var(--border)] pt-4">
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                                  O que o agente executaria
                                </p>
                                <ul className="space-y-2">
                                  {answer.steps.map((step) => (
                                    <li key={step} className="flex gap-2.5">
                                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                                      <span className="text-[13px] leading-6 text-[var(--text-2)]">
                                        {step}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CTA final — só após a primeira resposta concluir. */}
              {phase === 'done' && (
                <div className="mt-6 flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14px] leading-6 text-[var(--text-1)]">
                    Esse é um roteiro de demonstração. O agente real é desenhado para a
                    sua operação — com os seus dados, regras e integrações.
                  </p>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Link
                      href="/cotacao"
                      className="btn-primary min-h-[44px] px-5 py-2.5 text-[14px]"
                    >
                      Solicitar diagnóstico
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/envie-sua-dor"
                      className="btn-outline min-h-[44px] px-5 py-2.5 text-[14px]"
                    >
                      Descrever meu desafio
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Surface>

          <p className="mt-4 text-center text-[12px] text-[var(--text-3)]">
            Demonstração ilustrativa, sem inteligência artificial real nesta página. As
            respostas são roteirizadas para representar o raciocínio de um agente Vstack.
          </p>
        </div>
      </Container>
    </Section>
  )
}
