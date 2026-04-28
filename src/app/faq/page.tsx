'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'Geral',
    questions: [
      {
        q: 'O que é a V Stack Solution?',
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
    <div className="card-vstack">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-display font-semibold text-[var(--text-primary)] pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[var(--accent)] flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-[var(--border)] text-[var(--text-secondary)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="font-display text-5xl font-bold gradient-text mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Encontre respostas para as dúvidas mais comuns sobre nossos serviços
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, catIdx) => (
                <div key={catIdx}>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIdx) => (
                      <FAQItem key={faqIdx} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold gradient-text mb-6">
              Não Encontrou Sua Resposta?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contato" className="btn-primary px-8 py-4 text-lg font-semibold">
                Fale Conosco
              </Link>
              <Link href="/cotacao" className="btn-secondary px-8 py-4 text-lg font-semibold">
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
