import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Layers, ShieldAlert, CalendarClock, CheckCircle2, Shield, Lock, FileText, Receipt } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FiscWiseFAQSection from '@/components/fiscwise/FiscWiseFAQSection'
import FiscWiseComparisonSection from '@/components/fiscwise/FiscWiseComparisonSection'
import CTASection from '@/components/sections/CTASection'
import { Container, Section, Surface, SectionHeader } from '@/components/primitives/Layout'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbList } from '@/lib/structured-data'
import { FISCWISE_FAQ, COMPETITOR_COMPARISON } from '@/lib/fiscwise-faq'

const APP_URL = 'https://www.fiscwise.com.br'
const SITE_URL = 'https://www.vstack-solutions.com.br'

const META_TITLE = 'Sistema para escritório de contabilidade com IA — FiscWise'
const META_DESCRIPTION =
  'FiscWise: o sistema que unifica a operação do escritório de contabilidade — cofre de certificados digitais A1/A3, NFS-e, obrigações fiscais, guias e honorários, com IA. Plano gratuito.'

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    'sistema para escritório de contabilidade',
    'software para contador',
    'sistema de gestão contábil',
    'emissão de NFS-e',
    'gestão de certificados digitais',
    'cofre de certificados digitais',
    'controle de obrigações fiscais',
    'calendário de obrigações acessórias',
    'cobrança de honorários contábeis',
    'portal do cliente contabilidade',
  ],
  alternates: { canonical: `${SITE_URL}/fiscwise` },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}/fiscwise`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
}

const fiscwiseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FiscWise',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Sistema de gestão para escritórios de contabilidade: cofre de certificados digitais A1/A3, emissão de NFS-e, calendário de obrigações fiscais, guias DAS/DARF/GPS/ISS, cobrança de honorários, portal do cliente e IA fiscal.',
  url: `${SITE_URL}/fiscwise`,
  provider: {
    '@type': 'Organization',
    name: 'V-STACK SOLUTIONS',
    url: SITE_URL,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
    description: 'Plano gratuito para começar — sem cartão de crédito',
  },
  featureList: [
    'Cofre de certificados digitais A1/A3 com alerta de validade',
    'Emissão de NFS-e multi-município',
    'Calendário de obrigações fiscais por regime, CNAE e município',
    'Controle de guias DAS, DARF, GPS e ISS',
    'Integração com e-CAC / Receita Federal',
    'Portal do cliente self-service',
    'Cobrança de honorários com régua no WhatsApp',
    'IA fiscal com masking de dados (LGPD)',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FISCWISE_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.replace(/\n\n/g, ' '),
    },
  })),
}

const breadcrumbJsonLd = breadcrumbList([
  { name: 'Início', url: '/' },
  { name: 'FiscWise', url: '/fiscwise' },
])

const PAIN_POINTS = [
  {
    icon: Layers,
    title: 'Quatro sistemas, quatro mensalidades',
    description:
      'ERP contábil, cofre de certificado, automação fiscal e cobrança — cada um numa aba, com dados que não conversam e custos que se somam todo mês.',
  },
  {
    icon: ShieldAlert,
    title: 'Certificado que vence sem aviso',
    description:
      'Numa carteira grande vence cerca de um certificado por dia. Um A1 expirado trava a emissão de notas — e você costuma descobrir quando o cliente liga.',
  },
  {
    icon: CalendarClock,
    title: 'Prazos fiscais espalhados',
    description:
      'Obrigações em planilha, vencimentos no papel e o risco de multa por uma entrega perdida no meio de dezenas de clientes e regimes diferentes.',
  },
]

const FEATURES = [
  {
    title: 'Motor de obrigações fiscais',
    description:
      'Calendarização automática por regime tributário, CNAE, estado e município, com checklist de documentos e alertas de prazo para toda a carteira.',
    highlight: 'Por regime e município',
  },
  {
    title: 'Cofre de certificados A1/A3',
    description:
      'Armazenamento criptografado dos certificados digitais com alerta de validade (30 e 15 dias) e trilha de auditoria de quem usou, quando e onde.',
    highlight: 'Alerta de validade',
  },
  {
    title: 'Emissão de NFS-e',
    description:
      'Emita, cancele e baixe NFS-e de forma centralizada — com ou sem a NFS-e Nacional, em qualquer município, sem alternar entre portais.',
    highlight: 'Multi-município',
  },
  {
    title: 'Guias DAS, DARF, GPS e ISS',
    description:
      'Registro e acompanhamento das guias de impostos por cliente, com status de pagamento e pendências visíveis em tempo real na carteira inteira.',
    highlight: 'Controle de pagamento',
  },
  {
    title: 'e-CAC e Receita integrados',
    description:
      'Consulta de situação fiscal, procurações eletrônicas e caixa postal da Receita — acompanhamento fiscal de cada cliente sem sair do sistema.',
    highlight: 'Situação fiscal',
  },
  {
    title: 'Portal do cliente',
    description:
      'Área self-service por cliente: envia documentos, baixa notas e acompanha guias — reduzindo o vai-e-volta e o backlog do escritório.',
    highlight: 'Self-service',
  },
  {
    title: 'Honorários e cobrança',
    description:
      'Controle de honorários e inadimplência com régua de cobrança automática pelo WhatsApp, o canal onde o cliente realmente responde.',
    highlight: 'Régua no WhatsApp',
  },
  {
    title: 'IA fiscal operacional',
    description:
      'Leitura e classificação de documentos, recomendação de regime e priorização das obrigações do dia — com masking de CPF/CNPJ por padrão (LGPD).',
    highlight: 'Com masking LGPD',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Cadastre o escritório e os clientes',
    description: 'Importe a carteira de clientes em lote e configure os usuários da sua equipe.',
  },
  {
    step: '02',
    title: 'Suba os certificados no cofre',
    description: 'Os certificados A1/A3 entram no cofre criptografado e o monitoramento de validade começa na hora.',
  },
  {
    step: '03',
    title: 'Configure regimes e obrigações',
    description: 'O motor calendariza as obrigações de cada cliente conforme regime, CNAE e município.',
  },
  {
    step: '04',
    title: 'Opere no piloto automático',
    description: 'Prazos, guias, NFS-e e honorários com alertas e IA. Sua equipe foca nas exceções, não na rotina.',
  },
]

const PLANS = [
  {
    name: 'Gratuito',
    price: 'R$ 0',
    period: '/mês',
    description: 'Para começar e testar com a carteira inicial.',
    features: [
      'Calendário de obrigações fiscais',
      'Controle de guias (DAS/DARF/GPS/ISS)',
      'Cofre de certificados (limite inicial)',
      'Cadastro de clientes',
    ],
    cta: 'Criar conta grátis',
    href: APP_URL,
  },
  {
    name: 'Profissional',
    price: 'sob consulta',
    description: 'Para escritórios em crescimento que querem tudo num lugar só.',
    features: [
      'Clientes ilimitados',
      'Emissão de NFS-e multi-município',
      'Portal do cliente',
      'IA fiscal',
      'Cobrança de honorários (WhatsApp)',
    ],
    highlighted: true,
    cta: 'Falar com especialista',
    href: '/cotacao?produto=fiscwise',
  },
  {
    name: 'Escritório',
    price: 'sob consulta',
    description: 'Para alto volume e operações de BPO fiscal/contábil.',
    features: [
      'Multiusuário com permissões finas',
      'Importação em lote',
      'Relatórios de produtividade',
      'Onboarding assistido',
      'Suporte dedicado',
    ],
    cta: 'Falar com especialista',
    href: '/cotacao?produto=fiscwise',
  },
]

export default function FiscWisePage() {
  return (
    <>
      <JsonLd data={fiscwiseJsonLd} />
      <JsonLd data={faqJsonLd} />
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
                  Plataforma em operação · feita para contadores
                </div>

                <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[var(--text-1)] sm:text-5xl">
                  Toda a operação do seu escritório de contabilidade em um só sistema.
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-[16px] leading-8 text-[var(--text-2)]">
                  O FiscWise reúne certificados digitais, emissão de NFS-e, obrigações fiscais, guias e cobrança de
                  honorários numa só plataforma — com IA que antecipa prazos e pendências. Um sistema no lugar de quatro.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={APP_URL} target="_blank" rel="noopener" className="btn-primary px-6 py-3.5 text-[14px]">
                    Criar conta grátis
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/cotacao?produto=fiscwise" className="btn-outline px-6 py-3.5 text-[14px]">
                    Falar com especialista
                  </Link>
                </div>

                <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                  <Stat value="4 → 1" label="ferramentas numa só plataforma" />
                  <Stat value="A1/A3" label="cofre com alerta de validade" />
                  <Stat value="NFS-e" label="em qualquer município" />
                </div>
              </div>

              {/* Painel ilustrativo do produto (self-contained, sem dependência externa) */}
              <HeroPanel />
            </div>
          </Container>
        </section>

        {/* Pain points */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">O problema</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                A operação do contador virou uma colcha de retalhos.
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
                Tudo o que um escritório de contabilidade precisa, num lugar só.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]">
                Cada módulo elimina uma ferramenta avulsa do seu dia a dia — do cofre de certificados à cobrança de honorários.
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

        {/* How it works */}
        <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">Como funciona</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Operacional em poucos dias — não em meses.
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

        {/* Diferenciais competitivos */}
        <Section tone="default" spacing="lg">
          <Container>
            <SectionHeader
              eyebrow="Por que o FiscWise"
              title="Um sistema no lugar de quatro"
              description="Enquanto ERPs contábeis são pesados, e os cofres de certificado e a automação fiscal são produtos avulsos, o FiscWise entrega o conjunto completo — com a simplicidade e o preço de quem nasceu na nuvem."
            />
            <FiscWiseComparisonSection comparisons={COMPETITOR_COMPARISON} />
          </Container>
        </Section>

        {/* Planos */}
        <Section tone="muted" spacing="xl" className="border-y border-[var(--border)]">
          <Container>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-4">Planos</p>
              <h2 className="font-display text-balance text-3xl font-bold text-[var(--text-1)] sm:text-4xl">
                Preço fixo e previsível, sem taxa por nota.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-2)]">
                Comece no plano gratuito. Os planos pagos não cobram por NF-e emitida nem por guia processada — quanto mais a carteira cresce, mais barato fica por cliente.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {PLANS.map((plan) => (
                <Surface
                  key={plan.name}
                  className="flex flex-col p-7"
                  style={plan.highlighted ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent)' } : undefined}
                >
                  {plan.highlighted && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      Mais escolhido
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-[var(--text-1)]">{plan.name}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-[var(--text-2)]">{plan.description}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-black text-[var(--text-1)]">{plan.price}</span>
                    {plan.period && <span className="text-[13px] text-[var(--text-3)]">{plan.period}</span>}
                  </div>
                  <ul className="mt-5 grid flex-1 gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] leading-6 text-[var(--text-2)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CtaLink href={plan.href} highlighted={plan.highlighted}>
                    {plan.cta}
                  </CtaLink>
                </Surface>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-6 text-[var(--text-3)]">
              Os valores dos planos pagos são definidos conforme o porte da carteira. Fale com a gente para uma proposta sob medida.
            </p>
          </Container>
        </Section>

        {/* Segurança / LGPD */}
        <Section spacing="xl">
          <Container size="md">
            <Surface className="p-8 sm:p-12">
              <Shield className="mb-5 h-10 w-10 text-[var(--accent)]" />
              <h2 className="font-display text-balance text-2xl font-bold text-[var(--text-1)] sm:text-3xl">
                Segurança e LGPD não são opcionais.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--text-2)]">
                Os dados dos seus clientes ficam isolados por escritório no nível do banco (Row-Level Security), com
                criptografia em trânsito e em repouso e acesso por menor privilégio.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Lock, text: 'Criptografia em trânsito (TLS) e em repouso' },
                  { icon: Shield, text: 'Isolamento multi-tenant por escritório (RLS)' },
                  { icon: CheckCircle2, text: 'Masking de CPF/CNPJ na IA, conforme a LGPD' },
                  { icon: CheckCircle2, text: 'Exclusão de dados e auditoria de acessos' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-[13px] leading-6 text-[var(--text-1)]">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </Surface>
          </Container>
        </Section>

        {/* FAQ (AEO) */}
        <Section tone="muted" spacing="lg" className="border-t border-[var(--border)]">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SectionHeader
                eyebrow="Perguntas frequentes"
                title="O que contadores perguntam sobre o FiscWise"
                description="Respostas diretas sobre certificados, NFS-e, obrigações, preço e segurança."
              />
              <div className="mt-10">
                <FiscWiseFAQSection faqs={FISCWISE_FAQ} />
              </div>
            </div>
          </Container>
        </Section>

        <CTASection
          headline="Pronto para unificar a operação do seu escritório?"
          description="Crie sua conta gratuita em minutos ou fale com um especialista para migrar sua carteira para o FiscWise."
          ctaPrimaryLabel="Criar conta grátis"
          ctaPrimaryHref={APP_URL}
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

function HeroPanel() {
  const rows = [
    { icon: ShieldAlert, label: 'Certificado A1 · Construtora Lima', meta: 'vence em 12 dias', tone: 'warn' },
    { icon: FileText, label: 'NFS-e a emitir', meta: '8 notas', tone: 'accent' },
    { icon: CalendarClock, label: 'DEFIS · entrega', meta: 'em 5 dias', tone: 'accent' },
    { icon: Receipt, label: 'Honorários em atraso', meta: '3 clientes', tone: 'danger' },
  ]
  const toneStyles: Record<string, string> = {
    warn: 'border-warning/30 bg-warning/10 text-warning',
    accent: 'border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]',
    danger: 'border-danger/30 bg-danger/10 text-danger',
  }
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-[var(--accent-muted)] opacity-60 blur-2xl" />
      <Surface className="p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="text-[12px] font-bold text-[var(--text-1)]">FiscWise · Painel do contador</span>
          </div>
          <span className="rounded-full bg-[var(--bg-deep)] px-2 py-0.5 text-[10px] font-semibold text-[var(--text-3)]">Hoje</span>
        </div>
        <div className="grid gap-2.5">
          {rows.map(({ icon: Icon, label, meta, tone }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-[var(--radius-btn)] border border-[var(--border)] bg-[var(--bg)] p-3"
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${toneStyles[tone]}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex-1 text-[12.5px] font-medium leading-4 text-[var(--text-1)]">{label}</span>
              <span className="whitespace-nowrap text-[11px] font-semibold text-[var(--text-2)]">{meta}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-[var(--radius-btn)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-3">
          <span className="flex items-center gap-2 text-[12px] font-semibold text-[var(--text-1)]">
            <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
            Obrigações da carteira em dia
          </span>
          <span className="font-display text-[15px] font-black text-[var(--accent)]">92%</span>
        </div>
      </Surface>
    </div>
  )
}

function CtaLink({
  href,
  highlighted,
  children,
}: {
  href: string
  highlighted?: boolean
  children: ReactNode
}) {
  const className = `mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 text-[13px] font-semibold transition ${
    highlighted
      ? 'bg-[var(--accent)] text-white hover:opacity-90'
      : 'border border-[var(--border-strong)] text-[var(--text-1)] hover:border-[var(--border-hover)]'
  }`
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
