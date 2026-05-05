import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import CookieBanner from '@/components/CookieBanner'
import HeroSection from '@/components/sections/HeroSection'
import TechStripSection from '@/components/sections/TechStripSection'
import PillarsSection from '@/components/sections/PillarsSection'
import ContaFlowSection from '@/components/sections/ContaFlowSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-14">
        {/* Accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent" />

        <HeroSection />
        <TechStripSection />
        <PillarsSection />
        <ContaFlowSection />
        <CTASection />
      </main>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
