const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

/**
 * Escapa HTML para prevenir XSS (os campos entram no HTML dos e-mails).
 * Antes era isomorphic-dompurify: o jsdom dele quebra na Vercel (ERR_REQUIRE_ESM)
 * ao carregar a rota, e todo formulário de lead respondia 500.
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])
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
      result[key] = value.map(v => typeof v === 'string' ?sanitizeString(v) : v)
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

