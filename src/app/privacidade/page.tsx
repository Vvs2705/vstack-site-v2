import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Política de Privacidade — V-STACK SOLUTIONS',
  description: 'Como coletamos, usamos e protegemos seus dados pessoais.',
}

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Política de Privacidade
          </h1>
          <p className="text-[var(--text-secondary)] mb-12">
            Última atualização: abril de 2026
          </p>

          <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                1. Quem somos
              </h2>
              <p>
                V-STACK SOLUTIONS é uma empresa de tecnologia especializada em automação de processos,
                inteligência artificial, integração de sistemas e desenvolvimento de software. Nossa
                sede está em São Paulo, SP, Brasil.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                2. Dados que coletamos
              </h2>
              <p className="mb-3">Coletamos apenas os dados necessários para prestar nossos serviços:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome, email e telefone (formulários de contato e cotação)</li>
                <li>Informações sobre sua empresa e projeto (formulário de cotação)</li>
                <li>Descrição de problemas ou desafios (formulário &quot;Envie Sua Dor&quot;)</li>
                <li>Histórico de conversas com nosso assistente virtual</li>
                <li>Dados de navegação (IP, user-agent) para segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                3. Como usamos seus dados
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder suas solicitações de contato e cotação</li>
                <li>Enviar comunicações relacionadas ao serviço solicitado</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                4. Compartilhamento de dados
              </h2>
              <p>
                Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto com
                prestadores de serviço necessários para operar nossa plataforma (ex: Resend para
                email, Neon/Supabase para banco de dados, OpenAI para o assistente virtual). Todos
                tratam os dados conforme suas próprias políticas de privacidade e a LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                5. Seus direitos (LGPD)
              </h2>
              <p className="mb-3">Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar anonimização, bloqueio ou eliminação</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="mt-3">
                Para exercer esses direitos, entre em contato:{' '}
                <a href="mailto:privacidade@vstack-solutions.com.br" className="text-[var(--accent)] hover:underline">
                  privacidade@vstack-solutions.com.br
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                6. Segurança
              </h2>
              <p>
                Utilizamos criptografia TLS, headers de segurança HTTP, rate limiting e controles
                de acesso para proteger seus dados. Dados sensíveis nunca são armazenados em texto
                claro.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-4">
                7. Contato
              </h2>
              <p>
                Dúvidas sobre esta política?{' '}
                <Link href="/contato" className="text-[var(--accent)] hover:underline">
                  Entre em contato
                </Link>{' '}
                ou escreva para{' '}
                <a href="mailto:contato@vstack-solutions.com.br" className="text-[var(--accent)] hover:underline">
                  contato@vstack-solutions.com.br
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
