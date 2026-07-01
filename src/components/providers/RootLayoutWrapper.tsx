'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import ThemeProvider from './ThemeProvider'
import PageTransition from './PageTransition'
import ClientWidgets from './ClientWidgets'
import { ToastContainer } from '@/components/ui/Toast'

export default function RootLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <PageTransition>
          {children}
        </PageTransition>
        <ToastContainer />
        <ClientWidgets />
      </MotionConfig>
    </ThemeProvider>
  )
}
