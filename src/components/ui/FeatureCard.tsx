import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: 'orange' | 'blue' | 'green' | 'purple'
}

const colorMap = {
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-500', border: 'border-orange-500/20' },
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', border: 'border-blue-500/20' },
  green: { bg: 'bg-green-500/10', icon: 'text-green-500', border: 'border-green-500/20' },
  purple: { bg: 'bg-purple-500/10', icon: 'text-purple-500', border: 'border-purple-500/20' },
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = 'orange',
}: FeatureCardProps) {
  const colors = colorMap[color]

  return (
    <Card className={`group relative overflow-hidden ${colors.border} ${colors.bg} transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg`}>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 0%, ${colors.icon}10, transparent 60%)` }}
      />
      <CardContent className="relative p-6">
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} border ${colors.border}`}>
          <Icon className={`h-6 w-6 ${colors.icon}`} />
        </div>

        <h3 className="font-display text-base font-bold text-[var(--text-1)] mb-2">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-2)]">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
