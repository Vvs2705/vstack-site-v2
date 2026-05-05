import React from 'react'
import { LucideIcon } from 'lucide-react'

interface MetricBoxProps {
  label: string
  value: string
  icon?: LucideIcon
  trend?: { direction: 'up' | 'down'; value: string }
  accent?: boolean
}

export default function MetricBox({
  label,
  value,
  icon: Icon,
  trend,
  accent = false,
}: MetricBoxProps) {
  return (
    <div
      className={`rounded-xl border p-4 transition-all ${
        accent
          ? 'border-[var(--accent-border)] bg-[var(--accent-muted)]'
          : 'border-[var(--border)] bg-[var(--bg-deep)]'
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-[var(--text-3)]">
          {label}
        </span>
        {Icon && <Icon className="h-4 w-4 text-[var(--accent)]" />}
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-display text-xl font-bold text-[var(--text-1)]">
          {value}
        </span>
        {trend && (
          <span className="text-xs font-semibold text-green-400">
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </div>
  )
}
