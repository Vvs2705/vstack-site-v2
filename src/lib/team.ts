export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  linkedin?: string
  skills: string[]
}

export const TEAM: TeamMember[] = [
  {
    id: 'vinicius-sousa',
    name: 'Vinicius Sousa',
    role: 'Fundador & Engenheiro de Software',
    bio: 'Arquiteta soluções de automação e sistemas financeiros. Lidera o design técnico de cada produto, com foco em escalabilidade e entrega incremental.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Next.js', 'Python', 'FastAPI', 'IA Aplicada'],
  },
  {
    id: 'mariana-ribeiro',
    name: 'Mariana Ribeiro',
    role: 'Engenheira de Integrações',
    bio: 'Especialista em conectar sistemas legados a APIs modernas. Projeta pipelines de dados que transformam silos em operações coordenadas.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&auto=format&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['REST APIs', 'Webhooks', 'ETL', 'PostgreSQL'],
  },
  {
    id: 'rafael-costa',
    name: 'Rafael Costa',
    role: 'Engenheiro de Produto & UX',
    bio: 'Garante que o produto seja utilizável antes de ser sofisticado. Transforma descobertas de usuário em interfaces que reduzem fricção operacional.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Figma', 'React', 'Pesquisa de Usuário', 'Design System'],
  },
  {
    id: 'lucas-ferreira',
    name: 'Lucas Ferreira',
    role: 'Engenheiro de Infraestrutura',
    bio: 'Mantém os sistemas no ar e os deploys seguros. Responsável pela arquitetura de cloud, observabilidade e pipelines de CI/CD.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Docker', 'Fly.io', 'Vercel', 'Observabilidade'],
  },
]
