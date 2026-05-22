'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Base AnimatedIcon wrapper ────────────────────────────────────────────────
// Provides the glowing container with hover float animation.
// The SVG path is passed as children for flexibility.

interface AnimatedIconProps {
  children: React.ReactNode
  className?: string
  size?: number
  color?: string
  delay?: number
}

export function AnimatedIcon({ children, className, size = 48, color = 'var(--accent)', delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      className={cn(
        'relative flex items-center justify-center rounded-2xl',
        className,
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${color}22, ${color}08)`,
        border: `1px solid ${color}44`,
        boxShadow: `0 0 0 0 ${color}00`,
      }}
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        },
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 8px 24px ${color}44`,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── AutomationIcon ───────────────────────────────────────────────────────────
// Represents workflow automation: gears/arrows cycling

export function AutomationIcon({ size = 48, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <AnimatedIcon size={size} color="var(--accent)" delay={delay}>
      <svg
        width={size * 0.52}
        height={size * 0.52}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Outer gear ring */}
        <motion.path
          d="M12 2a1 1 0 0 1 1 1v1.07A7 7 0 0 1 18.93 9H20a1 1 0 1 1 0 2h-1.07A7 7 0 0 1 13 16.93V18a1 1 0 1 1-2 0v-1.07A7 7 0 0 1 5.07 11H4a1 1 0 1 1 0-2h1.07A7 7 0 0 1 11 3.07V2a1 1 0 0 1 1 0z"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '12px 12px' }}
        />
        {/* Center dot */}
        <motion.circle
          cx="12"
          cy="12"
          r="2.5"
          fill="var(--accent)"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '12px 12px' }}
        />
        {/* Arrow overlay */}
        <motion.path
          d="M12 7v1M17 12h-1M12 17v-1M7 12h1"
          stroke="var(--accent-light)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// ─── AIIcon ───────────────────────────────────────────────────────────────────
// Neural network / brain nodes pulsing

export function AIIcon({ size = 48, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <AnimatedIcon size={size} color="#a855f7" delay={delay}>
      <svg
        width={size * 0.52}
        height={size * 0.52}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Nodes */}
        {([
          [12, 5],
          [19, 10],
          [17, 18],
          [7, 18],
          [5, 10],
        ] as [number, number][]).map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="2"
            fill="#a855f7"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
        {/* Edges */}
        <motion.path
          d="M12 5L19 10M19 10L17 18M17 18L7 18M7 18L5 10M5 10L12 5M12 5L17 18M5 10L17 18M12 5L7 18M19 10L7 18"
          stroke="#a855f7"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Center glow */}
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '12px 12px' }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// ─── IntegrationIcon ──────────────────────────────────────────────────────────
// Nodes connected via animated lines, representing API mesh

export function IntegrationIcon({ size = 48, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <AnimatedIcon size={size} color="#06b6d4" delay={delay}>
      <svg
        width={size * 0.52}
        height={size * 0.52}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Hub */}
        <circle cx="12" cy="12" r="3" fill="var(--accent)" />
        {/* Spokes animated */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x2 = 12 + Math.cos(rad) * 7
          const y2 = 12 + Math.sin(rad) * 7
          return (
            <motion.line
              key={i}
              x1="12"
              y1="12"
              x2={x2}
              y2={y2}
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
            />
          )
        })}
        {/* Outer dots */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const cx = 12 + Math.cos(rad) * 7
          const cy = 12 + Math.sin(rad) * 7
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="1.5"
              fill="var(--accent-light)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          )
        })}
      </svg>
    </AnimatedIcon>
  )
}

// ─── SaaSIcon ────────────────────────────────────────────────────────────────
// Code brackets with pulsing cursor — represents custom SaaS/product

export function SaaSIcon({ size = 48, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <AnimatedIcon size={size} color="#22c55e" delay={delay}>
      <svg
        width={size * 0.52}
        height={size * 0.52}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Left bracket */}
        <motion.path
          d="M8 6L4 12L8 18"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: [-1, 0, -1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right bracket */}
        <motion.path
          d="M16 6L20 12L16 18"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Cursor blink */}
        <motion.rect
          x="11"
          y="9"
          width="2"
          height="6"
          rx="1"
          fill="#22c55e"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// ─── HeroGlowOrb ─────────────────────────────────────────────────────────────
// Decorative animated orb for hero section

export function HeroGlowOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('pointer-events-none rounded-full', className)}
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
