// Canal de contato principal. As palavras-chave batem com as das artes da
// campanha (SITE, SISTEMA, AUTOMAÇÃO, JOGO, DIAGNÓSTICO) para identificar a origem.
export const WHATSAPP_NUMBER = '5511973358775'
export const WHATSAPP_DISPLAY = '(11) 97335-8775'

export type WhatsAppTopic = 'SITE' | 'SISTEMA' | 'AUTOMAÇÃO' | 'JOGO' | 'DIAGNÓSTICO'

export function whatsappLink(topic: WhatsAppTopic = 'DIAGNÓSTICO') {
  const text = `Olá, V-STACK! Vim pelo site. ${topic}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
