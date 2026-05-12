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
    title: 'Automação de processos para reduzir retrabalho e ganhar controle operacional.',
    description:
      'Transformamos rotinas repetitivas em fluxos digitais monitoráveis, com regras claras, menos erro manual e mais previsibilidade para a gestão.',
    metaDescription:
      'Automação de processos para empresas que querem reduzir retrabalho, conectar tarefas e ganhar controle operacional com tecnologia sob medida.',
    keywords: ['automação de processos', 'automatizar tarefas repetitivas', 'automação operacional'],
    painPoints: [
      'Planilhas críticas que precisam ser conferidas todos os dias.',
      'Equipe gastando tempo em copiar, validar, avisar e atualizar informações.',
      'Processos que dependem de uma pessoa específica para acontecer.',
      'Erros manuais que atrasam atendimento, financeiro ou operação.',
    ],
    outcomes: [
      'Fluxos automáticos com registro, alerta e acompanhamento.',
      'Menos tarefas manuais em rotinas de alto volume.',
      'Indicadores para entender gargalos e tempo economizado.',
      'Base preparada para evoluir com integrações e IA.',
    ],
    process: [
      'Mapeamos o processo atual e identificamos pontos repetitivos.',
      'Definimos um primeiro fluxo com impacto mensurável.',
      'Implementamos automação com logs, alertas e pontos de validação.',
      'Acompanhamos o uso real e ajustamos a operação antes de escalar.',
    ],
    proof:
      'A melhor automação não começa pela ferramenta. Começa pela pergunta certa: qual rotina consome tempo, gera erro e trava crescimento?',
    primaryCta: 'Solicitar diagnóstico de automação',
    secondaryCta: 'Enviar dor operacional',
  },
  'agentes-de-ia': {
    slug: 'agentes-de-ia',
    eyebrow: 'Agentes de IA',
    title: 'Agentes de IA aplicados ao trabalho real da empresa.',
    description:
      'Criamos agentes para classificar demandas, responder perguntas, analisar documentos, apoiar atendimento e acelerar decisões dentro do fluxo operacional.',
    metaDescription:
      'Agentes de IA para empresas: atendimento, análise, triagem, automação e apoio operacional com integração aos sistemas existentes.',
    keywords: ['agentes de IA', 'IA para empresas', 'inteligência artificial empresarial'],
    painPoints: [
      'Time respondendo as mesmas perguntas repetidamente.',
      'Documentos e solicitações chegando sem triagem clara.',
      'Atendimento lento por falta de contexto e histórico.',
      'Decisões operacionais presas em leitura manual de dados.',
    ],
    outcomes: [
      'Agentes conectados a dados e regras do negócio.',
      'Respostas e triagens com contexto, não só chat genérico.',
      'Menos tempo em tarefas de leitura, classificação e encaminhamento.',
      'Governança para manter IA útil, controlada e auditável.',
    ],
    process: [
      'Definimos casos de uso onde IA realmente economiza esforço.',
      'Organizamos contexto, fontes de dados e limites de resposta.',
      'Construímos o agente com validações e integrações necessárias.',
      'Medimos qualidade, segurança e impacto antes de ampliar uso.',
    ],
    proof:
      'IA só vira ganho real quando entra no processo certo, com dados confiáveis e regras claras de uso.',
    primaryCta: 'Avaliar uso de IA',
    secondaryCta: 'Descrever meu caso',
  },
  'integracao-de-sistemas': {
    slug: 'integracao-de-sistemas',
    eyebrow: 'Integração de sistemas',
    title: 'Integração de sistemas para acabar com informação duplicada.',
    description:
      'Conectamos ERPs, CRMs, bancos, planilhas, APIs e ferramentas internas para reduzir retrabalho e manter dados consistentes entre áreas.',
    metaDescription:
      'Integração de sistemas, APIs, ERPs, CRMs e ferramentas internas para empresas que precisam eliminar retrabalho e dados duplicados.',
    keywords: ['integração de sistemas', 'integração API', 'integrar ERP e CRM'],
    painPoints: [
      'Dados lançados duas ou três vezes em sistemas diferentes.',
      'Relatórios divergentes entre financeiro, comercial e operação.',
      'Dependência de exportar CSV, copiar planilha e conferir manualmente.',
      'Ferramentas boas isoladamente, mas fracas quando não conversam.',
    ],
    outcomes: [
      'APIs, webhooks e rotinas de sincronização com rastreabilidade.',
      'Menos divergência entre áreas e sistemas.',
      'Dados mais confiáveis para relatórios e automações.',
      'Arquitetura preparada para crescer sem remendos frágeis.',
    ],
    process: [
      'Mapeamos sistemas, dados, permissões e pontos de falha.',
      'Definimos a fonte oficial de cada informação.',
      'Criamos integração com logs, retentativas e tratamento de erro.',
      'Monitoramos estabilidade e volume após implantação.',
    ],
    proof:
      'Integração bem feita não é só conectar API. É definir fluxo, responsabilidade do dado e como agir quando algo falha.',
    primaryCta: 'Mapear integrações',
    secondaryCta: 'Enviar sistemas atuais',
  },
  'sistemas-sob-medida': {
    slug: 'sistemas-sob-medida',
    eyebrow: 'Sistemas sob medida',
    title: 'Sistemas sob medida para operações que não cabem em ferramenta pronta.',
    description:
      'Desenvolvemos portais, dashboards, APIs, produtos SaaS e sistemas internos quando a operação precisa de uma solução própria e evolutiva.',
    metaDescription:
      'Desenvolvimento de sistemas sob medida, portais internos, SaaS, APIs e dashboards para empresas com processos específicos.',
    keywords: ['sistema sob medida', 'software sob medida', 'desenvolvimento SaaS'],
    painPoints: [
      'Ferramentas prontas obrigando a empresa a adaptar demais o processo.',
      'Operação crescendo em planilhas e controles paralelos.',
      'Falta de visão única para acompanhar tarefas, clientes ou indicadores.',
      'Produto digital parado por falta de arquitetura e execução técnica.',
    ],
    outcomes: [
      'Sistema desenhado para o fluxo real da empresa.',
      'Arquitetura preparada para integrações, permissões e evolução.',
      'Interface útil para uso diário, sem tela decorativa demais.',
      'Entrega incremental para validar valor antes de expandir escopo.',
    ],
    process: [
      'Transformamos a dor em escopo inicial claro.',
      'Desenhamos fluxos, dados, telas e regras de negócio.',
      'Construímos uma primeira versão funcional e mensurável.',
      'Evoluímos com base em uso real, não em suposição.',
    ],
    proof:
      'Sistema sob medida vale quando a operação tem regra própria, alto impacto ou custo escondido alto demais para continuar improvisando.',
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
