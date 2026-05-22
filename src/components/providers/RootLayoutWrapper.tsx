'use client'

import { ReactNode } from 'react'
import ThemeProvider from './ThemeProvider'
import PageTransition from './PageTransition'
import ClientWidgets from './ClientWidgets'
import { ToastContainer } from '@/components/ui/Toast'

export default function RootLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <PageTransition>
        {children}
      </PageTransition>
      <ToastContainer />
      <ClientWidgets />
    </ThemeProvider>
  )
}
