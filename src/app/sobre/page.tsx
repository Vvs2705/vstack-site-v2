import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import { Target, Users, Rocket, Award, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós | V-STACK SOLUTIONS',
  description: 'Conheça a V-STACK SOLUTIONS. Somos especialistas em transformação digital, automação e inteligência artificial para empresas.',
}

export default function SobrePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-[var(--bg-primary)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl sm:text-6xl font-bold gradient-text mb-6">
                Transformamos Desafios em Soluções
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Somos uma empresa de tecnologia especializada em automação, inteligência artificial e integração de sistemas. 
                Nossa missão é impulsionar a eficiência e inovação das empresas através de soluções tecnológicas inteligentes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Missão',
                  description: 'Transformar processos complexos em soluções simples e eficientes, capacitando empresas a alcançarem seus objetivos através da tecnologia.',
                },
                {
                  icon: Rocket,
                  title: 'Visão',
                  description: 'Ser referência em transformação digital no Brasil, reconhecida pela excelência técnica e impacto positivo nos negócios dos nossos clientes.',
                },
                {
                  icon: Award,
                  title: 'Valores',
                  description: 'Inovação contínua, transparência, foco em resultados, excelência técnica e compromisso com o sucesso dos nossos clientes.',
                },
              ].map((item, idx) => (
                <div key={idx} className="card-vstack text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] accent-glow">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    A V-STACK SOLUTIONS nasceu da percepção de que muitas empresas enfrentam desafios operacionais 
                    que poderiam ser resolvidos com tecnologia adequada. Fundada por especialistas em desenvolvimento 
                    de software e automação, começamos com o objetivo de democratizar o acesso a soluções tecnológicas 
                    de ponta.
                  </p>
                  <p>
                    Ao longo dos anos, desenvolvemos expertise em automação de processos, inteligência artificial e 
                    integração de sistemas. Trabalhamos com empresas de diversos setores, desde startups até grandes 
                    corporações, sempre com foco em entregar resultados mensuráveis.
                  </p>
                  <p>
                    Hoje, somos reconhecidos pela qualidade técnica, agilidade na entrega e compromisso com o sucesso 
                    dos nossos clientes. Cada projeto é uma oportunidade de aplicar as melhores práticas e tecnologias 
                    mais recentes para resolver problemas reais.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card-vstack p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '150+', label: 'Projetos Entregues' },
                      { value: '80+', label: 'Clientes Ativos' },
                      { value: '5+', label: 'Anos de Mercado' },
                      { value: '98%', label: 'Satisfação' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-display text-4xl font-bold text-[var(--accent)] mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-[var(--text-secondary)]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-vstack p-6 bg-[var(--accent-muted)] border-[var(--accent-border)]">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4">
                    Nossos Diferenciais
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Equipe técnica altamente qualificada',
                      'Metodologia ágil e transparente',
                      'Suporte contínuo pós-implementação',
                      'Foco em ROI e resultados mensuráveis',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-[var(--bg-card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
                Nossa Equipe
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Profissionais experientes e apaixonados por tecnologia, dedicados a entregar soluções de excelência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Desenvolvedores',
                  description: 'Especialistas em múltiplas linguagens e frameworks, sempre atualizados com as últimas tecnologias',
                },
                {
                  icon: Target,
                  title: 'Arquitetos de Soluções',
                  description: 'Profissionais que projetam sistemas escaláveis, seguros e alinhados aos objetivos de negócio',
                },
                {
                  icon: Award,
                  title: 'Consultores',
                  description: 'Especialistas em processos que identificam oportunidades e propõem melhorias estratégicas',
                },
              ].map((role, idx) => (
                <div key={idx} className="card-vstack text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                      <role.icon className="h-7 w-7 text-[var(--accent)]" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {role.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold gradient-text mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Descubra como podemos ajudar sua empresa a alcançar novos patamares
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cotacao" className="btn-primary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                Solicitar Cotação
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contato" className="btn-secondary px-8 py-4 text-lg font-semibold">
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
