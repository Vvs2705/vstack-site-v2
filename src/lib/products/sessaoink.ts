import type { ProductLandingData } from '@/lib/products/types'

/**
 * Landing de venda do SessãoInk — SaaS de gestão para estúdios de tatuagem
 * e tatuadores autônomos. Copy de venda confiante, no presente.
 *
 * Accent: teal da marca (#2F9285). Funcionalidades baseadas no produto real
 * (agenda, clientes, financeiro com comissões, portfólio/flash, documentos/
 * assinatura, portal público por slug, RBAC). Sem métricas/depoimentos
 * fabricados. Preços ilustrativos — confirmar com o Vinicius (ver pricingNote).
 */
export const sessaoinkLanding: ProductLandingData = {
  slug: 'sessaoink',
  name: 'SessãoInk',
  accent: '#2F9285',

  /* ── SEO ── */
  metaTitle: 'SessãoInk — Gestão para Estúdios de Tatuagem',
  metaDescription:
    'O sistema que organiza seu estúdio de tatuagem: agenda, clientes, financeiro com comissões por artista, portfólio, consentimento assinado e portal público por slug.',
  seoCategory: 'BusinessApplication',
  seoFeatureList: [
    'Agenda e gestão de atendimentos',
    'Cadastro de clientes e histórico',
    'Financeiro com comissões por artista',
    'Portfólio e flash arts',
    'Termo de consentimento com assinatura',
    'Portal público por slug',
    'Controle de acesso por função (ADMIN, ARTISTA, RECEPCIONISTA)',
  ],

  /* ── Hero ── */
  badge: 'Feito para estúdios de tatuagem',
  heroTitle: 'O sistema que cuida do seu estúdio enquanto você cuida da arte.',
  heroSubtitle:
    'Agenda, clientes, financeiro com comissão por artista, portfólio, consentimento assinado e uma página pública pra fechar mais sessões. Tudo em um só lugar — feito para tatuadores e estúdios.',
  heroHighlights: [
    'Comissão calculada por artista',
    'Consentimento assinado digital',
    'Página pública por slug',
    'Acesso por função (RBAC)',
  ],
  primaryCta: 'Começar agora',
  secondaryCta: 'Ver planos',

  /* ── Problema ── */
  painsTitle: 'Tatuar é o que você ama. O resto vira bagunça.',
  painsSubtitle:
    'Estúdio cheio de talento, mas agenda no caderno, comissão calculada na mão e cliente sumindo no DM. O SessãoInk acaba com isso.',
  pains: [
    {
      title: 'Agenda no WhatsApp e no caderno',
      description:
        'Horário marcado em três lugares diferentes, encaixe que vira buraco e cliente que esquece a sessão. Você perde tempo confirmando e perde dinheiro com furo na agenda.',
    },
    {
      title: 'Comissão dos artistas calculada no susto',
      description:
        'Toda semana a mesma planilha frágil pra dividir o que é do estúdio e o que é de cada tatuador. Erro de cálculo vira desconfiança e desconfiança quebra time.',
    },
    {
      title: 'Sem ideia de quanto o estúdio realmente fatura',
      description:
        'Entradas, sinais, materiais e repasses todos misturados. No fim do mês você não sabe se cresceu, se está no zero a zero ou se está pagando pra trabalhar.',
    },
    {
      title: 'Consentimento em papel que some',
      description:
        'O termo de consentimento assinado fica numa pasta, numa foto borrada ou se perde de vez. Quando você mais precisa dele, não acha.',
    },
    {
      title: 'Portfólio espalhado e difícil de mostrar',
      description:
        'Flash arts e trabalhos prontos perdidos no rolo da câmera. Na hora de fechar uma sessão, você não tem onde mandar o cliente ver seu trabalho organizado.',
    },
    {
      title: 'Recepção e artistas vendo tudo',
      description:
        'Sem controle de acesso, qualquer pessoa do estúdio enxerga financeiro, dados de cliente e comissão dos outros. Falta privacidade e falta limite.',
    },
  ],

  /* ── Funcionalidades ── */
  featuresTitle: 'Tudo que um estúdio precisa, num sistema só.',
  featuresSubtitle:
    'Cada recurso resolve uma dor real do dia a dia de quem tatua e de quem toca o estúdio — sem inchar a sua rotina com mais ferramenta.',
  features: [
    {
      title: 'Agenda e atendimentos sob controle',
      description:
        'Marque sessões, organize a agenda de cada artista e acompanhe cada atendimento do orçamento à finalização. Acabou o horário marcado em três lugares.',
      highlight: 'Agenda por artista',
    },
    {
      title: 'Financeiro com comissão por artista',
      description:
        'Registre entradas, sinais e repasses e deixe o sistema calcular a comissão de cada tatuador automaticamente. Transparência total entre estúdio e equipe.',
      highlight: 'Comissão automática',
    },
    {
      title: 'Clientes e histórico completo',
      description:
        'Cadastro de cada cliente com histórico de sessões, contatos e preferências. Você sabe quem é, o que já fez e quando trazer de volta.',
      highlight: 'CRM do estúdio',
    },
    {
      title: 'Portfólio e flash arts',
      description:
        'Organize seus trabalhos e flash arts num catálogo bonito e fácil de mostrar. Pronto pra mandar pro cliente e fechar a próxima sessão.',
      highlight: 'Catálogo pronto',
    },
    {
      title: 'Consentimento com assinatura digital',
      description:
        'Gere o termo de consentimento, colete a assinatura e guarde tudo seguro e localizável. Proteção pro estúdio e profissionalismo pro cliente.',
      highlight: 'Documento assinado',
    },
    {
      title: 'Portal público por slug',
      description:
        'Cada estúdio e artista ganha uma página pública no seu próprio endereço (slug), com portfólio e canal de contato. Sua vitrine online sem depender só da rede social.',
      highlight: 'Sua página pública',
    },
    {
      title: 'Controle de acesso por função',
      description:
        'Defina quem é ADMIN, ARTISTA ou RECEPCIONISTA. Cada pessoa vê só o que precisa: recepção cuida de agenda e cliente, artista vê seus atendimentos e comissão, o dono vê tudo.',
      highlight: 'RBAC nativo',
    },
    {
      title: 'Multi-unidade quando você crescer',
      description:
        'Comece solo e cresça pra um estúdio com vários artistas ou para mais de uma unidade, sem trocar de sistema no meio do caminho.',
      highlight: 'Escala com você',
    },
  ],

  /* ── Como funciona ── */
  stepsTitle: 'Do caos à organização em 4 passos.',
  steps: [
    {
      step: '01',
      title: 'Crie sua conta',
      description:
        'Cadastre seu estúdio ou seu perfil de tatuador autônomo em minutos. Sem instalação, direto do navegador.',
    },
    {
      step: '02',
      title: 'Monte sua equipe e suas regras',
      description:
        'Adicione artistas e recepção, defina as funções (RBAC) e configure os percentuais de comissão de cada um.',
    },
    {
      step: '03',
      title: 'Coloque o estúdio pra rodar',
      description:
        'Agende sessões, cadastre clientes, colete o consentimento assinado e publique seu portfólio no portal público.',
    },
    {
      step: '04',
      title: 'Acompanhe e cresça',
      description:
        'Veja o financeiro, as comissões e o movimento do estúdio em tempo real e tome decisões com número na mão.',
    },
  ],

  /* ── Resultados / benefícios ── */
  outcomesTitle: 'O que muda quando o estúdio roda no SessãoInk.',
  outcomes: [
    'Menos furo na agenda e menos horário perdido',
    'Comissão de cada artista calculada sem erro e sem briga',
    'Clareza real de quanto o estúdio fatura no mês',
    'Termo de consentimento sempre assinado e localizável',
    'Portfólio organizado e pronto pra fechar sessão',
    'Página pública profissional no seu próprio endereço',
    'Privacidade garantida com acesso por função',
    'Menos tempo na burocracia, mais tempo tatuando',
  ],

  /* ── Planos ── */
  pricingTitle: 'Um plano pra cada fase do seu estúdio.',
  pricingSubtitle:
    'Comece solo e cresça sem trocar de sistema. Você só sobe de plano quando a sua operação pedir.',
  plans: [
    {
      name: 'Solo',
      price: 'R$ 49',
      period: '/mês',
      description: 'Para o tatuador autônomo que quer profissionalizar a operação.',
      features: [
        '1 artista',
        'Agenda e atendimentos',
        'Clientes e histórico',
        'Financeiro pessoal',
        'Portfólio e flash arts',
        'Consentimento com assinatura',
        'Portal público por slug',
      ],
      ctaLabel: 'Começar Solo',
    },
    {
      name: 'Estúdio',
      price: 'R$ 129',
      period: '/mês',
      description: 'Para o estúdio com equipe que precisa controlar comissão e acesso.',
      features: [
        'Até 5 artistas',
        'Tudo do plano Solo',
        'Comissão automática por artista',
        'Funções ADMIN, ARTISTA e RECEPCIONISTA',
        'Financeiro do estúdio consolidado',
        'Página pública do estúdio',
        'Suporte prioritário',
      ],
      highlighted: true,
      ctaLabel: 'Quero o Estúdio',
    },
    {
      name: 'Multi-unidade',
      price: 'Sob consulta',
      description: 'Para redes e estúdios com mais de uma unidade e equipe grande.',
      features: [
        'Artistas ilimitados',
        'Tudo do plano Estúdio',
        'Várias unidades',
        'Relatórios e permissões avançadas',
        'Onboarding assistido',
        'Suporte dedicado',
      ],
      ctaLabel: 'Falar com o time',
    },
  ],
  pricingNote:
    'Valores ilustrativos para apresentação — os preços finais ainda serão confirmados pelo Vinicius antes do lançamento comercial. Fale com o time para condições atualizadas.',

  /* ── FAQ ── */
  faq: [
    {
      q: 'O SessãoInk serve pra tatuador autônomo ou só pra estúdio?',
      a: 'Para os dois. O plano Solo foi feito pra quem trabalha sozinho e quer profissionalizar a operação, e os planos Estúdio e Multi-unidade atendem equipes e redes com vários artistas.',
    },
    {
      q: 'Como funciona o cálculo de comissão por artista?',
      a: 'Você define o percentual de cada artista e o sistema calcula a comissão automaticamente sobre os atendimentos registrados. Cada tatuador acompanha o que é dele e o estúdio enxerga o consolidado, sem planilha manual.',
    },
    {
      q: 'O termo de consentimento tem validade?',
      a: 'O SessãoInk gera o termo de consentimento, coleta a assinatura digital do cliente e guarda o documento de forma segura e localizável, dando mais proteção e profissionalismo ao estúdio.',
    },
    {
      q: 'O que é o portal público por slug?',
      a: 'É uma página pública no seu próprio endereço (um slug, tipo /seu-estudio) com seu portfólio e canal de contato. Funciona como sua vitrine online, sem depender só da rede social pra mostrar seu trabalho.',
    },
    {
      q: 'Minha recepção vai conseguir ver o financeiro dos artistas?',
      a: 'Não, a menos que você queira. O controle de acesso por função (RBAC) define o que cada pessoa enxerga: recepção cuida de agenda e clientes, o artista vê os próprios atendimentos e comissões e o ADMIN vê tudo.',
    },
    {
      q: 'Preciso instalar alguma coisa?',
      a: 'Não. O SessãoInk roda direto no navegador, no computador ou no celular. Você cria sua conta e já começa a usar.',
    },
    {
      q: 'Consigo migrar de plano conforme o estúdio cresce?',
      a: 'Sim. Você começa no plano que faz sentido hoje e sobe pra Estúdio ou Multi-unidade quando precisar, sem trocar de sistema e sem perder seus dados.',
    },
  ],

  /* ── CTA final ── */
  finalCtaTitle: 'Seu estúdio organizado. Sua arte no centro.',
  finalCtaSubtitle:
    'Deixe a agenda, o financeiro e a papelada com o SessãoInk e foque no que importa: tatuar. Comece agora.',
}
