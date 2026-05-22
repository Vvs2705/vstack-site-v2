'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container, Surface } from '@/components/primitives/Layout'
import { HeroGlowOrb } from '@/components/ui/AnimatedIcon'

const STATS = [
  { value: '98%', label: 'das transações reconciliadas automaticamente (vs. 45% em planilha)' },
  { value: '-72h/mês', label: '= R$ 18k/mês em folha economizados no fechamento' },
  { value: '247/dia', label: 'transações processadas automaticamente enquanto seu time dorme' },
]

const BAR_HEIGHTS = [42, 58, 36, 70, 52, 100, 64]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-18 sm:pt-32 sm:pb-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroGlowOrb className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 bg-[var(--accent-muted)] blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[rgba(45,55,72,0.16)] blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)] sm:px-3.5 sm:py-2 sm:text-[11px] sm:tracking-[0.16em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Para PMEs que fecham mês na correria
            </motion.div>

            <motion.h1
              className="max-w-2xl font-display text-balance leading-[1.08] tracking-[-0.025em] text-[var(--text-1)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              De 5 dias fechando mês a 1 dia.<br />Sem erros. Sem planilha.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-pretty text-[16px] leading-8 text-[var(--text-2)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              Automação financeira que realmente funciona — conciliação, relatórios e alertas que seu time não vive mais sem.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="sm:flex-none">
                <Link href="/fiscwise" className="btn-primary inline-flex min-h-[44px] w-full px-6 py-3 text-[14px] sm:w-auto">
                  Ver como funciona (demo de 2 min)
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="sm:flex-none">
                <Link href="/envie-sua-dor" className="btn-secondary inline-flex min-h-[44px] w-full px-6 py-3 text-[14px] sm:w-auto">
                  Estou fechando mês agora
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="border-t border-[var(--border)] pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4 first:border-t-0 first:pt-0 sm:first:border-l-0 sm:first:pl-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                >
                  <strong className="block font-display text-2xl font-bold text-[var(--text-1)]">
                    {stat.value}
                  </strong>
                  <span className="mt-1 block text-[11px] leading-4 text-[var(--text-3)]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: dashboard card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {/* Floating glow behind card */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--accent-muted)] blur-2xl" />

            <Surface className="relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div>
                  <p className="text-[12px] font-semibold text-[var(--text-3)]">FiscWise</p>
                  <h2 className="font-display text-xl font-bold text-[var(--text-1)]">
                    Operação financeira em tempo real
                  </h2>
                </div>
                <motion.span
                  className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[var(--accent)]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  LIVE
                </motion.span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Metric title="Entradas" value="R$ 84,2k" tone="success" />
                <Metric title="Saídas" value="R$ 31,4k" tone="accent" />
              </div>

              <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
                <div className="mb-3 flex items-center justify-between text-[12px] text-[var(--text-2)]">
                  <span>Conciliação automática</span>
                  <strong className="text-[var(--text-1)]">247 / 250</strong>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-card)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]"
                    initial={{ width: '0%' }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[12px] font-medium text-[var(--text-2)]">Receita semanal</p>
                  <p className="text-[11px] text-[var(--text-3)]">últimos 7 ciclos</p>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {BAR_HEIGHTS.map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 rounded-t-md bg-[var(--accent-muted)]"
                      style={{
                        background: index === 5 ? 'linear-gradient(to top, var(--accent), var(--accent-light))' : undefined,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 + index * 0.06 }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-2">
                {['Open Banking conectado', 'Alertas de anomalia ativos', 'Relatórios prontos para gestão'].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-[var(--text-2)]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </Surface>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Metric({ title, value, tone }: { title: string; value: string; tone: 'success' | 'accent' }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
      <p className="text-[12px] text-[var(--text-3)]">{title}</p>
      <p className="mt-1 font-display text-2xl font-bold" style={{ color: tone === 'success' ? '#22c55e' : 'var(--accent)' }}>
        {value}
      </p>
    </div>
  )
}
