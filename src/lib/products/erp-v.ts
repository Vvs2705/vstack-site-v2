import type { ProductLandingData } from '@/lib/products/types'

/**
 * Landing de venda do ERP-V — ERP fiscal brasileiro modular para PMEs.
 * Posicionamento: o ERP entre a "planilha + Bling" e o "TOTVS/SAP caro".
 * Diferencial central: motor fiscal versionado por vigência (RTC 2026, CBS/IBS,
 * NF-e/NFS-e/NFC-e) + financeiro/contábil core real (ledger, AP/AR, reconciliação).
 *
 * REGRA: nenhum depoimento, logo ou métrica fabricada. Funcionalidades reais/
 * planejadas do produto. Preços ILUSTRATIVOS, sinalizados em `pricingNote`.
 */
export const erpVLanding: ProductLandingData = {
  slug: 'erp-v',
  name: 'ERP-V',
  accent: '#4F46E5',

  /* ── SEO ── */
  metaTitle: 'ERP-V — ERP fiscal brasileiro para PMEs',
  metaDescription:
    'ERP fiscal modular para PMEs brasileiras: motor fiscal versionado por vigência (RTC 2026, CBS/IBS), NF-e/NFS-e/NFC-e e financeiro-contábil real (ledger, AP/AR, conciliação). O poder de um TOTVS sem o custo de um TOTVS.',
  seoCategory: 'BusinessApplication',
  seoFeatureList: [
    'Motor fiscal versionado por vigência (RTC 2026, CBS/IBS)',
    'Emissão de NF-e, NFS-e e NFC-e',
    'Financeiro core: contas a pagar e a receber',
    'Contabilidade real com ledger e partida dobrada',
    'Conciliação bancária e contábil',
    'Procure-to-pay e order-to-cash',
    'Controle de estoque e custos',
    'Multi-tenant com isolamento por RLS',
  ],

  /* ── Hero ── */
  badge: 'ERP fiscal pronto para a reforma tributária',
  heroTitle: 'O ERP fiscal que acompanha a lei brasileira — sem o custo de um TOTVS.',
  heroSubtitle:
    'ERP-V é o ERP modular para PMEs presas entre a planilha e o sistema corporativo caro. Motor fiscal versionado por vigência (RTC 2026, CBS/IBS), emissão fiscal completa e um financeiro-contábil de verdade — tudo num produto que a sua operação consegue pagar e a sua contabilidade consegue confiar.',
  heroHighlights: [
    'Pronto para CBS/IBS e o RTC 2026',
    'NF-e, NFS-e e NFC-e nativas',
    'Contabilidade e financeiro reais',
    'Multi-empresa com dados isolados',
  ],
  primaryCta: 'Falar com especialista',
  secondaryCta: 'Ver planos',

  /* ── Problema / dores ── */
  painsTitle: 'A sua empresa cresceu, mas a sua gestão ficou na planilha.',
  painsSubtitle:
    'PMEs brasileiras vivem espremidas entre dois extremos: a planilha que não escala e o ERP corporativo que custa o que você não pode pagar. No meio, a reforma tributária chega e ninguém está pronto.',
  pains: [
    {
      title: 'A reforma tributária está chegando e o seu sistema não acompanha',
      description:
        'RTC obrigatório desde 2026, CBS e IBS entrando em vigência, CNPJ alfanumérico. Cada mudança vira uma corrida — e um sistema que não versiona regra fiscal por data de vigência transforma cada lei nova em risco de multa.',
    },
    {
      title: 'Planilha + Bling não fecha o mês',
      description:
        'Você emite nota num lugar, controla caixa em outro e fecha o mês no Excel. Não existe um livro-razão real, a conciliação é manual e a sua contabilidade trabalha em cima de números que ninguém consegue auditar.',
    },
    {
      title: 'O ERP corporativo custa caro demais para o seu porte',
      description:
        'TOTVS e SAP resolvem — por um preço, um tempo de implantação e uma complexidade pensados para grandes corporações. Para uma PME, vira um investimento que não cabe no orçamento nem na equipe.',
    },
    {
      title: 'Cada área usa um sistema diferente',
      description:
        'Estoque num app, financeiro noutro, compras numa planilha, fiscal num emissor avulso. Os dados não conversam, ninguém tem a visão do todo e toda decisão depende de alguém consolidar tudo na mão.',
    },
    {
      title: 'Erro fiscal é prejuízo e dor de cabeça com o fisco',
      description:
        'Cálculo de imposto errado, nota rejeitada, obrigação acessória fora do prazo. Sem um motor fiscal confiável, cada operação carrega o risco de uma autuação que poderia ter sido evitada.',
    },
    {
      title: 'Sem dados confiáveis, a decisão vira chute',
      description:
        'Quanto a empresa realmente lucrou? Qual produto dá margem? Quanto entra e sai mês que vem? Sem um ERP integrado, essas respostas chegam tarde, incompletas e quase sempre divergentes entre as áreas.',
    },
  ],

  /* ── Funcionalidades ── */
  featuresTitle: 'Um ERP fiscal completo, desenhado para a realidade brasileira.',
  featuresSubtitle:
    'Cada módulo resolve uma operação real da PME — e todos compartilham a mesma base de dados, o mesmo motor fiscal e a mesma contabilidade. Sem integrações frágeis, sem retrabalho.',
  features: [
    {
      title: 'Motor fiscal versionado por vigência',
      description:
        'O coração do ERP-V: cada regra fiscal vive amarrada à sua data de vigência. Quando a lei muda — RTC, CBS, IBS, nova alíquota — o sistema aplica a regra certa para cada período, sem você reconfigurar nada. É assim que você fica pronto para a reforma tributária sem sustos.',
      highlight: 'Diferencial central',
    },
    {
      title: 'Emissão fiscal completa: NF-e, NFS-e e NFC-e',
      description:
        'Emita nota de produto, de serviço e de consumidor direto do ERP, com os cálculos de imposto saindo do mesmo motor que rege a sua contabilidade. Tudo num lugar, tudo coerente.',
      highlight: 'Fiscal BR nativo',
    },
    {
      title: 'Financeiro core de verdade: AP/AR e ledger',
      description:
        'Contas a pagar e a receber, livro-razão com partida dobrada, regras de lançamento contábil reais. Nada contorna o motor contábil — então o que você vê no relatório é o que de fato aconteceu na empresa.',
      highlight: 'Contabilidade real',
    },
    {
      title: 'Conciliação bancária e contábil',
      description:
        'Reconcilia extratos, lançamentos e razão automaticamente, deixando para o seu time apenas as exceções. O fechamento do mês deixa de ser uma caça ao tesouro.',
    },
    {
      title: 'Compras e fornecedores (procure-to-pay)',
      description:
        'Do pedido de compra ao pagamento ao fornecedor, com o financeiro e o estoque atualizados no mesmo fluxo. Cada compra já nasce contabilizada e com impacto fiscal correto.',
    },
    {
      title: 'Vendas e faturamento (order-to-cash)',
      description:
        'Do pedido do cliente à nota emitida e ao recebimento conciliado. Vendas, estoque, fiscal e financeiro andam juntos, sem digitar a mesma informação três vezes.',
    },
    {
      title: 'Estoque e custos',
      description:
        'Controle de inventário com custo médio e movimentações integradas a compras e vendas. Você sabe o que tem, quanto custou e qual a margem real de cada produto.',
    },
    {
      title: 'Multi-empresa com isolamento por RLS',
      description:
        'Arquitetura multi-tenant com Row-Level Security: cada empresa enxerga apenas os próprios dados, com isolamento garantido no banco. Ideal para grupos, holdings e contabilidades que atendem várias empresas.',
      highlight: 'Multi-tenant',
    },
  ],

  /* ── Como funciona ── */
  stepsTitle: 'Da planilha ao ERP em quatro passos.',
  steps: [
    {
      step: '01',
      title: 'Diagnóstico da sua operação',
      description:
        'Conversamos com você para entender porte, regime tributário, módulos necessários e como a empresa trabalha hoje. Você só ativa o que precisa.',
    },
    {
      step: '02',
      title: 'Configuração fiscal e migração',
      description:
        'Configuramos o motor fiscal para o seu regime e vigências, criamos a sua empresa no ambiente multi-tenant e trazemos seus dados de cadastro, saldos e estoque.',
    },
    {
      step: '03',
      title: 'Time treinado e em operação',
      description:
        'Sua equipe começa a emitir notas, lançar financeiro e movimentar estoque com acompanhamento próximo. Onboarding pensado para PME, não para um projeto corporativo de meses.',
    },
    {
      step: '04',
      title: 'Operação integrada e gestão na régua',
      description:
        'Com tudo num único sistema, você fecha o mês com confiança, atende o fisco no prazo e toma decisão com dados reais. As atualizações fiscais chegam automaticamente.',
    },
  ],

  /* ── Resultados / benefícios ── */
  outcomesTitle: 'O que muda quando a sua gestão roda num ERP de verdade.',
  outcomes: [
    'Tranquilidade com a reforma tributária: regras aplicadas por vigência, sem retrabalho',
    'Fechamento de mês mais rápido, com conciliação automática',
    'Contabilidade confiável e auditável, com livro-razão real',
    'Menos risco fiscal: cálculo de imposto e obrigações no mesmo motor da emissão',
    'Uma única fonte de verdade para fiscal, financeiro, estoque e vendas',
    'Visão de margem e fluxo de caixa para decidir com dado, não com achismo',
    'Poder de ERP corporativo num custo compatível com PME',
    'Crescimento sem trocar de sistema: ative módulos conforme a empresa evolui',
  ],

  /* ── Planos ── */
  pricingTitle: 'Planos por módulo e porte. Você paga pelo que usa.',
  pricingSubtitle:
    'Comece pelo essencial fiscal e cresça ativando módulos conforme a sua operação evolui. Sem o contrato corporativo de anos.',
  plans: [
    {
      name: 'Essencial Fiscal',
      price: 'Sob consulta',
      description: 'Para a PME que precisa emitir e calcular imposto certo, já pronta para a reforma.',
      features: [
        'Motor fiscal versionado por vigência',
        'Emissão de NF-e, NFS-e e NFC-e',
        'Cadastros de produtos, clientes e fornecedores',
        'Atualizações fiscais (RTC, CBS/IBS) incluídas',
        'Empresa única (1 CNPJ)',
        'Suporte por e-mail',
      ],
      ctaLabel: 'Falar com especialista',
    },
    {
      name: 'Gestão Completa',
      price: 'Sob consulta',
      description: 'O ERP integrado para quem quer fiscal, financeiro, compras, vendas e estoque num só lugar.',
      features: [
        'Tudo do Essencial Fiscal',
        'Financeiro core: contas a pagar e a receber',
        'Contabilidade real com ledger e partida dobrada',
        'Conciliação bancária e contábil',
        'Compras (procure-to-pay) e vendas (order-to-cash)',
        'Estoque e custos',
        'Dashboards de gestão',
        'Suporte prioritário',
      ],
      highlighted: true,
      ctaLabel: 'Falar com especialista',
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      description: 'Para grupos, holdings e contabilidades que operam várias empresas com exigências avançadas.',
      features: [
        'Tudo da Gestão Completa',
        'Multi-empresa com isolamento por RLS',
        'Controles de acesso e segregação de funções (SoD)',
        'Onboarding e migração assistidos',
        'Integrações e fluxos personalizados',
        'SLA e gerente de conta dedicado',
      ],
      ctaLabel: 'Falar com especialista',
    },
  ],
  pricingNote:
    'Valores sob consulta: o ERP-V é vendido de forma consultiva, com preço por módulo e porte da empresa. Os nomes e a composição dos planos são ilustrativos e podem ser ajustados na proposta. Fale com um especialista para um orçamento fechado para a sua operação.',

  /* ── FAQ ── */
  faq: [
    {
      q: 'O ERP-V já está preparado para a reforma tributária (RTC, CBS e IBS)?',
      a: 'Sim. Esse é o diferencial central do ERP-V: o motor fiscal é versionado por vigência. Cada regra é amarrada à data em que passa a valer, então o sistema aplica a tributação correta para cada período — incluindo o RTC já obrigatório, a CBS e o IBS. Quando a legislação muda, a atualização entra sem você reconfigurar o sistema.',
    },
    {
      q: 'Qual a diferença do ERP-V para usar planilha + Bling?',
      a: 'Bling e planilhas resolvem emissão e controle básico, mas não têm uma contabilidade real por trás. O ERP-V traz um financeiro-contábil de verdade — livro-razão, partida dobrada, contas a pagar e a receber, conciliação — integrado ao fiscal e ao estoque. Em vez de vários sistemas que não conversam, você tem uma única fonte de verdade auditável.',
    },
    {
      q: 'Por que escolher o ERP-V em vez de TOTVS ou SAP?',
      a: 'TOTVS e SAP são excelentes para grandes corporações — e cobram, demoram e exigem complexidade proporcionais a isso. O ERP-V entrega o que a PME realmente precisa (fiscal forte, financeiro real, módulos integrados) num custo, num tempo de implantação e numa simplicidade compatíveis com o seu porte.',
    },
    {
      q: 'Atende empresas com mais de um CNPJ?',
      a: 'Sim. O ERP-V é multi-tenant com isolamento por Row-Level Security no banco de dados: cada empresa enxerga apenas os próprios dados. É ideal para grupos, holdings e escritórios de contabilidade que precisam operar várias empresas com segurança e separação garantidas. Esse cenário é atendido no plano Enterprise.',
    },
    {
      q: 'Preciso ativar todos os módulos de uma vez?',
      a: 'Não. O ERP-V é modular. Você pode começar pelo Essencial Fiscal — emissão e cálculo de imposto — e ativar financeiro, compras, vendas e estoque conforme a empresa cresce. Você paga pelo que usa e cresce sem trocar de sistema.',
    },
    {
      q: 'Como funciona a migração dos meus dados?',
      a: 'A migração faz parte do onboarding. Trazemos seus cadastros (produtos, clientes, fornecedores), saldos e estoque para o ERP-V, configuramos o motor fiscal de acordo com o seu regime tributário e acompanhamos os primeiros lançamentos. Nos planos Enterprise, a migração e o onboarding são assistidos.',
    },
    {
      q: 'Meus dados ficam seguros?',
      a: 'Sim. A arquitetura é multi-tenant com isolamento por RLS — cada empresa só acessa os próprios dados, garantido no nível do banco. Há também controles de acesso por perfil e segregação de funções (SoD), para que cada pessoa veja e faça apenas o que o papel dela permite.',
    },
  ],

  /* ── CTA final ── */
  finalCtaTitle: 'Pare de remendar planilhas. Coloque a sua gestão num ERP de verdade.',
  finalCtaSubtitle:
    'Fale com um especialista do ERP-V. Em uma conversa objetiva, entendemos a sua operação e o seu regime tributário e desenhamos a combinação de módulos certa para a sua empresa — pronta para a reforma e dentro do seu orçamento.',
}
