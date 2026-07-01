import { ProjectData } from '@/lib/projects'

interface ProjectDetailHeroProps {
  title: string
  description: string
  status: ProjectData['status']
  tags: string[]
}

const statusConfig = {
  planning: {
    color: 'bg-info/10 text-info border-info/20',
    label: 'Em Planejamento'
  },
  active: {
    color: 'bg-success/10 text-success border-success/20',
    label: 'Ativo'
  },
  developing: {
    color: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    label: 'Em Desenvolvimento'
  }
}

export default function ProjectDetailHero({
  title,
  description,
  status,
  tags,
}: ProjectDetailHeroProps) {
  const statusInfo = statusConfig[status]

  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border mb-4 ${statusInfo.color}`}>
          {statusInfo.label}
        </span>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-1)] mb-5 leading-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-2)] mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] text-sm font-semibold border border-[var(--accent-border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
