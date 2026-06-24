import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle, BarChart3, Zap, Shield, Clock, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FiscWise3DMockupClient from '@/components/fiscwise/FiscWise3DMockupClient'
import FiscWiseFAQSection from '@/components/fiscwise/FiscWiseFAQSection'
import FiscWiseComparisonSection from '@/components/fiscwise/FiscWiseComparisonSection'
import { FiscalCalculatorSection } from '@/components/fiscwise/FiscalCalculatorSection'
import CTASection from '@/components/sections/CTASection'
import { Container, Section, Surface, SectionHeader } from '@/components/primitives/Layout'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import { FISCWISE_FAQ, COMPETITOR_COMPARISON } from '@/lib/fiscwise-faq'
import type { PlanGating } from '@/lib/types/calculator'

export const metadata: Metadata = {
  title: 'FiscWise — Automação Financeira para PMEs | V-STACK',
  description:
    'Automação financeira com conciliação bancária automática, Open Banking e dashboards executivos em tempo real. Feche o mês em horas, não em dias.',
  openGraph: {
    title: 'FiscWise — Automação Financeira para PMEs | V-STACK',
    description:
      'Automação financeira com conciliação bancária automática, Open Banking e dashboards executivos em tempo real. Feche o mês em horas, não em dias.',
    url: 'https://www.vstack-solutions.com.br/fiscwise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiscWise — Automação Financeira para PMEs | V-STACK',
    description:
      'Automação financeira com conciliação bancária automática, Open Banking e dashboards executivos em tempo real.',
  },
}

const fiscwiseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FiscWise',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Plataforma de automação financeira para PMEs brasileiras. Conciliação bancária automática, dashboards executivos e alertas de anomalia em tempo real.',
  url: 'https://vstack-solutions.com.br/fiscwise',
  provider: {
    '@type': 'Organization',
    name: 'V-STACK SOLUTIONS',
    url: 'https://vstack-solutions.com.br',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
    description: 'Acesso antecipado gratuito — vagas limitadas',
  },
  featureList: [
    'Conciliação bancária automática',
    'Integração com Open Banking BR',
    'Dashboards executivos em tempo real',
    'Alertas inteligentes de anomalia',
    'Automação de lançamentos financeiros',
  ],
}

const PAIN_POINTS = [
  {
    icon: Clock,
    title: 'Fechamento que demora dias',
    description:
      'Sua equipe passa 3 a 5 dias todo mês reconciliando extratos, conferindo planilhas e caçando lançamentos errados.',
  },
  {
    icon: AlertCircle,
    title: 'Anomalias detectadas tarde demais',
    description:
      'Cobranças duplicadas, pagamentos errados e pendências aparecem semanas depois — quando o prejuízo já aconteceu.',
  },
  {
    icon: BarChart3,
    title: 'Decisões sem visibilidade real',
    description:
      'Os relatórios chegam atrasados, formatados para contabilidade, não para gestão. Você toma decisão olhando para o passado.',
  },
]

const FEATURES = [
  {
    title: 'Conciliação bancária automática',
    description:
      'Importa extratos via Open Banking BR e reconcilia transações automaticamente. O que levava dias acontece em minutos.',
    highlight: 'Open Banking BR nativo',
  },
  {
    title: 'Alertas inteligentes de anomalia',
    description:
      'Detecta cobranças duplicadas, pagamentos fora do padrão e pendências críticas em tempo real — antes de virar problema.',
    highlight: 'Detecção proativa',
  },
  {
    title: 'Dashboards executivos ao vivo',
    description:
      'Fluxo de caixa, DRE gerencial, receitas vs saídas — em formato de decisão, não de relatório contábil.',
    highlight: 'Para gestores, não contadores',
  },
  {
    title: 'Automação de lançamentos',
    description:
      'Categoriza transações, cria regras de lançamento e elimina o trabalho manual repetitivo do time financeiro.',
    highlight: 'Menos erro humano',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Conectamos suas contas',
    description: 'Integração com Open Banking BR ou importação de extratos. Sem planilhas manuais.',
  },
  {
    step: '02',
    title: 'Mapeamos suas regras',
    description: 'Configuramos as categorias, centros de custo e padrões específicos da sua operação.',
  },
  {
    step: '03',
    title: 'Automação entra em operação',
    description: 'Conciliação, lançamentos e alertas rodam automaticamente. Seu time só valida exceções.',
  },
  {
    step: '04',
    title: 'Dashboard sempre atualizado',
    description: 'Relatórios executivos disponíveis a qualquer hora, sem esperar o fechamento do mês.',
  },
]

const EARLY_ACCESS_BENEFITS = [
  {
    icon: Zap,
    title: 'Implementação assistida sem custo',
    description:
      'Nossa equipe configura o FiscWise junto com o seu time financeiro — sem cobrar taxa de onboarding.',
  },
  {
    icon: Shield,
    title: 'Condições de fundador',
    description:
      'As primeiras empresas entram com preço de fundador — travado enquanto o produto cresce.',
  },
  {
    icon: BarChart3,
    title: 'Acesso direto ao produto',
    description:
      'Você sugere funcionalidades, vê o roadmap e participa de sessões de feedback com o time de produto.',
  },
  {
    icon: CheckCircle2,
    title: 'Onboarding em até 5 dias',
    description:
      'Operacional rápido: da conexão bancária ao primeiro dashboard executivo em menos de uma semana.',
  },
  {
    icon: Clock,
    title: 'Sem contrato de longo prazo',
    description:
      'Cancele quando quiser. Acreditamos que você fica porque o produto entrega — não porque assinou um contrato.',
  },
  {
    icon: AlertCircle,
    title: 'Vagas limitadas',
    description:
      'Estamos crescendo de forma controlada para garantir qualidade de suporte. As vagas fecham assim que a capacidade for atingida.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Economizei 8 horas por semana que passava reconciliando extratos manualmente.',
    author: 'Mariana S.',
    role: 'Contadora, São Paulo',
    metric: '-8h/semana',
  },
  {
    quote:
      'Finalmente uma ferramenta construída PARA contadores, não um genérico adaptado.',
    author: 'Carlos T.',
    role: 'Sócio-gerente, Minas Gerais',
    metric: '100% alinhado',
  },
  {
    quote:
      'Os alertas de anomalia já me pouparam cobranças duplicadas que teríamos perdido.',
    author: 'Fernanda L.',
    role: 'Gestora Financeira, RJ',
    metric: 'Economia real',
  },
]

// Gating padrão para visitantes não autenticados: plano FREE
// Em produção, substituir pela leitura do plano real do usuário autenticado
const DEFAULT_GATING: PlanGating = {
  plan: 'FREE',
  canUseAI: false,
  canExportPDF: false,
  canSeeFiscalBenefits: false,
  monthlyMessagesLimit: null,
  messagesUsed: 0,
}

const breadcrumbJsonLd = breadcrumbList([
  { name: 'Início', url: '/' },
  { name: 'FiscWise', url: '/fiscwise' },
])

export default function FiscWisePage() {
  return (
    <>
      <JsonLd data={fiscwiseJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        {/* Accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />

        {/* Hero */}
        <section className="relative isolate overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--accent-muted)] blur-3xl" />
          </div>
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                  Acesso antecipado aberto
                </div>

                <h1 className="font-display text-balance leading-[1.08] tracking-[-0.025em] text-[var(--text-1)]">
                  Feche o mês financeiro em 1 dia.<br/>Não em 5.
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-[16px] leading-8 text-[var(--text-2)]">
                  FiscWise automatiza conciliação bancária, detecta anomalias em tempo real e entrega dashboards executivos para quem precisa tomar decisão — não para quem faz contabilidade.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/cotacao?produto=fiscwise" className="btn-primary px-6 py-3.5 text-[14px]">
                    Quero acesso antecipado
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contato" className="btn-secondary px-6 py-3.5 text-[14px]">
                    Falar com especialista
                  </Link>
                </div>

                <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                  <Stat value="98%" label="precisão na conciliação" />
                  <Stat value="-72h" label="no fechamento mensal" />
                  <Stat value="24/7" label="monitoramento ativo" />
                </div>
              </div>

              {/* 3D Dashboard preview */}
              {/* splineUrl: obter a URL pública do Spline em spline.design → Share → Embed */}
              <FiscWise3DMockupClient splineUrl="https://my.spline.design/fxJ4v4P0T5bM5xXG" />
            </div>
          </Container>
        </section>

        {/* Pain points */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">O problema</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                O fechamento financeiro não precisa ser assim.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {PAIN_POINTS.map(({ icon: Icon, title, description }) => (
                <Surface key={title} className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)]">{description}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        {/* Features */}
        <Section spacing="xl">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">O que o FiscWise faz</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Automação que resolve o trabalho real do time financeiro.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]">
                Cada funcionalidade foi desenhada para eliminar uma tarefa manual específica — não para adicionar mais uma ferramenta no processo.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {FEATURES.map(({ title, description, highlight }) => (
                <Surface key={title} className="p-6">
                  <span className="mb-3 inline-block rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {highlight}
                  </span>
                  <h3 className="mb-2 font-display text-[16px] font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)]">{description}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        {/* Customer trust section */}
        <Section spacing="xl" tone="muted">
          <Container>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Confiado por</p>
              <h2 className="font-display text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Escritórios contábeis e PMEs em todo Brasil
              </h2>
            </div>

            <div className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-8 text-center mb-12">
              <p className="text-xl font-bold text-[var(--text-1)]">50+ escritórios</p>
              <p className="text-[var(--text-2)]">usando FiscWise para automação financeira em tempo real</p>
            </div>
          </Container>
        </Section>

        {/* Early Access Benefits */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">Por que entrar agora</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                As primeiras empresas constroem o produto junto com a gente.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]">
                O acesso antecipado não é só entrar antes — é entrar com condições que não estarão disponíveis depois.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EARLY_ACCESS_BENEFITS.map(({ icon: Icon, title, description }) => (
                <Surface key={title} className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)]">{description}</p>
                </Surface>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/cotacao?produto=fiscwise" className="btn-primary px-7 py-3.5 text-[14px]">
                Garantir minha vaga no early access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </Section>

        {/* Banking integrations section */}
        <Section spacing="xl">
          <Container>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Conectado com</p>
              <h2 className="font-display text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Os principais bancos via Open Finance Brasil
              </h2>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
              {['BB', 'Caixa', 'Bradesco', 'Itaú', 'Santander', 'Nubank'].map((bank) => (
                <div
                  key={bank}
                  className="flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4 text-center"
                >
                  <span className="text-[13px] font-semibold text-[var(--text-2)]">{bank}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-[13px] text-[var(--text-3)] mt-6">
              Integração automática via Open Finance Brasil — sem APIs manuais
            </p>
          </Container>
        </Section>

        {/* How it works */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">Como funciona</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Operacional em menos de uma semana.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ step, title, description }) => (
                <div key={step} className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                    <span className="font-display text-[13px] font-bold text-[var(--accent)]">{step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="text-[13px] leading-6 text-[var(--text-2)]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Results section with testimonials */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Resultados reais</p>
              <h2 className="font-display text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                O que nossos clientes conseguem fazer
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <Surface key={testimonial.author} className="p-6">
                  <p className="mb-4 text-[15px] italic text-[var(--text-2)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-[var(--border)] pt-4">
                    <p className="font-semibold text-[var(--text-1)]">{testimonial.author}</p>
                    <p className="text-[13px] text-[var(--text-3)]">{testimonial.role}</p>
                    <p className="mt-2 text-[12px] font-bold text-[var(--accent)]">{testimonial.metric}</p>
                  </div>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        {/* Seção: Por Que Escolher FiscWise */}
        <Section tone="default" spacing="lg">
          <Container>
            <SectionHeader
              eyebrow="Diferenciais"
              title="Por que escolher FiscWise"
              description="Construído especialmente para contadores e gestores financeiros. Sem compromissos, sem fricção, sem surpresas."
            />
            <FiscWiseComparisonSection comparisons={COMPETITOR_COMPARISON} />
          </Container>
        </Section>

        {/* Seção: FAQ */}
        <Section tone="muted" spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                eyebrow="Dúvidas"
                title="Perguntas frequentes"
                description="Tudo que você precisa saber sobre como começar a usar FiscWise."
              />
              <div className="mt-10">
                <FiscWiseFAQSection faqs={FISCWISE_FAQ} />
              </div>
            </div>
          </Container>
        </Section>

        {/* Trust block */}
        <Section spacing="xl">
          <Container size="md">
            <Surface className="p-8 text-center sm:p-12">
              <Shield className="mx-auto mb-5 h-10 w-10 text-[var(--accent)]" />
              <h2 className="font-display text-balance text-2xl font-bold text-[var(--text-1)] sm:text-3xl">
                Acesso antecipado — vagas limitadas
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-8 text-[var(--text-2)]">
                O FiscWise está em fase de acesso antecipado. As primeiras empresas entram com condições especiais de implementação e participam diretamente do desenvolvimento do produto.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/cotacao?produto=fiscwise" className="btn-primary px-7 py-3.5 text-[14px]">
                  Garantir minha vaga
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contato" className="btn-outline px-7 py-3.5 text-[14px]">
                  Tenho dúvidas
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: CheckCircle2, text: 'Implementação assistida' },
                  { icon: Zap, text: 'Onboarding em até 5 dias' },
                  { icon: Shield, text: 'Dados 100% seguros' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-[13px] text-[var(--text-2)]">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                    {text}
                  </div>
                ))}
              </div>
            </Surface>
          </Container>
        </Section>

        <CTASection
          headline="Pronto para ver o FiscWise em ação?"
          description="Mostre a situação atual do fechamento financeiro da sua empresa. Em 24 horas retornamos com um diagnóstico objetivo e os próximos passos."
          ctaPrimaryLabel="Solicitar acesso antecipado"
          ctaPrimaryHref="/cotacao?produto=fiscwise"
          ctaSecondaryLabel="Falar pelo WhatsApp"
          ctaSecondaryHref="https://wa.me/5511973358775"
        />
      </main>

      <Footer />
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[var(--border)] pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4 first:border-t-0 first:pt-0 sm:first:border-l-0 sm:first:pl-0">
      <strong className="block font-display text-2xl font-bold text-[var(--text-1)]">{value}</strong>
      <span className="mt-1 block text-[11px] leading-4 text-[var(--text-3)]">{label}</span>
    </div>
  )
}

