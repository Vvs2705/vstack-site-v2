import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'

const TECH_TAGS = ['Python / FastAPI', 'Next.js', 'PostgreSQL', 'AWS / GCP', 'LLMs & Agentes', 'Open Banking']

const PILLARS = [
  { title: 'Automação de processos', description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.', icon: '⚡' },
  { title: 'Inteligência artificial', description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio.', icon: '🤖' },
  { title: 'Integrações enterprise', description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação.', icon: '🔗' },
  { title: 'Produtos SaaS', description: 'Desenvolvemos produtos digitais do zero ao product-market fit.', icon: '📦' },
]

const BAR_HEIGHTS = ['40%', '65%', '40%', '100%', '65%', '100%', '65%', '25%', '65%', '100%', '65%', '100%']
const BAR_ACTIVE = [false, false, false, true, true, true, true, false, false, true, true, true]

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg-primary)] pt-16">
        {/* Accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />

        {/* ── HERO ── */}
        <section className="relative overflow-hidden py-[72px] sm:py-20">
          <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/8 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 items-center">

              {/* Left */}
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--accent-light)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  ContaFlow · Em breve
                </div>

                <h1 className="font-display text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]">
                  Sistemas que trabalham<br />
                  enquanto você <span className="text-[var(--accent)]">cresce.</span>
                </h1>

                <p className="max-w-[440px] text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  A V-STACK SOLUTIONS desenvolve automações inteligentes, APIs enterprise e produtos SaaS que transformam operação em vantagem competitiva.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/cotacao"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold"
                  >
                    Conheça o ContaFlow
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contato"
                    className="btn-secondary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
                  >
                    Fale com um especialista
                  </Link>
                </div>
              </div>

              {/* Right — product card */}
              <div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl">
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">ContaFlow</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Automação financeira inteligente</p>
                    </div>
                    <span className="rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--accent-light)]">
                      EM BREVE
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { value: '98%', label: 'Precisão', accent: true },
                      { value: '-72h', label: 'Fechamento', accent: false },
                      { value: 'Auto', label: 'Conciliação', accent: false },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl bg-[var(--bg-deep)] border border-[var(--border)] p-3 text-center">
                        <span className={`block font-display text-xl font-bold ${m.accent ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                          {m.value}
                        </span>
                        <span className="block mt-1 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1 h-10 mb-5">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: h,
                          background: BAR_ACTIVE[i] ? 'var(--accent)' : 'rgba(240,112,40,0.18)',
                        }}
                      />
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    Sistema operacional · Integração ativa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STRIP ── */}
        <div className="border-y border-[var(--border)] py-5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-10 gap-y-3 px-6 lg:px-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Stack</span>
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent)]/50 flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── PILLARS ── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-2.5">
              O que fazemos
            </p>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-10 max-w-[340px] leading-tight">
              Tecnologia aplicada a resultados reais
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/60 p-6 transition-colors hover:border-[var(--accent-border)]"
                >
                  {/* Top accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-base">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTAFLOW ── */}
        <section className="py-16 sm:py-20 border-y border-[var(--border)] bg-[var(--accent)]/[0.02]">
          <div className="max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center px-6 lg:px-8">

            {/* Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold tracking-widest text-[var(--accent)] uppercase">
                  ContaFlow
                </span>
                <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--accent-light)]">
                  ACESSO ANTECIPADO
                </span>
              </div>

              <h2 className="font-display text-[28px] sm:text-3xl font-bold text-[var(--text-primary)] leading-tight max-w-sm">
                Automação financeira que fecha o mês no prazo
              </h2>

              <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] max-w-md">
                Chega de planilhas manuais e conciliações que levam dias. O ContaFlow integra seus dados financeiros, automatiza lançamentos e gera relatórios em tempo real.
              </p>

              <ul className="space-y-3">
                {[
                  'Conciliação bancária automática',
                  'Integração com Open Banking BR',
                  'Relatórios e dashboards em tempo real',
                  'Alertas inteligentes e anomalias',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] text-[var(--text-secondary)]">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[9px] font-bold text-[var(--accent)]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — dashboard card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-[var(--text-muted)]">ContaFlow · Dashboard</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">Entradas</span>
                  <span className="font-display text-xl font-bold text-green-400">R$ 84.200</span>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">Saídas</span>
                  <span className="font-display text-xl font-bold text-[var(--accent)]">R$ 31.450</span>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
                <div className="mb-2.5 flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>Conciliação automática</span>
                  <span className="text-green-400">247/250 itens</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[98.8%] rounded-full bg-[var(--accent)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Conte-nos sobre seus desafios e descubra como podemos ajudar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row items-center justify-center">
              <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                Solicitar Cotação Gratuita
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/envie-sua-dor" className="btn-secondary inline-flex items-center px-6 py-3 text-sm font-semibold">
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
