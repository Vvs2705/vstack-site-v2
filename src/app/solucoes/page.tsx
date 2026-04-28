import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import { Zap, Brain, Link as LinkIcon, Code, ArrowRight, CheckCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soluções | V Stack Solution',
  description: 'Conheça nossas soluções em automação, IA, integração de sistemas e desenvolvimento SaaS. Transforme seu negócio com tecnologia.',
}

export default function SolucoesPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl sm:text-6xl font-bold gradient-text mb-6">
                Nossas Soluções
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Oferecemos um portfólio completo de serviços tecnológicos para transformar desafios em oportunidades de crescimento
              </p>
            </div>
          </div>
        </section>

        {/* Automação */}
        <section id="automacao" className="py-20 bg-[var(--bg-card)] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                    Automação de Processos
                  </h2>
                </div>
                
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Elimine tarefas repetitivas e ganhe produtividade com automação inteligente. Desenvolvemos soluções 
                  que conectam suas ferramentas e executam processos de forma autônoma.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Automação de workflows e aprovações',
                    'Integração entre sistemas e ferramentas',
                    'Processamento automático de documentos',
                    'Notificações e alertas inteligentes',
                    'Relatórios e dashboards automatizados',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/cotacao" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                  Solicitar Cotação
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="card-vstack p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Casos de Uso
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'E-commerce',
                      description: 'Sincronização automática de pedidos, estoque e envios entre marketplace e ERP',
                    },
                    {
                      title: 'RH',
                      description: 'Onboarding automatizado de colaboradores com criação de contas e acessos',
                    },
                    {
                      title: 'Financeiro',
                      description: 'Conciliação bancária automática e geração de relatórios financeiros',
                    },
                  ].map((useCase, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)]">
                      <h4 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                        {useCase.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IA */}
        <section id="ia" className="py-20 bg-[var(--bg-primary)] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 card-vstack p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Tecnologias
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'GPT-4 / Claude', desc: 'Modelos de linguagem avançados' },
                    { name: 'Computer Vision', desc: 'Análise e processamento de imagens' },
                    { name: 'NLP', desc: 'Processamento de linguagem natural' },
                    { name: 'Machine Learning', desc: 'Modelos preditivos personalizados' },
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] flex-shrink-0">
                        <Brain className="h-5 w-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-[var(--text-primary)]">
                          {tech.name}
                        </div>
                        <div className="text-sm text-[var(--text-secondary)]">
                          {tech.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                    Inteligência Artificial
                  </h2>
                </div>
                
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Implemente IA para análise de dados, chatbots inteligentes, recomendações personalizadas e 
                  decisões automatizadas baseadas em dados.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Chatbots e assistentes virtuais',
                    'Análise preditiva e forecasting',
                    'Classificação e categorização automática',
                    'Extração de insights de dados não estruturados',
                    'Recomendações personalizadas',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/cotacao" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                  Solicitar Cotação
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Integração */}
        <section id="integracao" className="py-20 bg-[var(--bg-card)] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                    <LinkIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                    Integração de Sistemas
                  </h2>
                </div>
                
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Conecte suas ferramentas e centralize informações. Desenvolvemos integrações robustas entre 
                  sistemas legados, APIs modernas e plataformas SaaS.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'APIs RESTful e GraphQL',
                    'Webhooks e event-driven architecture',
                    'ETL e sincronização de dados',
                    'Middleware e message brokers',
                    'Integração com ERPs e CRMs',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/cotacao" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                  Solicitar Cotação
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="card-vstack p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Plataformas Suportadas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Salesforce', 'SAP', 'Google Workspace', 'Microsoft 365',
                    'Shopify', 'WooCommerce', 'Stripe', 'PagSeguro',
                    'Slack', 'Teams', 'Trello', 'Asana',
                  ].map((platform, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)] text-center">
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        {platform}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-muted)] mt-4 text-center">
                  + Centenas de outras plataformas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS */}
        <section id="saas" className="py-20 bg-[var(--bg-primary)] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 card-vstack p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Stack Tecnológica
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Frontend', desc: 'React, Next.js, Vue, Angular' },
                    { name: 'Backend', desc: 'Node.js, Python, Java, Go' },
                    { name: 'Database', desc: 'PostgreSQL, MongoDB, Redis' },
                    { name: 'Cloud', desc: 'AWS, GCP, Azure, Vercel' },
                  ].map((stack, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)]">
                      <div className="font-display font-semibold text-[var(--text-primary)] mb-1">
                        {stack.name}
                      </div>
                      <div className="text-sm text-[var(--text-secondary)]">
                        {stack.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                    Desenvolvimento SaaS
                  </h2>
                </div>
                
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Desenvolvemos plataformas SaaS escaláveis, seguras e com excelente experiência do usuário. 
                  Do MVP ao produto maduro.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Arquitetura multi-tenant',
                    'Autenticação e autorização (RBAC)',
                    'Billing e gestão de assinaturas',
                    'APIs e webhooks para integrações',
                    'Monitoramento e analytics',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/cotacao" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                  Solicitar Cotação
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ContaFlow */}
        <section id="contaflow" className="py-20 bg-[var(--bg-card)] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-vstack p-12 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h2 className="font-display text-4xl font-bold gradient-text mb-4">
                ContaFlow
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Nossa plataforma SaaS de gestão financeira para pequenas e médias empresas
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  'Controle de contas a pagar e receber',
                  'Fluxo de caixa em tempo real',
                  'Conciliação bancária automática',
                ].map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)]">
                    <CheckCircle className="h-6 w-6 text-[var(--accent)] mx-auto mb-2" />
                    <p className="text-sm text-[var(--text-secondary)]">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/cotacao" className="btn-primary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                  Conhecer ContaFlow
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/envie-sua-dor" className="btn-secondary px-8 py-4 text-lg font-semibold">
                  Agendar Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold gradient-text mb-6">
              Qual Solução se Encaixa no Seu Negócio?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Converse com nossa equipe e descubra como podemos ajudar
            </p>
            
            <Link href="/cotacao" className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center gap-2">
              Solicitar Cotação Gratuita
              <ArrowRight className="h-5 w-5" />
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
