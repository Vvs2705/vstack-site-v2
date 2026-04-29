import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import { Zap, Brain, Link as LinkIcon, Code, ArrowRight, CheckCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soluções | V-STACK SOLUTIONS',
  description: 'Conheça nossas soluções em automação, IA, integração de sistemas e desenvolvimento SaaS. Transforme seu negócio com tecnologia.',
}

const CHECK_ITEMS: Record<string, string[]> = {
  automacao: [
    'Automação de workflows e aprovações',
    'Integração entre sistemas e ferramentas',
    'Processamento automático de documentos',
    'Notificações e alertas inteligentes',
    'Relatórios e dashboards automatizados',
  ],
  ia: [
    'Chatbots e assistentes virtuais',
    'Análise preditiva e forecasting',
    'Classificação e categorização automática',
    'Extração de insights de dados não estruturados',
    'Recomendações personalizadas',
  ],
  integracao: [
    'APIs RESTful e GraphQL',
    'Webhooks e event-driven architecture',
    'ETL e sincronização de dados',
    'Middleware e message brokers',
    'Integração com ERPs e CRMs',
  ],
  saas: [
    'Arquitetura multi-tenant',
    'Autenticação e autorização (RBAC)',
    'Billing e gestão de assinaturas',
    'APIs e webhooks para integrações',
    'Monitoramento e analytics',
  ],
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-2.5">
      {children}
    </p>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-[13px] text-[var(--text-secondary)]">
          <CheckCircle className="h-4 w-4 text-[var(--accent)] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function SolucoesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-14">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              O que fazemos
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-primary)] leading-tight max-w-xl mb-4">
              Nossas soluções
            </h1>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Um portfólio completo de serviços tecnológicos para transformar desafios em oportunidades de crescimento.
            </p>
          </div>
        </section>

        {/* Automação */}
        <section id="automacao" className="py-14 scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                    <Zap className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Automação de processos
                  </h2>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
                  Elimine tarefas repetitivas e ganhe produtividade com automação inteligente. Desenvolvemos soluções
                  que conectam suas ferramentas e executam processos de forma autônoma.
                </p>
                <div className="mb-6">
                  <CheckList items={CHECK_ITEMS.automacao} />
                </div>
                <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                  Solicitar Cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-display text-base font-bold text-[var(--text-primary)] mb-4">Casos de uso</h3>
                <div className="space-y-3">
                  {[
                    { title: 'E-commerce', description: 'Sincronização automática de pedidos, estoque e envios entre marketplace e ERP.' },
                    { title: 'RH', description: 'Onboarding automatizado de colaboradores com criação de contas e acessos.' },
                    { title: 'Financeiro', description: 'Conciliação bancária automática e geração de relatórios financeiros.' },
                  ].map(({ title, description }) => (
                    <div key={title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] p-4">
                      <p className="font-display text-sm font-semibold text-[var(--text-primary)] mb-1">{title}</p>
                      <p className="text-[12px] text-[var(--text-muted)] leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IA */}
        <section id="ia" className="py-14 border-t border-[var(--border)] bg-[var(--bg-card)]/40 scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 order-2 lg:order-1">
                <h3 className="font-display text-base font-bold text-[var(--text-primary)] mb-4">Tecnologias</h3>
                <div className="space-y-3">
                  {[
                    { name: 'GPT-4 / Claude', desc: 'Modelos de linguagem avançados' },
                    { name: 'Computer Vision', desc: 'Análise e processamento de imagens' },
                    { name: 'NLP', desc: 'Processamento de linguagem natural' },
                    { name: 'Machine Learning', desc: 'Modelos preditivos personalizados' },
                  ].map(({ name, desc }) => (
                    <div key={name} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-muted)] flex-shrink-0">
                        <Brain className="h-4 w-4 text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[var(--text-primary)]">{name}</p>
                        <p className="text-[12px] text-[var(--text-muted)]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                    <Brain className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Inteligência artificial
                  </h2>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
                  Implemente IA para análise de dados, chatbots inteligentes, recomendações personalizadas e
                  decisões automatizadas baseadas em dados.
                </p>
                <div className="mb-6">
                  <CheckList items={CHECK_ITEMS.ia} />
                </div>
                <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                  Solicitar Cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Integração */}
        <section id="integracao" className="py-14 border-t border-[var(--border)] scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                    <LinkIcon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Integração de sistemas
                  </h2>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
                  Conecte suas ferramentas e centralize informações. Desenvolvemos integrações robustas entre
                  sistemas legados, APIs modernas e plataformas SaaS.
                </p>
                <div className="mb-6">
                  <CheckList items={CHECK_ITEMS.integracao} />
                </div>
                <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                  Solicitar Cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-display text-base font-bold text-[var(--text-primary)] mb-4">Plataformas suportadas</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {['Salesforce', 'SAP', 'Google Workspace', 'Microsoft 365', 'Shopify', 'WooCommerce', 'Stripe', 'PagSeguro', 'Slack', 'Teams', 'Trello', 'Asana'].map((p) => (
                    <div key={p} className="rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] px-3 py-2 text-center">
                      <span className="text-[12px] font-medium text-[var(--text-muted)]">{p}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[var(--text-muted)] mt-3 text-center">+ centenas de outras plataformas</p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS */}
        <section id="saas" className="py-14 border-t border-[var(--border)] bg-[var(--bg-card)]/40 scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 order-2 lg:order-1">
                <h3 className="font-display text-base font-bold text-[var(--text-primary)] mb-4">Stack tecnológica</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Frontend', desc: 'React, Next.js, Vue, Angular' },
                    { name: 'Backend', desc: 'Node.js, Python, Java, Go' },
                    { name: 'Database', desc: 'PostgreSQL, MongoDB, Redis' },
                    { name: 'Cloud', desc: 'AWS, GCP, Azure, Vercel' },
                  ].map(({ name, desc }) => (
                    <div key={name} className="rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] p-3">
                      <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-0.5">{name}</p>
                      <p className="text-[12px] text-[var(--text-muted)]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                    <Code className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Desenvolvimento SaaS
                  </h2>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
                  Desenvolvemos plataformas SaaS escaláveis, seguras e com excelente experiência do usuário.
                  Do MVP ao produto maduro.
                </p>
                <div className="mb-6">
                  <CheckList items={CHECK_ITEMS.saas} />
                </div>
                <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                  Solicitar Cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ContaFlow */}
        <section id="contaflow" className="py-14 border-t border-[var(--border)] scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-[var(--text-primary)]">ContaFlow</p>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--accent)] font-medium">Acesso antecipado</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-5 max-w-md">
                    Nossa plataforma SaaS de automação financeira para pequenas e médias empresas. Concilie bancos,
                    automatize lançamentos e feche o mês com precisão.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                      Conhecer ContaFlow
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/envie-sua-dor" className="btn-secondary inline-flex items-center px-5 py-2.5 text-sm font-semibold">
                      Agendar Demo
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Controle de contas a pagar e receber',
                    'Fluxo de caixa em tempo real',
                    'Conciliação bancária automática',
                  ].map((feature) => (
                    <div key={feature} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-[var(--accent)] mx-auto mb-2" />
                      <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Qual solução se encaixa no seu negócio?
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] mb-7 max-w-md mx-auto">
              Converse com nossa equipe e descubra como podemos ajudar.
            </p>
            <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
              Solicitar Cotação Gratuita
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
