import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import type { SessionToken, AuthUser } from '@/lib/types/auth'

/**
 * Reads the current authenticated user from the session cookie.
 * Returns null if not authenticated or token is invalid.
 * For use in Server Components and Route Handlers only.
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('vstack_session')?.value

  if (!token) return null

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)
    const session = payload as unknown as SessionToken

    return {
      id: session.userId,
      name: session.name,
      email: session.email,
      image: session.image,
      provider: 'google',
    }
  } catch {
    return null
  }
}
