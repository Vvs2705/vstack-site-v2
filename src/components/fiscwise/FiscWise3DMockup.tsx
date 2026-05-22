'use client'

import { useState } from 'react'
import { Surface } from '@/components/primitives/Layout'

interface FiscWise3DMockupProps {
  splineUrl?: string
}

export default function FiscWise3DMockup({ splineUrl }: FiscWise3DMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <Surface className="relative w-full overflow-hidden rounded-3xl p-0">
      <div className="relative aspect-video w-full bg-gradient-to-br from-[var(--bg-deep)] to-[var(--bg)]">
        {splineUrl && !hasError ? (
          <>
            <iframe
              src={splineUrl}
              frameBorder="0"
              className="h-full w-full"
              style={{
                borderRadius: 'var(--radius-card)',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
              title="FiscWise 3D Dashboard"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true)
                setIsLoaded(true)
              }}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-deep)] bg-opacity-50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-muted)]">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" />
                  </div>
                  <p className="text-sm text-[var(--text-2)]">Carregando visualização 3D...</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-[var(--text-1)] mb-4">
                Dashboard FiscWise em 3D
              </h3>
              <p className="text-[var(--text-2)] mb-6 max-w-md">
                Visualização interativa de métricas financeiras em tempo real com Open Banking conectado.
              </p>

              <div className="space-y-4 text-left">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Entradas vs Saídas</p>
                    <p className="text-[13px] text-[var(--text-3)]">R$ 84,2k em receitas vs R$ 31,4k em despesas</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Conciliação Automática</p>
                    <p className="text-[13px] text-[var(--text-3)]">247 de 250 transações reconciliadas</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Receita Semanal</p>
                    <p className="text-[13px] text-[var(--text-3)]">Últimos 7 ciclos com tendência crescente</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-1)]">Indicadores Ativos</p>
                    <p className="text-[13px] text-[var(--text-3)]">Open Banking, alertas e relatórios prontos</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[13px] text-[var(--text-3)]">
                💡 A visualização 3D carrega após conexão com Spline. <br /> Padrão: rotação suave + interações ao hover.
              </div>
            </div>
          </div>
        )}
      </div>
    </Surface>
  )
}
