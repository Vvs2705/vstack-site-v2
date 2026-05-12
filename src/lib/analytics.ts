import { track } from '@vercel/analytics/server'

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>

export async function trackConversion(name: string, properties?: AnalyticsProperties) {
  try {
    await track(name, properties)
  } catch (error) {
    console.warn('[ANALYTICS TRACK ERROR]', error)
  }
}
