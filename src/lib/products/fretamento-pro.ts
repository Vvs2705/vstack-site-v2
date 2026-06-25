import type { ProductLandingData } from '@/lib/products/types'

/**
 * Landing de venda do Gestão Fretamento Pro.
 *
 * Produto real: SaaS multi-tenant de gestão de frota e fretamento (veículos,
 * motoristas, rotas, viagens com state machine, ocorrências, combustível com
 * detecção de anomalia, manutenção, documentos, clientes/contratos e dashboards
 * executivo/operacional/frota/combustível).
 *
 * Diferenciais de venda destacados: detecção de anomalia de combustível
 * (km/l abaixo de 80% da média histórica) e os dashboards de decisão.
 *
 * REGRA: nada de métrica/cliente/depoimento fabricado. Funcionalidades reais.
 * Preços por porte de frota são ILUSTRATIVOS — ver `pricingNote`.
 */
export const fretamentoProLanding: ProductLandingData = {
  slug: 'fretamento-pro',
  name: 'Gestão Fretamento Pro',
  accent: '#2563EB',

  /* ── SEO ── */
  metaTitle: 'Gestão Fretamento Pro — Gestão de frota',
  metaDescription:
    'Plataforma de gestão de frota e fretamento: viagens, motoristas, combustível com detecção de anomalia, manutenção e dashboards executivos em tempo real. Controle total da sua operação.',
  seoCategory: 'BusinessApplication',
  seoFeatureList: [
    'Gestão de viagens com ciclo completo (planejada → confirmada → em andamento → concluída)',
    'Cadastro de veículos, motoristas, rotas e clientes',
    'Controle de combustível com detecção automática de anomalia de consumo',
    'Gestão de manutenção preventiva e corretiva',
    'Controle de documentos e vencimentos de frota e motoristas',
    'Registro de ocorrências operacionais',
    'Dashboards executivo, operacional, de frota e de combustível',
    'Operação multi-tenant com isolamento total de dados',
  ],

  /* ── Hero ── */
  badge: 'Frota e fretamento sob controle',
  heroTitle: 'A operação inteira da sua frota em uma plataforma só.',
  heroSubtitle:
    'Do planejamento da viagem ao abastecimento, o Gestão Fretamento Pro centraliza veículos, motoristas, rotas e custos — e avisa você quando o consumo de combustível sai da curva, antes do prejuízo virar rotina.',
  heroHighlights: [
    'Detecção automática de anomalia de combustível',
    'Dashboards de decisão em tempo real',
    'Ciclo de viagem ponta a ponta',
    'Multi-tenant e seguro',
  ],
  primaryCta: 'Começar agora',
  secondaryCta: 'Ver planos',

  /* ── Problema ── */
  painsTitle: 'Gerir frota no Excel custa mais do que você imagina.',
  painsSubtitle:
    'Quando o controle está espalhado em planilhas, grupos de WhatsApp e papel, o prejuízo aparece tarde — e sem ninguém para responsabilizar.',
  pains: [
    {
      title: 'Combustível drenando a margem sem você ver',
      description:
        'Desvios de consumo, abastecimentos fora do padrão e km/l despencando passam despercebidos por semanas. Quando alguém nota, o rombo no caixa já aconteceu.',
    },
    {
      title: 'Viagem sem rastro do que aconteceu',
      description:
        'Quem confirmou? Saiu no horário? Atrasou? Sem um fluxo claro de status, cada viagem vira uma reconstrução de memória — e cliente cobrando do outro lado.',
    },
    {
      title: 'Manutenção e documentos vencendo no susto',
      description:
        'CNH, licenciamento, revisão preventiva: tudo controlado de cabeça até o dia em que um veículo é parado em blitz ou quebra em rota e a viagem inteira cai.',
    },
    {
      title: 'Decisão tomada olhando para o retrovisor',
      description:
        'Os números só fecham no fim do mês, no formato do contador. Sem dashboard de operação, você decide sobre frota com dados que já estão velhos.',
    },
  ],

  /* ── Funcionalidades ── */
  featuresTitle: 'Tudo o que a operação precisa, em um lugar.',
  featuresSubtitle:
    'Cada módulo foi construído para eliminar uma planilha e uma dor real de quem gere fretamento de verdade.',
  features: [
    {
      title: 'Combustível com detecção de anomalia',
      description:
        'A plataforma acompanha o km/l de cada veículo e compara com a média histórica. Quando o consumo cai abaixo de 80% do padrão, você é avisado na hora — fraude, vazamento ou problema mecânico flagrado antes de virar prejuízo.',
      highlight: 'Diferencial',
    },
    {
      title: 'Dashboards executivo e operacional',
      description:
        'Visões de decisão para a diretoria e visões de chão de operação para quem toca o dia a dia. Frota, viagens, custos e combustível em painéis vivos, não em relatórios atrasados.',
      highlight: 'Tempo real',
    },
    {
      title: 'Viagens com ciclo de vida completo',
      description:
        'Cada viagem passa por um fluxo claro — planejada, confirmada, em andamento e concluída — com validação de veículo e motorista na confirmação. Nada sai sem estar tudo certo, e nada se perde no caminho.',
    },
    {
      title: 'Frota, motoristas, rotas e clientes',
      description:
        'Cadastro central de veículos, condutores, rotas e clientes/contratos. A base única que alimenta toda a operação, sem retrabalho e sem informação duplicada.',
    },
    {
      title: 'Manutenção sob controle',
      description:
        'Registre manutenção preventiva e corretiva por veículo, acompanhe histórico e antecipe paradas. Frota disponível é frota faturando.',
    },
    {
      title: 'Documentos e vencimentos',
      description:
        'Centralize documentos de veículos e motoristas e mantenha vencimentos no radar. Menos risco de multa, apreensão e viagem cancelada de última hora.',
    },
    {
      title: 'Registro de ocorrências',
      description:
        'Atrasos, incidentes e imprevistos documentados na viagem certa. Histórico organizado para resolver com o cliente e melhorar a operação.',
    },
    {
      title: 'Multi-tenant e seguro por padrão',
      description:
        'Cada empresa opera em ambiente isolado, com dados separados de ponta a ponta. Pensado para escalar de uma frota a uma operação com várias filiais.',
      highlight: 'Multi-tenant',
    },
  ],

  /* ── Como funciona ── */
  stepsTitle: 'Do cadastro à operação em quatro passos.',
  steps: [
    {
      step: '01',
      title: 'Cadastre sua frota',
      description: 'Veículos, motoristas, rotas e clientes em uma base única. A fundação da operação fica pronta rápido.',
    },
    {
      step: '02',
      title: 'Planeje as viagens',
      description: 'Monte viagens, confirme com validação de veículo e motorista e coloque a operação em movimento.',
    },
    {
      step: '03',
      title: 'Registre combustível e ocorrências',
      description: 'Lance abastecimentos e imprevistos. O sistema vigia o consumo e sinaliza qualquer desvio fora da curva.',
    },
    {
      step: '04',
      title: 'Decida com os dashboards',
      description: 'Acompanhe frota, custos e combustível em painéis vivos e tome decisão com dado atual, não com achismo.',
    },
  ],

  /* ── Resultados ── */
  outcomesTitle: 'O que muda quando a frota roda no Fretamento Pro.',
  outcomes: [
    'Desvios de combustível flagrados na hora, não no fim do mês',
    'Visibilidade total do status de cada viagem',
    'Menos veículos parados por manutenção ou documento vencido',
    'Custos de operação visíveis em tempo real',
    'Fim das planilhas paralelas e do controle por WhatsApp',
    'Confirmação de viagem sem furo de veículo ou motorista',
    'Histórico organizado para resolver com o cliente',
    'Base pronta para escalar de uma frota a várias filiais',
  ],

  /* ── Planos ── */
  pricingTitle: 'Planos por porte da sua frota.',
  pricingSubtitle:
    'Comece pelo tamanho da sua operação hoje e cresça sem trocar de sistema. Todos os planos incluem a detecção de anomalia de combustível e os dashboards.',
  plans: [
    {
      name: 'Frota Pequena',
      price: 'R$ 349',
      period: '/mês',
      description: 'Para operações enxutas que querem sair do Excel e profissionalizar o controle.',
      features: [
        'Até 10 veículos ativos',
        'Gestão de viagens, motoristas e rotas',
        'Controle de combustível com detecção de anomalia',
        'Controle de manutenção e documentos',
        'Dashboard operacional',
        'Suporte por e-mail',
      ],
      ctaLabel: 'Começar agora',
    },
    {
      name: 'Operação',
      price: 'R$ 899',
      period: '/mês',
      description: 'Para empresas de fretamento que precisam de visão executiva e operação no controle.',
      features: [
        'Até 50 veículos ativos',
        'Tudo do Frota Pequena',
        'Dashboards executivo, operacional, de frota e de combustível',
        'Registro completo de ocorrências',
        'Gestão de clientes e contratos',
        'Suporte prioritário',
      ],
      highlighted: true,
      ctaLabel: 'Assinar o Fretamento Pro',
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      description: 'Para grandes frotas e operações multi-filial que precisam de escala e flexibilidade.',
      features: [
        'Veículos ilimitados',
        'Tudo do plano Operação',
        'Operação multi-tenant para várias filiais',
        'Onboarding e implantação assistidos',
        'Integrações sob medida',
        'Gerente de conta dedicado',
      ],
      ctaLabel: 'Falar com vendas',
    },
  ],
  pricingNote:
    'Valores ilustrativos para referência inicial — os preços finais e os limites de cada plano serão confirmados na proposta. Fale com a gente para o valor exato da sua operação.',

  /* ── FAQ ── */
  faq: [
    {
      q: 'Como funciona a detecção de anomalia de combustível?',
      a: 'A plataforma calcula o km/l de cada veículo a partir dos abastecimentos e do odômetro e compara com a média histórica recente. Quando o consumo cai abaixo de 80% do padrão daquele veículo, um alerta é gerado — assim você investiga possíveis fraudes, vazamentos ou problemas mecânicos antes que virem prejuízo recorrente.',
    },
    {
      q: 'Serve para a minha empresa de fretamento?',
      a: 'Sim. O Gestão Fretamento Pro foi feito para empresas de transporte e fretamento que precisam controlar frota, motoristas, viagens e custos em um só lugar. Funciona desde frotas pequenas até operações com várias filiais.',
    },
    {
      q: 'Preciso instalar alguma coisa?',
      a: 'Não. É uma plataforma web — você acessa pelo navegador, de qualquer dispositivo. Sem instalação, sem servidor para manter.',
    },
    {
      q: 'Meus dados ficam separados dos de outras empresas?',
      a: 'Sim. A plataforma é multi-tenant com isolamento total de dados: cada empresa opera em seu próprio ambiente, e as informações de uma operação nunca se misturam com as de outra.',
    },
    {
      q: 'O que é o ciclo de vida da viagem?',
      a: 'Cada viagem percorre um fluxo controlado — de planejada a confirmada, depois em andamento e concluída. Na confirmação, o sistema valida se veículo e motorista estão aptos, evitando que algo saia errado. Você sempre sabe em que estágio cada viagem está.',
    },
    {
      q: 'Os preços dos planos são definitivos?',
      a: 'Os valores exibidos são ilustrativos, para você ter uma referência inicial. O preço final e os limites de cada plano são confirmados na proposta, de acordo com o porte e as necessidades da sua frota.',
    },
    {
      q: 'Como começo a usar?',
      a: 'Clique em "Começar agora" ou "Ver planos", escolha o porte da sua operação e fale com a gente. Ajudamos no cadastro inicial da frota para você colocar a operação no ar rápido.',
    },
  ],

  /* ── CTA final ── */
  finalCtaTitle: 'Tire a sua frota do escuro.',
  finalCtaSubtitle:
    'Centralize a operação, flagre desvios de combustível na hora e decida com dado em tempo real. Comece agora com o Gestão Fretamento Pro.',
}
