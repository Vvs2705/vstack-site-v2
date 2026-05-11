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

  const normalized = data.map((d) => ((d - min) / range) * (height - 8) + 4)

  const pathData = normalized
    .map((y, i) => `${(i / (points - 1)) * width},${height - y}`)
    .join(' L ')

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="var(--border)" strokeWidth="0.5" />

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

      <polyline
        points={pathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'transition-all duration-500 ease-out' : undefined}
      />

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
