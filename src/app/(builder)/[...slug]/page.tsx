import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { BUILDER_API_KEY } from '@/lib/builder'
import BuilderRenderer from '@/components/builder/BuilderRenderer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

async function getBuilderContent(urlPath: string, isDraftMode: boolean) {
  if (!BUILDER_API_KEY) return null

  try {
    // Em Draft Mode, não usar cache para ver alterações em tempo real
    const cacheSeconds = isDraftMode ? 0 : 60
    const includeUnpublished = isDraftMode ? 'true' : 'false'
    
    const res = await fetch(
      `https://cdn.builder.io/api/v3/content/page?apiKey=${BUILDER_API_KEY}&url=${encodeURIComponent(urlPath)}&limit=1&cacheSeconds=${cacheSeconds}&includeUnpublished=${includeUnpublished}`,
      { 
        next: { revalidate: isDraftMode ? 0 : 60 },
        cache: isDraftMode ? 'no-store' : 'default'
      },
    )
    if (!res.ok) return null
    const json = await res.json()
    return json.results?.[0] ?? null
  } catch {
    return null
  }
}

export default async function BuilderPage({ params }: PageProps) {
  const { slug } = await params
  const urlPath = '/' + slug.join('/')
  
  // Verificar se está em Draft Mode
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled

  const content = await getBuilderContent(urlPath, isDraftMode)
  if (!content) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-14">
        <BuilderRenderer content={content} model="page" />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const urlPath = '/' + slug.join('/')
  
  const draft = await draftMode()
  const content = await getBuilderContent(urlPath, draft.isEnabled)

  return {
    title:       content?.data?.title       ?? 'V-STACK SOLUTIONS',
    description: content?.data?.description ?? '',
  }
}
