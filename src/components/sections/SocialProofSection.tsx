import { Container, Section, SectionHeader } from '@/components/primitives/Layout'
import ProductCard from '@/components/ui/ProductCard'
import { PROOF_PRODUCTS } from '@/lib/social-proof'

/**
 * Produtos/casos. A prova é o que existe: produtos próprios da V-STACK (um em
 * produção, os demais em desenvolvimento). Sem depoimento, logo de cliente ou
 * número de resultado até haver cliente real com autorização por escrito.
 */
export default function SocialProofSection({ tone = 'default' }: { tone?: 'default' | 'muted' | 'deep' }) {
  return (
    <Section id="produtos" tone={tone} spacing="lg" className="border-y border-[var(--border)]">
      <Container>
        <div className="reveal-scroll">
          <SectionHeader
            eyebrow="Produtos que a gente constrói"
            title={
              <>
                Não só construímos software.{' '}
                <span className="text-[var(--accent)]">A gente também opera o nosso.</span>
              </>
            }
            description="A prova de que entregamos não é um logo na parede: são produtos próprios que nós mesmos construímos e mantemos. Um já está em produção e os outros estão em desenvolvimento. Este site também é nosso, do design ao formulário que chega no nosso e-mail."
            className="mb-12 max-w-3xl"
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_PRODUCTS.map((product) => (
            <li key={product.name} className="reveal-scroll">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
