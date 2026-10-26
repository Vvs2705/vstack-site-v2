import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'

// Lazy-load sections below the fold to improve initial LCP
const PainsSection = dynamic(() => import('@/components/sections/PainsSection'), {
  loading: () => <SectionSkeleton />,
})
const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection'), {
  loading: () => <SectionSkeleton />,
})
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'))
const IntegrationsSection = dynamic(() => import('@/components/sections/IntegrationsSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const CTASection = dynamic(() => import('@/components/sections/CTASection'))

function SectionSkeleton() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="h-8 w-48 rounded-lg bg-[var(--border)] animate-pulse mb-6" />
        <div className="h-4 w-full max-w-lg rounded bg-[var(--border)] animate-pulse mb-3" />
        <div className="h-4 w-full max-w-md rounded bg-[var(--border)] animate-pulse" />
      </div>
    </div>
  )
}

// Ordem: o que fazemos (hero) → dores que o visitante reconhece → prova →
// como funciona → integrações → dúvidas → chamada final.
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <HeroSection />
        <PainsSection />
        <SocialProofSection />
        <ProcessSection />
        <IntegrationsSection />
        <FAQSection limit={6} showFilter={false} />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
