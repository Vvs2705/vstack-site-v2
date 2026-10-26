export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  /** Foto real da pessoa. Sem foto, a seção mostra as iniciais (nunca banco de imagens). */
  avatar?: string
  /** Perfil real. Sem link, o ícone não aparece. */
  linkedin?: string
  skills: string[]
}

export const TEAM: TeamMember[] = [
  {
    id: 'vinicius-sousa',
    name: 'Vinicius Sousa',
    role: 'Fundador & Engenheiro de Software',
    bio: 'Cria sites, sistemas e automações e cuida de cada projeto do diagnóstico ao suporte. Construiu e opera os produtos próprios da V-STACK, como o FiscWise.',
    skills: ['Next.js', 'Python', 'FastAPI', 'IA Aplicada'],
  },
]
