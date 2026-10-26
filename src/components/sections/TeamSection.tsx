'use client'

import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { FadeInUp } from '@/components/animations'
import { Container, Section, SectionHeader, Surface } from '@/components/primitives/Layout'
import { TEAM } from '@/lib/team'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function TeamSection() {
  return (
    <Section tone="deep" className="border-t border-[var(--border)]">
      <Container>
        <FadeInUp>
          <SectionHeader
            eyebrow="Quem faz acontecer"
            title="Você fala direto com quem constrói."
            description="Sem intermediário entre a sua ideia e o código: quem entende o seu problema é quem desenha, desenvolve e mantém a solução."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </FadeInUp>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6">
          {TEAM.map((member) => (
            <FadeInUp key={member.id}>
              <Surface className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
                <div className="relative flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-2xl bg-[var(--accent-muted)] text-xl font-bold text-[var(--accent)]">
                  {member.avatar ? (
                    <Image src={member.avatar} alt={`Foto de ${member.name}`} fill className="object-cover" sizes="80px" />
                  ) : (
                    <span aria-hidden="true">{initials(member.name)}</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[17px] font-bold text-[var(--text-1)]">{member.name}</h3>
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
                        className="flex-none rounded-lg p-1.5 text-[var(--text-3)] transition-colors hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="mt-3 text-[14px] leading-7 text-[var(--text-2)]">{member.bio}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-2)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Surface>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
