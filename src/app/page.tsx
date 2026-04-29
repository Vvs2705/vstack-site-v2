import Link from 'next/link'
import { ArrowRight, Zap, Brain, Link as LinkIcon, Code, CheckCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg-primary)] pt-16">
        <div className="h-1 w-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-transparent" />

        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  ContaFlow · Em breve
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[var(--text-primary)]">
                  Sistemas que trabalham <br /> enquanto você <span className="text-[var(--accent)]">cresce.</span>
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                  A V-STACK SOLUTIONS desenvolve automações inteligentes, APIs enterprise e produtos SaaS que transformam operação em vantagem competitiva.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/cotacao" className="btn-primary inline-flex items-center justify-center px-6 py-4 text-base font-semibold gap-2">
                    Conheça o ContaFlow
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/contato" className="btn-secondary inline-flex items-center justify-center px-6 py-4 text-base font-semibold">
                    Fale conosco
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">ContaFlow</h3>
                      <p className="text-sm text-[var(--text-secondary)]">Automação financeira inteligente</p>
                    </div>
                    <span className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">EM BREVE</span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3 mb-8">
                    <div className="rounded-3xl bg-[var(--bg-deep)] p-5 text-center">
                      <span className="block text-3xl font-display font-bold text-[var(--accent)]">98%</span>
                      <span className="block mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">Precisão</span>
                    </div>
                    <div className="rounded-3xl bg-[var(--bg-deep)] p-5 text-center">
                      <span className="block text-3xl font-display font-bold text-[var(--text-primary)]">-72h</span>
                      <span className="block mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">Fechamento</span>
                    </div>
                    <div className="rounded-3xl bg-[var(--bg-deep)] p-5 text-center">
                      <span className="block text-3xl font-display font-bold text-[var(--text-primary)]">Auto</span>
                      <span className="block mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">Conciliação</span>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[var(--bg-deep)] p-6">
                    <div className="mb-4 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                      <span>Conciliação automática</span>
                      <span>247/250 itens</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[98.8%] rounded-full bg-[var(--accent)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] py-10">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Stack</span>
            <div className="flex flex-wrap gap-4">
              {['Python / FastAPI', 'Next.js', 'PostgreSQL', 'AWS / GCP', 'LLMs & Agentes', 'Open Banking'].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">O que fazemos</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)]">Tecnologia aplicada a resultados reais</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                { title: 'Automação de processos', description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.', icon: '⚡' },
                { title: 'Inteligência artificial', description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio.', icon: '🤖' },
                { title: 'Integrações enterprise', description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação.', icon: '🔗' },
                { title: 'Produtos SaaS', description: 'Desenvolvemos produtos digitais do zero ao product-market fit.', icon: '📦' },
              ].map((pillar) => (
                <div key={pillar.title} className="group rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-8 transition hover:border-[var(--accent-border)] hover:accent-glow">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-xl">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">{pillar.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--bg-deep)]">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[0.9fr_1.1fr] px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                ContaFlow
              </div>
              <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">Automação financeira que fecha o mês no prazo</h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">Chega de planilhas manuais e conciliações que levam dias. O ContaFlow integra seus dados financeiros, automatiza lançamentos e gera relatórios em tempo real.</p>
              <ul className="space-y-3">
                {[
                  'Conciliação bancária automática',
                  'Integração com Open Banking BR',
                  'Relatórios e dashboards em tempo real',
                  'Alertas inteligentes e anomalias',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="mt-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">ContaFlow</h3>
                  <p className="text-[var(--text-secondary)]">Dashboard financeiro inteligente</p>
                </div>
                <div className="rounded-3xl bg-[var(--accent-muted)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">Acesso antecipado</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                {[
                  { label: 'Entradas', value: 'R$ 84.200', accent: true },
                  { label: 'Saídas', value: 'R$ 31.450' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-[var(--bg-deep)] p-5">
                    <div className={`text-2xl font-bold ${stat.accent ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>{stat.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-[var(--bg-deep)] p-6">
                <div className="mb-4 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Conciliação automática</span>
                  <span>247/250 itens</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[98.8%] rounded-full bg-[var(--accent)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-6">Pronto para Transformar seu Negócio?</h2>
            <p className="text-lg leading-8 text-[var(--text-secondary)] mb-8">Conte-nos sobre seus desafios e descubra como podemos ajudar.</p>
            <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
              <Link href="/cotacao" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold gap-2">
                Solicitar Cotação Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/envie-sua-dor" className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold">
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
