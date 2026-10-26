import { Code2, Gamepad2, Globe, Workflow } from 'lucide-react'
import type { WhatsAppTopic } from '@/lib/contact'

/**
 * As 4 frentes que a V-STACK vende. Fonte única para home, menu e rodapé.
 * Textos sem números de resultado: só voltam com cliente real e dados conferidos.
 */
export interface Service {
  id: 'sites' | 'sistemas' | 'automacao' | 'jogos'
  icon: typeof Globe
  title: string
  /** Rótulo curto para menu */
  navLabel: string
  /** Para quem / qual dor, em uma frase */
  pain: string
  /** O que o cliente ganha, em uma frase */
  promise: string
  bullets: string[]
  href: string
  whatsappTopic: WhatsAppTopic
}

export const SERVICES: Service[] = [
  {
    id: 'sites',
    icon: Globe,
    title: 'Sites e landing pages',
    navLabel: 'Sites',
    pain: 'O cliente procura no Google e encontra o concorrente.',
    promise: 'Um site rápido, que aparece nas buscas e leva o visitante direto para o seu WhatsApp.',
    bullets: ['Site institucional ou página de vendas', 'Otimizado para Google e celular', 'WhatsApp, formulário e medição de visitas'],
    href: '/criacao-de-sites',
    whatsappTopic: 'SITE',
  },
  {
    id: 'sistemas',
    icon: Code2,
    title: 'Sistemas sob medida',
    navLabel: 'Sistemas',
    pain: 'A empresa roda em planilhas soltas e ninguém sabe qual é a certa.',
    promise: 'Um sistema feito para o seu processo, com os dados num lugar só e acesso de qualquer lugar.',
    bullets: ['Painéis, cadastros, agenda e financeiro', 'Portal para clientes ou equipe', 'Código e dados sob seu controle'],
    href: '/sistemas-sob-medida',
    whatsappTopic: 'SISTEMA',
  },
  {
    id: 'automacao',
    icon: Workflow,
    title: 'Automação e IA',
    navLabel: 'Automação e IA',
    pain: 'Seu time copia dados entre sistemas e responde a mesma pergunta o dia todo.',
    promise: 'Tarefas repetidas rodando sozinhas e atendimento que responde com contexto, sem perder o toque humano.',
    bullets: ['Integração entre sistemas, bancos e planilhas', 'Atendimento com IA no WhatsApp e no site', 'Alertas e relatórios automáticos'],
    href: '/automacao-de-processos',
    whatsappTopic: 'AUTOMAÇÃO',
  },
  {
    id: 'jogos',
    icon: Gamepad2,
    title: 'Jogos e experiências interativas',
    navLabel: 'Jogos',
    pain: 'Sua marca precisa chamar atenção num evento, campanha ou treinamento.',
    promise: 'Um jogo sob medida que engaja o público e transmite a sua mensagem de um jeito que ninguém esquece.',
    bullets: ['Jogos de navegador e celular', 'Ações de marca, eventos e ativações', 'Treinamento e onboarding gamificados'],
    href: '/jogos',
    whatsappTopic: 'JOGO',
  },
]
