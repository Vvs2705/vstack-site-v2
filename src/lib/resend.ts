import { Resend, type CreateEmailOptions } from 'resend'

let resendInstance: Resend | undefined

export const resend = new Proxy({} as Resend, {
  get: (_target, prop) => {
    if (!resendInstance) {
      resendInstance = new Resend(process.env.RESEND_API_KEY!)
    }
    return Reflect.get(resendInstance, prop, resendInstance)
  },
})

const redactEmails = (text: string) => text.replace(/\S+@\S+/g, '[email]')

/**
 * Envia e-mail sem derrubar a rota: o lead já foi salvo no banco antes,
 * então falha do Resend (que devolve `{ error }` em vez de lançar) só gera log.
 * O log leva só o código e a mensagem do Resend, com e-mails mascarados (sem PII).
 */
export async function sendEmail(tag: string, payload: CreateEmailOptions): Promise<boolean> {
  try {
    const { error } = await resend.emails.send(payload)
    if (!error) return true
    console.error(`[RESEND ${tag}]`, error.name, redactEmails(error.message))
  } catch (error) {
    console.error(`[RESEND ${tag}]`, error instanceof Error ? redactEmails(error.message) : 'erro desconhecido')
  }
  return false
}
