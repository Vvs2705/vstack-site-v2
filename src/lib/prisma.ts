import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ?['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/**
 * Banco fora do ar não pode derrubar a captação de lead: loga e devolve null.
 * A rota segue, e o e-mail interno leva os dados completos.
 */
export async function tryDb<T>(tag: string, op: PromiseLike<T>): Promise<T | null> {
  try {
    return await op
  } catch (error) {
    console.error(`[DB ${tag}]`, error instanceof Error ? error.message : error)
    return null
  }
}
