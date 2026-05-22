import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, CheckCircle2, Compass, Layers3, ShieldCheck, Target, Workflow } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'

// Lazy-load heavy below-fold sections
const OriginStorySection = dynamic(() => import('@/components/sections/OriginStorySection'))
const TeamSection = dynamic(() => import('@/components/sections/TeamSection'))

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a V-STACK SOLUTIONS: uma empresa de tecnologia focada em automação, IA, integrações e sistemas sob medida para operações que precisam escalar.',
  openGraph: {
    title: 'Sobre | V-STACK SOLUTIONS',
    description:
      'Tecnologia sob medida para reduzir retrabalho, integrar sistemas e transformar operação em vantagem competitiva.',
  },
}

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Diagnóstico antes de tecnologia',
    text: 'Entendemos gargalos, riscos e impacto financeiro antes de propor arquitetura ou ferramenta.',
  },
  {
    icon: Layers3,
    title: 'Construção modular',
    text: 'Entregas em blocos evolutivos, com base técnica preparada para crescer sem virar dívida.',
  },
  {
    icon: ShieldCheck,
    title: 'Operação confiável',
    text: 'Segurança, rastreabilidade e manutenção fazem parte do projeto desde o primeiro desenho.',
  },
]

const PROCESS = [
  'Mapeamento do processo atual e pontos de perda',
  'Definição do fluxo ideal, integrações e indicadores',
  'Entrega incremental com validação do usuário real',
  'Monitoramento, suporte e evolução contínua',
]

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <Section spacing="xl" className="border-b border-[var(--border)]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="eyebrow mb-4">Quem somos</p>
                <h1 className="font-display text-balance text-[38px] font-extrabold leading-tight tracking-[-0.025em] text-[var(--text-1)] sm:text-[54px]">
                  Engenharia aplicada a problemas reais de operação.
                </h1>
                <p className="mt-6 max-w-xl text-[16px] leading-8 text-[var(--text-2)]">
                  A V-STACK SOLUTIONS combina automação, inteligência artificial, integração de sistemas e desenvolvimento sob medida para empresas que querem menos retrabalho e mais controle operacional.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/cotacao" className="btn-primary px-6 py-3.5 text-[14px]">
                    Solicitar diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/solucoes" className="btn-secondary px-6 py-3.5 text-[14px]">
                    Ver soluções
                  </Link>
                </div>
              </div>

              <Surface className="p-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Nossa posição
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold text-[var(--text-1)]">
                  Não vendemos tecnologia genérica.
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-[var(--text-2)]">
                  Entramos onde processos dependem de planilha, retrabalho, conferência manual, sistemas que não conversam ou decisões tomadas sem dados confiáveis.
                </p>
                <div className="mt-6 grid gap-3">
                  {PROCESS.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-[var(--text-2)]">
                      <CheckCircle2 className="h-5 w-5 flex-none text-[var(--accent)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          </Container>
        </Section>

        <Section tone="deep">
          <Container>
            <SectionHeader
              eyebrow="Como pensamos"
              title="A estética do site precisa refletir a forma como entregamos: clareza, precisão e confiança."
              description="Cada projeto nasce com uma pergunta simples: qual parte da operação precisa ficar mais clara, rápida ou previsível?"
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PRINCIPLES.map(({ icon: Icon, title, text }) => (
                <Surface key={title} interactive className="p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{text}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <SectionHeader
                eyebrow="Para quem"
                title="Empresas que sentem a operação crescer mais rápido que os processos."
                description="O melhor cliente para a V-STACK não procura apenas uma tela bonita. Procura ganhar controle, velocidade e previsibilidade."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Times financeiros que fecham o mês no limite',
                  'Operações com múltiplos sistemas desconectados',
                  'Empresas com tarefas repetitivas e alto volume manual',
                  'Negócios que precisam transformar conhecimento interno em software',
                ].map((item) => (
                  <Surface key={item} className="flex items-start gap-3 p-4">
                    <Compass className="mt-0.5 h-5 w-5 flex-none text-[var(--accent)]" />
                    <p className="text-[14px] leading-6 text-[var(--text-2)]">{item}</p>
                  </Surface>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <OriginStorySection />

        <TeamSection />

        <Section tone="deep" className="border-t border-[var(--border)]">
          <Container size="md">
            <div className="text-center">
              <Workflow className="mx-auto mb-5 h-10 w-10 text-[var(--accent)]" />
              <h2 className="font-display text-3xl font-bold text-[var(--text-1)]">
                Quer saber se faz sentido automatizar agora?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-8 text-[var(--text-2)]">
                Conte o cenário atual. Nós ajudamos a separar o que deve virar automação, integração, sistema ou apenas melhoria de processo.
              </p>
              <Link href="/envie-sua-dor" className="btn-primary mt-8 px-7 py-3.5 text-[14px]">
                Enviar minha dor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
