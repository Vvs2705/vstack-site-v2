import { LucideIcon } from 'lucide-react'

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

  metrics?: {
    [key: string]: string
  }

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
    description: 'Automação financeira que fecha o mês no prazo',
    thumbnail: '/images/projects/contaflow-thumb.png',
    status: 'active',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Open Banking', 'TypeScript', 'Tailwind'],

    problem: 'Empresas de pequeno e médio porte gastam dias fechando o mês com planilhas manuais e conciliações que consomem horas de trabalho. Dados financeiros ficam espalhados em múltiplos sistemas, erros humanos são frequentes, e a falta de visibilidade em tempo real impede tomadas de decisão ágeis. Contadores e gestores financeiros perdem tempo valioso em tarefas repetitivas que poderiam ser automatizadas.',

    solution: 'ContaFlow é uma plataforma SaaS de automação financeira que integra dados bancários via Open Banking, automatiza lançamentos contábeis com inteligência artificial e gera relatórios em tempo real. Com conciliação automática de 98%+, a plataforma reduz o tempo de fechamento contábil de dias para horas, eliminando erros manuais e proporcionando visibilidade completa do fluxo de caixa.',

    features: [
      {
        icon: 'TrendingUp',
        title: 'Conciliação Automática',
        description: 'Integração bancária inteligente que reconcilia transações automaticamente com precisão de 98%, eliminando horas de trabalho manual.'
      },
      {
        icon: 'Zap',
        title: 'Open Banking BR',
        description: 'Conecta-se de forma segura a qualquer banco brasileiro via padrão Open Banking, garantindo dados sempre atualizados.'
      },
      {
        icon: 'BarChart3',
        title: 'Relatórios em Tempo Real',
        description: 'Dashboards interativos e relatórios personalizáveis que atualizam instantaneamente conforme novas transações são processadas.'
      },
      {
        icon: 'AlertCircle',
        title: 'Alertas Inteligentes',
        description: 'Sistema de notificações automáticas para anomalias, pendências e oportunidades de otimização financeira.'
      },
      {
        icon: 'Lock',
        title: 'Segurança Enterprise',
        description: 'Criptografia de ponta a ponta, autenticação multi-fator e conformidade total com LGPD e regulamentações bancárias.'
      },
      {
        icon: 'Smartphone',
        title: 'Multiplataforma',
        description: 'Acesse de qualquer dispositivo com interface responsiva otimizada para desktop, tablet e mobile.'
      }
    ],

    screenshots: [
      '/images/projects/contaflow-dashboard.png',
      '/images/projects/contaflow-reports.png',
      '/images/projects/contaflow-alerts.png',
      '/images/projects/contaflow-conciliation.png'
    ],

    metrics: {
      'Precisão': '98%',
      'Redução de Tempo': '-72h',
      'Automação': '100%',
      'Economia': 'R$ 15k/mês'
    },

    links: {
      demo: 'https://demo.contabilidadeflow.com.br',
      docs: '/docs/contaflow'
    }
  }
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(p => p.slug === slug)
}
