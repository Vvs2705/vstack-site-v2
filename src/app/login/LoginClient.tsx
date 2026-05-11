'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

const ERROR_MESSAGES: Record<string, string> = {
  oauth_cancelled: 'Login cancelado. Tente novamente.',
  invalid_state: 'Erro de segurança. Por favor, tente novamente.',
  email_not_verified: 'Seu e-mail Google não está verificado.',
  server_error: 'Ocorreu um erro inesperado. Tente novamente em alguns instantes.',
}

export default function LoginClient() {
  const { isAuthenticated, isLoading, signInWithGoogle } = useAuth()
  const searchParams = useSearchParams()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const errorKey = searchParams.get('error')
  const errorMessage = errorKey ? (ERROR_MESSAGES[errorKey] ?? 'Erro desconhecido.') : null

  // Already authenticated — redirect to orders
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      window.location.replace('/pedidos')
    }
  }, [isAuthenticated, isLoading])

  const handleGoogleSignIn = () => {
    setIsRedirecting(true)
    signInWithGoogle()
  }

  if (isLoading || isAuthenticated || isRedirecting) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className="h-8 w-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin"
            aria-label="Carregando"
          />
          <p className="text-[13px] text-[var(--text-3)]">Carregando…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-10 group">
        <svg
          className="h-9 w-9 transition-transform group-hover:scale-105"
          viewBox="0 0 80 70"
          fill="none"
          aria-hidden="true"
        >
          <polygon points="0,0 20,0 40,40 60,0 80,0 40,70" fill="#2D3748" />
          <polygon points="20,0 40,0 40,40" fill="#3D4B61" />
          <polygon points="40,0 60,0 40,40" fill="#252D3D" />
          <polygon points="34,36 40,48 46,36 40,40" fill="#F07028" />
        </svg>
        <span className="font-display text-[15px] font-bold tracking-[0.07em] text-[var(--text-1)]">
          V-STACK <span className="text-[var(--accent)]">SOLUTIONS</span>
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow-sm)]">
        <div className="text-center mb-8">
          <h1 className="font-display text-xl font-bold text-[var(--text-1)] mb-2">
            Acesse sua conta
          </h1>
          <p className="text-[13px] text-[var(--text-2)] leading-relaxed">
            Acompanhe seus pedidos e projetos em andamento.
          </p>
        </div>

        {/* Error banner */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[13px]"
          >
            {errorMessage}
          </div>
        )}

        {/* Google button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isRedirecting}
          className="w-full flex items-center justify-center gap-3 h-11 px-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-colors text-[13px] font-medium text-[var(--text-1)] disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Entrar com Google"
        >
          {/* Google icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
            />
          </svg>
          Continuar com Google
        </button>

        <p className="mt-6 text-center text-[12px] text-[var(--text-3)] leading-relaxed">
          Ao entrar, você concorda com nossa{' '}
          <Link href="/privacidade" className="text-[var(--accent)] hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="mt-6 text-[13px] text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors"
      >
        ← Voltar ao site
      </Link>
    </div>
  )
}
