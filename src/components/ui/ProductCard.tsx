import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ProofProduct, ProofVisual } from '@/lib/social-proof'
import { cn } from '@/lib/utils'

/**
 * Silhueta genérica da tela do produto (só formas, nenhum número ou dado).
 * TODO: trocar por captura real de cada produto quando houver (a pasta
 * public/images/projects tem apenas placeholders com valores inventados).
 */
function ProductSilhouette({ visual }: { visual: ProofVisual }) {
  const line = 'h-1.5 rounded-full bg-[var(--border-strong)]'

  return (
    <div
      className="overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-deep)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1 border-b border-[var(--border)] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
      </div>

      <div className="h-[84px] p-2.5">
        {visual === 'dashboard' && (
          <div className="flex h-full items-end gap-1.5">
            {[40, 62, 50, 78, 66, 90].map((height, index) => (
              <span
                key={index}
                className={cn('flex-1 rounded-t-[3px]', index === 5 ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]')}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}

        {visual === 'agenda' && (
          <div className="grid h-full grid-cols-4 gap-1.5">
            {[0, 1, 2, 3].map((col) => (
              <div key={col} className="flex flex-col gap-1.5">
                <span className={cn(line, 'w-2/3')} />
                <span className={cn('rounded-[3px]', col === 1 ? 'h-9 bg-[var(--accent)]' : 'h-5 bg-[var(--border-strong)]')} />
                <span className={cn('rounded-[3px] bg-[var(--border)]', col === 2 ? 'h-7' : 'h-3')} />
              </div>
            ))}
          </div>
        )}

        {visual === 'route' && (
          <svg viewBox="0 0 160 60" className="h-full w-full" fill="none">
            <path d="M8 46 C 40 46, 40 14, 76 14 S 120 46, 152 18" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="8" cy="46" r="4" fill="var(--border-strong)" />
            <circle cx="76" cy="14" r="4" fill="var(--border-strong)" />
            <circle cx="152" cy="18" r="5" fill="var(--accent)" />
          </svg>
        )}

        {visual === 'modules' && (
          <div className="grid h-full grid-cols-3 gap-1.5">
            {[0, 1, 2, 3, 4, 5].map((cell) => (
              <span
                key={cell}
                className={cn('rounded-[3px]', cell === 0 ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]')}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: ProofProduct
  /** compact: só silhueta, nome e estágio (usado na primeira dobra). */
  compact?: boolean
  className?: string
}

export default function ProductCard({ product, compact = false, className }: ProductCardProps) {
  const isProduction = product.status === 'production'

  return (
    <Link
      href={product.href}
      className={cn(
        'group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)]',
        'transition duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow)]',
        compact ? 'gap-3 p-3.5' : 'gap-4 p-5',
        className,
      )}
    >
      <ProductSilhouette visual={product.visual} />

      <div className={cn('flex gap-2', compact ? 'flex-col items-start' : 'items-start justify-between')}>
        <div className="min-w-0">
          <p className="eyebrow !text-[var(--text-3)]">{product.domain}</p>
          <h3 className={cn('mt-1 font-bold text-[var(--text-1)]', compact ? 'text-[15px]' : 'text-xl')}>{product.name}</h3>
        </div>
        <span
          className={cn(
            'shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]',
            compact && 'order-first',
            isProduction
              ? 'bg-success/10 text-success'
              : 'border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]',
          )}
        >
          {product.statusLabel}
        </span>
      </div>

      {!compact && (
        <>
          <p className="flex-1 text-[14px] leading-7 text-[var(--text-2)]">{product.pitch}</p>
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)]">
            Conhecer {product.name.split(' (')[0]}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </>
      )}
    </Link>
  )
}
