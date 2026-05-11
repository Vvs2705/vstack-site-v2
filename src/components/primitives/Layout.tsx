import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerSize = 'md' | 'lg' | 'xl'

const containerSizes: Record<ContainerSize, string> = {
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  size?: ContainerSize
}

export function Container({ size = 'xl', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', containerSizes[size], className)}
      {...props}
    />
  )
}

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  tone?: 'default' | 'muted' | 'deep'
  spacing?: 'md' | 'lg' | 'xl'
}

const sectionTones = {
  default: 'bg-[var(--bg)]',
  muted: 'bg-[var(--bg-card)]',
  deep: 'bg-[var(--bg-deep)]',
}

const sectionSpacing = {
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24',
  xl: 'py-24 sm:py-32',
}

export function Section({ tone = 'default', spacing = 'lg', className, ...props }: SectionProps) {
  return <section className={cn(sectionTones[tone], sectionSpacing[spacing], className)} {...props} />
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', 'max-w-2xl', className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-[-0.01em] text-[var(--text-1)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[15px] leading-7 text-[var(--text-2)]">
          {description}
        </p>
      )}
    </div>
  )
}

interface SurfaceProps extends ComponentPropsWithoutRef<'div'> {
  as?: ElementType
  interactive?: boolean
}

export function Surface({ as, interactive = false, className, ...props }: SurfaceProps) {
  const Component = as ?? 'div'

  return (
    <Component
      className={cn(
        'rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)]',
        interactive && 'transition duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow)]',
        className
      )}
      {...props}
    />
  )
}
