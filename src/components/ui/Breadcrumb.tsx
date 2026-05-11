import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="py-4 px-6 lg:px-8 border-b border-[var(--border)] bg-[var(--bg)]"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
        <Link
          href="/"
          className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors flex items-center gap-1.5"
          aria-label="Voltar para home"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-[var(--text-3)]" aria-hidden="true" />
            {item.href ?(
              <Link
                href={item.href}
                className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-1)] font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
