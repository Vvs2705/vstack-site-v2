import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { prisma } from '@/lib/prisma'
import type { GoogleOAuthPayload } from '@/lib/types/auth'

const COOKIE_NAME = 'vstack_session'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  if (error || !code || !state) {
    return NextResponse.redirect(`${siteUrl}/login?error=oauth_cancelled`)
  }

  // CSRF: validate state cookie
  const storedState = request.cookies.get('oauth_state')?.value
  if (!storedState || storedState !== state) {
    return NextResponse.redirect(`${siteUrl}/login?error=invalid_state`)
  }

  let returnTo = '/pedidos'
  try {
    const parsed = JSON.parse(Buffer.from(state, 'base64url').toString())
    if (typeof parsed.returnTo === 'string' && parsed.returnTo.startsWith('/')) {
      returnTo = parsed.returnTo
    }
  } catch {
    // use default
  }

  try {
    // Exchange code for tokens
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: `${siteUrl}/api/auth/google/callback`,
        grant_type: 'authorization_code',
      }),
    })

    if (!tokenRes.ok) {
      throw new Error(`Token exchange failed: ${tokenRes.status}`)
    }

    const tokens = (await tokenRes.json()) as { id_token: string; access_token: string }

    // Fetch user info from Google
    const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    })

    if (!userInfoRes.ok) {
      throw new Error('Failed to fetch user info')
    }

    const googleUser = (await userInfoRes.json()) as GoogleOAuthPayload

    if (!googleUser.email_verified) {
      return NextResponse.redirect(`${siteUrl}/login?error=email_not_verified`)
    }

    // Upsert user in database
    const user = await prisma.user.upsert({
      where: { googleId: googleUser.sub },
      create: {
        googleId: googleUser.sub,
        name: googleUser.name,
        email: googleUser.email,
        image: googleUser.picture ?? null,
      },
      update: {
        name: googleUser.name,
        image: googleUser.picture ?? null,
      },
    })

    // Create JWT session
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const sessionToken = await new SignJWT({
      userId: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret)

    const response = NextResponse.redirect(`${siteUrl}${returnTo}`)

    response.cookies.set(COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    })

    // Clear CSRF cookie
    response.cookies.delete('oauth_state')

    return response
  } catch (err) {
    console.error('[OAuth callback error]', err)
    return NextResponse.redirect(`${siteUrl}/login?error=server_error`)
  }
}
