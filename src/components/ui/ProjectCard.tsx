import Link from 'next/link'
import Image from 'next/image'
import type { ProjectData } from '@/lib/projects'
import { ExternalLink } from 'lucide-react'

// 1x1 transparent pixel as blur placeholder — avoids layout shift while image loads
const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

type ProjectCardProps = ProjectData

const statusConfig = {
  planning: {
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    label: 'Em planejamento',
  },
  active: {
    color: 'bg-green-500/10 text-green-500 border-green-500/20',
    label: 'Ativo',
  },
  developing: {
    color: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    label: 'Em desenvolvimento',
  },
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
      <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
        <div className="relative h-48 overflow-hidden bg-[var(--bg-deep)]">
          <Image
            src={thumbnail}
            alt={`Preview do projeto ${title}`}
            fill
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${statusInfo.color}`}>
            {statusInfo.label}
          </span>

          <h3 className="mb-2 font-display text-xl font-semibold text-[var(--text-1)] transition-colors group-hover:text-[var(--accent)]">
            {title}
          </h3>

          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--text-2)]">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
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

          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <span>Ver solução</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
