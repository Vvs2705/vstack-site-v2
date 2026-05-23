'use client'

import { useState, useEffect, useCallback } from 'react'
import { History, RefreshCw, Lock, FileText, TrendingUp, BarChart3, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Surface } from '@/components/primitives/Layout'
import { cn } from '@/lib/utils'
import { getSimulations } from '@/lib/fiscwise-calculator-api'
import type { Simulation, UserPlan } from '@/lib/types/calculator'

interface Props {
  plan: UserPlan
  canExportPDF: boolean
}

const TYPE_ICONS: Record<Simulation['type'], typeof FileText> = {
  regime: TrendingUp,
  icms: BarChart3,
  pis_cofins: FileText,
}

const TYPE_LABELS: Record<Simulation['type'], string> = {
  regime: 'Regime Tributário',
  icms: 'ICMS',
  pis_cofins: 'PIS/COFINS',
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

async function exportSimulationPDF(simulationId: string): Promise<void> {
  const res = await fetch(`/api/fiscwise/calculator/export-pdf?id=${simulationId}`, {
    credentials: 'include',
  })
  if (!res.ok) throw new Error('Falha ao gerar PDF')
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `simulacao-${simulationId}.pdf`
  a.click()
  URL.revokeObjectURL(url)
}

export function SimulationHistory({ plan, canExportPDF }: Props) {
  const [simulations, setSimulations] = useState<Simulation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [exportingId, setExportingId] = useState<string | null>(null)
  const [exportError, setExportError] = useState<string | null>(null)

  const canView = plan !== 'FREE'

  const load = useCallback(async () => {
    if (!canView) return
    setIsLoading(true)
    setError(null)
    try {
      const data = await getSimulations()
      setSimulations(data.simulations)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar histórico.')
    } finally {
      setIsLoading(false)
    }
  }, [canView])

  useEffect(() => {
    load()
  }, [load])

  async function handleExport(id: string) {
    setExportingId(id)
    setExportError(null)
    try {
      await exportSimulationPDF(id)
    } catch (err) {
      setExportError(err instanceof Error ? err.message : 'Erro ao exportar PDF.')
    } finally {
      setExportingId(null)
    }
  }

  if (!canView) {
    return (
      <Surface className="flex flex-col items-center justify-center gap-4 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)]">
          <Lock className="h-7 w-7 text-[var(--text-3)]" />
        </div>
        <div>
          <h3 className="font-display text-[16px] font-bold text-[var(--text-1)]">
            Histórico disponível no plano Intermediário
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-[14px] leading-6 text-[var(--text-2)]">
            Salve e consulte suas simulações anteriores para acompanhar a evolução
            do planejamento tributário da sua empresa.
          </p>
        </div>
      </Surface>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="h-4 w-4 text-[var(--accent)]" />
          <span className="text-[13px] font-semibold text-[var(--text-1)]">
            Histórico de simulações
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={load}
          disabled={isLoading}
          aria-label="Atualizar histórico"
        >
          <RefreshCw className={cn('h-3.5 w-3.5', isLoading && 'animate-spin')} />
          Atualizar
        </Button>
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[13px] text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {exportError && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[13px] text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {exportError}
        </div>
      )}

      {isLoading && simulations.length === 0 ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
              aria-hidden="true"
            />
          ))}
        </div>
      ) : simulations.length === 0 ? (
        <Surface className="flex flex-col items-center justify-center gap-3 p-10 text-center">
          <History className="h-8 w-8 text-[var(--text-3)]" />
          <p className="text-[14px] text-[var(--text-2)]">
            Nenhuma simulação encontrada. Execute uma simulação na aba Simulador.
          </p>
        </Surface>
      ) : (
        <ul className="space-y-3" aria-label="Lista de simulações">
          {simulations.map((sim) => {
            const Icon = TYPE_ICONS[sim.type]
            return (
              <li key={sim.id}>
                <Surface className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)]">
                    <Icon className="h-4.5 w-4.5 text-[var(--accent)]" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-3)]">
                        {TYPE_LABELS[sim.type]}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[14px] font-medium text-[var(--text-1)]">
                      {sim.summary}
                    </p>
                    <time
                      dateTime={sim.created_at}
                      className="text-[12px] text-[var(--text-3)]"
                    >
                      {formatDate(sim.created_at)}
                    </time>
                  </div>

                  {canExportPDF ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExport(sim.id)}
                      disabled={exportingId === sim.id}
                      aria-label={`Exportar simulação ${sim.summary} em PDF`}
                    >
                      {exportingId === sim.id ? (
                        <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      ) : (
                        <FileText className="h-3.5 w-3.5" />
                      )}
                      PDF
                    </Button>
                  ) : (
                    <div
                      className="flex items-center gap-1 text-[12px] text-[var(--text-3)]"
                      title="Export PDF disponível no plano Premium"
                    >
                      <Lock className="h-3 w-3" aria-hidden="true" />
                      <span className="sr-only">PDF bloqueado — plano Premium</span>
                    </div>
                  )}
                </Surface>
              </li>
            )
          })}
        </ul>
      )}

      {!canExportPDF && simulations.length > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-[var(--border)] p-4">
          <Lock className="h-4 w-4 shrink-0 text-[var(--text-3)]" />
          <p className="text-[13px] text-[var(--text-2)]">
            <strong className="text-[var(--text-1)]">Export em PDF</strong> disponível
            no plano Premium. Gere relatórios profissionais para compartilhar com
            contadores e gestores.
          </p>
        </div>
      )}
    </div>
  )
}
