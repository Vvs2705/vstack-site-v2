import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const redirectPath = searchParams.get('redirect') || '/'

  // Desabilitar Draft Mode
  const draft = await draftMode()
  draft.disable()

  // Redirecionar para a página solicitada
  redirect(redirectPath)
}
