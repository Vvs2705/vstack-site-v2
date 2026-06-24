import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TechStripSection from '@/components/sections/TechStripSection'

// Lazy-load sections below the fold to improve initial LCP
const PillarsSection = dynamic(() => import('@/components/sections/PillarsSection'), {
  loading: () => <SectionSkeleton />,
})
const IntegrationsSection = dynamic(() => import('@/components/sections/IntegrationsSection'), {
  loading: () => <SectionSkeleton />,
})
const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection'), {
  loading: () => <SectionSkeleton />,
})
const FiscWiseSection = dynamic(() => import('@/components/sections/FiscWiseSection'))
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        {/* Accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />

        <HeroSection />
        <TechStripSection />
        <PillarsSection />
        <IntegrationsSection />
        <SocialProofSection />
        <FiscWiseSection />
        <FAQSection limit={6} showFilter={false} />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
