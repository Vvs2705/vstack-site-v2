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
    slug: 'contaflow',
    title: 'ContaFlow',
    description: 'Automação financeira para fechar o mês com menos retrabalho e mais controle.',
    thumbnail: '/images/projects/contaflow-thumb.png',
    status: 'active',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Open Banking', 'TypeScript', 'Tailwind'],

    problem:
      'Empresas de pequeno e médio porte ainda fecham o mês com planilhas, conferências manuais e informações espalhadas em vários sistemas. Isso gera atraso, erro humano e pouca visibilidade para decisões financeiras.',

    solution:
      'ContaFlow centraliza dados financeiros, automatiza conciliação, organiza lançamentos e entrega indicadores em tempo real. O objetivo é reduzir o esforço operacional e dar clareza para gestores e equipes contábeis.',

    features: [
      {
        icon: 'TrendingUp',
        title: 'Conciliação automática',
        description:
          'Integração bancária para reduzir conferências manuais e acelerar o fechamento financeiro.',
      },
      {
        icon: 'Zap',
        title: 'Open Banking BR',
        description:
          'Conexão segura com instituições financeiras brasileiras para manter os dados atualizados.',
      },
      {
        icon: 'BarChart3',
        title: 'Indicadores em tempo real',
        description:
          'Dashboards e relatórios para acompanhar caixa, pendências, entradas, saídas e tendências.',
      },
      {
        icon: 'AlertCircle',
        title: 'Alertas operacionais',
        description:
          'Notificações para inconsistências, vencimentos, pendências e pontos que precisam de ação.',
      },
      {
        icon: 'Lock',
        title: 'Segurança e LGPD',
        description:
          'Arquitetura com controle de acesso, criptografia e boas práticas para dados sensíveis.',
      },
      {
        icon: 'Smartphone',
        title: 'Acesso multiplataforma',
        description:
          'Interface responsiva para uso em desktop, tablet e celular sem perder clareza operacional.',
      },
    ],

    screenshots: [
      '/images/projects/contaflow-dashboard.png',
      '/images/projects/contaflow-reports.png',
      '/images/projects/contaflow-alerts.png',
      '/images/projects/contaflow-conciliation.png',
    ],

    metrics: {
      'Menos fechamento manual': '-72h',
      'Conciliação assistida': '98%',
      'Rotinas automatizadas': '100%',
      'Economia estimada': 'R$ 15k/mês',
    },

    links: {
      demo: 'https://demo.contabilidadeflow.com.br',
      docs: '/docs/contaflow',
    },
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug)
}
