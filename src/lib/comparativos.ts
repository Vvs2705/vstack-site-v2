// ─── Comparativos indexáveis (SEO long-tail, fundo de funil) ───────────────────
//
// REGRA DE INTEGRIDADE (crítica): nada aqui pode fabricar preço, número ou
// afirmação falsa — nem sobre concorrentes, nem sobre nossos produtos.
//
// O que é FATO sobre os NOSSOS produtos vem dos arquivos de análise validados
// contra o repositório real (01_FISCWISE..., 05_SESSAOINK...) e da landing real
// (src/lib/fiscwise-faq.ts). O que envolve CONCORRENTE é sempre comparação
// QUALITATIVA e PÚBLICA (categoria, modelo de produto, foco) — nunca preço,
// número ou recurso específico não verificável.
//
// Onde um dado dependeria de checagem caso a caso (preço de tabela, recurso
// pontual de concorrente), a célula usa o valor 'depends' e o texto deixa
// explícito que varia / precisa de confirmação. Itens com `confirm: true`
// estão listados no array CONFIRMACOES_PENDENTES no fim do arquivo (TODO de QA).

export type CellValue = 'yes' | 'no' | 'partial' | 'depends'

export interface ComparativoColumn {
  /** Nome curto da coluna (cabeçalho da tabela). */
  id: string
  label: string
  /** true = é o nosso produto (coluna destacada). */
  isOurs?: boolean
}

export interface ComparativoCell {
  /** Estado factual da célula para a leitura visual (ícone + rótulo). */
  value: CellValue
  /** Texto curto e honesto que qualifica a célula. Obrigatório. */
  note: string
  /** true quando o conteúdo desta célula depende de checagem (vira TODO de QA). */
  confirm?: boolean
}

export interface ComparativoRow {
  /** Critério avaliado (rótulo da linha). */
  criterion: string
  /** Por que esse critério importa para a decisão de compra (1 frase). */
  why?: string
  /** Uma célula por coluna, na MESMA ordem de `columns`. */
  cells: ComparativoCell[]
}

export interface ComparativoFAQ {
  question: string
  /** Primeira frase responde direto (AEO/GEO citável), depois elabora. */
  answer: string
}

export interface Comparativo {
  slug: string
  /** title da <head>, ≤ 60 chars. */
  metaTitle: string
  metaDescription: string
  /** H1 da página (pode ser mais longo que o metaTitle). */
  heading: string
  eyebrow: string
  /** Parágrafo de introdução (sob o H1). Define o enquadramento honesto. */
  intro: string
  /** Card curto de resumo para a página índice. */
  summary: string
  /** Nosso produto referenciado neste comparativo. */
  product: {
    name: string
    /** Rota da landing do produto. */
    href: string
  }
  /** CTA do veredito → landing/cotação do produto. */
  cta: {
    label: string
    href: string
  }
  columns: ComparativoColumn[]
  rows: ComparativoRow[]
  /** Veredito honesto: quando faz sentido o nosso produto e quando NÃO faz. */
  verdict: {
    /** Para quem o nosso produto é a melhor escolha. */
    bestFor: string
    /** Quando o concorrente / a alternativa faz mais sentido (honestidade). */
    notFor: string
  }
  faqs?: ComparativoFAQ[]
}

// ─── Helpers de dados ──────────────────────────────────────────────────────────

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vstack-solutions.com.br'

export const comparativos: Comparativo[] = [
  // ── 1. FiscWise vs. sistemas para escritório de contabilidade ────────────────
  {
    slug: 'fiscwise-vs-sistemas-para-contabilidade',
    metaTitle: 'FiscWise vs. sistemas para contabilidade',
    metaDescription:
      'Comparativo honesto entre o FiscWise e ferramentas de gestão para escritórios de contabilidade (gestão de obrigações, certificados e portal do cliente). Veja onde cada um se encaixa.',
    eyebrow: 'Comparativo · Contabilidade',
    heading:
      'FiscWise vs. sistemas para escritório de contabilidade: como comparar',
    intro:
      'Escritórios de contabilidade costumam montar a operação somando várias ferramentas: um sistema de gestão de obrigações, um cofre de certificados, um emissor de NFS-e e uma régua de cobrança. Este comparativo posiciona o FiscWise — uma central que reúne esses módulos para CONTADORES — diante das categorias de ferramentas que escritórios já usam (gestão/colaboração contábil, controle de certificados e obrigações). O objetivo é honesto: mostrar onde a abordagem "tudo-em-um" do FiscWise ajuda e onde uma ferramenta especializada ou já consolidada pode fazer mais sentido.',
    summary:
      'Onde a abordagem "tudo-em-um" do FiscWise para contadores se encaixa diante de ferramentas de gestão, colaboração e controle fiscal já usadas em escritórios.',
    product: { name: 'FiscWise', href: '/fiscwise' },
    cta: { label: 'Conhecer o FiscWise', href: '/fiscwise' },
    columns: [
      { id: 'fiscwise', label: 'FiscWise', isOurs: true },
      { id: 'gestao', label: 'Gestão/colaboração contábil' },
      { id: 'certificados', label: 'Ferramenta de certificados avulsa' },
      { id: 'planilhas', label: 'Planilhas + WhatsApp' },
    ],
    rows: [
      {
        criterion: 'Foco no escritório de contabilidade',
        why: 'Ferramenta genérica força adaptação; ferramenta de nicho fala a língua do contador.',
        cells: [
          { value: 'yes', note: 'Desenhado para a rotina de contadores: multiempresa por CNPJ, multirregime.' },
          { value: 'partial', note: 'Categorias de colaboração contábil cobrem parte da rotina; verifique escopo de cada ferramenta.', confirm: true },
          { value: 'no', note: 'Resolve só o controle de certificados, não a operação do escritório.' },
          { value: 'no', note: 'Genérico por definição; toda regra fica na cabeça da equipe.' },
        ],
      },
      {
        criterion: 'Cofre de certificados digitais (A1/A3) com alerta de validade',
        why: 'Um A1 vencido trava a emissão de notas do cliente.',
        cells: [
          { value: 'yes', note: 'Cofre nativo com alerta de 30 e 15 dias e trilha de auditoria de uso.' },
          { value: 'depends', note: 'Depende da ferramenta; nem toda suíte de gestão tem cofre de certificados embutido.', confirm: true },
          { value: 'yes', note: 'É exatamente o que essa categoria de produto faz — mas isolada do resto.' },
          { value: 'no', note: 'Controle manual em planilha, com risco real de esquecer um vencimento.' },
        ],
      },
      {
        criterion: 'Calendário de obrigações por regime tributário',
        why: 'Cada regime (Simples, Presumido, Real, MEI) tem entregas e prazos diferentes.',
        cells: [
          { value: 'yes', note: 'Motor de obrigações que calendariza por regime, CNAE, estado e município.' },
          { value: 'depends', note: 'Varia: algumas ferramentas têm gestão de tarefas/prazos, outras não calculam obrigações.', confirm: true },
          { value: 'no', note: 'Fora do escopo de uma ferramenta de certificados.' },
          { value: 'partial', note: 'Possível em planilha, mas manual e sem alerta automático.' },
        ],
      },
      {
        criterion: 'Emissão de NFS-e centralizada (multi-município)',
        why: 'Parte dos municípios ainda está fora do padrão da NFS-e Nacional.',
        cells: [
          { value: 'yes', note: 'Emite, cancela e baixa NFS-e de forma centralizada, com ou sem a NFS-e Nacional.' },
          { value: 'depends', note: 'Depende da integração de cada produto; confirme a cobertura municipal necessária.', confirm: true },
          { value: 'no', note: 'Não é função de uma ferramenta de certificados.' },
          { value: 'no', note: 'Sem emissão; depende de alternar entre portais municipais.' },
        ],
      },
      {
        criterion: 'Portal do cliente (envio de documentos self-service)',
        why: 'Reduz o vai-e-volta de e-mail/WhatsApp e o backlog do escritório.',
        cells: [
          { value: 'yes', note: 'Portal por convite (magic link): o cliente envia documentos e acompanha guias.' },
          { value: 'partial', note: 'Colaboração contador-cliente é um diferencial dessa categoria; o formato varia.', confirm: true },
          { value: 'no', note: 'Não se aplica.' },
          { value: 'no', note: 'Tudo volta para o WhatsApp e o e-mail da equipe.' },
        ],
      },
      {
        criterion: 'Régua de cobrança de honorários (WhatsApp)',
        why: 'Cobrança manual consome horas e a inadimplência cresce sem acompanhamento.',
        cells: [
          { value: 'yes', note: 'Controle de honorários e inadimplência com régua de cobrança pelo WhatsApp.' },
          { value: 'depends', note: 'Algumas suítes têm financeiro/cobrança; confirme se inclui régua por WhatsApp.', confirm: true },
          { value: 'no', note: 'Não se aplica.' },
          { value: 'no', note: 'Lembrete manual, um a um.' },
        ],
      },
      {
        criterion: 'IA aplicada à rotina fiscal',
        why: 'Classificar documentos e priorizar prazos economiza tempo de equipe.',
        cells: [
          { value: 'yes', note: 'IA lê/classifica documentos e prioriza obrigações, com masking de CPF/CNPJ (LGPD).' },
          { value: 'depends', note: 'Cada vez mais comum, mas o escopo de IA varia muito entre ferramentas.', confirm: true },
          { value: 'no', note: 'Não se aplica.' },
          { value: 'no', note: 'Inexistente.' },
        ],
      },
      {
        criterion: 'Custo somado de ferramentas',
        why: 'Somar quatro mensalidades + integração frágil encarece e gera retrabalho.',
        cells: [
          { value: 'yes', note: 'Um sistema no lugar de quatro: preço fixo por plano, sem taxa por nota.' },
          { value: 'depends', note: 'Depende de quantas ferramentas você ainda precisaria manter em paralelo.', confirm: true },
          { value: 'depends', note: 'Custo isolado da ferramenta + as outras que continuam necessárias.', confirm: true },
          { value: 'yes', note: 'Aparentemente "grátis" — o custo é o retrabalho e o risco escondidos.' },
        ],
      },
    ],
    verdict: {
      bestFor:
        'Escritórios de contabilidade e BPO fiscal que querem unificar certificados, obrigações, NFS-e, portal do cliente e cobrança em uma só central feita para contadores — em vez de somar quatro ferramentas e integrá-las na mão.',
      notFor:
        'Se o escritório já tem uma suíte contábil consolidada que atende bem e a dor não é a fragmentação de ferramentas, trocar tudo pode não compensar. O FiscWise brilha quando o problema é justamente a colcha de retalhos operacional — não como substituto de um sistema contábil tradicional já maduro na sua operação.',
    },
    faqs: [
      {
        question: 'O FiscWise substitui meu sistema contábil tradicional?',
        answer:
          'Não necessariamente. O FiscWise é uma central operacional para o escritório (certificados, obrigações, NFS-e, portal do cliente, cobrança), e não pretende substituir um sistema contábil tradicional já maduro. Ele resolve a camada de controle e automação que costuma ficar espalhada em planilhas e ferramentas avulsas.',
      },
      {
        question: 'O FiscWise é para empresas (PME) ou para contadores?',
        answer:
          'O FiscWise é para CONTADORES — escritórios de contabilidade, contadores autônomos e BPO fiscal. Ele é multiempresa por natureza: cada cliente (CNPJ) da sua carteira tem regime, obrigações e certificados próprios, com isolamento entre escritórios.',
      },
      {
        question: 'Vale a pena trocar minhas ferramentas avulsas pelo FiscWise?',
        answer:
          'Vale quando a sua dor é a fragmentação: você paga várias mensalidades e perde tempo integrando cofre de certificados, controle de obrigações, emissor de NFS-e e cobrança. Se uma única ferramenta já resolve bem o seu gargalo específico, avalie caso a caso.',
      },
    ],
  },

  // ── 2. SessãoInk vs. gestão genérica de estúdio ──────────────────────────────
  {
    slug: 'sessaoink-vs-gestao-generica-de-estudio',
    metaTitle: 'SessãoInk vs. gestão genérica de estúdio',
    metaDescription:
      'Comparativo honesto entre o SessãoInk, feito para tatuadores, e ferramentas genéricas de agendamento/gestão de salão. Veja quando o foco em tatuagem faz diferença.',
    eyebrow: 'Comparativo · Tatuagem',
    heading: 'SessãoInk vs. gestão genérica de estúdio e salão',
    intro:
      'Tatuadores e estúdios podem gerir a operação com ferramentas genéricas de agendamento e gestão de salão/beleza, ou com um sistema desenhado para o fluxo específico de tatuagem. Este comparativo posiciona o SessãoInk — gestão para tatuadores e estúdios de tatuagem — diante de ferramentas genéricas de agenda/gestão. A comparação é qualitativa: ferramentas genéricas são maduras e amplas, mas o SessãoInk aposta em falar a língua do fluxo de tatuagem (briefing, flash arts, termo de consentimento, sinal, portfólio).',
    summary:
      'Quando o foco 100% em tatuagem do SessãoInk (briefing, flash, termo, sinal, portfólio) vale mais do que uma ferramenta genérica de agenda/gestão de salão.',
    product: { name: 'SessãoInk', href: '/sessaoink' },
    cta: { label: 'Conhecer o SessãoInk', href: '/sessaoink' },
    columns: [
      { id: 'sessaoink', label: 'SessãoInk', isOurs: true },
      { id: 'salao', label: 'Gestão genérica de salão/agenda' },
      { id: 'manual', label: 'WhatsApp + agenda manual' },
    ],
    rows: [
      {
        criterion: 'Foco no fluxo de tatuagem',
        why: 'O fluxo (portfólio → briefing → sinal → termo → sessão → pós) é específico do nicho.',
        cells: [
          { value: 'yes', note: 'Desenhado de ponta a ponta para o fluxo real de tatuagem.' },
          { value: 'no', note: 'Genérico para beleza/serviços; não modela o fluxo de tatuagem.' },
          { value: 'no', note: 'Cada etapa vira mensagem solta no direct/WhatsApp.' },
        ],
      },
      {
        criterion: 'Portfólio público por slug (link na bio)',
        why: 'O cliente decide pelo portfólio antes de marcar.',
        cells: [
          { value: 'yes', note: 'Portal público por slug, pronto para o link da bio do Instagram.' },
          { value: 'depends', note: 'Algumas ferramentas têm página pública de agendamento, mas não um portfólio de tattoo.', confirm: true },
          { value: 'no', note: 'Portfólio fica espalhado no feed do Instagram.' },
        ],
      },
      {
        criterion: 'Flash arts com reserva',
        why: 'Vender flash é uma fonte de receita específica do tatuador.',
        cells: [
          { value: 'yes', note: 'Catálogo de flash arts com reserva — função pensada para tatuador.' },
          { value: 'no', note: 'Não existe o conceito de flash art em ferramenta de salão.' },
          { value: 'no', note: 'Controle manual, com risco de vender o mesmo flash duas vezes.' },
        ],
      },
      {
        criterion: 'Briefing visual da ideia',
        why: 'A tatuagem nasce de uma referência visual e de um briefing.',
        cells: [
          { value: 'yes', note: 'Briefing estruturado para capturar a ideia e as referências do cliente.' },
          { value: 'no', note: 'Campo de "observações" genérico, não um briefing visual.' },
          { value: 'no', note: 'Referências perdidas no meio da conversa.' },
        ],
      },
      {
        criterion: 'Termo de consentimento assinado',
        why: 'Procedimento que perfura a pele pede consentimento documentado.',
        cells: [
          { value: 'yes', note: 'Termo/assinatura no fluxo, específico para tatuagem.' },
          { value: 'depends', note: 'Algumas ferramentas têm formulário/assinatura genérica; o termo de tattoo não vem pronto.', confirm: true },
          { value: 'no', note: 'Papel ou nada — sem trilha digital.' },
        ],
      },
      {
        criterion: 'Cobrança de sinal / reserva',
        why: 'Sinal reduz no-show e formaliza o compromisso.',
        // O pagamento de sinal está implementado no backend, porém atrás de uma
        // flag de go-live (PAGAMENTOS_GO_LIVE). Não vender como ativo por padrão.
        cells: [
          { value: 'partial', note: 'Pagamento de sinal previsto no produto; disponibilidade depende da fase de go-live.', confirm: true },
          { value: 'depends', note: 'Ferramentas de salão costumam ter pagamento/sinal, mas sem o contexto de tattoo.', confirm: true },
          { value: 'no', note: 'Cobrança manual via Pix, sem vínculo com a reserva.' },
        ],
      },
      {
        criterion: 'Lembretes automáticos / automação WhatsApp',
        why: 'Lembrete reduz no-show — mas só se realmente existir no produto.',
        // Fidelidade: lembretes/automação WhatsApp ainda NÃO estão implementados.
        cells: [
          { value: 'no', note: 'Ainda não implementado no SessãoInk — não vendemos como pronto.', confirm: true },
          { value: 'depends', note: 'Lembretes automáticos costumam existir em ferramentas de agenda maduras.', confirm: true },
          { value: 'no', note: 'Lembrete manual, um a um.' },
        ],
      },
      {
        criterion: 'Linguagem e simplicidade para o tatuador',
        why: 'Profissional criativo tem baixa paciência para sistema complexo.',
        cells: [
          { value: 'yes', note: 'UX e vocabulário do universo da tatuagem, não de "salão de beleza".' },
          { value: 'partial', note: 'Ferramentas maduras são amplas, mas trazem termos e telas genéricos.' },
          { value: 'yes', note: 'Simples — porém à custa de organização e profissionalização.' },
        ],
      },
    ],
    verdict: {
      bestFor:
        'Tatuadores autônomos e estúdios pequenos que querem profissionalizar o fluxo específico de tatuagem — portfólio público, flash arts, briefing, termo de consentimento e organização de clientes — em vez de forçar uma ferramenta de salão genérica a caber no nicho.',
      notFor:
        'Se você já roda bem em uma ferramenta de agenda genérica e precisa hoje de recursos que ainda estão em evolução no SessãoInk (como automação de lembretes por WhatsApp), avalie o momento. Uma ferramenta de salão madura pode ter mais recursos prontos de agendamento — o SessãoInk ganha no foco em tatuagem, não em amplitude genérica.',
    },
    faqs: [
      {
        question: 'O SessãoInk envia lembretes automáticos por WhatsApp?',
        answer:
          'Ainda não. A automação de lembretes/WhatsApp não está implementada no SessãoInk neste momento e não é vendida como pronta. O produto foca primeiro no fluxo de tatuagem: portfólio, flash arts, briefing, termo de consentimento e organização de clientes.',
      },
      {
        question: 'Dá para cobrar sinal no SessãoInk?',
        answer:
          'O pagamento de sinal está previsto no produto, com a base já implementada no backend, mas a disponibilidade depende da fase de go-live (ativação por flag). Confirme o status atual antes de prometê-lo a um cliente.',
      },
      {
        question: 'Por que não usar uma ferramenta de salão genérica?',
        answer:
          'Ferramentas genéricas de salão são maduras em agendamento, mas não modelam o fluxo de tatuagem (briefing visual, flash arts, termo de consentimento, portfólio por slug). O SessãoInk troca amplitude genérica por foco no nicho.',
      },
    ],
  },

  // ── 3. ERP-V (sob medida) vs. ERP pronto de prateleira ───────────────────────
  {
    slug: 'erp-v-sob-medida-vs-erp-pronto',
    metaTitle: 'ERP-V sob medida vs. ERP pronto',
    metaDescription:
      'Comparativo honesto entre um ERP sob medida (ERP-V) e um ERP pronto de prateleira: aderência ao processo, prazo, custo e manutenção. Veja qual faz sentido para sua operação.',
    eyebrow: 'Comparativo · ERP',
    heading: 'ERP sob medida (ERP-V) vs. ERP pronto de prateleira',
    intro:
      'Toda empresa que sai das planilhas enfrenta a mesma bifurcação: adotar um ERP pronto de prateleira (rápido de contratar, mas que pede adaptação do processo) ou construir um ERP sob medida que se molda ao fluxo real da operação. Este comparativo é qualitativo e honesto: ERP pronto e ERP sob medida resolvem problemas diferentes. O ERP-V é a abordagem sob medida da V-STACK; o objetivo aqui não é dizer que "sob medida ganha sempre", mas mostrar em que cenário cada caminho compensa.',
    summary:
      'Aderência ao processo, prazo, custo e manutenção: quando um ERP sob medida (ERP-V) compensa e quando um ERP pronto de prateleira é a escolha mais sensata.',
    product: { name: 'ERP-V', href: '/erp-v' },
    cta: { label: 'Conhecer o ERP-V', href: '/erp-v' },
    columns: [
      { id: 'erpv', label: 'ERP-V (sob medida)', isOurs: true },
      { id: 'pronto', label: 'ERP pronto de prateleira' },
    ],
    rows: [
      {
        criterion: 'Aderência ao processo real',
        why: 'Software que não encaixa no processo vira gambiarra e planilha paralela.',
        cells: [
          { value: 'yes', note: 'Construído sobre o fluxo real da empresa; o sistema se molda ao processo.' },
          { value: 'partial', note: 'Cobre processos padrão; processos fora da norma exigem adaptar a empresa ao sistema.' },
        ],
      },
      {
        criterion: 'Prazo para começar a usar',
        why: 'Operação travada não pode esperar meses por um sistema.',
        cells: [
          { value: 'partial', note: 'Exige desenvolvimento; começa por um escopo enxuto e evolui por etapas.' },
          { value: 'yes', note: 'Disponível na contratação — começa rápido, dentro do que o produto já oferece.' },
        ],
      },
      {
        criterion: 'Custo inicial',
        why: 'O caixa inicial pesa na decisão.',
        cells: [
          { value: 'depends', note: 'Investimento de projeto sob medida; varia com o escopo. Avaliar caso a caso.', confirm: true },
          { value: 'yes', note: 'Geralmente assinatura mensal previsível, sem projeto inicial grande.' },
        ],
      },
      {
        criterion: 'Custo de adaptação e licenças extras a longo prazo',
        why: 'Customização e módulos extras em ERP pronto somam ao longo do tempo.',
        cells: [
          { value: 'yes', note: 'Sem licenças por módulo/usuário do modelo de prateleira; evolução conforme a necessidade.' },
          { value: 'depends', note: 'Customizações, integrações e módulos extras podem encarecer com o tempo. Varia por fornecedor.', confirm: true },
        ],
      },
      {
        criterion: 'Integração com sistemas que você já usa',
        why: 'O ERP precisa conversar com o que já roda na operação.',
        cells: [
          { value: 'yes', note: 'Integração desenhada para o seu ambiente específico.' },
          { value: 'depends', note: 'Integra via conectores prontos; o que sair do catálogo pode exigir esforço extra.', confirm: true },
        ],
      },
      {
        criterion: 'Propriedade e dependência de fornecedor',
        why: 'Lock-in limita evolução e poder de negociação.',
        cells: [
          { value: 'yes', note: 'Solução própria, evoluída conforme a estratégia da empresa.' },
          { value: 'partial', note: 'Você depende do roadmap e da política comercial do fornecedor do ERP.' },
        ],
      },
      {
        criterion: 'Funcionalidades de mercado já maduras',
        why: 'ERPs prontos acumulam anos de recursos fiscais/contábeis testados.',
        cells: [
          { value: 'partial', note: 'Foca no que a operação precisa; recursos amplos de mercado entram por priorização.' },
          { value: 'yes', note: 'Base ampla de funcionalidades já prontas e usadas por muitas empresas.' },
        ],
      },
      {
        criterion: 'Manutenção e evolução',
        why: 'Sistema que não evolui vira dívida técnica.',
        cells: [
          { value: 'yes', note: 'Evolução guiada pela sua operação, sem esperar a fila de prioridades de um fornecedor.' },
          { value: 'yes', note: 'Atualizações contínuas — porém no ritmo e na direção do fornecedor.' },
        ],
      },
    ],
    verdict: {
      bestFor:
        'Empresas cujo diferencial está no processo operacional e que sofrem com ERP de prateleira "quase encaixando" — gerando gambiarras, planilhas paralelas e retrabalho. Quando o processo é o ativo, um ERP sob medida como o ERP-V se molda à operação em vez do contrário.',
      notFor:
        'Se a sua operação é padrão de mercado, o orçamento inicial é apertado e você precisa começar amanhã, um ERP pronto de prateleira tende a ser a escolha mais sensata. Sob medida compensa quando a aderência ao processo paga o investimento — não como regra universal.',
    },
    faqs: [
      {
        question: 'ERP sob medida é sempre melhor que ERP pronto?',
        answer:
          'Não. ERP pronto e ERP sob medida resolvem problemas diferentes. Sob medida compensa quando o processo da empresa é o diferencial e o ERP de prateleira não encaixa sem gerar gambiarras. Para operações padrão, com pressa e orçamento inicial enxuto, um ERP pronto costuma ser mais sensato.',
      },
      {
        question: 'Quando vale investir em um ERP sob medida como o ERP-V?',
        answer:
          'Vale quando o ERP de prateleira "quase serve", obrigando a empresa a manter planilhas paralelas e processos manuais para cobrir o que falta. Nesse cenário, a aderência ao processo de um sistema sob medida tende a pagar o investimento ao longo do tempo.',
      },
    ],
  },
]

// ─── Acesso ────────────────────────────────────────────────────────────────────

export function getComparativo(slug: string): Comparativo | undefined {
  return comparativos.find((c) => c.slug === slug)
}

export function comparativoUrl(slug: string): string {
  return `${SITE}/comparativos/${slug}`
}

// ─── TODO de QA: confirmações pendentes ────────────────────────────────────────
// Itens marcados com `confirm: true` nas células acima. Antes de tratar qualquer
// célula como afirmação definitiva (e antes de comparar recurso-a-recurso com um
// concorrente NOMEADO), validar:
//
//  • Concorrentes de contabilidade: ao citar um produto específico (ex.: Nibo,
//    Onvio/Domínio, Acessórias, CertiSeguro), confirmar recurso-a-recurso na
//    documentação pública atual — hoje usamos categorias qualitativas, não claims
//    sobre produtos nomeados, justamente para não difamar nem fabricar.
//  • SessãoInk — cobrança de sinal: confirmar o status da flag PAGAMENTOS_GO_LIVE
//    antes de tratar como recurso ativo (hoje 'partial').
//  • SessãoInk — lembretes/automação WhatsApp: NÃO implementado; manter como 'no'
//    até que exista de fato.
//  • ERP-V — custo inicial e custo de licenças do ERP pronto: variam por
//    fornecedor e escopo; manter como 'depends' / comparação qualitativa.
//  • Qualquer preço, número ou recurso específico de concorrente: não publicar sem
//    fonte pública verificável.
export const CONFIRMACOES_PENDENTES = [
  'fiscwise-vs-sistemas-para-contabilidade: escopo recurso-a-recurso de cada categoria de concorrente (sem nomear produto sem fonte pública)',
  'sessaoink-vs-gestao-generica-de-estudio: status da flag PAGAMENTOS_GO_LIVE (cobrança de sinal)',
  'sessaoink-vs-gestao-generica-de-estudio: lembretes/automação WhatsApp seguem NÃO implementados',
  'erp-v-sob-medida-vs-erp-pronto: custo inicial e custo de licenças do ERP pronto variam por fornecedor/escopo',
] as const
