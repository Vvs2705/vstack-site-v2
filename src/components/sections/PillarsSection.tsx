'use client'

import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { AutomationIcon, AIIcon, IntegrationIcon, SaaSIcon } from '@/components/ui/AnimatedIcon'

const PILLARS = [
  {
    icon: AutomationIcon,
    iconDelay: 0,
    title: 'Automação de Processos',
    description: 'Você para de depender de planilha, tarefa manual e retrabalho. Seu time ganha horas por semana e o processo roda com consistência — mesmo quando ninguém está olhando.',
    href: '/automacao-de-processos',
    ctaLabel: 'Ver automação de processos',
  },
  {
    icon: AIIcon,
    iconDelay: 0.15,
    title: 'Inteligência Artificial',
    description: 'Seu negócio para de desperdiçar dados que já tem. Agentes de IA classificam, analisam e tomam decisões de rotina para você — integrados ao processo real, não a um chatbot genérico.',
    href: '/agentes-de-ia',
    ctaLabel: 'Ver IA aplicada',
  },
  {
    icon: IntegrationIcon,
    iconDelay: 0.3,
    title: 'Integração de Sistemas',
    description: 'Seus sistemas param de viver em mundos separados. ERP, CRM, banco e ferramentas internas passam a falar a mesma língua — sem exportação manual, sem dados desatualizados.',
    href: '/integracao-de-sistemas',
    ctaLabel: 'Ver integração de sistemas',
  },
  {
    icon: SaaSIcon,
    iconDelay: 0.45,
    title: 'Produtos SaaS',
    description: 'Você para de adaptar seu negócio a software de prateleira que não serve. Construímos exatamente o que a sua operação precisa, com arquitetura que aguenta crescer junto com você.',
    href: '/sistemas-sob-medida',
    ctaLabel: 'Ver sistemas sob medida',
  },
]

export default function PillarsSection() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeInUp>
            <SectionHeader
              eyebrow="O que resolvemos"
              title="Cada entrega começa por um gargalo real"
              description="Não vendemos tecnologia por tecnologia. Identificamos onde sua operação trava, propõe a solução mais direta e entregamos o que realmente muda o resultado — sem enrolação."
            />
          </FadeInUp>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2" delay={0.05}>
            {PILLARS.map(({ icon: Icon, iconDelay, title, description, href, ctaLabel }) => (
              <StaggerItem key={title}>
                <Surface
                  as="a"
                  href={href}
                  interactive
                  className="group relative flex flex-col overflow-hidden p-6 h-full cursor-pointer"
                >
                  {/* Top accent line — slides in on hover */}
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="mb-5">
                    <Icon size={48} delay={iconDelay} />
                  </div>

                  <h3 className="font-display text-lg font-bold text-[var(--text-1)]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{description}</p>

                  {/* Read more arrow — fades in on hover */}
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {ctaLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Surface>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}
