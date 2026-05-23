'use client'

import { useState } from 'react'
import { Calculator, MessageCircle, History } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CalculatorSimulator } from '@/components/fiscwise/CalculatorSimulator'
import { FiscalChat } from '@/components/fiscwise/FiscalChat'
import { SimulationHistory } from '@/components/fiscwise/SimulationHistory'
import type { PlanGating } from '@/lib/types/calculator'

type TabId = 'simulator' | 'chat' | 'history'

interface Tab {
  id: TabId
  label: string
  icon: typeof Calculator
  description: string
}

const TABS: Tab[] = [
  {
    id: 'simulator',
    label: 'Simulador',
    icon: Calculator,
    description: 'Compare regimes tributários e calcule impostos',
  },
  {
    id: 'chat',
    label: 'Assistente IA',
    icon: MessageCircle,
    description: 'Tire dúvidas fiscais com IA especializada',
  },
  {
    id: 'history',
    label: 'Histórico',
    icon: History,
    description: 'Suas simulações anteriores',
  },
]

interface Props {
  gating: PlanGating
}

export function FiscalCalculatorSection({ gating }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('simulator')

  return (
    <div className="space-y-6">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Seções da calculadora fiscal"
        className="flex gap-1 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-1"
      >
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                isActive
                  ? 'bg-[var(--bg)] text-[var(--text-1)] shadow-sm'
                  : 'text-[var(--text-3)] hover:text-[var(--text-2)]'
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Tab panels */}
      {TABS.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className={activeTab === tab.id ? 'block' : ''}
        >
          {activeTab === tab.id && (
            <>
              {tab.id === 'simulator' && (
                <CalculatorSimulator plan={gating.plan} />
              )}
              {tab.id === 'chat' && (
                <FiscalChat
                  plan={gating.plan}
                  monthlyMessagesLimit={gating.monthlyMessagesLimit}
                  messagesUsed={gating.messagesUsed}
                />
              )}
              {tab.id === 'history' && (
                <SimulationHistory
                  plan={gating.plan}
                  canExportPDF={gating.canExportPDF}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}
