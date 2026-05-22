'use client'

import dynamic from 'next/dynamic'

// Widgets that require browser APIs — loaded client-side only
const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false })
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false })

export default function ClientWidgets() {
  return (
    <>
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
