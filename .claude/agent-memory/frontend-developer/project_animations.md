---
name: project-animation-system
description: Framer Motion animation primitives added in Phase 2 — location, components, and usage patterns
metadata:
  type: project
---

Framer Motion v12 installed. Animation primitives live at `src/components/animations/index.tsx`.

**Why:** Phase 2 spec required scroll-triggered animations across all pages.

**How to apply:** Import from `@/components/animations` for any new animated component.

## Exported primitives

- `FadeInUp` — opacity + y slide-up on viewport entry (main workhorse)
- `SlideIn` — left/right slide with `direction` prop (alternates per solution card)
- `StaggerContainer` + `StaggerItem` — 100ms stagger for grids and lists
- `PulseLabel` — continuous opacity pulse for eyebrow/badge labels
- `CountUp` — number counter from `from` to `to` on viewport entry
- `AnimatedSection` — wraps entire solution blocks with fade+slide

## Pages updated

- `/solucoes` hero → `SolucoesHero.tsx` (new component, pure motion)
- `SolutionsDetailedSection.tsx` — SlideIn left/right alternating, StaggerContainer for steps + results
- `SolutionsGridSection.tsx` — StaggerContainer for 3 case cards
- `CTASection.tsx` — sequential fade-in for eyebrow → title → description → buttons
- `HeroSection.tsx` (home) — hero enter animation + LIVE badge pulse
- `PillarsSection.tsx` — StaggerContainer for 4 pillar cards
- `IntegrationsSection.tsx` — StaggerContainer for badge grid + FadeInUp for left panel + category filter tabs

## Shared animation config

Easing: `[0.22, 1, 0.36, 1]` (custom ease-out-expo feel)
Duration range: 0.5s (fast elements) → 0.8s (large blocks)
Intersection margin: `-60px` to `-80px` (triggers slightly before element fully in view)
All `once: true` — no re-animation on scroll back up
