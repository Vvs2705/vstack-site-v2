export interface ProjectFeature {
  icon: string
  title: string
  description: string
}

export interface ProjectData {
  slug: string
  title: string
  description: string
  thumbnail: string
  status: 'planning' | 'active' | 'developing'
  tags: string[]
  problem: string
  solution: string
  features: ProjectFeature[]
  screenshots: string[]
  metrics?: Record<string, string>
  links: {
    demo?: string
    docs?: string
    github?: string
  }
}

export const projects: ProjectData[] = [
  {
    slug: 'fiscwise',
    title: 'FiscWise',
    description: 'Central do escritório contábil: obrigações por cliente, portal do cliente e fechamento mensal com dossiê.',
    thumbnail: '/og-image.png',
    status: 'active',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Supabase', 'TypeScript', 'Tailwind'],

    problem:
      'Escritórios de contabilidade controlam prazos, guias e documentos de dezenas de clientes em planilhas, e-mail e WhatsApp. Um vencimento esquecido vira multa para o cliente, e o fechamento do mês depende de caçar arquivo por arquivo.',

    solution:
      'O FiscWise organiza a carteira do escritório num lugar só: calcula as obrigações de cada cliente pelo regime, CNAE e município, recebe os documentos pelo portal do cliente e fecha cada competência com um dossiê em PDF.',

    features: [
      {
        icon: 'AlertCircle',
        title: 'Obrigações por cliente',
        description:
          'Calendário calculado por regime, CNAE, município e UF, com recorrência e prazos de cada cliente da carteira.',
      },
      {
        icon: 'TrendingUp',
        title: 'Fechamento com dossiê PDF',
        description:
          'Fechamento mensal por competência, com o dossiê em PDF gerado a partir do que foi entregue no mês.',
      },
      {
        icon: 'Smartphone',
        title: 'Portal do cliente',
        description:
          'O cliente final entra por convite, envia documentos e baixa guias sem depender de e-mail ou WhatsApp.',
      },
      {
        icon: 'BarChart3',
        title: 'Documentos e financeiro',
        description:
          'Arquivos de cada cliente guardados em lugar privado, com contas a receber e controle de inadimplência do escritório.',
      },
      {
        icon: 'Zap',
        title: 'Assistente com IA',
        description:
          'Calculadora fiscal e assistente por IA para tirar dúvidas operacionais do dia a dia do escritório.',
      },
      {
        icon: 'Lock',
        title: 'Segurança e LGPD',
        description:
          'Dados de cada escritório isolados, controle de acesso por responsável e boas práticas para dados sensíveis.',
      },
    ],

    // Sem capturas até haver telas reais do produto (as antigas eram ilustrações com recursos que o FiscWise não tem).
    screenshots: [],

    links: {
      demo: 'https://demo.contabilidadeflow.com.br',
      docs: '/fiscwise',
    },
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug)
}
