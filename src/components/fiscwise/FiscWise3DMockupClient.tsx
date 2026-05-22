'use client'

import dynamic from 'next/dynamic'

const FiscWise3DMockup = dynamic(() => import('./FiscWise3DMockup'), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--bg-card)]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" />
    </div>
  ),
})

interface FiscWise3DMockupClientProps {
  splineUrl?: string
}

export default function FiscWise3DMockupClient({ splineUrl }: FiscWise3DMockupClientProps) {
  return <FiscWise3DMockup splineUrl={splineUrl} />
}
