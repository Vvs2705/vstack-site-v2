// ─── Types ───────────────────────────────────────────────────────────────────

export interface FiscWiseFAQItem {
  id: string
  question: string
  /**
   * Plain text answer. Paragraphs are separated by "\n\n" so consumers can
   * split on double-newline for multi-paragraph rendering.
   */
  answer: string
}

export interface CompetitorDifferential {
  title: string
  description: string
  /** Lucide icon component name (string). Consumer imports the component. */
  icon?: string
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────

export const FISCWISE_FAQ: FiscWiseFAQItem[] = [
  {
    id: 'faq-migracao',
    question:
      'Já uso Omie, ContaAzul ou Contabilizei. A migração é complicada?',
    answer:
      'Não. Oferecemos suporte completo no processo de migração: nossa equipe faz o mapeamento das entidades (clientes, planos, histórico financeiro), valida os dados antes da importação e executa testes de integridade após a carga.\n\nO tempo médio de migração é de 2 a 3 dias úteis, dependendo do volume de clientes e da API de origem. Durante todo o período você mantém acesso ao sistema anterior — não há janela de downtime para a sua operação.',
  },
  {
    id: 'faq-regime-tributario',
    question:
      'O FiscWise funciona com todos os regimes tributários brasileiros?',
    answer:
      'Sim. O FiscWise é compatível com Simples Nacional, Lucro Presumido, Lucro Real e MEI. O dashboard adapta automaticamente os relatórios, indicadores e alertas conforme o regime tributário configurado para cada cliente.\n\nPara escritórios com carteira diversa — por exemplo, MEIs e empresas no Lucro Real na mesma base — a visão consolidada ainda funciona de forma unificada, sem necessidade de telas separadas.',
  },
  {
    id: 'faq-open-finance',
    question: 'Como funciona a integração bancária?',
    answer:
      'Por meio do Open Finance Brasil, o padrão regulado pelo Banco Central. Você conecta a conta bancária do cliente uma única vez, e o FiscWise passa a receber automaticamente o extrato, conciliar lançamentos e identificar divergências.\n\nNão há importação manual de OFX, sem planilha de transações e sem acesso a credenciais bancárias. A autenticação segue o fluxo OAuth 2.0 exigido pelo Bacen, com consentimento explícito do titular da conta.',
  },
  {
    id: 'faq-suporte',
    question: 'Qual suporte e documentação estão disponíveis?',
    answer:
      'O FiscWise oferece base de conhecimento completa com artigos, vídeos curtos e guias de configuração acessíveis direto no painel. Para dúvidas pontuais, o suporte via chat responde em até 4 horas úteis.\n\nClientes nos planos Profissional e Escritório contam com onboarding assistido: uma sessão de 1h com um especialista para configurar regimes, honorários e integrações bancárias. Para migrações de outros sistemas, alocamos um técnico dedicado até a carteira estar operacional.',
  },
  {
    id: 'faq-limite-clientes',
    question: 'Existe limite de clientes ou empresas que posso gerenciar?',
    answer:
      'Não existe limite técnico no número de CNPJs ou CPFs cadastrados. Os planos são diferenciados por funcionalidades e nível de suporte — não por quantidade de clientes.\n\nEscritórios com carteiras grandes (acima de 200 empresas) têm acesso a importação em lote, filtros avançados por regime e relatórios de produtividade por analista responsável, funcionalidades pensadas especificamente para operações de alto volume.',
  },
  {
    id: 'faq-preco',
    question: 'Como o FiscWise se compara em preço com os concorrentes?',
    answer:
      'O FiscWise adota modelo de preço fixo mensal, sem taxa por transação e sem cobrança por volume de notas emitidas ou de extratos processados. Você sabe exatamente quanto paga todo mês, independente do quanto a operação cresce.\n\nFerrramentas concorrentes frequentemente cobram por NF-e emitida, por número de boletos ou por transação de cobrança. Esse modelo variável penaliza exatamente os escritórios que crescem. Nossa filosofia é ser parceiro do crescimento, não um custo que sobe junto com ele.',
  },
  {
    id: 'faq-onboarding',
    question: 'Quanto tempo leva para o escritório estar 100% operacional?',
    answer:
      'Para escritórios novos, sem migração de outro sistema, o tempo médio para estar operacional é de 1 dia útil: configuração do perfil, cadastro dos clientes e ativação das integrações bancárias.\n\nPara escritórios que migram de outro sistema, o prazo é de 2 a 5 dias úteis, a depender do volume de histórico a importar. Após o onboarding, a equipe de suporte acompanha os primeiros 30 dias para garantir que todos os fluxos estejam funcionando como esperado.',
  },
  {
    id: 'faq-seguranca',
    question: 'Quão seguro é o FiscWise? Existe compliance com LGPD?',
    answer:
      'Toda a infraestrutura opera em nuvem com criptografia em trânsito (TLS 1.3) e em repouso (AES-256). O acesso aos dados segue o princípio de menor privilégio: cada usuário enxerga apenas os clientes e módulos que seu perfil autoriza.\n\nO FiscWise está em conformidade com a LGPD: mantemos contrato de tratamento de dados (DPA) disponível para assinatura, realizamos exclusão permanente de dados mediante solicitação e oferecemos auditoria completa de acessos por usuário. Backups automáticos são realizados a cada 6 horas com retenção de 90 dias.',
  },
]

// ─── Competitor differentials ─────────────────────────────────────────────────

export const COMPETITOR_COMPARISON: CompetitorDifferential[] = [
  {
    title: 'Construído para contadores',
    description:
      'Não é um ERP genérico adaptado. Cada fluxo, relatório e alerta foi desenhado junto com contadores reais. Sem atalhos que não fazem sentido, sem módulos que nunca serão usados.',
    icon: 'Users',
  },
  {
    title: 'Sem taxas por transação',
    description:
      'Preço fixo mensal, independente de quantas notas são emitidas, boletos gerados ou extratos processados. Quanto mais seu escritório cresce, mais barato fica por cliente atendido.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Open Finance nativo',
    description:
      'Integração direta com o padrão regulado pelo Banco Central. Extratos, conciliações e alertas de divergência chegam automaticamente — sem importação de OFX, sem planilha.',
    icon: 'Landmark',
  },
  {
    title: 'Automação de honorários',
    description:
      'Cálculo automático, emissão de cobrança e controle de inadimplência para todos os clientes da carteira. Você para de gastar horas por mês em algo que não precisa de intervenção humana.',
    icon: 'CircleDollarSign',
  },
  {
    title: 'Zero curva de aprendizado',
    description:
      'Dashboard projetado por quem trabalha ao lado de contadores há anos. Novos usuários estão operacionais no mesmo dia, sem treinamento extenso e sem resistência da equipe.',
    icon: 'Zap',
  },
]
