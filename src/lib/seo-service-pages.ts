import type { Metadata } from 'next'
import type { WhatsAppTopic } from './contact'
import { OG_DEFAULTS } from './structured-data'

export type SeoServiceSlug =
  | 'criacao-de-sites'
  | 'jogos'
  | 'automacao-de-processos'
  | 'agentes-de-ia'
  | 'integracao-de-sistemas'
  | 'sistemas-sob-medida'

export interface ServicePackage {
  name: string
  forWho: string
  includes: string[]
}

/**
 * Landing de serviço. Sem números de resultado: cases e métricas só voltam
 * com cliente real, autorização e dados conferidos.
 */
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
  /** Palavra-chave da mensagem de WhatsApp do botão principal */
  whatsappTopic: WhatsAppTopic
  /** Valor de ?produto= no formulário de orçamento */
  quoteType: string
  packages?: ServicePackage[]
}

export const seoServicePages: Record<SeoServiceSlug, SeoServicePage> = {
  'criacao-de-sites': {
    slug: 'criacao-de-sites',
    eyebrow: 'Criação de sites',
    title: 'Seu cliente procura no Google. Ele precisa encontrar você.',
    description:
      'Criamos sites e landing pages rápidos, bonitos no celular e feitos para vender: aparecem nas buscas, explicam o que você faz em segundos e levam o visitante direto para o seu WhatsApp.',
    metaDescription:
      'Criação de sites profissionais e landing pages para pequenas e médias empresas: rápidos, otimizados para Google e celular, integrados ao WhatsApp.',
    keywords: ['criação de sites', 'site profissional', 'landing page', 'site para pequenas empresas', 'site institucional'],
    painPoints: [
      'Você só tem perfil no Instagram, e quem procura no Google encontra o concorrente.',
      'Seu site é antigo, lento ou quebra no celular, e passa uma imagem amadora.',
      'O visitante entra, não entende o que você faz e vai embora sem chamar.',
      'Você não sabe quantas pessoas visitam o site nem de onde vêm os contatos.',
    ],
    outcomes: [
      'Presença profissional no Google, com textos pensados para quem busca o seu serviço.',
      'Site rápido e confortável no celular, onde está a maior parte dos visitantes.',
      'Botão de WhatsApp e formulário que chega no seu e-mail: o visitante vira conversa.',
      'Medição de visitas e cliques para saber o que funciona.',
    ],
    process: [
      'Conversa sobre o seu negócio, o seu cliente e o que o site precisa fazer.',
      'Proposta com páginas, textos e prazo definidos antes de começar.',
      'Criação do layout e dos textos, com a sua aprovação antes de publicar.',
      'Publicação no seu domínio, configuração do Google e ajustes finais.',
    ],
    proof:
      'Este site que você está vendo foi feito pela V-STACK: rápido, otimizado para buscas, com formulários que chegam no e-mail, WhatsApp e medição de visitas. É o mesmo cuidado que levamos para o seu.',
    primaryCta: 'Pedir orçamento no WhatsApp',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'SITE',
    quoteType: 'site',
    packages: [
      {
        name: 'Landing page',
        forWho: 'Para divulgar um serviço, produto ou campanha.',
        includes: ['Uma página de vendas completa', 'Botão de WhatsApp e formulário', 'Otimização para celular e Google'],
      },
      {
        name: 'Site institucional',
        forWho: 'Para apresentar a empresa com credibilidade.',
        includes: ['Páginas de início, serviços, sobre e contato', 'Textos orientados a conversão', 'Medição de visitas e cliques'],
      },
      {
        name: 'Site + integrações',
        forWho: 'Para quem quer o site trabalhando pelo negócio.',
        includes: ['Tudo do institucional', 'Agenda, pagamento, catálogo ou área do cliente', 'Integração com os sistemas que você já usa'],
      },
    ],
  },
  jogos: {
    slug: 'jogos',
    eyebrow: 'Jogos sob encomenda',
    title: 'Sua marca pode virar um jogo que ninguém esquece.',
    description:
      'Desenvolvemos jogos de navegador e celular para ações de marca, eventos e treinamentos. Um jogo prende a atenção por minutos, não por segundos, e transmite a sua mensagem enquanto o público se diverte.',
    metaDescription:
      'Desenvolvimento de jogos sob encomenda para marcas, eventos e treinamentos: jogos de navegador e celular, advergames e gamificação.',
    keywords: ['desenvolvimento de jogos', 'jogo para empresa', 'advergame', 'gamificação', 'jogo para evento'],
    painPoints: [
      'Panfleto e post comum não seguram a atenção do público no seu evento ou campanha.',
      'O treinamento da equipe é cansativo e ninguém lembra do conteúdo depois.',
      'Você quer uma ação de marca diferente, que as pessoas queiram compartilhar.',
      'Você tem a ideia de um jogo, mas não tem quem desenvolva.',
    ],
    outcomes: [
      'Um jogo com a cara da sua marca, pensado para o seu público.',
      'Roda no navegador ou no celular, sem instalação complicada para o jogador.',
      'Ranking, cadastro e prêmios quando a ação precisa captar contatos.',
      'Uma experiência que o público comenta e compartilha.',
    ],
    process: [
      'Conversa sobre objetivo, público, onde o jogo vai rodar e quando precisa estar pronto.',
      'Proposta com a ideia do jogo, plataforma, escopo e prazo.',
      'Desenvolvimento por etapas, com versões jogáveis para você testar.',
      'Publicação, acompanhamento durante a ação e ajustes.',
    ],
    proof:
      'Por trás de cada jogo está a mesma engenharia que usamos nos nossos sistemas: cadastro de jogadores, ranking, painel de resultados e integração com o seu CRM quando a ação precisa gerar contatos.',
    primaryCta: 'Conversar sobre o meu jogo',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'JOGO',
    quoteType: 'jogo',
  },
  'automacao-de-processos': {
    slug: 'automacao-de-processos',
    eyebrow: 'Automação de processos',
    title: 'Pare de pagar alguém para copiar e colar.',
    description:
      'Automatizamos as tarefas repetitivas que tomam o tempo do seu time: lançamentos, conferências, relatórios e envios. O processo passa a rodar sozinho, com alerta quando algo foge da regra.',
    metaDescription:
      'Automação de processos para empresas: elimine tarefas repetitivas, reduza erros de digitação e libere o time para o que gera resultado.',
    keywords: ['automação de processos', 'reduzir tempo operacional', 'automação de tarefas repetitivas'],
    painPoints: [
      'Seu time passa horas por semana em tarefas que poderiam rodar sozinhas.',
      'Cada vez que o processo roda, aparece erro de digitação ou conferência.',
      'Quando a pessoa responsável sai, ninguém sabe fazer.',
      'A empresa cresce, mas a operação só acompanha contratando mais gente.',
    ],
    outcomes: [
      'Tarefas repetidas executadas sempre da mesma forma, sem cansaço.',
      'Menos erro manual: a regra é aplicada igual em todas as vezes.',
      'Time livre para atender clientes e resolver exceções.',
      'Processo documentado no sistema, sem depender de uma pessoa.',
    ],
    process: [
      'Mapeamos a tarefa: quanto tempo leva, onde erra e o que ela alimenta.',
      'Testamos a automação lado a lado com o processo atual, sem risco.',
      'Colocamos em produção e ajustamos as regras com o uso real.',
      'Você acompanha por alertas e relatórios, e só age nas exceções.',
    ],
    proof:
      'Automatizamos rotinas dos nossos próprios produtos, como a conciliação e os alertas do FiscWise. Antes de propor, medimos o tempo gasto hoje para que o ganho possa ser conferido depois.',
    primaryCta: 'Falar sobre automação',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'AUTOMAÇÃO',
    quoteType: 'automacao',
  },
  'agentes-de-ia': {
    slug: 'agentes-de-ia',
    eyebrow: 'Agentes de IA',
    title: 'Seu time responde a mesma pergunta o dia inteiro?',
    description:
      'Agentes de IA conectados aos dados da sua empresa. Não é chatbot genérico: o agente consulta histórico e regras, responde com contexto e passa para uma pessoa quando precisa.',
    metaDescription:
      'Agentes de IA para empresas: atendimento, triagem e respostas com contexto, integrados aos dados reais do negócio.',
    keywords: ['agentes de IA', 'IA para atendimento', 'automação com inteligência artificial'],
    painPoints: [
      'As mesmas perguntas chegam várias vezes por dia no WhatsApp e no e-mail.',
      'Solicitações chegam misturadas e ninguém sabe a prioridade certa.',
      'O atendimento é lento porque é preciso buscar o histórico na mão.',
      'Demandas caem na área errada e o cliente espera mais do que devia.',
    ],
    outcomes: [
      'Perguntas frequentes respondidas na hora, com dados do próprio cliente.',
      'Demandas classificadas e enviadas para a pessoa certa.',
      'Time focado nas exceções, não na repetição.',
      'Cada resposta registrada para auditoria e melhoria contínua.',
    ],
    process: [
      'Levantamos as perguntas e tarefas que mais consomem tempo.',
      'Conectamos as fontes: CRM, histórico, base de conhecimento e regras.',
      'Testamos o agente em paralelo com o time antes de liberar.',
      'Implantamos com acompanhamento de qualidade das respostas.',
    ],
    proof:
      'Usamos IA nos nossos próprios produtos, como o assistente fiscal do FiscWise, sempre com dados mascarados e uma pessoa no controle das decisões sensíveis.',
    primaryCta: 'Falar sobre IA',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'AUTOMAÇÃO',
    quoteType: 'ia',
  },
  'integracao-de-sistemas': {
    slug: 'integracao-de-sistemas',
    eyebrow: 'Integração de sistemas',
    title: 'Você lança o mesmo dado em três sistemas diferentes?',
    description:
      'Conectamos ERP, CRM, bancos, planilhas e APIs para que a informação seja lançada uma vez e apareça em todo lugar, sempre atualizada.',
    metaDescription:
      'Integração de sistemas e APIs: conecte ERP, CRM, bancos e planilhas para eliminar relançamentos e relatórios divergentes.',
    keywords: ['integração de sistemas', 'sincronizar dados', 'integração ERP CRM'],
    painPoints: [
      'O cliente é cadastrado no CRM e precisa ser relançado no ERP e no financeiro.',
      'Os relatórios não batem: cada área vê um número diferente.',
      'Toda semana alguém baixa planilha, confere e relança na mão.',
      'Quando algo falha no meio do caminho, ninguém percebe por dias.',
    ],
    outcomes: [
      'Dados sincronizados: lançou uma vez, aparece em todo lugar.',
      'Relatórios consistentes entre áreas, com uma fonte de verdade.',
      'Fim da planilha intermediária e do relançamento manual.',
      'Registro de tudo: o que mudou, quando e por quê.',
    ],
    process: [
      'Mapeamos cada sistema: dados, permissões, regras e limites.',
      'Definimos qual sistema é a fonte certa para cada informação.',
      'Construímos a integração com tentativas automáticas e alertas de falha.',
      'Acompanhamos o fluxo e avisamos antes do problema crescer.',
    ],
    proof:
      'Integramos bancos via Open Banking, emissão de NFS-e e serviços fiscais nos nossos próprios produtos. Se o sistema que você usa tem API, conseguimos conectar.',
    primaryCta: 'Mapear meus sistemas',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'AUTOMAÇÃO',
    quoteType: 'integracao',
  },
  'sistemas-sob-medida': {
    slug: 'sistemas-sob-medida',
    eyebrow: 'Sistemas sob medida',
    title: 'Sua operação não cabe em ferramenta genérica.',
    description:
      'Criamos sistemas feitos para a sua regra de negócio: painéis, cadastros, agenda, financeiro, portais de cliente e aplicativos. O sistema se adapta ao seu processo, e não o contrário.',
    metaDescription:
      'Sistemas sob medida: portais, painéis, aplicativos e SaaS desenhados para a sua operação, com arquitetura que acompanha o crescimento.',
    keywords: ['sistema sob medida', 'software personalizado', 'desenvolvimento de sistemas', 'desenvolvimento de SaaS'],
    painPoints: [
      'Ferramentas prontas obrigam você a mudar o processo para caber nelas.',
      'A operação cresce em planilhas paralelas e ninguém enxerga tudo junto.',
      'Faltam relatórios que mostrem o que importa para decidir.',
      'Você tem a ideia de um produto, mas não tem quem construa.',
    ],
    outcomes: [
      'Telas desenhadas para a sua rotina, sem campos que ninguém usa.',
      'Dados de clientes, tarefas e financeiro num lugar só.',
      'Arquitetura preparada para crescer sem remendos.',
      'Código e dados sob o seu controle.',
    ],
    process: [
      'Mapeamos a operação e o problema que mais custa caro.',
      'Desenhamos fluxo, dados e telas: você valida antes de qualquer código.',
      'Entregamos primeiro a versão mínima que já resolve o principal.',
      'Evoluímos por etapas, conforme o uso real.',
    ],
    proof:
      'Construímos e operamos produtos próprios: FiscWise (em produção), SessãoInk, Gestão Fretamento Pro e ERP-V. É a mesma engenharia que vai para o seu sistema.',
    primaryCta: 'Planejar meu sistema',
    secondaryCta: 'Preencher formulário',
    whatsappTopic: 'SISTEMA',
    quoteType: 'saas',
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
      ...OG_DEFAULTS,
      title: `${page.eyebrow} | V-STACK SOLUTIONS`,
      description: page.metaDescription,
      type: 'website',
    },
  }
}
