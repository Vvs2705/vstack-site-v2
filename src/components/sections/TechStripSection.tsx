interface TechStripSectionProps {
  label?: string
  tags?: string
}

const DEFAULT_TAGS = 'Python / FastAPI,Next.js,PostgreSQL,AWS / GCP,LLMs & Agentes,Open Banking'

export default function TechStripSection({
  label = 'Stack',
  tags  = DEFAULT_TAGS,
}: TechStripSectionProps) {
  const tagList = tags.split(',').map((t) => t.trim()).filter(Boolean)

  return (
    <div className="border-y border-[var(--border)] py-5 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-10 gap-y-3 px-6 lg:px-8">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{label}</span>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {tagList.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)]">
              <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent)]/50 flex-shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
