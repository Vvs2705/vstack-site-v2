import { notFound } from 'next/navigation'
import { BUILDER_API_KEY } from '@/lib/builder'
import BuilderRenderer from '@/components/builder/BuilderRenderer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

async function getBuilderContent(urlPath: string) {
  if (!BUILDER_API_KEY) return null

  try {
    const res = await fetch(
      `https://cdn.builder.io/api/v3/content/page?apiKey=${BUILDER_API_KEY}&url=${encodeURIComponent(urlPath)}&limit=1&cacheSeconds=60`,
      { next: { revalidate: 60 } },
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

  const content = await getBuilderContent(urlPath)
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
  const content = await getBuilderContent(urlPath)

  return {
    title:       content?.data?.title       ?? 'V-STACK SOLUTIONS',
    description: content?.data?.description ?? '',
  }
}
