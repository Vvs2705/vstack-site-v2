'use client'

import { useState } from 'react'
import { Surface } from '@/components/primitives/Layout'
import FiscWiseDashboard from './FiscWiseDashboard'

interface FiscWise3DMockupProps {
  splineUrl?: string
}

export default function FiscWise3DMockup({ splineUrl }: FiscWise3DMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showDashboard = !splineUrl || hasError

  return (
    <Surface className="relative w-full overflow-hidden rounded-3xl p-0">
      <div className="relative aspect-video w-full bg-gradient-to-br from-[var(--bg-deep)] to-[var(--bg)]">
        {!showDashboard ? (
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
          <div className="absolute inset-0 overflow-y-auto">
            <FiscWiseDashboard />
          </div>
        )}
      </div>
    </Surface>
  )
}
