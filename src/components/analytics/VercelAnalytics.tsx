'use client'

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next'

export default function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        if (event.url.includes('/pedidos') || event.url.includes('/login')) {
          return null
        }

        return event
      }}
    />
  )
}
