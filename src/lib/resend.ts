import { Resend } from 'resend'

let resendInstance: Resend | undefined

export const resend = new Proxy({} as Resend, {
  get: (_target, prop) => {
    if (!resendInstance) {
      resendInstance = new Resend(process.env.RESEND_API_KEY!)
    }
    return Reflect.get(resendInstance, prop, resendInstance)
  },
})
