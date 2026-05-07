export interface AuthUser {
  id: string
  name: string
  email: string
  image: string | null
  provider: 'google'
}

export interface AuthState {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
}

export interface GoogleOAuthPayload {
  sub: string
  name: string
  email: string
  picture: string
  email_verified: boolean
}

export interface SessionToken {
  userId: string
  email: string
  name: string
  image: string | null
  iat: number
  exp: number
}
