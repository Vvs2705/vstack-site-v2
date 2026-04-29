'use client'

import { BuilderComponent, builder } from '@builder.io/react'
import { BUILDER_API_KEY } from '@/lib/builder'
import '@/components/builder/builder-registry'

builder.init(BUILDER_API_KEY)

interface BuilderRendererProps {
  content: object | null
  model?: string
}

export default function BuilderRenderer({ content, model = 'page' }: BuilderRendererProps) {
  return (
    <BuilderComponent
      model={model}
      content={content ?? undefined}
    />
  )
}
