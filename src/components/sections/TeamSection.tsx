'use client'

import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/animations'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { TEAM } from '@/lib/team'

// 1x1 transparent pixel — prevents layout shift during team photo load
const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

export default function TeamSection() {
  return (
    <Section tone="deep" className="border-t border-[var(--border)]">
      <Container>
        <FadeInUp>
          <SectionHeader
            eyebrow="Quem faz acontecer"
            title="Um time pequeno com impacto desproporcional."
            description="Cada pessoa na V-STACK tem visão de produto e profundidade técnica. Ninguém aqui apenas executa tickets — todos pensam o sistema de ponta a ponta."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </FadeInUp>

        <StaggerContainer
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.1}
        >
          {TEAM.map((member) => (
            <StaggerItem key={member.id}>
              <Surface
                interactive
                className="group flex h-full flex-col overflow-hidden p-0"
              >
                {/* Avatar */}
                <div className="relative h-52 w-full overflow-hidden bg-[var(--bg-deep)]">
                  <Image
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-[var(--text-1)]">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                        {member.role}
                      </p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name}`}
                        className="mt-0.5 flex-none rounded-lg p-1.5 text-[var(--text-3)] transition-colors hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-[13px] leading-6 text-[var(--text-2)]">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-3)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Surface>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
