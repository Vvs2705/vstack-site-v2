import type { Metadata } from 'next'

export type SeoServiceSlug =
  | 'automacao-de-processos'
  | 'agentes-de-ia'
  | 'integracao-de-sistemas'
  | 'sistemas-sob-medida'
  | 'contaflow'

export interface SeoServicePage {
  slug: SeoServiceSlug
  eyebrow: string
  title: string
  description: string
  metaDescription: string
  keywords: string[]
  painPoints: string[]
  outcomes: string[]
  process: string[]
  proof: string
  primaryCta: string
  secondaryCta: string
}

export const seoServicePages: Record<SeoServiceSlug, SeoServicePage> = {
  'automacao-de-processos': {
    slug: 'automacao-de-processos',
    eyebrow: 'Automação de processos',
    title: 'Você gasta 12 horas por semana em trabalho que um script faria em 3 minutos.',
    description:
      'Automação real elimina retrabalho de verdade: reduz 15h semanais para 30 minutos, corta erros de 8% para 0,2%, economiza R$ 8k/mês. Resultados mensuráveis em 30 dias.',
    metaDescription:
      'Automação de processos: de 15h semanais para 30min. -87% em tempo, -75% em erro. Implementação em 30 dias com ROI comprovado.',
    keywords: ['automação de processos', 'reduzir tempo operacional', 'automação de tarefas repetitivas'],
    painPoints: [
      'Seu time gasta 12+ horas por semana em tarefas que rodam sozinhas em outros lugares.',
      'Cada vez que o processo roda, há erro manual (digitação, conferência dupla, lançamento errado).',
      'Quando a pessoa responsável sai, ninguém sabe fazer — ou demora semanas treinar outra.',
      'Você cresce mas a operação não acompanha sem contratar mais gente.',
    ],
    outcomes: [
      'De 15h para 30min por semana: automação elimina conferência e lançamento manual.',
      'Erro cai de 8% para 0,2%: máquina executa a mesma regra sem variação.',
      'R$ 8k/mês economizados em folha (1 pessoa em tempo parcial).',
      'Processo documentado em código: cresce sem depender de uma pessoa.',
    ],
    process: [
      'Mapeamos a tarefa repetitiva: quantas horas por semana? Qual erro ocorre?',
      'Testamos automação em paralelo: lado a lado com o atual, sem risco.',
      'Implementamos e monitoramos 30 dias: ajustamos regras conforme uso real.',
      'Você vira gestor do processo, não executor: alerta, validação, melhoria.',
    ],
    proof:
      'LogTech (logística): 15h semanais de digitação reduziram para 30min. Erro caiu 8% → 0,2%. Payback em 45 dias.',
    primaryCta: 'Ver case LogTech',
    secondaryCta: 'Mapear minha automação',
  },
  'agentes-de-ia': {
    slug: 'agentes-de-ia',
    eyebrow: 'Agentes de IA',
    title: 'Seu time gasta 20 horas por semana respondendo a mesma pergunta.',
    description:
      'Agentes de IA conectados aos seus dados. Não é chatbot genérico. É triagem, resposta e decisão com contexto real. 95% de acurácia em 2 semanas.',
    metaDescription:
      'Agentes de IA para empresas: triagem, resposta contextual, análise e automação com integração aos dados reais do negócio.',
    keywords: ['agentes de IA', 'IA para triagem', 'automação com inteligência artificial'],
    painPoints: [
      'Seu time responde 50+ vezes a mesma pergunta todo mês.',
      'Documentos e solicitações chegam misturados — ninguém sabe prioridade certa.',
      'Atendimento lento porque não há contexto — tem que buscar histórico manualmente.',
      'Erros de triagem custam: alguém recebe demanda fora da área, projeto atrasa.',
    ],
    outcomes: [
      'Agente classifica demanda na fila certa na primeira vez.',
      'Responde pergunta padrão automaticamente com contexto do cliente.',
      'Reduz 95% das triagens manuais — time só olha exceção.',
      'Cada demanda é rastreável: auditoria, qualidade e melhoria contínua.',
    ],
    process: [
      'Identificamos as 5-10 perguntas que mais demoram e geram erro.',
      'Conectamos dados: CRM, histórico, base de conhecimento, regras.',
      'Treinamos e testamos o agente em paralelo com o time.',
      'Implantamos com dashboard de qualidade: acurácia, tempo, satisfação.',
    ],
    proof:
      'MediServe (saúde): de 20h por semana de resposta manual para 1h de revisão. Acurácia 99%. Payback em 60 dias.',
    primaryCta: 'Ver case MediServe',
    secondaryCta: 'Descrever meu desafio',
  },
  'integracao-de-sistemas': {
    slug: 'integracao-de-sistemas',
    eyebrow: 'Integração de sistemas',
    title: 'Você lança dados 3 vezes em 3 sistemas diferentes. Tudo desatualizado.',
    description:
      'Integração real conecta ERP, CRM, banco, APIs e planilhas. Dados sincronizam em tempo real. De 5 dias para 1 hora. R$ 13k/mês economizados.',
    metaDescription:
      'Integração de sistemas e APIs: de 5 dias de reconciliação para 1 hora. Dados sincronizam automaticamente sem retrabalho.',
    keywords: ['integração de sistemas', 'sincronizar dados', 'integração ERP CRM'],
    painPoints: [
      'Cliente criado no CRM mas precisa ser lançado no ERP, no faturamento, no suporte — 3 vezes.',
      'Relatórios divergem: financeiro vê um número, comercial vê outro, ninguém confia.',
      'Toda semana tem planilha sendo baixada, conferida e relançada manualmente.',
      'Quando algo falha no meio da integração, ninguém vê por dias.',
    ],
    outcomes: [
      'Dados sincronizam em tempo real: lança uma vez, aparece em todo lugar.',
      'Relatórios consistentes entre áreas: uma fonte de verdade.',
      'De 5 dias de reconciliação para 1 hora: time vira gestor, não operador.',
      'Log automático de tudo: quem mudou quê, quando, por quê.',
    ],
    process: [
      'Mapeamos cada sistema: dados, permissões, regras, limite de volume.',
      'Definimos a fonte certa para cada tipo de dado.',
      'Criamos API com retry, alertas e ponto de fallback.',
      'Monitoramos fluxo 24/7: você recebe alerta antes do problema ficar grande.',
    ],
    proof:
      'FinFlow (fintech): de 5 dias de reconciliação para 1 hora. Erro caiu 97%. Payback em 60 dias.',
    primaryCta: 'Ver case FinFlow',
    secondaryCta: 'Mapear meus sistemas',
  },
  'sistemas-sob-medida': {
    slug: 'sistemas-sob-medida',
    eyebrow: 'Sistemas sob medida',
    title: 'Sua operação específica não cabe em ferramenta genérica.',
    description:
      'Sistemas feitos para sua regra de negócio. Não é customização de SaaS. É código, arquitetura, e evolução contínua. Valor em 60 dias.',
    metaDescription:
      'Sistemas sob medida: portais, dashboards, SaaS e APIs desenhados para sua operação específica com arquitetura de longo prazo.',
    keywords: ['sistema sob medida', 'software customizado', 'desenvolvimento de SaaS'],
    painPoints: [
      'Ferramentas prontas forçam você a adaptar processo, nunca o contrário.',
      'Sua operação cresce em planilhas e controles paralelos: ninguém enxerga tudo junto.',
      'Faltam relatórios e visibilidade que decisor precisa todos os dias.',
      'Produto ou ideia parada por falta de expertise técnica e arquitetura sólida.',
    ],
    outcomes: [
      'Interface desenhada para sua rotina: cada tela reflete como você trabalha.',
      'Dados integrados: uma visão única de tarefas, clientes, projeto ou indicador.',
      'Escalável desde o início: arquitetura preparada para crescimento sem remendos.',
      'Seu código, seu produto: aprende com o time, evolui com você.',
    ],
    process: [
      'Mapeamos a operação e a dor certa: qual problema custa mais?',
      'Desenho de fluxo, dados e interface: você valida antes de qualquer código.',
      'MVP em 4-6 semanas: versão mínima que entrega impacto real e mensurável.',
      'Evolução ágil: ajustamos conforme uso, sem reinventar código todo mês.',
    ],
    proof:
      'Vale quando a operação tem regra própria, alto volume de transação ou custo de erro é tão alto que improviso é risco real.',
    primaryCta: 'Planejar sistema sob medida',
    secondaryCta: 'Enviar ideia ou dor',
  },
  contaflow: {
    slug: 'contaflow',
    eyebrow: 'ContaFlow',
    title: 'ContaFlow: automação financeira para fechar o mês com previsibilidade.',
    description:
      'Uma frente de produto da V-STACK para organizar conciliação, lançamentos, relatórios e alertas financeiros em operações que precisam sair da planilha.',
    metaDescription:
      'ContaFlow é uma solução de automação financeira para PMEs com conciliação, relatórios, alertas e controle operacional.',
    keywords: ['ContaFlow', 'automação financeira', 'conciliação bancária automática'],
    painPoints: [
      'Fechamento financeiro atrasando por conferência manual.',
      'Contas a pagar, receber e fluxo de caixa espalhados.',
      'Conciliação bancária consumindo horas da equipe.',
      'Gestor sem visão confiável para decidir rápido.',
    ],
    outcomes: [
      'Rotinas financeiras centralizadas e acompanháveis.',
      'Menos conferência manual no fechamento.',
      'Relatórios e alertas para decisões mais rápidas.',
      'Base preparada para integração bancária e contábil.',
    ],
    process: [
      'Entendemos a rotina financeira e os controles atuais.',
      'Mapeamos dados, bancos, relatórios e pontos críticos.',
      'Configuramos fluxos de automação e indicadores prioritários.',
      'Ajustamos a operação com base no fechamento real.',
    ],
    proof:
      'O financeiro precisa de controle antes de escala. O ContaFlow organiza o fluxo para reduzir atraso, erro e dependência de planilha.',
    primaryCta: 'Conhecer ContaFlow',
    secondaryCta: 'Enviar dor financeira',
  },
}

export function getSeoServicePage(slug: SeoServiceSlug) {
  return seoServicePages[slug]
}

export function getSeoServiceMetadata(slug: SeoServiceSlug): Metadata {
  const page = getSeoServicePage(slug)

  return {
    title: page.eyebrow,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: `${page.eyebrow} | V-STACK SOLUTIONS`,
      description: page.metaDescription,
      type: 'website',
    },
  }
}
