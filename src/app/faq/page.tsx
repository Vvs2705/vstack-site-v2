'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    category: 'Geral',
    questions: [
      {
        q: 'O que é a V-STACK SOLUTIONS?',
        a: 'Somos uma empresa de tecnologia especializada em automação de processos, inteligência artificial, integração de sistemas e desenvolvimento SaaS. Ajudamos empresas a otimizar operações e aumentar eficiência através de soluções tecnológicas personalizadas.',
      },
      {
        q: 'Quais tipos de empresas vocês atendem?',
        a: 'Atendemos desde startups até grandes corporações de diversos setores: e-commerce, varejo, serviços, indústria, saúde, educação e mais. Nossas soluções são personalizadas para cada necessidade.',
      },
      {
        q: 'Como funciona o processo de contratação?',
        a: 'Primeiro, você solicita uma cotação ou envia sua dor. Nossa equipe analisa seu caso, agenda uma reunião para entender melhor suas necessidades, e então apresenta uma proposta detalhada com escopo, prazo e investimento.',
      },
    ],
  },
  {
    category: 'Serviços',
    questions: [
      {
        q: 'Quanto tempo leva para implementar uma solução?',
        a: 'Depende da complexidade do projeto. Automações simples podem ser entregues em 2-4 semanas. Integrações médias levam 1-2 meses. Projetos SaaS completos podem levar 3-6 meses. Sempre trabalhamos com entregas incrementais.',
      },
      {
        q: 'Vocês oferecem suporte após a implementação?',
        a: 'Sim! Todos os projetos incluem período de garantia e suporte. Também oferecemos planos de manutenção contínua para monitoramento, atualizações e melhorias.',
      },
      {
        q: 'Posso solicitar mudanças durante o desenvolvimento?',
        a: 'Sim, trabalhamos com metodologia ágil que permite ajustes durante o projeto. Mudanças significativas podem impactar prazo e custo, mas sempre buscamos a melhor solução para seu negócio.',
      },
    ],
  },
  {
    category: 'Tecnologia',
    questions: [
      {
        q: 'Quais tecnologias vocês utilizam?',
        a: 'Trabalhamos com as tecnologias mais modernas: Python, Node.js, React, Next.js, PostgreSQL, MongoDB, AWS, GCP, Azure, e mais. Escolhemos a stack ideal para cada projeto.',
      },
      {
        q: 'Vocês integram com sistemas legados?',
        a: 'Sim, temos experiência em integrar sistemas modernos com legados. Desenvolvemos APIs, middlewares e adaptadores para garantir comunicação eficiente entre diferentes plataformas.',
      },
      {
        q: 'As soluções são escaláveis?',
        a: 'Absolutamente. Projetamos todas as soluções pensando em escalabilidade. Utilizamos arquiteturas cloud-native, microsserviços quando necessário, e boas práticas de engenharia de software.',
      },
    ],
  },
  {
    category: 'Investimento',
    questions: [
      {
        q: 'Quanto custa uma automação?',
        a: 'O investimento varia conforme complexidade. Automações simples começam em R$ 5.000. Projetos médios ficam entre R$ 15.000-50.000. Projetos complexos podem ultrapassar R$ 100.000. Solicite uma cotação para valor exato.',
      },
      {
        q: 'Qual o ROI esperado?',
        a: 'Nossos clientes geralmente recuperam o investimento em 6-12 meses através de redução de custos operacionais, aumento de produtividade e eliminação de erros. Cada caso é único e calculamos o ROI na proposta.',
      },
      {
        q: 'Vocês trabalham com pagamento parcelado?',
        a: 'Sim, oferecemos condições flexíveis de pagamento. Geralmente dividimos em marcos de entrega: entrada, parcelas durante desenvolvimento, e saldo final na entrega. Consulte nossa equipe comercial.',
      },
    ],
  },
  {
    category: 'ContaFlow',
    questions: [
      {
        q: 'O que é o ContaFlow?',
        a: 'ContaFlow é nossa plataforma SaaS de gestão financeira para PMEs. Oferece controle de contas a pagar/receber, fluxo de caixa em tempo real, conciliação bancária automática e relatórios gerenciais.',
      },
      {
        q: 'Quanto custa o ContaFlow?',
        a: 'Temos planos a partir de R$ 97/mês. O valor varia conforme número de usuários e funcionalidades. Oferecemos 14 dias de teste grátis. Agende uma demo para conhecer melhor.',
      },
      {
        q: 'O ContaFlow integra com meu banco?',
        a: 'Sim, integramos com os principais bancos brasileiros via Open Banking. A conciliação bancária é automática, economizando horas de trabalho manual.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-[var(--border)] rounded-[var(--radius-card)] bg-[var(--bg-card)] p-5 transition-colors hover:border-[var(--border-hover)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-display text-[14px] font-semibold text-[var(--text-1)]">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--accent)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-3 pt-3 border-t border-[var(--border)] text-[13px] text-[var(--text-2)] leading-relaxed">
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

      <main className="min-h-screen pt-14 bg-[var(--bg)]">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              Dúvidas
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-1)] leading-tight max-w-xl mb-4">
              Perguntas frequentes
            </h1>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-xl">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e soluções.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="space-y-14">
              {faqs.map((category) => (
                <div key={category.category}>
                  <h2 className="font-display text-[18px] font-bold text-[var(--text-1)] mb-5 pb-3 border-b border-[var(--border)]">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((faq) => (
                      <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--border)] py-16 bg-[var(--bg-deep)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="eyebrow mb-3">Ainda com dúvidas?</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-3">
              Nossa equipe responde em até 24 horas
            </h2>
            <p className="text-[14px] text-[var(--text-2)] mb-7 max-w-md mx-auto">
              Não encontrou o que precisava? Fale diretamente com um especialista.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold">
                Fale Conosco
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/cotacao" className="btn-outline inline-flex items-center px-6 py-3 text-[14px] font-semibold">
                Solicitar Cotação
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
