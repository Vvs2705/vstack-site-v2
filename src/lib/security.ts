import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitiza strings para prevenir XSS
 */
export function sanitizeString(input: string): string {
  return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}

/**
 * Sanitiza objeto recursivamente
 */
export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = sanitizeString(value)
    } else if (Array.isArray(value)) {
      result[key] = value.map(v => typeof v === 'string' ? sanitizeString(v) : v)
    } else {
      result[key] = value
    }
  }
  return result as T
}

/**
 * Extrai IP real do request
 */
export function extractIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0].trim() || '0.0.0.0'
}

/**
 * Valida email com regex rigoroso
 */
export function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return re.test(email) && email.length <= 254
}
