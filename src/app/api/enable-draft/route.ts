import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const redirectPath = searchParams.get('redirect') || '/'

  // Validar o secret
  if (secret !== process.env.BUILDER_PREVIEW_SECRET) {
    return new Response('Token inválido', { status: 401 })
  }

  // Habilitar Draft Mode
  const draft = await draftMode()
  draft.enable()

  // Redirecionar para a página solicitada
  redirect(redirectPath)
}
