import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  value: string | number
  label: string
  icon?: LucideIcon
  trend?: {
    direction: 'up' | 'down'
    value: string
    color?: string
  }
  color?: 'accent' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

const colorMap = {
  accent: 'text-[var(--accent)]',
  success: 'text-green-400',
  warning: 'text-amber-400',
  info: 'text-blue-400',
}

const sizeMap = {
  sm: { value: 'text-xl', label: 'text-xs' },
  md: { value: 'text-3xl', label: 'text-sm' },
  lg: { value: 'text-4xl', label: 'text-base' },
}

export default function StatCard({
  value,
  label,
  icon: Icon,
  trend,
  color = 'accent',
  size = 'md',
}: StatCardProps) {
  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all hover:border-[var(--border-hover)]"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
    >
      {Icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)]">
          <Icon className={`h-5 w-5 ${colorMap[color]}`} />
        </div>
      )}

      <div className="mb-2 flex items-baseline gap-2">
        <span className={`font-display font-bold ${sizeMap[size].value} ${colorMap[color]}`}>
          {value}
        </span>

        {trend && (
          <span className={`text-xs font-semibold ${trend.color || 'text-green-400'}`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>

      <p className={`text-[var(--text-3)] uppercase tracking-wider ${sizeMap[size].label}`}>
        {label}
      </p>
    </div>
  )
}
