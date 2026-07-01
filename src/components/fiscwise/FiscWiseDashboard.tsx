'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  FileText,
  Landmark,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

const WEEKLY_VALUES = [12.5, 15.2, 14.8, 18.3, 21.1, 19.7, 22.4]
const WEEKLY_LABELS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
const CHART_HEIGHT = 64
const CHART_WIDTH = 200

function SparkLine() {
  const max = Math.max(...WEEKLY_VALUES)
  const min = Math.min(...WEEKLY_VALUES)
  const range = max - min || 1

  const points = WEEKLY_VALUES.map((v, i) => {
    const x = (i / (WEEKLY_VALUES.length - 1)) * CHART_WIDTH
    const y = CHART_HEIGHT - ((v - min) / range) * CHART_HEIGHT
    return `${x},${y}`
  }).join(' ')

  const areaPoints = [
    `0,${CHART_HEIGHT}`,
    ...WEEKLY_VALUES.map((v, i) => {
      const x = (i / (WEEKLY_VALUES.length - 1)) * CHART_WIDTH
      const y = CHART_HEIGHT - ((v - min) / range) * CHART_HEIGHT
      return `${x},${y}`
    }),
    `${CHART_WIDTH},${CHART_HEIGHT}`,
  ].join(' ')

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      className="w-full"
      style={{ height: CHART_HEIGHT }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#sparkGrad)" />
      <polyline
        points={points}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {WEEKLY_VALUES.map((v, i) => {
        const x = (i / (WEEKLY_VALUES.length - 1)) * CHART_WIDTH
        const y = CHART_HEIGHT - ((v - min) / range) * CHART_HEIGHT
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            fill="var(--accent)"
            opacity={i === WEEKLY_VALUES.length - 1 ? 1 : 0.5}
          />
        )
      })}
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

interface IndicatorRowProps {
  icon: React.ReactNode
  label: string
  status: 'ativo' | 'alerta'
}

function IndicatorRow({ icon, label, status }: IndicatorRowProps) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <span className="text-[var(--accent)]">{icon}</span>
        <span className="text-[13px] font-medium text-[var(--text-1)]">{label}</span>
      </div>
      <span
        className="rounded-full px-2 py-0.5 text-[11px] font-semibold leading-none"
        style={
          status === 'ativo'
            ? {
                background: 'color-mix(in oklab, var(--success) 12%, transparent)',
                color: 'var(--success)',
              }
            : {
                background: 'color-mix(in oklab, var(--warning) 12%, transparent)',
                color: 'var(--warning)',
              }
        }
      >
        {status === 'ativo' ? 'Ativo' : 'Alerta'}
      </span>
    </div>
  )
}

export default function FiscWiseDashboard() {
  const reconciled = 247
  const total = 250
  const percentage = Math.round((reconciled / total) * 1000) / 10

  return (
    <div
      className="w-full h-full p-4 sm:p-5"
      role="region"
      aria-label="Dashboard de métricas FiscWise"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex items-center justify-between"
      >
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--accent)]">
            FiscWise
          </p>
          <p className="text-[13px] text-[var(--text-2)]">Visão geral · Maio 2026</p>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{ background: 'color-mix(in oklab, var(--success) 10%, transparent)' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-success">Open Banking ativo</span>
        </div>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3"
      >
        {/* Card 1: Entradas vs Saídas */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 rounded-[var(--radius-card)] p-4"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-3)]">
            Entradas vs Saídas
          </p>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-1.5">
                <ArrowUpRight
                  className="h-4 w-4 text-success"
                  aria-hidden="true"
                />
                <span className="text-[11px] text-[var(--text-2)]">Receitas</span>
              </div>
              <p className="text-2xl font-bold text-success">R$ 84,2k</p>
            </div>
            <div
              className="h-10 w-px"
              style={{ background: 'var(--border)' }}
              aria-hidden="true"
            />
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-1.5">
                <ArrowDownRight
                  className="h-4 w-4 text-danger"
                  aria-hidden="true"
                />
                <span className="text-[11px] text-[var(--text-2)]">Despesas</span>
              </div>
              <p className="text-2xl font-bold text-danger">R$ 31,4k</p>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[11px] text-[var(--text-3)]">Margem</p>
              <p className="text-lg font-bold text-[var(--accent)]">62,7%</p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Conciliação Automática */}
        <motion.div
          variants={cardVariants}
          className="rounded-[var(--radius-card)] p-4"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2
              className="h-4 w-4 text-[var(--accent)]"
              aria-hidden="true"
            />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-3)]">
              Conciliação
            </p>
          </div>
          <p className="mb-1 text-xl font-bold text-[var(--text-1)]">
            {reconciled}
            <span className="text-sm font-normal text-[var(--text-3)]">/{total}</span>
          </p>
          <p className="mb-3 text-[12px] text-[var(--accent)]">{percentage}% automático</p>
          {/* Progress bar */}
          <div
            className="h-1.5 w-full overflow-hidden rounded-full"
            style={{ background: 'var(--bg-deep)' }}
            role="progressbar"
            aria-valuenow={reconciled}
            aria-valuemin={0}
            aria-valuemax={total}
            aria-label={`${reconciled} de ${total} transações conciliadas`}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--accent)' }}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Card 3: Indicadores Ativos */}
        <motion.div
          variants={cardVariants}
          className="rounded-[var(--radius-card)] p-4"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-3)]">
            Indicadores
          </p>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            <IndicatorRow
              icon={<Landmark className="h-3.5 w-3.5" aria-hidden="true" />}
              label="Open Banking"
              status="ativo"
            />
            <IndicatorRow
              icon={<AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />}
              label="Alertas"
              status="alerta"
            />
            <IndicatorRow
              icon={<FileText className="h-3.5 w-3.5" aria-hidden="true" />}
              label="Relatórios"
              status="ativo"
            />
          </div>
        </motion.div>

        {/* Card 4: Receita Semanal (full width) */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 rounded-[var(--radius-card)] p-4"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp
                className="h-4 w-4 text-[var(--accent)]"
                aria-hidden="true"
              />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-3)]">
                Receita Semanal
              </p>
            </div>
            <p className="text-[12px] font-semibold text-success">+13,7%</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <SparkLine />
          </motion.div>

          <div className="mt-2 flex justify-between">
            {WEEKLY_LABELS.map((label, i) => (
              <span
                key={label}
                className="text-[10px] text-[var(--text-3)]"
                style={
                  i === WEEKLY_LABELS.length - 1
                    ? { color: 'var(--accent)', fontWeight: 600 }
                    : {}
                }
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
