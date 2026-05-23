'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calculator, TrendingDown, AlertCircle, Sparkles, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Surface } from '@/components/primitives/Layout'
import { cn } from '@/lib/utils'
import { SimulateRegimeSchema, type SimulateRegimeInput } from '@/lib/validations'
import { simulateRegime } from '@/lib/fiscwise-calculator-api'
import type { SimulateRegimeResponse, TaxRegime, UserPlan } from '@/lib/types/calculator'

const REGIME_LABELS: Record<TaxRegime, string> = {
  simples_nacional: 'Simples Nacional',
  lucro_presumido: 'Lucro Presumido',
  lucro_real: 'Lucro Real',
}

const SECTORS = [
  { value: 'comercio', label: 'Comércio' },
  { value: 'servicos', label: 'Serviços' },
  { value: 'industria', label: 'Indústria' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'saude', label: 'Saúde' },
  { value: 'educacao', label: 'Educação' },
  { value: 'construcao', label: 'Construção Civil' },
  { value: 'outro', label: 'Outro' },
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function formatPercent(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100)
}

interface Props {
  plan: UserPlan
}

export function CalculatorSimulator({ plan }: Props) {
  const [result, setResult] = useState<SimulateRegimeResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulateRegimeInput>({
    resolver: zodResolver(SimulateRegimeSchema),
    defaultValues: {
      revenue: undefined,
      sector: '',
      employee_count: 0,
      current_regime: undefined,
    },
  })

  async function onSubmit(data: SimulateRegimeInput) {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await simulateRegime(data)
      setResult(response)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao simular. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const canSeeAI = plan === 'INTERMEDIARIO' || plan === 'PREMIUM'

  return (
    <div className="space-y-6">
      {/* Formulário */}
      <Surface className="p-6">
        <div className="mb-5 flex items-center gap-2">
          <Calculator className="h-5 w-5 text-[var(--accent)]" />
          <h3 className="font-display text-[15px] font-bold text-[var(--text-1)]">
            Simulador de Regime Tributário
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Receita anual */}
            <div className="space-y-1.5">
              <label
                htmlFor="revenue"
                className="block text-[13px] font-medium text-[var(--text-2)]"
              >
                Receita bruta anual (R$)
              </label>
              <Input
                id="revenue"
                type="number"
                min={0}
                step={1000}
                placeholder="Ex: 500000"
                aria-describedby={errors.revenue ? 'revenue-error' : undefined}
                aria-invalid={!!errors.revenue}
                {...register('revenue', { valueAsNumber: true })}
              />
              {errors.revenue && (
                <p id="revenue-error" className="text-[12px] text-red-500">
                  {errors.revenue.message}
                </p>
              )}
            </div>

            {/* Funcionários */}
            <div className="space-y-1.5">
              <label
                htmlFor="employee_count"
                className="block text-[13px] font-medium text-[var(--text-2)]"
              >
                Número de funcionários
              </label>
              <Input
                id="employee_count"
                type="number"
                min={0}
                placeholder="Ex: 10"
                aria-describedby={errors.employee_count ? 'employees-error' : undefined}
                aria-invalid={!!errors.employee_count}
                {...register('employee_count', { valueAsNumber: true })}
              />
              {errors.employee_count && (
                <p id="employees-error" className="text-[12px] text-red-500">
                  {errors.employee_count.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Setor */}
            <div className="space-y-1.5">
              <label
                htmlFor="sector"
                className="block text-[13px] font-medium text-[var(--text-2)]"
              >
                Setor de atuação
              </label>
              <select
                id="sector"
                aria-describedby={errors.sector ? 'sector-error' : undefined}
                aria-invalid={!!errors.sector}
                className={cn(
                  'h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none',
                  'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  errors.sector && 'border-destructive'
                )}
                {...register('sector')}
              >
                <option value="">Selecione o setor</option>
                {SECTORS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p id="sector-error" className="text-[12px] text-red-500">
                  {errors.sector.message}
                </p>
              )}
            </div>

            {/* Regime atual */}
            <div className="space-y-1.5">
              <label
                htmlFor="current_regime"
                className="block text-[13px] font-medium text-[var(--text-2)]"
              >
                Regime atual (opcional)
              </label>
              <select
                id="current_regime"
                className={cn(
                  'h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none',
                  'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
                )}
                {...register('current_regime')}
              >
                <option value="">Nenhum / Não sei</option>
                {(
                  Object.entries(REGIME_LABELS) as Array<[TaxRegime, string]>
                ).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[13px] text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <span className="mr-2 inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Simulando...
              </>
            ) : (
              <>
                <Calculator className="h-4 w-4" />
                Simular regimes
              </>
            )}
          </Button>
        </form>
      </Surface>

      {/* Resultados */}
      {result && (
        <div className="space-y-4" aria-live="polite" aria-label="Resultado da simulação">
          {/* Cenários */}
          <div className="grid gap-4 sm:grid-cols-3">
            {result.scenarios.map((scenario) => (
              <Surface
                key={scenario.regime}
                className={cn(
                  'p-5',
                  result.recommendation?.recommended_regime === scenario.regime &&
                    'border-[var(--accent)] ring-1 ring-[var(--accent)]'
                )}
              >
                {result.recommendation?.recommended_regime === scenario.regime && (
                  <span className="mb-2 inline-block rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--accent)]">
                    Recomendado
                  </span>
                )}
                <h4 className="font-display text-[14px] font-bold text-[var(--text-1)]">
                  {scenario.regime_label}
                </h4>
                <p className="mt-3 font-display text-2xl font-bold text-[var(--text-1)]">
                  {formatCurrency(scenario.total_tax)}
                </p>
                <p className="text-[12px] text-[var(--text-3)]">impostos anuais</p>
                <div className="mt-3 space-y-1.5 border-t border-[var(--border)] pt-3">
                  <Row label="Alíquota efetiva" value={formatPercent(scenario.effective_rate)} />
                  <Row label="Mensal estimado" value={formatCurrency(scenario.monthly_tax)} />
                  {Object.entries(scenario.breakdown).map(([k, v]) => (
                    <Row key={k} label={k} value={formatCurrency(v)} />
                  ))}
                </div>
              </Surface>
            ))}
          </div>

          {/* Economia potencial */}
          {result.recommendation && result.recommendation.savings_vs_current > 0 && (
            <Surface className="flex items-center gap-4 border-[var(--accent-border)] bg-[var(--accent-muted)] p-5">
              <TrendingDown className="h-8 w-8 shrink-0 text-[var(--accent)]" />
              <div>
                <p className="font-display text-[15px] font-bold text-[var(--text-1)]">
                  Economia potencial de{' '}
                  {formatCurrency(result.recommendation.savings_vs_current)}/ano
                </p>
                <p className="mt-0.5 text-[13px] text-[var(--text-2)]">
                  {result.recommendation.reasoning}
                </p>
              </div>
            </Surface>
          )}

          {/* Análise IA */}
          {canSeeAI && result.ai_analysis ? (
            <Surface className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-[13px] font-semibold text-[var(--text-1)]">
                  Análise da IA Fiscal
                </span>
              </div>
              <p className="whitespace-pre-line text-[14px] leading-6 text-[var(--text-2)]">
                {result.ai_analysis}
              </p>
            </Surface>
          ) : !canSeeAI ? (
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-[var(--border)] p-5">
              <Lock className="h-5 w-5 shrink-0 text-[var(--text-3)]" />
              <div>
                <p className="text-[13px] font-semibold text-[var(--text-1)]">
                  Análise com IA disponível no plano Intermediário
                </p>
                <p className="mt-0.5 text-[12px] text-[var(--text-3)]">
                  Obtenha recomendações personalizadas e planejamento tributário com IA.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[12px] text-[var(--text-3)]">{label}</span>
      <span className="text-[12px] font-medium text-[var(--text-2)]">{value}</span>
    </div>
  )
}
