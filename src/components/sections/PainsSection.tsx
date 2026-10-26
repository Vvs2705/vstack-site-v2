import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeader } from '@/components/primitives/Layout'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'

// Dor (nas palavras do cliente) → o que resolve. Mesmas dores das artes da campanha.
const PAINS = [
  {
    pain: 'O cliente procura no Google e encontra o concorrente.',
    fix: 'Site que aparece nas buscas e leva para o seu WhatsApp',
    href: '/criacao-de-sites',
  },
  {
    pain: 'Você tem site, mas ele não traz nenhum contato.',
    fix: 'Site novo, rápido e pensado para converter',
    href: '/criacao-de-sites',
  },
  {
    pain: 'A mesma pergunta chega o dia inteiro no WhatsApp.',
    fix: 'Atendimento com IA que responde com contexto',
    href: '/agentes-de-ia',
  },
  {
    pain: 'A empresa roda em planilhas soltas e ninguém sabe qual é a certa.',
    fix: 'Sistema sob medida com tudo num lugar só',
    href: '/sistemas-sob-medida',
  },
  {
    pain: 'Seu time copia e cola dados de um sistema para outro.',
    fix: 'Integração e automação entre os seus sistemas',
    href: '/integracao-de-sistemas',
  },
  {
    pain: 'Seu evento ou campanha precisa chamar atenção.',
    fix: 'Jogo sob encomenda com a cara da sua marca',
    href: '/jogos',
  },
]

export default function PainsSection() {
  return (
    <Section spacing="lg" id="dores">
      <Container>
        <FadeInUp>
          <SectionHeader
            eyebrow="Você se reconhece?"
            title="Problemas que a gente resolve."
            description="Escolha o que mais pesa hoje. Cada um tem um caminho direto, e você não precisa entender de tecnologia para começar."
            align="center"
            className="mb-12"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
          {PAINS.map(({ pain, fix, href }) => (
            <StaggerItem key={pain} className="h-full">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--accent-border)]"
              >
                <p className="flex-1 text-[17px] font-semibold leading-7 text-[var(--text-1)]">“{pain}”</p>
                <p className="mt-5 flex items-start gap-2 border-t border-[var(--border)] pt-4 text-[14px] font-semibold leading-6 text-[var(--accent)]">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  {fix}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
