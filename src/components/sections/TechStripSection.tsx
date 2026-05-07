interface TechItem {
  icon: string
  label: string
}

interface TechStripSectionProps {
  label?: string
  tags?: string
}

const TECH_ITEMS: TechItem[] = [
  { icon: '⚛️', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '🐘', label: 'PostgreSQL' },
  { icon: '🤖', label: 'OpenAI' },
  { icon: '🔷', label: 'TypeScript' },
  { icon: '🔴', label: 'Redis' },
  { icon: '🐳', label: 'Docker' },
  { icon: '☁️', label: 'Vercel' },
  { icon: '💾', label: 'Prisma' },
  { icon: '🔗', label: 'n8n' },
  { icon: '📊', label: 'Metabase' },
  { icon: '✉️', label: 'Resend' },
]

// Props kept for backward compatibility but ignored in favor of TECH_ITEMS
export default function TechStripSection({
  label = 'Stack',
}: TechStripSectionProps) {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg-deep)] py-5 overflow-hidden relative">
      {/* Fade edge — left */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(to right, var(--bg-deep), transparent)' }}
        aria-hidden="true"
      />
      {/* Fade edge — right */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(to left, var(--bg-deep), transparent)' }}
        aria-hidden="true"
      />

      <div className="animate-tech-scroll flex items-center gap-0" style={{ width: 'max-content' }}>
        <span className="flex-shrink-0 text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)] font-semibold pl-6 pr-5">
          {label}
        </span>
        {doubled.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="flex items-center gap-2.5 flex-shrink-0 opacity-55 hover:opacity-100 transition-opacity px-4"
          >
            <span
              className="w-7 h-7 rounded-[6px] bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm flex-shrink-0"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <span className="text-[12px] font-medium text-[var(--text-2)]">
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
