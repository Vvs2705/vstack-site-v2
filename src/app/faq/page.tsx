'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section, SectionHeader } from '@/components/primitives/Layout'

const faqs = [
  {
    category: 'Diagnóstico',
    questions: [
      {
        q: 'Como a V-STACK SOLUTIONS identifica o que deve ser automatizado?',
        a: 'Começamos pelo fluxo real da operação: tarefas repetidas, retrabalho, gargalos, planilhas críticas, sistemas que não conversam e decisões que dependem de esforço manual. A tecnologia vem depois do entendimento do problema.',
      },
      {
        q: 'Preciso saber exatamente qual solução quero contratar?',
        a: 'Não. O ideal é chegar com o problema bem descrito. A partir disso, avaliamos se o melhor caminho é automação, integração, agente de IA, sistema sob medida ou uma combinação entre eles.',
      },
      {
        q: 'A primeira conversa é comercial ou técnica?',
        a: 'É uma conversa de diagnóstico. Queremos entender contexto, impacto, urgência e restrições antes de sugerir qualquer escopo.',
      },
    ],
  },
  {
    category: 'Soluções',
    questions: [
      {
        q: 'Que tipos de solução vocês desenvolvem?',
        a: 'Automação de processos, agentes de IA aplicados à operação, integrações entre sistemas, dashboards, APIs, portais internos, ferramentas SaaS e sistemas sob medida para rotinas específicas.',
      },
      {
        q: 'Vocês integram sistemas que a empresa já usa?',
        a: 'Sim. Integramos CRMs, ERPs, planilhas, bancos de dados, ferramentas financeiras, canais de atendimento e APIs públicas ou privadas, sempre avaliando segurança e estabilidade.',
      },
      {
        q: 'Vocês substituem minha operação atual de uma vez?',
        a: 'Normalmente não. Preferimos entregar por etapas, reduzir risco e provar valor em um fluxo importante antes de expandir para outras áreas.',
      },
    ],
  },
  {
    category: 'Projeto',
    questions: [
      {
        q: 'Quanto tempo leva para colocar algo funcional no ar?',
        a: 'Automações e integrações menores podem começar em poucas semanas. Sistemas maiores dependem de escopo, dados e integrações. A proposta sempre separa primeira entrega funcional, evolução e manutenção.',
      },
      {
        q: 'Como vocês evitam que o projeto vire algo grande demais?',
        a: 'Definimos um recorte inicial com impacto claro, critérios de sucesso e prioridades. O objetivo é resolver uma dor concreta antes de aumentar complexidade.',
      },
      {
        q: 'Vocês dão suporte depois da entrega?',
        a: 'Sim. Podemos atuar com garantia, monitoramento, ajustes, melhorias contínuas e evolução do produto conforme a operação amadurece.',
      },
    ],
  },
  {
    category: 'Investimento',
    questions: [
      {
        q: 'Quanto custa uma automação ou sistema sob medida?',
        a: 'O investimento depende do número de etapas, integrações, regras de negócio, volume de dados e nível de criticidade. Por isso usamos diagnóstico antes de passar valores.',
      },
      {
        q: 'Vocês calculam retorno esperado?',
        a: 'Sim. Na análise, levantamos tempo economizado, redução de erros, velocidade operacional, impacto em receita ou redução de custo para estimar o retorno possível.',
      },
      {
        q: 'É possível começar pequeno?',
        a: 'Sim. Para muitas empresas, o melhor caminho é um projeto inicial enxuto, com entrega mensurável, e depois expandir para outros fluxos.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="surface overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold text-[var(--text-1)]">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--accent)] transition-transform duration-200 ${
            isOpen ?'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="border-t border-[var(--border)] px-5 py-4 text-sm leading-relaxed text-[var(--text-2)]">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-14">
        <Section tone="deep" className="border-b border-[var(--border)]">
          <Container>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Perguntas frequentes</p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--text-1)] sm:text-5xl">
                Respostas diretas para decidir o próximo passo.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-2)]">
                Reunimos as dúvidas mais comuns sobre diagnóstico, automação, IA,
                integrações e desenvolvimento sob medida para empresas em operação.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="max-w-4xl">
            <div className="space-y-12">
              {faqs.map((category) => (
                <div key={category.category}>
                  <SectionHeader
                    eyebrow={category.category}
                    title={category.category}
                    description="Use estas respostas para entender como pensamos escopo, prioridade e retorno antes da implementação."
                    align="left"
                    className="mb-5"
                  />
                  <div className="space-y-3">
                    {category.questions.map((faq) => (
                      <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="deep" className="border-t border-[var(--border)]">
          <Container className="text-center">
            <p className="eyebrow mb-3">Ainda em dúvida?</p>
            <h2 className="font-display text-3xl font-semibold text-[var(--text-1)]">
              Transforme a dúvida em um diagnóstico objetivo.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-2)]">
              Conte o que trava sua operação hoje. Nós avaliamos o cenário e indicamos
              um caminho possível, sem empurrar ferramenta antes da hora.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/envie-sua-dor" className="btn-outline inline-flex px-6 py-3 text-sm font-semibold">
                Enviar minha dor
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
