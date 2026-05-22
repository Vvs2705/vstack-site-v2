import { Workflow, Bot, Network, Code2 } from 'lucide-react'

export interface SolutionDetail {
  id: string
  icon: typeof Workflow
  title: string
  description: string
  href: string
  problem: string
  solution: string[]
  results: {
    metric: string
    before: string
    after: string
    highlight: string
  }[]
  relatedCase: 'logtech' | 'mediservice' | 'finflow'
  color: {
    accent: string
    muted: string
    border: string
  }
}

export const solutionsDetailed: SolutionDetail[] = [
  {
    id: 'automacao',
    icon: Workflow,
    title: 'Automação de processos',
    description:
      'Transforme tarefas repetitivas em fluxos monitoráveis que reduzem erro e liberam tempo do time.',
    href: '/automacao-de-processos',
    problem:
      'Você gasta 12 horas/semana exportando dados de um sistema, importando em outro, digitando valores na planilha. O processo tem 8 pontos de falha manual. Cada erro causa atraso em faturamento ou expedição.',
    solution: [
      'Extrai dados de Sistema A em tempo real',
      'Valida contra regras de negócio (ex: valor > R$ 100k gera alerta)',
      'Popula Sistema B sem intermediário ou digitação',
      'Envia relatório + alertas por email diariamente',
    ],
    results: [
      {
        metric: 'Tempo operacional',
        before: '12h/semana',
        after: '30min/semana',
        highlight: '-87% em retrabalho',
      },
      {
        metric: 'Taxa de erro',
        before: '8% de erros',
        after: '0,2% (exceções)',
        highlight: '-75% em volume de erro',
      },
      {
        metric: 'Economia mensal',
        before: 'Equivalente a 1 FTE',
        after: 'R$ 8k em folha',
        highlight: 'Pessoa realocada para triagem',
      },
    ],
    relatedCase: 'logtech',
    color: {
      accent: '#22c55e',
      muted: 'rgba(34, 197, 94, 0.1)',
      border: 'rgba(34, 197, 94, 0.2)',
    },
  },
  {
    id: 'ia',
    icon: Bot,
    title: 'Agentes de IA aplicados',
    description:
      'Use IA para classificar, responder, analisar e apoiar decisões dentro do processo real da empresa.',
    href: '/agentes-de-ia',
    problem:
      'Seu time responde 200+ solicitações por semana de clientes. Muitas chegam para o departamento errado. Seu time gasta 20 horas por semana respondendo as mesmas perguntas. Qualidade de resposta é inconsistente.',
    solution: [
      'Agente conectado ao seu CRM, base de conhecimento e histórico de clientes',
      'Classifica automaticamente cada solicitação (roteamento inteligente)',
      'Responde perguntas padrão com contexto real do cliente',
      'Escala exceções para o time com priorização automática',
    ],
    results: [
      {
        metric: 'Tempo de resposta',
        before: '20h/semana manual',
        after: '1h de revisão',
        highlight: '-95% em tempo de time',
      },
      {
        metric: 'Acurácia de resposta',
        before: '85% acertos',
        after: '99% acertos contextualizados',
        highlight: '+14 pontos percentuais',
      },
      {
        metric: 'Roteamento correto',
        before: '60% chegam ao departamento certo',
        after: '98% classificação correta',
        highlight: '-95% em reclassificações',
      },
    ],
    relatedCase: 'mediservice',
    color: {
      accent: '#3b82f6',
      muted: 'rgba(59, 130, 246, 0.1)',
      border: 'rgba(59, 130, 246, 0.2)',
    },
  },
  {
    id: 'integracao',
    icon: Network,
    title: 'Integração de sistemas',
    description:
      'Conecte ERPs, CRMs, bancos, APIs e ferramentas internas sem depender de retrabalho manual.',
    href: '/integracao-de-sistemas',
    problem:
      'Seu ERP não fala com o CRM. Dados financeiros saem do banco em arquivo, entram na planilha, depois em sistema. Há 3 dias de atraso de informação. Erros de conciliação aparecem sempre.',
    solution: [
      'Mapeamos todas as transferências de dados entre sistemas',
      'Criamos APIs ou conectores (ERP → CRM → Banco → Dashboard)',
      'Dados fluem em tempo real ou em batch automático',
      'Alertas disparados se discrepâncias forem detectadas',
    ],
    results: [
      {
        metric: 'Tempo de reconciliação',
        before: '5 dias de fechamento',
        after: '1 hora de validação',
        highlight: '-98% em retrabalho',
      },
      {
        metric: 'Frequência de erro',
        before: '3-5% de erros',
        after: '0,1% de exceções',
        highlight: '-98% em erros',
      },
      {
        metric: 'Decisão mais rápida',
        before: '5 dias depois de fechamento',
        after: 'Real-time ou T+1',
        highlight: 'Informação no mesmo dia',
      },
    ],
    relatedCase: 'finflow',
    color: {
      accent: '#00d4ff',
      muted: 'rgba(0, 212, 255, 0.1)',
      border: 'rgba(0, 212, 255, 0.2)',
    },
  },
  {
    id: 'sistemas',
    icon: Code2,
    title: 'Sistemas sob medida',
    description:
      'Construa plataformas, portais e produtos SaaS com arquitetura preparada para evolução.',
    href: '/sistemas-sob-medida',
    problem:
      'Você precisa de um sistema que suas ferramentas off-the-shelf não fazem. Terceirizar custa caro e perde a propriedade do código. Construir internamente é caro e demanda expertise que você não tem.',
    solution: [
      'Entendemos seu processo (não vendemos solução pronta)',
      'Projetamos a arquitetura com você (manutenível, escalável)',
      'Entregamos em sprints curtos (beta em 4 semanas)',
      'Você pode evoluir ou transferir o código depois',
    ],
    results: [
      {
        metric: 'Tempo de construção',
        before: '6-9 meses com time interno',
        after: '4-8 semanas (MVP funcional)',
        highlight: '-60% em timeline',
      },
      {
        metric: 'Custo total',
        before: 'R$ 400k+ (time interno)',
        after: 'R$ 60-120k (3-5 sprints)',
        highlight: '-70% em custo',
      },
      {
        metric: 'Propriedade de código',
        before: 'Fornecedor locked-in',
        after: 'Você possui o código',
        highlight: 'Zero vendor lock-in',
      },
    ],
    relatedCase: 'logtech',
    color: {
      accent: '#f59e0b',
      muted: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.2)',
    },
  },
]
