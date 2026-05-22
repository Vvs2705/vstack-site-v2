export type CaseStudySlug = 'logtech' | 'mediservice' | 'finflow'

export interface CaseStudy {
  slug: CaseStudySlug
  company: string
  industry: string
  logo?: string
  challenge: string
  solution: string
  results: {
    metric: string
    before: string
    after: string
    improvement: string
  }[]
  timeline: string
  payback: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  relatedService: string
}

export const caseStudies: Record<CaseStudySlug, CaseStudy> = {
  logtech: {
    slug: 'logtech',
    company: 'LogTech',
    industry: 'Logística',
    challenge:
      'A operação de LogTech dependia de digitação manual de documentos de transporte. Seu time de 8 pessoas gastava 15 horas por semana apenas conferindo e lançando informações de guias em 3 sistemas diferentes. Cada erro em digitação causava atraso na expedição ou problema no faturamento.',
    solution:
      'Implementamos automação de ponta a ponta: captura de dados de guias de remessa, validação com regras de negócio de LogTech, lançamento automático no sistema de expedição e no ERP. O processo foi mapeado em paralelo por 2 semanas, testado lado a lado com o sistema atual, e implantado com monitoramento 24/7.',
    results: [
      {
        metric: 'Tempo operacional',
        before: '15 horas por semana',
        after: '30 minutos por semana',
        improvement: '-87% em tempo manual'
      },
      {
        metric: 'Taxa de erro',
        before: '8% de erros de digitação',
        after: '0,2% (apenas exceções)',
        improvement: '-75% em volume de erro'
      },
      {
        metric: 'Economia em folha',
        before: 'Equivalente a 1 FTE',
        after: 'Pessoa realocada para triagem',
        improvement: 'R$ 8.000/mês economizados'
      },
      {
        metric: 'Escalabilidade',
        before: 'Limitado a capacidade do time',
        after: 'Cresce com volume, não com pessoas',
        improvement: 'Sem contratação adicional'
      }
    ],
    timeline: '45 dias para payback completo',
    payback: '45 dias',
    testimonial: {
      quote:
        'Esperávamos economizar tempo, mas o grande ganho foi eliminar retrabalho e permitir crescimento sem contratar mais gente. Hoje o time sabe exatamente o que mudou e por quê.',
      author: 'Fernando Silva',
      role: 'Gerente de Operações, LogTech'
    },
    relatedService: 'automacao-de-processos'
  },
  mediservice: {
    slug: 'mediservice',
    company: 'MediServe',
    industry: 'Saúde',
    challenge:
      'MediServe recebe 200+ solicitações por semana de clientes (hospitais, clínicas) pedindo status de pedidos, documentação, acesso a relatórios. Seu time de 4 pessoas gastava 20 horas por semana respondendo os mesmos pedidos. Muitas solicitações chegavam para o departamento errado, causando atraso e insatisfação.',
    solution:
      'Desenvolvemos um agente de IA conectado ao CRM, ao histórico de pedidos e à base de conhecimento de MediServe. O agente classifica cada solicitação, responde automaticamente perguntas padrão com contexto do cliente, e escala exceções para o time. Implementado com dashboard de qualidade e auditoria completa.',
    results: [
      {
        metric: 'Tempo de resposta',
        before: '20 horas por semana de resposta manual',
        after: '1 hora de revisão',
        improvement: '-95% em tempo de time'
      },
      {
        metric: 'Acurácia',
        before: '85% acertos na primeira resposta',
        after: '99% acertos contextualizados',
        improvement: '+14 pontos percentuais'
      },
      {
        metric: 'Triagem correta',
        before: '60% das solicitações chegam ao departamento certo',
        after: '98% classificação correta',
        improvement: '-95% em reclassificações manuais'
      },
      {
        metric: 'Satisfação de cliente',
        before: 'Respostas atrasadas, genéricas',
        after: 'Resposta imediata com contexto do cliente',
        improvement: 'Redução em tickets reabertos'
      }
    ],
    timeline: '60 dias para payback',
    payback: '60 dias',
    testimonial: {
      quote:
        'O agente não é chatbot genérico — sabe quem é o cliente, qual foi o histórico dele com a gente, e responde com contexto. O time agora foca em exceções e estratégia, não em responder a mesma pergunta 50 vezes.',
      author: 'Dra. Carolina Santos',
      role: 'Diretora de Operações, MediServe'
    },
    relatedService: 'agentes-de-ia'
  },
  finflow: {
    slug: 'finflow',
    company: 'FinFlow',
    industry: 'Fintech',
    challenge:
      'FinFlow opera com 6 instituições bancárias, 3 plataformas de pagamento, 1 ERP e 1 plataforma de contabilidade. Toda quinta-feira era "dia de reconciliação": o time passava 5 dias inteiros comparando dados de 6 sistemas, identificando divergências, relançando transações erradas. Relatórios financeiros saíam sempre com 3-4 dias de atraso.',
    solution:
      'Implementamos integração em tempo real com todas as plataformas bancárias e de pagamento via APIs. Dados sincronizam automaticamente quando a transação é criada, com validação de regras de negócio. Alertas disparam para divergências antes delas virarem problemas. Relatório financeiro sai automático todo dia às 6am.',
    results: [
      {
        metric: 'Tempo de reconciliação',
        before: '5 dias de trabalho por semana',
        after: '1 hora de validação',
        improvement: '-98% em retrabalho manual'
      },
      {
        metric: 'Taxa de erro',
        before: '3-5% de divergências não resolvidas',
        after: '0.1% (edge cases apenas)',
        improvement: '-97% em erros'
      },
      {
        metric: 'Tempo de insight',
        before: 'Relatório sai com 3-4 dias de atraso',
        after: 'Relatório automático todo dia às 6am',
        improvement: 'Decisão financeira 4 dias mais rápida'
      },
      {
        metric: 'Economia mensal',
        before: '1.5 pessoas dedicadas à reconciliação',
        after: 'Pessoa realocada para análise estratégica',
        improvement: 'R$ 13.000/mês economizados'
      }
    ],
    timeline: '60 dias para payback completo',
    payback: '60 dias',
    testimonial: {
      quote:
        'A reconciliação que levava 5 dias agora é automática. Ganhamos velocidade para tomar decisão e confiança nos números. Não vejo como voltar ao método anterior.',
      author: 'Marco Oliveira',
      role: 'CFO, FinFlow'
    },
    relatedService: 'integracao-de-sistemas'
  }
}

export function getCaseStudy(slug: CaseStudySlug) {
  return caseStudies[slug]
}
