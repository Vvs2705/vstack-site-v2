import React from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  color?: 'accent' | 'success' | 'warning'
  animated?: boolean
}

const colorMap = {
  accent: 'from-[var(--accent)] to-[var(--accent-light)]',
  success: 'from-green-400 to-green-300',
  warning: 'from-amber-400 to-amber-300',
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = 'accent',
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min(100, (value / max) * 100)

  return (
    <div>
      {(label || showPercentage) && (
        <div className="mb-2 flex items-center justify-between text-xs text-[var(--text-3)]">
          {label && <span>{label}</span>}
          {showPercentage && <span className="font-semibold text-[var(--accent)]">{Math.round(percentage)}%</span>}
        </div>
      )}

      <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]} transition-all ${
            animated ? 'duration-1000 ease-out' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
