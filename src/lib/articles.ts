export interface Article {
  slug: string
  title: string
  description: string
  category: string
  readingTime: string
  publishedAt: string
  updatedAt: string
  hero: string
  sections: {
    title: string
    body: string[]
  }[]
  relatedLinks: {
    label: string
    href: string
  }[]
}

export const articles: Article[] = [
  {
    slug: 'quando-vale-automatizar-um-processo',
    title: 'Quando vale automatizar um processo na empresa?',
    description:
      'Um guia objetivo para identificar processos que geram retrabalho, atrasos e perda de controle antes de investir em automação.',
    category: 'Automação',
    readingTime: '5 min',
    publishedAt: '2026-05-12',
    updatedAt: '2026-05-12',
    hero:
      'Automação funciona melhor quando existe repetição, regra clara e custo operacional visível. O primeiro passo não é comprar ferramenta: é entender onde o processo perde tempo, qualidade ou previsibilidade.',
    sections: [
      {
        title: 'Sinais de que o processo já passou do ponto',
        body: [
          'Se a equipe copia dados entre planilhas, confere informações manualmente ou depende de uma pessoa específica para seguir uma rotina, existe um risco operacional escondido.',
          'Outro sinal forte é quando o gestor só descobre problemas no fim do mês: divergência de dados, atraso em entregas, falha de comunicação ou clientes cobrando status.',
        ],
      },
      {
        title: 'O que automatizar primeiro',
        body: [
          'Priorize tarefas frequentes, com regra estável e impacto direto em tempo, dinheiro ou experiência do cliente. Aprovações, cobrança, conciliação, relatórios e triagens internas costumam ser bons candidatos.',
          'Evite automatizar um processo confuso sem antes simplificar a rotina. Um fluxo ruim automatizado só entrega erro em escala.',
        ],
      },
      {
        title: 'Como medir o retorno',
        body: [
          'Mapeie horas gastas por semana, quantidade de erros, tempo de resposta e custo de oportunidade. Esses números mostram se a automação resolve um incômodo pequeno ou uma trava real da operação.',
          'Depois da implantação, acompanhe os mesmos indicadores por 30 a 60 dias para ajustar regras e remover exceções que ainda exigem intervenção manual.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver automação de processos', href: '/automacao-de-processos' },
      { label: 'Solicitar diagnóstico', href: '/cotacao' },
    ],
  },
  {
    slug: 'automacao-integracao-ou-sistema-sob-medida',
    title: 'Automação, integração ou sistema sob medida: qual escolher?',
    description:
      'Entenda a diferença entre automatizar tarefas, integrar ferramentas existentes e criar um sistema próprio para sustentar a operação.',
    category: 'Estratégia',
    readingTime: '6 min',
    publishedAt: '2026-05-12',
    updatedAt: '2026-05-12',
    hero:
      'Nem todo problema operacional pede um sistema novo. Às vezes a solução certa é conectar ferramentas, automatizar uma etapa ou criar uma camada leve de controle.',
    sections: [
      {
        title: 'Quando automação resolve',
        body: [
          'Automação é indicada quando a empresa já sabe como a rotina deve funcionar, mas ainda executa passos repetitivos manualmente.',
          'Ela reduz esforço operacional e padroniza tarefas sem exigir uma mudança estrutural grande na empresa.',
        ],
      },
      {
        title: 'Quando integração é o caminho',
        body: [
          'Integração faz sentido quando os sistemas usados pela empresa são bons, mas não conversam entre si. O problema principal deixa de ser a ferramenta e passa a ser o fluxo de dados.',
          'Nesses casos, APIs, webhooks e rotinas de sincronização podem eliminar retrabalho e melhorar a confiabilidade das informações.',
        ],
      },
      {
        title: 'Quando criar um sistema próprio',
        body: [
          'Sistema sob medida vale quando a operação tem regras específicas demais para ferramentas genéricas ou quando o processo virou vantagem competitiva.',
          'O objetivo não é trocar tudo: é criar uma base própria para a parte que diferencia a empresa e integrar o restante com o que já funciona.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver integração de sistemas', href: '/integracao-de-sistemas' },
      { label: 'Ver sistemas sob medida', href: '/sistemas-sob-medida' },
    ],
  },
  {
    slug: 'agentes-de-ia-para-empresas',
    title: 'Agentes de IA para empresas: onde aplicar com segurança',
    description:
      'Aplicações práticas de agentes de IA em atendimento, triagem, análise de informações e apoio à operação sem perder controle humano.',
    category: 'Inteligência artificial',
    readingTime: '5 min',
    publishedAt: '2026-05-12',
    updatedAt: '2026-05-12',
    hero:
      'Agentes de IA não precisam substituir equipes para gerar valor. Os melhores casos começam apoiando decisões, resumindo informações e reduzindo tarefas repetitivas.',
    sections: [
      {
        title: 'Bons primeiros casos de uso',
        body: [
          'Atendimento inicial, classificação de solicitações, resumo de documentos, análise de mensagens e apoio comercial são bons pontos de partida.',
          'Esses cenários têm grande volume de informação e permitem manter validação humana nas etapas mais importantes.',
        ],
      },
      {
        title: 'O que precisa existir antes',
        body: [
          'A empresa precisa ter fontes de dados confiáveis, regras claras de acesso e definição do que o agente pode ou não pode fazer.',
          'Sem esses limites, a IA vira uma interface bonita em cima de dados confusos. Com limites corretos, ela acelera a operação sem perder governança.',
        ],
      },
      {
        title: 'Como evitar risco operacional',
        body: [
          'Comece com tarefas de recomendação e apoio, registre interações importantes e defina pontos de aprovação humana para decisões sensíveis.',
          'A evolução natural é conectar o agente aos sistemas internos com permissões específicas, sempre medindo qualidade, tempo economizado e taxa de resolução.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver agentes de IA', href: '/agentes-de-ia' },
      { label: 'Enviar minha dor', href: '/envie-sua-dor' },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
