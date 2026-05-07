'use client'

import { useState, useEffect, useCallback } from 'react'
import type { AuthUser, AuthState } from '@/lib/types/auth'

const STORAGE_KEY = 'vstack_auth_user'
const SESSION_KEY = 'vstack_auth_session'

function readStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

function writeStoredUser(user: AuthUser | null): void {
  if (typeof window === 'undefined') return
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(SESSION_KEY)
  }
}

export function useAuth(): AuthState & {
  signInWithGoogle: () => void
  signOut: () => Promise<void>
  refreshUser: () => Promise<void>
} {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = readStoredUser()
    if (stored) {
      // Validate session is still alive server-side
      fetch('/api/auth/session', { credentials: 'include' })
        .then((res) => {
          if (res.ok) return res.json()
          return null
        })
        .then((data: { user: AuthUser } | null) => {
          if (data?.user) {
            setUser(data.user)
            writeStoredUser(data.user)
          } else {
            setUser(null)
            writeStoredUser(null)
          }
        })
        .catch(() => {
          // Offline fallback: trust localStorage
          setUser(stored)
        })
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [])

  const signInWithGoogle = useCallback(() => {
    const returnTo = encodeURIComponent(window.location.pathname)
    window.location.href = `/api/auth/google?returnTo=${returnTo}`
  }, [])

  const signOut = useCallback(async () => {
    try {
      await fetch('/api/auth/signout', {
        method: 'POST',
        credentials: 'include',
      })
    } finally {
      setUser(null)
      writeStoredUser(null)
      window.location.href = '/'
    }
  }, [])

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/session', { credentials: 'include' })
      if (res.ok) {
        const data = (await res.json()) as { user: AuthUser }
        setUser(data.user)
        writeStoredUser(data.user)
      }
    } catch {
      // silent
    }
  }, [])

  return {
    user,
    isLoading,
    isAuthenticated: user !== null,
    signInWithGoogle,
    signOut,
    refreshUser,
  }
}
