export type FAQCategory =
  | 'Processo'
  | 'Prazo e Investimento'
  | 'Tecnologia'
  | 'Suporte'
  | 'Resultados'
  | 'Integrações'

export interface FAQItem {
  id: string
  category: FAQCategory
  question: string
  answer: string
}

export const FAQ: FAQItem[] = [
  // Processo
  {
    id: 'faq-processo-01',
    category: 'Processo',
    question: 'Como vocês abordam um projeto do início?',
    answer:
      'Começamos por diagnóstico, não por proposta. Queremos entender onde a operação trava antes de sugerir qualquer tecnologia. Mapeamos fluxos reais, tarefas manuais, retrabalhos, sistemas que não conversam e decisões que dependem de esforço humano desnecessário. Só depois disso desenhamos um escopo preciso com primeira entrega funcional.',
  },
  {
    id: 'faq-processo-02',
    category: 'Processo',
    question: 'Preciso saber exatamente qual solução quero contratar?',
    answer:
      'Não. O ideal é chegar com o problema bem descrito — o que trava, o que gera retrabalho, o que depende de Excel. A partir disso avaliamos se o melhor caminho é automação, integração, agente de IA, sistema sob medida ou uma combinação. Sugerir tecnologia antes de entender o problema é exatamente o que evitamos.',
  },
  {
    id: 'faq-processo-03',
    category: 'Processo',
    question: 'Como é a primeira conversa?',
    answer:
      'É uma conversa de diagnóstico, não comercial. Queremos entender contexto, impacto do problema, urgência e restrições antes de falar em escopo ou valor. A conversa costuma durar 30 a 60 minutos e o objetivo é chegarmos juntos a um diagnóstico honesto do que faz mais sentido resolver.',
  },

  // Prazo e Investimento
  {
    id: 'faq-preco-01',
    category: 'Prazo e Investimento',
    question: 'Quanto tempo leva para ter algo funcional?',
    answer:
      'Automações e integrações simples podem sair em 2 a 4 semanas. Sistemas mais complexos dependem do escopo, das integrações necessárias e da qualidade dos dados existentes. A proposta sempre separa a primeira entrega funcional das evoluções seguintes — você começa a ver resultado antes de tudo estar pronto.',
  },
  {
    id: 'faq-preco-02',
    category: 'Prazo e Investimento',
    question: 'Como é formado o investimento?',
    answer:
      'O valor depende do número de etapas, integrações, regras de negócio, volume de dados e criticidade do processo. Por isso usamos o diagnóstico antes de passar qualquer número. Assim chegamos a um escopo real, não a um orçamento genérico que vai mudar depois.',
  },
  {
    id: 'faq-preco-03',
    category: 'Prazo e Investimento',
    question: 'É possível começar com um projeto menor?',
    answer:
      'Sim, e na maioria dos casos é o caminho mais inteligente. Começar com um fluxo importante, medir o resultado e expandir depois reduz risco e prova valor antes de qualquer compromisso maior. Muitos clientes começam com uma automação ou integração específica e evoluem para um produto completo.',
  },

  // Tecnologia
  {
    id: 'faq-tech-01',
    category: 'Tecnologia',
    question: 'Qual stack tecnológica vocês usam?',
    answer:
      'Utilizamos Python e TypeScript como linguagens principais, Next.js e React para interfaces, FastAPI para APIs, PostgreSQL e Redis para dados, e infraestrutura em nuvem (Vercel, Railway, Fly.io, AWS). Para automação usamos n8n, Zapier ou código próprio dependendo da complexidade. Agentes de IA são construídos com as APIs da OpenAI e Anthropic.',
  },
  {
    id: 'faq-tech-02',
    category: 'Tecnologia',
    question: 'Posso exigir que usem a tecnologia que já temos?',
    answer:
      'Sim. Avaliamos a viabilidade de trabalhar dentro da stack existente. Se a tecnologia atual atende os requisitos, não há motivo para trocar. Se houver limitação técnica que comprometa a solução, explicamos com clareza antes de sugerir qualquer mudança.',
  },

  // Suporte
  {
    id: 'faq-suporte-01',
    category: 'Suporte',
    question: 'Vocês dão suporte depois da entrega?',
    answer:
      'Sim. Oferecemos garantia pós-entrega, monitoramento, ajustes e evolução contínua. O modelo depende do projeto: pode ser um período de garantia fixo, um contrato de retainer mensal ou suporte por demanda. Definimos isso junto com o escopo.',
  },
  {
    id: 'faq-suporte-02',
    category: 'Suporte',
    question: 'Qual é o SLA de resposta em caso de problema?',
    answer:
      'Para projetos com suporte contratado, o SLA varia por criticidade: incidentes críticos têm resposta em até 4 horas úteis, problemas funcionais em até 1 dia útil e melhorias em até 3 dias úteis. Os termos exatos são definidos no contrato de cada projeto.',
  },

  // Resultados
  {
    id: 'faq-resultado-01',
    category: 'Resultados',
    question: 'Como vocês medem o ROI de uma automação ou sistema?',
    answer:
      'Levantamos tempo economizado por semana, redução de erros, velocidade operacional, impacto em receita direta ou redução de custo fixo. Com esses números estimamos o retorno esperado antes de começar — e medimos após a entrega para confirmar se o objetivo foi atingido.',
  },
  {
    id: 'faq-resultado-02',
    category: 'Resultados',
    question: 'Vocês garantem resultado?',
    answer:
      'Não existem garantias mágicas. O que garantimos é processo rigoroso: diagnóstico honesto, escopo claro com critérios de sucesso definidos antes de começar, e entrega por etapas para validar cada passo. Se algo não funcionar como esperado, corrigimos antes de avançar.',
  },

  // Integrações
  {
    id: 'faq-integracao-01',
    category: 'Integrações',
    question: 'Quais sistemas vocês conseguem conectar?',
    answer:
      'Integramos CRMs (HubSpot, Pipedrive, Salesforce), ERPs, sistemas financeiros (Omie, Conta Azul, Totvs), planilhas Google e Excel, bancos de dados relacionais e NoSQL, ferramentas de atendimento (Intercom, Zendesk), canais de mensagem (WhatsApp, Slack, email) e qualquer sistema com API REST ou webhook.',
  },
  {
    id: 'faq-integracao-02',
    category: 'Integrações',
    question: 'E se o sistema que uso não tiver API?',
    answer:
      'Existem alternativas: automação por scraping da interface, integração via exportação/importação agendada, ou construção de uma camada intermediária. Avaliamos o que é viável tecnicamente, o custo de manutenção de cada abordagem e o risco antes de recomendar.',
  },
]

export const FAQ_CATEGORIES: FAQCategory[] = [
  'Processo',
  'Prazo e Investimento',
  'Tecnologia',
  'Suporte',
  'Resultados',
  'Integrações',
]
