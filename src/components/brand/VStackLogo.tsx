interface VStackLogoProps {
  className?: string
  showText?: boolean
}

export default function VStackLogo({ className = 'h-9 w-9', showText = true }: VStackLogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg className={className} viewBox="0 0 80 70" fill="none" aria-hidden="true">
        <polygon points="0,0 20,0 40,40 60,0 80,0 40,70" fill="#2D3748" />
        <polygon points="20,0 40,0 40,40" fill="#3D4B61" />
        <polygon points="40,0 60,0 40,40" fill="#252D3D" />
        <polygon points="34,36 40,48 46,36 40,40" fill="#F07028" />
      </svg>
      {showText && (
        <span className="font-display text-[14px] font-bold tracking-[0.08em] text-[var(--text-1)]">
          V-STACK <span className="text-[var(--accent)]">SOLUTIONS</span>
        </span>
      )}
    </span>
  )
}
