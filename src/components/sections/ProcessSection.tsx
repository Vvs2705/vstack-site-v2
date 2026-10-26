import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'

const STEPS = [
  {
    title: 'Conversa',
    text: 'Você conta o que precisa pelo WhatsApp ou pelo formulário. Retornamos em até 24 horas úteis.',
  },
  {
    title: 'Proposta',
    text: 'Você recebe escopo, prazo e valor por escrito antes de qualquer desenvolvimento.',
  },
  {
    title: 'Construção',
    text: 'Desenvolvemos por etapas e você aprova cada uma antes de seguir.',
  },
  {
    title: 'No ar',
    text: 'Publicamos, acompanhamos o uso e seguimos com suporte e melhorias.',
  },
]

export default function ProcessSection() {
  return (
    <Section tone="deep" spacing="lg" className="border-y border-[var(--border)]">
      <Container>
        <FadeInUp>
          <SectionHeader
            eyebrow="Como funciona"
            title="Do primeiro “oi” ao projeto no ar."
            description="Sem surpresa no meio do caminho: você sabe o que vai receber, quando e por quanto."
            align="center"
            className="mb-12"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.05}>
          {STEPS.map((step, index) => (
            <StaggerItem key={step.title} className="h-full">
              <Surface className="h-full p-6">
                <span className="text-[32px] font-bold leading-none text-[var(--accent)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-[19px] text-[var(--text-1)]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[var(--text-2)]">{step.text}</p>
              </Surface>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
