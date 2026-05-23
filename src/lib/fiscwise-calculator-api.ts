/**
 * Client-side helpers para os endpoints da Calculadora Fiscal (FiscWise backend).
 * Todas as chamadas passam pelo proxy Next.js em /api/fiscwise/calculator/*
 * para não expor a URL do backend no bundle do cliente.
 */

import type {
  SimulateRegimeRequest,
  SimulateRegimeResponse,
  SimulateIcmsRequest,
  SimulateIcmsResponse,
  ChatRequest,
  ChatResponse,
  SimulationsResponse,
} from '@/lib/types/calculator'

const PROXY_BASE = '/api/fiscwise/calculator'

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${PROXY_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Erro desconhecido' }))
    throw new Error((err as { error?: string }).error ?? `HTTP ${res.status}`)
  }
  return res.json() as Promise<T>
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${PROXY_BASE}${path}`, {
    credentials: 'include',
    cache: 'no-store',
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Erro desconhecido' }))
    throw new Error((err as { error?: string }).error ?? `HTTP ${res.status}`)
  }
  return res.json() as Promise<T>
}

export async function simulateRegime(
  data: SimulateRegimeRequest
): Promise<SimulateRegimeResponse> {
  return post<SimulateRegimeResponse>('/simulate-regime', data)
}

export async function simulateIcms(
  data: SimulateIcmsRequest
): Promise<SimulateIcmsResponse> {
  return post<SimulateIcmsResponse>('/simulate-icms', data)
}

export async function sendFiscalChat(
  data: ChatRequest
): Promise<ChatResponse> {
  return post<ChatResponse>('/chat', data)
}

export async function getSimulations(): Promise<SimulationsResponse> {
  return get<SimulationsResponse>('/simulations')
}
