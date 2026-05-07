const PT_BR = 'pt-BR'

export function formatCurrency(value: number, currency = 'BRL'): string {
  return new Intl.NumberFormat(PT_BR, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value)
}

export function formatDate(isoString: string): string {
  return new Intl.DateTimeFormat(PT_BR, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(isoString))
}

export function formatDateTime(isoString: string): string {
  if (!isoString) return ''
  return new Intl.DateTimeFormat(PT_BR, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(isoString))
}
