import Link from 'next/link'
import Image from 'next/image'
import { ProjectData } from '@/lib/projects'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps extends ProjectData {}

const statusConfig = {
  planning: {
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    label: 'Em Planejamento'
  },
  active: {
    color: 'bg-green-500/10 text-green-500 border-green-500/20',
    label: 'Ativo'
  },
  developing: {
    color: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    label: 'Em Desenvolvimento'
  }
}

export default function ProjectCard({
  slug,
  title,
  description,
  thumbnail,
  status,
  tags,
}: ProjectCardProps) {
  const statusInfo = statusConfig[status]

  return (
    <Link href={`/solucoes/${slug}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-xl cursor-pointer h-full flex flex-col">

        <div className="relative h-48 overflow-hidden bg-[var(--bg-deep)]">
          <Image
            src={thumbnail}
            alt={`Preview do projeto ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />

          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${statusInfo.color}`}>
            {statusInfo.label}
          </span>

          <h3 className="font-display text-xl font-bold text-[var(--text-1)] mb-2 group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-[var(--text-2)] mb-4 line-clamp-2 leading-relaxed flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-medium border border-[var(--accent-border)]"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-deep)] text-[var(--text-3)] font-medium">
                +{tags.length - 4}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-[var(--accent)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Ver detalhes</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
