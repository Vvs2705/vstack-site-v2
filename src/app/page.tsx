import Link from 'next/link'
import { ArrowRight, Zap, Brain, Link as LinkIcon, Code, CheckCircle, Sparkles } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[var(--bg-primary)] py-20 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-sm font-medium text-[var(--accent)]">
                <Sparkles className="h-4 w-4" />
                Transformação Digital Inteligente
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text max-w-4xl mx-auto leading-tight">
                Soluções que Impulsionam seu Negócio
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Automatizamos processos, integramos sistemas e desenvolvemos soluções com IA para empresas que buscam eficiência e inovação.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/cotacao" className="btn-primary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                  Solicitar Cotação
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/sobre" className="btn-secondary px-8 py-4 text-lg font-semibold">
                  Conheça a V Stack
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
                Nossas Soluções
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Oferecemos um portfólio completo de serviços para transformar desafios em oportunidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Automação de Processos',
                  description: 'Elimine tarefas repetitivas e ganhe produtividade com automação inteligente',
                  href: '/solucoes#automacao',
                },
                {
                  icon: Brain,
                  title: 'Inteligência Artificial',
                  description: 'Soluções com IA para análise de dados, chatbots e decisões inteligentes',
                  href: '/solucoes#ia',
                },
                {
                  icon: LinkIcon,
                  title: 'Integração de Sistemas',
                  description: 'Conecte suas ferramentas e centralize informações em um único lugar',
                  href: '/solucoes#integracao',
                },
                {
                  icon: Code,
                  title: 'Desenvolvimento SaaS',
                  description: 'Plataformas escaláveis e seguras para seu negócio crescer',
                  href: '/solucoes#saas',
                },
              ].map((solution, idx) => (
                <Link
                  key={idx}
                  href={solution.href}
                  className="card-vstack group hover:border-[var(--accent-border)] transition-all hover:accent-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] group-hover:bg-[var(--accent)] transition-colors">
                    <solution.icon className="h-6 w-6 text-[var(--accent)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mt-4">
                    {solution.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--accent)] mt-4 font-medium">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-6">
                  Por que escolher a V Stack Solution?
                </h2>
                <p className="text-lg text-[var(--text-secondary)] mb-8">
                  Somos especialistas em transformar processos complexos em soluções simples e eficientes.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Redução de até 80% no tempo de processos manuais',
                    'Integração com mais de 100 ferramentas e APIs',
                    'Suporte técnico especializado 24/7',
                    'Soluções personalizadas para seu negócio',
                    'ROI comprovado em até 6 meses',
                    'Segurança e conformidade LGPD',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link href="/sobre" className="btn-primary px-6 py-3 mt-8 inline-flex items-center gap-2">
                  Conheça Nossa História
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="relative">
                <div className="card-vstack p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                      <span className="font-display text-3xl font-bold text-white">V</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold gradient-text">
                        V Stack Solution
                      </h3>
                      <p className="text-[var(--text-secondary)]">Tecnologia que transforma</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Projetos Entregues', value: '150+' },
                      { label: 'Clientes Satisfeitos', value: '80+' },
                      { label: 'Anos de Experiência', value: '5+' },
                      { label: 'Taxa de Sucesso', value: '98%' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-lg bg-[var(--bg-deep)] border border-[var(--border)]">
                        <div className="font-display text-3xl font-bold text-[var(--accent)] mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold gradient-text mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Conte-nos sobre seus desafios e descubra como podemos ajudar
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cotacao" className="btn-primary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                Solicitar Cotação Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/envie-sua-dor" className="btn-secondary px-8 py-4 text-lg font-semibold">
                Envie Sua Dor
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
