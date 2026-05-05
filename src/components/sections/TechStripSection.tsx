interface TechStripSectionProps {
  label?: string
  tags?: string
}

const DEFAULT_TAGS = 'Python / FastAPI,Next.js,PostgreSQL,AWS / GCP,LLMs & Agentes,Open Banking,Node.js,TypeScript,Docker,Redis,Prisma,Stripe API'

export default function TechStripSection({
  label = 'Stack',
  tags  = DEFAULT_TAGS,
}: TechStripSectionProps) {
  const tagList = tags.split(',').map((t) => t.trim()).filter(Boolean)
  const doubled = [...tagList, ...tagList]

  return (
    <div className="border-y border-[var(--border)] py-4 overflow-hidden bg-[var(--bg-deep)]">
      <div className="animate-tech-scroll flex items-center gap-0" style={{ width: 'max-content' }}>
        <span className="flex-shrink-0 text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)] font-semibold pl-6 pr-4">
          {label}
        </span>
        {doubled.map((tag, i) => (
          <span key={`${tag}-${i}`} className="flex-shrink-0 flex items-center gap-2 text-[12px] font-medium text-[var(--text-2)] px-5">
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent)] opacity-60 flex-shrink-0" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
