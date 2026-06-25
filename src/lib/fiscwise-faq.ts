// ─── Types ───────────────────────────────────────────────────────────────────

export interface FiscWiseFAQItem {
  id: string
  question: string
  /**
   * Plain text answer. Paragraphs are separated by "\n\n" so consumers can
   * split on double-newline for multi-paragraph rendering.
   * A primeira frase responde a pergunta de forma direta (AEO/GEO: trecho
   * citável por IA), depois elabora.
   */
  answer: string
}

export interface CompetitorDifferential {
  title: string
  description: string
  /** Lucide icon component name (string). Consumer imports the component. */
  icon?: string
}

// ─── FAQ data (AEO/GEO — perguntas reais que contadores fazem a IA/Google) ──────
// Fiel ao produto real: central fiscal para escritórios de contabilidade.
// NÃO menciona Open Banking/conciliação bancária (não existe no produto).

export const FISCWISE_FAQ: FiscWiseFAQItem[] = [
  {
    id: 'faq-o-que-e',
    question: 'O que é o FiscWise?',
    answer:
      'O FiscWise é um sistema de gestão para escritórios de contabilidade que unifica, em uma só plataforma, o controle de clientes, certificados digitais, emissão de NFS-e, calendário de obrigações fiscais, guias (DAS, DARF, GPS, ISS), cobrança de honorários e portal do cliente — com inteligência artificial aplicada à rotina fiscal.\n\nNa prática, ele substitui a colcha de retalhos de quatro ou cinco ferramentas avulsas que o contador costuma manter, reduzindo retrabalho, custo somado de mensalidades e risco de perder um prazo.',
  },
  {
    id: 'faq-para-quem',
    question: 'Para quem é o FiscWise?',
    answer:
      'Para contadores autônomos, escritórios de contabilidade e operações de BPO fiscal/contábil que precisam gerenciar muitos clientes (CNPJs) ao mesmo tempo.\n\nO sistema é multiempresa por natureza: cada cliente da sua carteira tem seu próprio perfil de regime tributário, obrigações, certificados e documentos, com isolamento total entre escritórios.',
  },
  {
    id: 'faq-certificados',
    question: 'Como o FiscWise controla certificados digitais que estão vencendo?',
    answer:
      'O FiscWise tem um cofre de certificados digitais A1/A3 com monitoramento automático de validade: você é avisado com 30 e 15 dias de antecedência antes de cada vencimento, com trilha de auditoria de quando e por quem cada certificado foi usado.\n\nEm uma carteira de algumas centenas de clientes, vence aproximadamente um certificado por dia — e um A1 expirado trava a emissão de notas. O cofre elimina esse risco sem você precisar de uma planilha paralela.',
  },
  {
    id: 'faq-nfse-municipios',
    question: 'O FiscWise emite NFS-e em vários municípios?',
    answer:
      'Sim. O FiscWise emite NFS-e de forma centralizada, com cancelamento e geração de PDF/XML, independentemente de o município já ter aderido ou não ao ambiente da NFS-e Nacional.\n\nIsso resolve uma dor concreta de 2026: parte dos municípios ainda está fora do padrão Nacional e o emissor nacional tem apresentado instabilidade. Você emite no mesmo lugar, sem alternar entre portais municipais.',
  },
  {
    id: 'faq-obrigacoes',
    question: 'Como funciona o calendário de obrigações fiscais?',
    answer:
      'O FiscWise tem um motor de obrigações que calendariza automaticamente as entregas de cada cliente conforme o regime tributário (Simples Nacional, Lucro Presumido, Lucro Real, MEI), o CNAE, o estado e o município.\n\nVocê recebe alertas de prazo, acompanha um checklist de documentos por obrigação e tem visão consolidada do que está pendente em toda a carteira — em vez de uma planilha manual de vencimentos.',
  },
  {
    id: 'faq-guias',
    question: 'O FiscWise automatiza o controle de DAS, DARF, GPS e ISS?',
    answer:
      'Sim. O sistema registra e acompanha as guias de impostos (DAS, DARF, GPS, ISS) de cada cliente, com status de pagamento (pendente/pago) e histórico.\n\nAssim você sabe, em tempo real, quais guias ainda não foram quitadas em toda a carteira, sem precisar conferir cliente por cliente.',
  },
  {
    id: 'faq-honorarios',
    question: 'Dá para cobrar os honorários dos clientes automaticamente?',
    answer:
      'Sim. O FiscWise controla os honorários e a inadimplência da carteira e integra uma régua de cobrança pelo WhatsApp, o canal onde o cliente realmente responde.\n\nVocê para de gastar horas por mês enviando lembretes manuais e reduz a inadimplência sem precisar de um sistema de cobrança separado.',
  },
  {
    id: 'faq-portal-cliente',
    question: 'Existe um portal do cliente para o escritório de contabilidade?',
    answer:
      'Sim. Cada cliente do seu escritório recebe acesso a um portal próprio, por convite (magic link), onde pode enviar documentos, baixar notas e acompanhar suas guias — tudo self-service.\n\nIsso reduz o vai-e-volta de e-mails e WhatsApp e diminui o backlog do escritório, porque o cliente resolve sozinho o que antes virava tarefa para a sua equipe.',
  },
  {
    id: 'faq-ia',
    question: 'Como a inteligência artificial ajuda na rotina contábil?',
    answer:
      'A IA do FiscWise lê e classifica documentos fiscais, recomenda o enquadramento tributário e ajuda a priorizar as obrigações do dia — funcionando como um assistente que antecipa prazos e pendências.\n\nTodo o processamento aplica masking de CPF/CNPJ antes de enviar qualquer dado ao modelo, em conformidade com a LGPD.',
  },
  {
    id: 'faq-regimes',
    question: 'O FiscWise funciona com todos os regimes tributários?',
    answer:
      'Sim. O FiscWise é compatível com Simples Nacional, Lucro Presumido, Lucro Real e MEI. As obrigações, os alertas e os cálculos se adaptam automaticamente ao regime configurado para cada cliente.\n\nPara escritórios com carteira diversa — MEIs e empresas no Lucro Real na mesma base — a visão consolidada continua unificada, sem telas separadas.',
  },
  {
    id: 'faq-precos',
    question: 'Quanto custa o FiscWise? Como são os planos?',
    answer:
      'O FiscWise trabalha com preço fixo mensal por plano (Gratuito, Profissional e Escritório), sem taxa por nota emitida nem por guia processada — você sabe exatamente quanto paga, mesmo quando a carteira cresce.\n\nMuitos concorrentes cobram por NF-e emitida ou por transação de cobrança, modelo que penaliza justamente quem cresce. Há um plano gratuito para começar e testar sem compromisso.',
  },
  {
    id: 'faq-seguranca',
    question: 'O FiscWise é seguro e está em conformidade com a LGPD?',
    answer:
      'Sim. A plataforma é multi-tenant com isolamento rígido por escritório (Row-Level Security no banco), criptografia em trânsito e em repouso, e princípio de menor privilégio — cada usuário enxerga apenas os clientes e módulos que seu perfil autoriza.\n\nEm conformidade com a LGPD, a IA aplica masking de CPF/CNPJ, há exclusão permanente de dados mediante solicitação e auditoria de acessos por usuário.',
  },
  {
    id: 'faq-migracao',
    question: 'Já uso outro sistema. A migração para o FiscWise é complicada?',
    answer:
      'Não. A equipe acompanha o mapeamento das entidades (clientes, certificados, obrigações), valida os dados antes da importação e roda testes de integridade após a carga — sem janela de downtime para a sua operação.\n\nEscritórios novos costumam ficar operacionais em cerca de 1 dia útil; migrações de outro sistema levam de 2 a 5 dias úteis, conforme o volume de histórico.',
  },
]

// ─── Diferenciais competitivos (fiéis ao produto real) ─────────────────────────
// Ângulo: "um sistema no lugar de quatro" + cofre nativo + NFS-e multi-município
// + IA fiscal + preço previsível. SEM Open Finance (não existe no produto).

export const COMPETITOR_COMPARISON: CompetitorDifferential[] = [
  {
    title: 'Um sistema no lugar de quatro',
    description:
      'ERP contábil, cofre de certificados, automação fiscal e cobrança de honorários — tudo num painel só. Em vez de somar quatro mensalidades e integrar ferramentas frágeis, você opera a carteira inteira em um lugar.',
    icon: 'Layers',
  },
  {
    title: 'Cofre de certificados nativo',
    description:
      'Certificados A1/A3 com alerta de validade (30 e 15 dias) e trilha de auditoria de uso, embutidos na operação — não um produto avulso contratado à parte. Nenhum certificado vence sem você saber.',
    icon: 'ShieldCheck',
  },
  {
    title: 'NFS-e em qualquer município',
    description:
      'Emita, cancele e baixe NFS-e de forma centralizada, com ou sem a NFS-e Nacional — contornando a baixa adesão dos municípios e a instabilidade do emissor nacional em 2026.',
    icon: 'FileText',
  },
  {
    title: 'IA que antecipa prazos e pendências',
    description:
      'A inteligência artificial lê documentos, recomenda regime e prioriza as obrigações do dia, com masking de CPF/CNPJ por padrão (LGPD). Não é IA de marketing — é assistência na rotina fiscal real.',
    icon: 'Sparkles',
  },
  {
    title: 'Preço fixo, sem taxa por nota',
    description:
      'Mensalidade previsível, independente de quantas NFS-e ou guias você processa. Quanto mais a carteira cresce, mais barato fica por cliente atendido — o contrário do preço por transação dos concorrentes.',
    icon: 'CircleDollarSign',
  },
  {
    title: 'Construído para contadores',
    description:
      'Não é um ERP genérico adaptado. Cada fluxo, alerta e relatório foi desenhado para a operação de um escritório de contabilidade — multiempresa, multirregime, com o portal do cliente que reduz o seu backlog.',
    icon: 'Users',
  },
]
