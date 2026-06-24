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
  {
    slug: 'como-escolher-uma-software-house-em-2026',
    title: 'Como escolher uma software house em 2026',
    description:
      'Critérios práticos para contratar uma software house sem se prender a promessa de tecnologia: escopo claro, comunicação, manutenção e propriedade do código.',
    category: 'Estratégia',
    readingTime: '7 min',
    publishedAt: '2026-06-24',
    updatedAt: '2026-06-24',
    hero:
      'Escolher uma software house é menos sobre a linguagem de programação que ela usa e mais sobre como ela entende o seu problema, entrega em partes e sustenta o que construiu. O risco raramente está no código: está no alinhamento.',
    sections: [
      {
        title: 'Comece pelo problema, não pela tecnologia',
        body: [
          'Uma boa software house faz perguntas antes de propor solução. Se a conversa começa por stack, framework ou número de telas, falta entender o que de fato trava a operação.',
          'Peça que descrevam o seu problema com as próprias palavras antes de falar em orçamento. A clareza dessa devolutiva costuma prever a qualidade do projeto inteiro.',
        ],
      },
      {
        title: 'Escopo, entregas e previsibilidade',
        body: [
          'Prefira fornecedores que dividem o trabalho em entregas pequenas e demonstráveis, em vez de prometer tudo pronto em uma data distante. Entregas curtas reduzem risco e permitem corrigir o rumo cedo.',
          'Desconfie de propostas que não explicam premissas, dependências e o que está fora do escopo. Um escopo honesto inclui o que não será feito, não só o que será.',
        ],
      },
      {
        title: 'Manutenção, propriedade e dependência',
        body: [
          'Pergunte quem fica com o código, como é a documentação e o que acontece se vocês precisarem trocar de fornecedor. Software sem manutenção envelhece rápido e vira custo escondido.',
          'Avalie o risco de ficar refém de uma única pessoa ou de uma plataforma fechada. Independência técnica é um critério de compra, não um detalhe.',
        ],
      },
      {
        title: 'Sinais de uma boa parceria',
        body: [
          'Comunicação frequente, estimativas com faixa em vez de número mágico, exemplos reais de trabalho e disposição para dizer "isso você não precisa agora" são bons indicadores.',
          'O melhor fornecedor é o que protege o seu dinheiro tanto quanto o próprio. Quando alguém recomenda o caminho mais simples mesmo perdendo escopo, normalmente é confiável.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver sistemas sob medida', href: '/sistemas-sob-medida' },
      { label: 'Solicitar uma cotação', href: '/cotacao' },
    ],
  },
  {
    slug: 'agente-de-ia-aplicado-quando-faz-sentido',
    title: 'Agente de IA aplicado: quando faz sentido na operação',
    description:
      'O que é um agente de IA aplicado, como ele difere de um chatbot e quais condições precisam existir antes de colocá-lo para trabalhar na sua operação.',
    category: 'Inteligência artificial',
    readingTime: '6 min',
    publishedAt: '2026-06-24',
    updatedAt: '2026-06-24',
    hero:
      'Um agente de IA aplicado não é um chat genérico: é um sistema que recebe um objetivo, consulta dados da sua operação, executa passos e devolve um resultado útil. A pergunta certa não é "qual modelo usar", e sim "qual tarefa repetitiva ele vai assumir com segurança".',
    sections: [
      {
        title: 'O que diferencia um agente aplicado',
        body: [
          'Um chatbot responde mensagens. Um agente aplicado tem objetivo, acesso controlado a dados e capacidade de executar etapas — como triar um pedido, preencher um relatório ou cruzar informações entre sistemas.',
          'O valor não está na conversa, e sim no trabalho concluído. Por isso o foco deve ser uma tarefa específica, mensurável e com regra estável, não "usar IA" em abstrato.',
        ],
      },
      {
        title: 'Quando faz sentido na operação',
        body: [
          'Faz sentido quando existe volume alto de informação, regra razoavelmente clara e um gargalo humano repetitivo: triagem, classificação, resumo, conferência ou apoio à decisão.',
          'Não faz sentido quando o processo ainda é confuso, depende de julgamento sensível sem critério definido ou quando os dados estão dispersos e pouco confiáveis. Nesses casos, organize antes de automatizar.',
        ],
      },
      {
        title: 'O que precisa existir antes',
        body: [
          'Fontes de dados acessíveis, permissões bem definidas e uma fronteira clara do que o agente pode e não pode fazer. Sem esses limites, a IA acelera erros em vez de reduzir trabalho.',
          'Defina também onde entra a validação humana. Em decisões sensíveis, o agente recomenda e a pessoa aprova — esse ponto de controle é o que mantém a governança.',
        ],
      },
      {
        title: 'Como começar com baixo risco',
        body: [
          'Comece por uma tarefa de apoio e recomendação, registre as interações importantes e meça tempo economizado, qualidade e taxa de resolução por algumas semanas.',
          'Com a base funcionando, conecte o agente aos sistemas internos com permissões específicas e amplie escopo de forma gradual, sempre acompanhando os mesmos indicadores.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver agentes de IA', href: '/agentes-de-ia' },
      { label: 'Enviar minha dor', href: '/envie-sua-dor' },
    ],
  },
  {
    slug: 'automacao-de-processos-por-onde-comecar',
    title: 'Automação de processos: por onde começar',
    description:
      'Um roteiro inicial para automatizar processos sem desperdício: mapear, simplificar, priorizar pelo retorno e implantar em pequenas etapas mensuráveis.',
    category: 'Automação',
    readingTime: '6 min',
    publishedAt: '2026-06-24',
    updatedAt: '2026-06-24',
    hero:
      'O erro mais comum em automação é comprar ferramenta antes de entender o processo. Quem começa mapeando a rotina, simplificando o fluxo e priorizando pelo retorno automatiza menos coisas, mas resolve problemas reais.',
    sections: [
      {
        title: 'Primeiro mapeie, depois simplifique',
        body: [
          'Antes de automatizar, descreva o processo como ele realmente acontece — incluindo as exceções e os "jeitinhos" que a equipe usa no dia a dia. É nesses detalhes que mora o retrabalho.',
          'Automatizar um fluxo confuso só entrega erro em escala. Simplifique primeiro: remova etapas redundantes e padronize a regra antes de pensar em ferramenta.',
        ],
      },
      {
        title: 'Priorize pelo retorno, não pela empolgação',
        body: [
          'Liste os processos candidatos e ordene por frequência, esforço manual e impacto em tempo, dinheiro ou experiência do cliente. Comece pelo que dói mais e muda menos de regra.',
          'Aprovações, cobrança, conciliação, relatórios e triagens internas costumam ser bons primeiros alvos porque são repetitivos e têm impacto direto na operação.',
        ],
      },
      {
        title: 'Implante em etapas pequenas',
        body: [
          'Evite o projeto grande de uma vez. Automatize uma etapa, valide com dados reais e só então avance. Etapas curtas reduzem risco e facilitam corrigir o rumo.',
          'Deixe pontos de verificação onde ainda há dúvida. É melhor uma automação que pede confirmação humana em casos raros do que uma que decide sozinha e erra em silêncio.',
        ],
      },
      {
        title: 'Meça antes e depois',
        body: [
          'Registre os números antes de começar: horas gastas por semana, quantidade de erros e tempo de resposta. Sem linha de base, é impossível provar que a automação valeu.',
          'Acompanhe os mesmos indicadores por 30 a 60 dias após a implantação para ajustar regras e tratar as exceções que ainda exigem intervenção manual.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ver automação de processos', href: '/automacao-de-processos' },
      { label: 'Solicitar diagnóstico', href: '/cotacao' },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
