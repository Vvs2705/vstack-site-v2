# Roadmap de Componentes UI — V Stack Site

**Autor:** UI-UX Director  
**Data:** 2026-05-05

---

## 1. NOVOS COMPONENTES A CRIAR

### 1.1 StatCard Component

**Arquivo:** `src/components/ui/StatCard.tsx`

```tsx
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  value: string | number
  label: string
  icon?: LucideIcon
  trend?: {
    direction: 'up' | 'down'
    value: string
    color?: string
  }
  color?: 'accent' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const colorMap = {
  accent: 'text-[var(--accent)]',
  success: 'text-green-400',
  warning: 'text-amber-400',
  info: 'text-blue-400',
}

const sizeMap = {
  sm: { value: 'text-xl', label: 'text-xs' },
  md: { value: 'text-3xl', label: 'text-sm' },
  lg: { value: 'text-4xl', label: 'text-base' },
}

export default function StatCard({
  value,
  label,
  icon: Icon,
  trend,
  color = 'accent',
  size = 'md',
  animated = true,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all hover:border-[var(--border-hover)]"
         style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      {/* Header com ícone */}
      {Icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)]">
          <Icon className={`h-5 w-5 ${colorMap[color]}`} />
        </div>
      )}

      {/* Valor */}
      <div className="mb-2 flex items-baseline gap-2">
        <span className={`font-display font-bold ${sizeMap[size].value} ${colorMap[color]}`}>
          {animated ? <CountUp value={value} /> : value}
        </span>
        
        {/* Trend badge */}
        {trend && (
          <span className={`text-xs font-semibold ${trend.color || 'text-green-400'}`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>

      {/* Label */}
      <p className={`text-[var(--text-3)] uppercase tracking-wider ${sizeMap[size].label}`}>
        {label}
      </p>
    </div>
  )
}

// Helper para animação de contador
function CountUp({ value }: { value: string | number }) {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const numValue = parseInt(value.toString().match(/\d+/)?.[0] || '0')
    const interval = setInterval(() => {
      setCount((prev) => (prev < numValue ? prev + Math.ceil(numValue / 20) : numValue))
    }, 50)
    return () => clearInterval(interval)
  }, [value])

  return <>{count}%</>
}
```

---

### 1.2 MetricBox Component

**Arquivo:** `src/components/ui/MetricBox.tsx`

```tsx
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface MetricBoxProps {
  label: string
  value: string
  icon?: LucideIcon
  trend?: { direction: 'up' | 'down'; value: string }
  accent?: boolean
}

export default function MetricBox({
  label,
  value,
  icon: Icon,
  trend,
  accent = false,
}: MetricBoxProps) {
  return (
    <div
      className={`rounded-xl border p-4 transition-all ${
        accent
          ? 'border-[var(--accent-border)] bg-[var(--accent-muted)]'
          : 'border-[var(--border)] bg-[var(--bg-deep)]'
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-[var(--text-3)]">
          {label}
        </span>
        {Icon && <Icon className="h-4 w-4 text-[var(--accent)]" />}
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-display text-xl font-bold text-[var(--text-1)]">
          {value}
        </span>
        {trend && (
          <span className="text-xs font-semibold text-green-400">
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </div>
  )
}
```

---

### 1.3 FeatureCard Component

**Arquivo:** `src/components/ui/FeatureCard.tsx`

```tsx
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: 'orange' | 'blue' | 'green' | 'purple'
}

const colorMap = {
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-500', border: 'border-orange-500/20' },
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', border: 'border-blue-500/20' },
  green: { bg: 'bg-green-500/10', icon: 'text-green-500', border: 'border-green-500/20' },
  purple: { bg: 'bg-purple-500/10', icon: 'text-purple-500', border: 'border-purple-500/20' },
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = 'orange',
}: FeatureCardProps) {
  const colors = colorMap[color]

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:border-[var(--border-hover)]`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: `radial-gradient(circle at 50% 0%, ${colors.icon}10, transparent 60%)` }} />

      <div className="relative">
        {/* Icon */}
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} border ${colors.border}`}>
          <Icon className={`h-6 w-6 ${colors.icon}`} />
        </div>

        {/* Content */}
        <h3 className="font-display text-base font-bold text-[var(--text-1)] mb-2">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-2)]">
          {description}
        </p>
      </div>
    </div>
  )
}
```

---

### 1.4 MiniLineChart Component

**Arquivo:** `src/components/charts/MiniLineChart.tsx`

```tsx
interface MiniLineChartProps {
  data: number[]
  color?: string
  height?: number
  animated?: boolean
}

export default function MiniLineChart({
  data,
  color = '#F07028',
  height = 40,
  animated = true,
}: MiniLineChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min
  const width = 100
  const points = data.length

  // Normalizar dados
  const normalized = data.map((d) => ((d - min) / range) * (height - 8) + 4)

  // Criar path SVG
  const pathData = normalized
    .map((y, i) => `${(i / (points - 1)) * width},${height - y}`)
    .join(' L ')

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      {/* Grid lines */}
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="var(--border)" strokeWidth="0.5" />

      {/* Area under curve */}
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={`M ${pathData} L ${width},${height} L 0,${height} Z`}
        fill="url(#areaGradient)"
      />

      {/* Line */}
      <polyline
        points={pathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots on points */}
      {normalized.map((y, i) => (
        <circle
          key={i}
          cx={(i / (points - 1)) * width}
          cy={height - y}
          r="1.5"
          fill={color}
          opacity="0.6"
        />
      ))}
    </svg>
  )
}
```

---

### 1.5 ProgressBar Component

**Arquivo:** `src/components/ui/ProgressBar.tsx`

```tsx
import React from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  color?: 'accent' | 'success' | 'warning'
  animated?: boolean
}

const colorMap = {
  accent: 'from-[var(--accent)] to-[var(--accent-light)]',
  success: 'from-green-400 to-green-300',
  warning: 'from-amber-400 to-amber-300',
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = 'accent',
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min(100, (value / max) * 100)

  return (
    <div>
      {/* Header */}
      {(label || showPercentage) && (
        <div className="mb-2 flex items-center justify-between text-xs text-[var(--text-3)]">
          {label && <span>{label}</span>}
          {showPercentage && <span className="font-semibold text-[var(--accent)]">{Math.round(percentage)}%</span>}
        </div>
      )}

      {/* Bar */}
      <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]} transition-all ${
            animated ? 'duration-1000 ease-out' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
```

---

## 2. REFACTOR DE SEÇÕES

### 2.1 HeroSection — Mudanças

**Arquivo:** `src/components/sections/HeroSection.tsx`

```tsx
// Adicionar no topo:
import StatCard from '@/components/ui/StatCard'
import MiniLineChart from '@/components/charts/MiniLineChart'
import { TrendingUp, Clock, Zap } from 'lucide-react'

// Mudar STATS:
const STATS = [
  { value: '98', label: 'precisão', icon: Zap, trend: { direction: 'up', value: '+5%' } },
  { value: '-72h', label: 'fechamento', icon: Clock },
  { value: '3×', label: 'produtividade', icon: TrendingUp, trend: { direction: 'up', value: '+15%' } },
]

// No render, mudar o stats grid:
<div className="grid grid-cols-3 gap-4 mb-8">
  {STATS.map((s) => (
    <StatCard
      key={s.label}
      value={s.value}
      label={s.label}
      icon={s.icon}
      trend={s.trend}
      size="md"
    />
  ))}
</div>

// Product card — aumentar shadow:
// Mudar: style={{ boxShadow: 'var(--shadow)' }}
// Para:   style={{ boxShadow: '0 40px 120px rgba(240,112,40,0.15)' }}

// Gráfico — adicionar hover interativo:
<div className="flex items-end gap-1 h-12 mb-5 group cursor-pointer">
  {BAR_HEIGHTS.map((h, i) => (
    <div
      key={i}
      className="flex-1 rounded-t-sm transition-all duration-300 group-hover:opacity-75 hover:!opacity-100"
      style={{
        height: h,
        background: BAR_ACTIVE[i]
          ? 'linear-gradient(to top, var(--accent), var(--accent-light))'
          : 'rgba(240,112,40,0.15)',
      }}
    />
  ))}
</div>
```

---

### 2.2 PillarsSection — Mudanças

**Arquivo:** `src/components/sections/PillarsSection.tsx`

```tsx
// Adicionar no topo:
import FeatureCard from '@/components/ui/FeatureCard'
import {
  Zap,
  Bot,
  Link2,
  Package,
} from 'lucide-react'

// Novo array de pillars:
const DEFAULT_PILLARS = [
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Eliminamos trabalho repetitivo com fluxos inteligentes integrados ao seu stack atual.',
    color: 'orange' as const,
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    description: 'Agentes autônomos e LLMs aplicados a problemas reais de negócio com resultados mensuráveis.',
    color: 'blue' as const,
  },
  {
    icon: Link2,
    title: 'Integrações Enterprise',
    description: 'Conectamos ERPs, APIs financeiras e plataformas de comunicação sem atrito.',
    color: 'green' as const,
  },
  {
    icon: Package,
    title: 'Produtos SaaS',
    description: 'Desenvolvemos produtos digitais do zero ao product-market fit com entregas ágeis.',
    color: 'purple' as const,
  },
]

// No grid, usar FeatureCard:
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {pillars.map((pillar) => (
    <FeatureCard
      key={pillar.title}
      icon={pillar.icon}
      title={pillar.title}
      description={pillar.description}
      color={pillar.color}
    />
  ))}
</div>
```

---

### 2.3 ContaFlowSection — Mudanças

**Arquivo:** `src/components/sections/ContaFlowSection.tsx`

```tsx
// Adicionar imports:
import MetricBox from '@/components/ui/MetricBox'
import MiniLineChart from '@/components/charts/MiniLineChart'
import ProgressBar from '@/components/ui/ProgressBar'
import { TrendingUp, TrendingDown } from 'lucide-react'

// Adicionar state para dados simulados:
const [dashboardData, setDashboardData] = React.useState({
  entradas: 84200,
  saidas: 31450,
  conciliacao: 247,
  saldo: 52750,
  chartData: [45, 52, 38, 65, 48, 72, 58, 81, 64, 75, 82, 78],
})

// Simular atualização de dados:
React.useEffect(() => {
  const interval = setInterval(() => {
    setDashboardData((prev) => ({
      ...prev,
      entradas: prev.entradas + Math.floor(Math.random() * 1000 - 500),
      saidas: prev.saidas + Math.floor(Math.random() * 500 - 250),
      chartData: [...prev.chartData.slice(1), Math.floor(Math.random() * 100)],
    }))
  }, 5000)
  return () => clearInterval(interval)
}, [])

// Refazer o dashboard card layout:
<div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
  {/* Status header */}
  <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-xs text-[var(--text-3)] font-medium">
        ContaFlow · Dashboard · Atualizado há 2 min
      </span>
    </div>
  </div>

  {/* KPI Grid 2x2 */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    <MetricBox
      label="Entradas"
      value={`R$ ${dashboardData.entradas.toLocaleString('pt-BR')}`}
      icon={TrendingUp}
      trend={{ direction: 'up', value: '+12%' }}
      accent={false}
    />
    <MetricBox
      label="Saídas"
      value={`R$ ${dashboardData.saidas.toLocaleString('pt-BR')}`}
      icon={TrendingDown}
      trend={{ direction: 'down', value: '-5%' }}
      accent={false}
    />
  </div>

  {/* Mini Chart */}
  <div className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4">
    <p className="text-xs text-[var(--text-3)] mb-3 uppercase tracking-widest">
      Fluxo últimos 12 meses
    </p>
    <MiniLineChart data={dashboardData.chartData} />
  </div>

  {/* Progress */}
  <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-deep)] p-4 mb-4">
    <ProgressBar
      value={dashboardData.conciliacao}
      max={250}
      label="Conciliação automática"
      showPercentage={false}
      color="accent"
    />
  </div>

  {/* Saldo destacado */}
  <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] p-4">
    <div className="flex items-center justify-between">
      <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
        Saldo Líquido
      </span>
      <span className="font-display text-2xl font-bold text-[var(--text-1)]">
        R$ {dashboardData.saldo.toLocaleString('pt-BR')}
      </span>
    </div>
  </div>
</div>
```

---

## 3. NOVO UTILITIES NO GLOBALS.CSS

**Arquivo:** `src/app/globals.css`

```css
/* Adicionar antes do @layer utilities existente */

@layer components {
  /* Card base aprimorada */
  .card-base {
    @apply rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300;
  }

  .card-base:hover {
    @apply border-[var(--border-hover)];
  }

  /* Card elevated com shadow */
  .card-elevated {
    @apply card-base;
    box-shadow: var(--shadow);
  }

  .card-elevated:hover {
    @apply border-[var(--border-hover)];
    box-shadow: 0 32px 80px rgba(240,112,40,0.12);
  }

  /* Card inert (sem hover) */
  .card-flat {
    @apply card-base;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }

  /* Stat value */
  .stat-value {
    @apply font-display text-3xl font-bold text-[var(--text-1)];
  }

  .stat-value.sm {
    @apply text-xl;
  }

  .stat-value.lg {
    @apply text-4xl;
  }

  /* Stat label */
  .stat-label {
    @apply text-[11px] uppercase tracking-widest text-[var(--text-3)];
  }

  /* Icon box */
  .icon-box {
    @apply flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)];
  }

  .icon-box.sm {
    @apply h-8 w-8;
  }

  .icon-box.lg {
    @apply h-12 w-12;
  }

  /* Feature highlight */
  .feature-highlight {
    @apply rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--accent)];
  }

  /* Glass effect (opcional) */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .dark .glass {
    background: rgba(13, 20, 34, 0.4);
  }
}

/* Adicionar animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@layer utilities {
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Shadow variants */
  .shadow-glow {
    box-shadow: 0 0 30px rgba(240, 112, 40, 0.15);
  }

  .shadow-glow-sm {
    box-shadow: 0 0 15px rgba(240, 112, 40, 0.1);
  }
}
```

---

## 4. ARQUITETURA FINAL

```
src/components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── HeroSection.tsx (aprimorado)
│   ├── TechStripSection.tsx (aprimorado)
│   ├── PillarsSection.tsx (aprimorado)
│   ├── ContaFlowSection.tsx (aprimorado)
│   └── CTASection.tsx
├── ui/
│   ├── StatCard.tsx (novo)
│   ├── MetricBox.tsx (novo)
│   ├── FeatureCard.tsx (novo)
│   ├── ProgressBar.tsx (novo)
│   └── Badge.tsx (restyle)
├── charts/
│   └── MiniLineChart.tsx (novo)
├── forms/
│   ├── ContatoForm.tsx
│   ├── CotacaoForm.tsx
│   └── DorForm.tsx
├── chat/
│   └── ChatWidget.tsx
├── providers/
│   └── ThemeProvider.tsx
└── CookieBanner.tsx
```

---

## 5. TESTING CHECKLIST

- [ ] Responsividade em mobile (375px)
- [ ] Responsividade em tablet (768px)
- [ ] Dark mode em todos os componentes
- [ ] Hover states em desktop
- [ ] Animações suaves (60fps)
- [ ] Performance (Lighthouse > 90)
- [ ] Acessibilidade (WAVE, Axe DevTools)
- [ ] Load time (< 3s em 3G)

---

## 6. PRÓXIMAS SPRINTS

**Sprint 1 (Semana 1):**
- Criar componentes UI base
- Refactor HeroSection
- Refactor PillarsSection

**Sprint 2 (Semana 2):**
- Refactor ContaFlowSection
- Refactor TechStripSection
- Aprimoramentos globais (Navbar, CTA)

**Sprint 3 (QA):**
- Testing em todos os browsers
- Otimizações de performance
- Deploy para staging
- Feedback loop

---

**Status:** Pronto para implementação

