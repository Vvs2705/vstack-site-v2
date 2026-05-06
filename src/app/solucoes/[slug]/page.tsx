import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  TrendingUp,
  Zap,
  BarChart3,
  AlertCircle,
  Lock,
  Smartphone,
  ArrowRight,
  ExternalLink,
  Github,
  BookOpen,
  CheckCircle
} from 'lucide-react'
import { projects, getProjectBySlug, type ProjectData } from '@/lib/projects'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProjectDetailHero from '@/components/sections/ProjectDetailHero'
import CTASection from '@/components/sections/CTASection'

const iconMap = {
  TrendingUp,
  Zap,
  BarChart3,
  AlertCircle,
  Lock,
  Smartphone,
} as const

type IconName = keyof typeof iconMap

function getIconComponent(iconName: string): React.ReactNode {
  const Icon = iconMap[iconName as IconName]
  return Icon ? <Icon className="w-6 h-6" /> : null
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    }
  }

  return {
    title: `${project.title} | V-STACK SOLUTIONS`,
    description: project.description,
    keywords: [project.title, ...project.tags, 'case study', 'projeto'],
    openGraph: {
      title: `${project.title} | V-STACK SOLUTIONS`,
      description: project.description,
      type: 'website',
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectDetailPage(
  { params }: { params: { slug: string } }
) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--bg)]">
        <Breadcrumb
          items={[
            { label: 'Soluções', href: '/solucoes' },
            { label: project.title },
          ]}
        />

        <ProjectDetailHero
          title={project.title}
          description={project.description}
          status={project.status}
          tags={project.tags}
        />

        {/* Problem & Solution Section */}
        <section className="py-16 sm:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problem */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-1)] mb-4">
                  O Desafio
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">
                  A Solução
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-12 text-center">
              Principais Funcionalidades
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {project.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--accent-muted)]">
                      {getIconComponent(feature.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-1)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        {project.screenshots.length > 0 && (
          <section className="py-16 sm:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-12 text-center">
                Galeria de Imagens
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-deep)]"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Metrics Section */}
        {project.metrics && Object.keys(project.metrics).length > 0 && (
          <section className="py-16 sm:py-20 bg-[var(--bg-deep)] border-b border-[var(--border)]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-12 text-center">
                Resultados Alcançados
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-6 rounded-lg border border-[var(--border)] bg-[var(--bg)]"
                  >
                    <p className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-2">
                      {value}
                    </p>
                    <p className="text-sm text-[var(--text-2)] font-medium">
                      {key}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Links Section */}
        <section className="py-16 sm:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-12 text-center">
              Recursos
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-card)] transition-colors"
                >
                  <span className="font-semibold text-[var(--text-1)]">Ver Demo</span>
                  <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
                </a>
              )}

              {project.links.docs && (
                <Link
                  href={project.links.docs}
                  className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-card)] transition-colors"
                >
                  <span className="font-semibold text-[var(--text-1)]">Documentação</span>
                  <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                </Link>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-card)] transition-colors"
                >
                  <span className="font-semibold text-[var(--text-1)]">GitHub</span>
                  <Github className="w-4 h-4 text-[var(--accent)]" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-12 bg-[var(--bg)] border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link
              href="/solucoes"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)] font-semibold transition-opacity hover:opacity-75"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para Soluções
            </Link>
          </div>
        </section>

        <CTASection
          headline="Quer uma solução similar?"
          description="Converse com nossa equipe e descubra como podemos adaptar essa solução para seu negócio específico."
          ctaPrimaryLabel="Solicitar Cotação Gratuita"
          ctaPrimaryHref="/cotacao"
          ctaSecondaryLabel="Envie Sua Dor"
          ctaSecondaryHref="/envie-sua-dor"
        />
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
