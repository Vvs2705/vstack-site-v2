import { Check, Minus, X, CircleHelp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CellValue, ComparativoColumn, ComparativoRow } from '@/lib/comparativos'

// ─── Configuração visual por estado da célula ──────────────────────────────────
// A informação NUNCA é transmitida só por cor: cada estado tem ícone + um rótulo
// textual visível (`srLabel` também alimenta leitores de tela via aria-label).

const CELL_CONFIG: Record<
  CellValue,
  { Icon: typeof Check; srLabel: string; iconClass: string }
> = {
  yes: { Icon: Check, srLabel: 'Sim', iconClass: 'text-[var(--accent)]' },
  partial: { Icon: Minus, srLabel: 'Parcial', iconClass: 'text-amber-500' },
  no: { Icon: X, srLabel: 'Não', iconClass: 'text-[var(--text-3)]' },
  depends: { Icon: CircleHelp, srLabel: 'Depende', iconClass: 'text-[var(--text-3)]' },
}

interface ComparativoTableProps {
  /** Legenda acessível da tabela (vira <caption>, visível). */
  caption: string
  columns: ComparativoColumn[]
  rows: ComparativoRow[]
  className?: string
}

export default function ComparativoTable({
  caption,
  columns,
  rows,
  className,
}: ComparativoTableProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)]',
        className
      )}
      // Permite navegar a tabela por teclado quando há scroll horizontal.
      tabIndex={0}
      role="region"
      aria-label={caption}
    >
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="px-5 pt-5 text-left text-[13px] font-semibold text-[var(--text-3)]">
          {caption}
        </caption>

        <thead>
          <tr className="border-b border-[var(--border)]">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-[var(--bg-card)] px-5 py-4 align-bottom text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-3)]"
            >
              Critério
            </th>
            {columns.map((col) => (
              <th
                key={col.id}
                scope="col"
                className={cn(
                  'px-4 py-4 align-bottom text-[13px] font-bold leading-snug',
                  col.isOurs
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-2)]'
                )}
              >
                {col.label}
                {col.isOurs && (
                  <span className="ml-1.5 align-middle text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    · nosso
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.criterion}
              className="border-b border-[var(--border)] last:border-b-0 align-top"
            >
              <th
                scope="row"
                className="sticky left-0 z-10 bg-[var(--bg-card)] px-5 py-5 text-[14px] font-semibold text-[var(--text-1)]"
              >
                {row.criterion}
                {row.why && (
                  <span className="mt-1 block text-[12px] font-normal leading-5 text-[var(--text-3)]">
                    {row.why}
                  </span>
                )}
              </th>

              {row.cells.map((cell, index) => {
                const config = CELL_CONFIG[cell.value]
                const { Icon } = config
                const column = columns[index]

                return (
                  <td
                    key={column?.id ?? index}
                    className={cn(
                      'px-4 py-5 text-[13px] leading-6 text-[var(--text-2)]',
                      column?.isOurs && 'bg-[var(--accent-muted)]/40'
                    )}
                  >
                    <span className="flex items-start gap-2">
                      <span
                        className={cn(
                          'mt-0.5 inline-flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase tracking-[0.06em]',
                          config.iconClass
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{config.srLabel}</span>
                      </span>
                      <span className="text-[var(--text-2)]">
                        {cell.note}
                      </span>
                    </span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
