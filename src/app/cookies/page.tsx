import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Política de Cookies — V-STACK SOLUTIONS',
  description: 'Como usamos cookies e tecnologias similares em nosso site.',
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Política de Cookies
          </h1>
          <p className="text-[var(--text-2)] mb-12">
            Última atualização: abril de 2026
          </p>

          <div className="space-y-10 text-[var(--text-2)] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-1)] mb-4">
                O que são cookies?
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu navegador quando você
                visita um site. Eles nos ajudam a reconhecer sua preferências e melhorar sua
                experiência.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-1)] mb-4">
                Cookies que utilizamos
              </h2>

              <div className="space-y-6">
                <div className="card-vstack p-6 rounded-lg">
                  <h3 className="font-semibold text-[var(--text-1)] mb-2">
                    Cookies Essenciais
                  </h3>
                  <p className="text-sm mb-3">
                    Necessários para o funcionamento básico do site. Não podem ser desativados.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-2 pr-4 font-medium text-[var(--text-1)]">Nome</th>
                        <th className="text-left py-2 pr-4 font-medium text-[var(--text-1)]">Finalidade</th>
                        <th className="text-left py-2 font-medium text-[var(--text-1)]">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-2 pr-4 font-mono text-xs">admin_token</td>
                        <td className="py-2 pr-4">Autenticação do painel administrativo</td>
                        <td className="py-2">8 horas</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">vstack-cookie-consent</td>
                        <td className="py-2 pr-4">Armazena sua preferência de cookies</td>
                        <td className="py-2">1 ano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="card-vstack p-6 rounded-lg">
                  <h3 className="font-semibold text-[var(--text-1)] mb-2">
                    Cookies de Analytics (opcionais)
                  </h3>
                  <p className="text-sm mb-3">
                    Nos ajudam a entender como o site é usado. Ativados apenas com seu consentimento.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-2 pr-4 font-medium text-[var(--text-1)]">Serviço</th>
                        <th className="text-left py-2 pr-4 font-medium text-[var(--text-1)]">Finalidade</th>
                        <th className="text-left py-2 font-medium text-[var(--text-1)]">Política</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Análise de tráfego e comportamento</td>
                        <td className="py-2">
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                            Ver
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-1)] mb-4">
                Como gerenciar cookies
              </h2>
              <p className="mb-3">Você pode controlar os cookies de várias formas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text-1)]">Banner do site:</strong>{' '}
                  Ao entrar no site, você pode aceitar todos ou apenas os essenciais
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">Navegador:</strong>{' '}
                  A maioria dos navegadores permite bloquear ou excluir cookies nas configurações
                </li>
                <li>
                  <strong className="text-[var(--text-1)]">Google Analytics:</strong>{' '}
                  Use o{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                    opt-out do Google
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-1)] mb-4">
                Dúvidas
              </h2>
              <p>
                Perguntas sobre nossa política de cookies?{' '}
                <Link href="/contato" className="text-[var(--accent)] hover:underline">
                  Entre em contato.
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
