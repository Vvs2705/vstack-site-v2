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

      <main className="min-h-screen pt-14 bg-[var(--bg)]">
        {/* Page header */}
        <section className="border-b border-[var(--border)] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium mb-3">
              Quem somos
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] font-bold text-[var(--text-1)] leading-tight max-w-xl mb-4">
              Transformamos desafios em soluções
            </h1>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed max-w-xl">
              Somos especialistas em automação, inteligência artificial e integração de sistemas.
              Nossa missão é impulsionar a eficiência e inovação das empresas com tecnologia de ponta.
            </p>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="py-14 sm:py-16 border-b border-[var(--border)] bg-[var(--bg-deep)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  Icon: Target,
                  title: 'Missão',
                  description: 'Transformar processos complexos em soluções simples e eficientes, capacitando empresas a alcançarem seus objetivos com tecnologia.',
                },
                {
                  Icon: Rocket,
                  title: 'Visão',
                  description: 'Ser referência em transformação digital no Brasil, reconhecida pela excelência técnica e impacto positivo nos negócios dos clientes.',
                },
                {
                  Icon: Award,
                  title: 'Valores',
                  description: 'Inovação contínua, transparência, foco em resultados, excelência técnica e compromisso com o sucesso dos nossos clientes.',
                },
              ].map(({ Icon, title, description }) => (
                <div key={title} className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] mb-4">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-[var(--text-1)] mb-2">{title}</h3>
                  <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story + stats */}
        <section className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="eyebrow mb-3">Nossa história</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-5 leading-tight">
                  De um problema real a uma solução escalável
                </h2>
                <div className="space-y-4 text-[14px] text-[var(--text-2)] leading-relaxed">
                  <p>
                    A V-STACK SOLUTIONS nasceu da percepção de que muitas empresas enfrentam desafios operacionais
                    que poderiam ser resolvidos com tecnologia adequada. Fundada por especialistas em desenvolvimento
                    de software e automação, começamos com o objetivo de democratizar o acesso a soluções tecnológicas de ponta.
                  </p>
                  <p>
                    Desenvolvemos expertise em automação de processos, inteligência artificial e integração de sistemas.
                    Trabalhamos com empresas de diversos setores, sempre com foco em entregar resultados mensuráveis.
                  </p>
                  <p>
                    Hoje, somos reconhecidos pela qualidade técnica, agilidade na entrega e compromisso com o sucesso
                    dos nossos clientes. Cada projeto é uma oportunidade de aplicar as melhores práticas e tecnologias
                    mais recentes para resolver problemas reais.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '150+', label: 'Projetos entregues' },
                    { value: '80+',  label: 'Clientes ativos' },
                    { value: '5+',   label: 'Anos de mercado' },
                    { value: '98%',  label: 'Satisfação' },
                  ].map(({ value, label }) => (
                    <div key={label} className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center">
                      <span className="block font-display text-3xl font-bold text-[var(--accent)] mb-1">{value}</span>
                      <span className="text-[12px] text-[var(--text-3)] uppercase tracking-[0.06em]">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[var(--radius-card)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-5">
                  <h3 className="font-display text-[14px] font-bold text-[var(--text-1)] mb-3">
                    Nossos diferenciais
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Equipe técnica altamente qualificada',
                      'Metodologia ágil e transparente',
                      'Suporte contínuo pós-implementação',
                      'Foco em ROI e resultados mensuráveis',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px] text-[var(--text-2)]">
                        <CheckCircle className="h-4 w-4 text-[var(--accent)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team roles */}
        <section className="py-14 sm:py-16 border-t border-[var(--border)] bg-[var(--bg-deep)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Time</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-10 max-w-sm leading-tight">
              Profissionais comprometidos com resultados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  Icon: Users,
                  title: 'Desenvolvedores',
                  description: 'Especialistas em múltiplas linguagens e frameworks, sempre atualizados com as últimas tecnologias.',
                },
                {
                  Icon: Target,
                  title: 'Arquitetos de Soluções',
                  description: 'Profissionais que projetam sistemas escaláveis, seguros e alinhados aos objetivos de negócio.',
                },
                {
                  Icon: Award,
                  title: 'Consultores',
                  description: 'Especialistas em processos que identificam oportunidades e propõem melhorias estratégicas.',
                },
              ].map(({ Icon, title, description }) => (
                <div key={title} className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] border border-[var(--accent-border)] mb-4">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-display text-[14px] font-semibold text-[var(--text-1)] mb-2">{title}</h3>
                  <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-1)] mb-3 leading-tight">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-[14px] text-[var(--text-2)] mb-7 max-w-md mx-auto">
              Descubra como podemos ajudar sua empresa a alcançar novos patamares com tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/cotacao" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold">
                Solicitar Cotação
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contato" className="btn-outline inline-flex items-center px-6 py-3 text-[14px] font-semibold">
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
