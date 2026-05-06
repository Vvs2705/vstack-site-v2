import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'

interface SolutionsGridSectionProps {
  eyebrow?: string
  headline?: string
  description?: string
}

export default function SolutionsGridSection({
  eyebrow = 'Portfólio',
  headline = 'Projetos e Case Studies',
  description = 'Conheça as soluções que desenvolvemos para resolver desafios reais de empresas como a sua.',
}: SolutionsGridSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-1)] mb-4">
            {headline}
          </h2>
          <p className="max-w-2xl mx-auto text-[15px] text-[var(--text-2)] leading-relaxed">
            {description}
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--text-3)] text-sm">Nenhum projeto disponível no momento.</p>
          </div>
        )}
      </div>
    </section>
  )
}
