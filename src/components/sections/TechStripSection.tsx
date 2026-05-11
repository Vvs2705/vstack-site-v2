const TECH_ITEMS = [
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'OpenAI',
  'Redis',
  'Resend',
  'Vercel',
  'Docker',
  'n8n',
  'Metabase',
]

export default function TechStripSection() {
  const items = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-deep)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-deep)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-deep)] to-transparent" />

      <div className="animate-tech-scroll flex w-max items-center gap-7">
        <span className="pl-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-3)]">
          Stack
        </span>
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-3 text-[12px] font-semibold text-[var(--text-2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
