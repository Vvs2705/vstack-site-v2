import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Termos de Uso — V-STACK SOLUTIONS',
  description: 'Termos e condições de uso dos serviços da V-STACK SOLUTIONS.',
}

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Termos de Uso
          </h1>
          <p className="text-[var(--text-secondary)] mb-12">
            Última atualização: abril de 2026
          </p>

          <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar o site da V-STACK SOLUTIONS (vstack-solutions.com.br), você concorda
                com estes Termos de Uso. Se não concordar com qualquer parte, por favor não utilize
                nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                2. Uso do Site
              </h2>
              <p className="mb-3">Você concorda em usar este site apenas para fins legais e de acordo com estes termos. É proibido:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar o site de forma que viole leis brasileiras ou internacionais</li>
                <li>Transmitir material publicitário não solicitado ou spam</li>
                <li>Tentar acesso não autorizado a sistemas ou dados</li>
                <li>Interferir na operação normal do site</li>
                <li>Fornecer informações falsas nos formulários</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                3. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site — incluindo textos, logos, imagens, código e design — é
                propriedade da V-STACK SOLUTIONS e protegido por direitos autorais. A reprodução sem
                autorização expressa é proibida.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                4. Assistente Virtual
              </h2>
              <p>
                Nosso chat é alimentado por inteligência artificial (OpenAI GPT). As respostas são
                geradas automaticamente e têm caráter informativo. Não constituem proposta formal,
                contrato ou garantia de serviço. Preços e prazos definitivos são acordados em
                proposta formal.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                A V-STACK SOLUTIONS não se responsabiliza por danos indiretos, incidentais ou
                consequentes resultantes do uso ou impossibilidade de uso do site. O site é
                fornecido "como está", sem garantias expressas ou implícitas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                6. Modificações
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças
                significativas serão comunicadas. O uso continuado após alterações constitui
                aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                7. Lei Aplicável
              </h2>
              <p>
                Estes termos são regidos pela legislação brasileira. Eventuais disputas serão
                resolvidas no foro da Comarca de São Paulo, SP.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                8. Contato
              </h2>
              <p>
                Dúvidas sobre estes termos?{' '}
                <Link href="/contato" className="text-[var(--accent)] hover:underline">
                  Entre em contato conosco.
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
