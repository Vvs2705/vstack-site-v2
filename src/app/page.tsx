import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PainsSection from '@/components/sections/PainsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import { whatsappLink } from '@/lib/contact'

// Ordem do funil: proposta + prova (hero) → problema → o que fazemos →
// produtos → como funciona → diagnóstico → dúvidas → contato.
// Tudo é Server Component, exceto o FAQ (acordeão interativo).
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--bg)] pt-16">
        <HeroSection />
        <PainsSection />
        <ServicesSection />
        <SocialProofSection />
        <ProcessSection />
        <CTASection
          eyebrow="Diagnóstico"
          headline="Conte o problema. Indicamos o caminho."
          description="Descreva onde a operação trava. Dizemos se o melhor caminho é um site, um sistema, uma automação ou outra coisa, e retornamos em até 24 horas úteis, sem compromisso."
          ctaPrimaryLabel="Pedir orçamento no WhatsApp"
          ctaPrimaryHref={whatsappLink('DIAGNÓSTICO')}
          ctaSecondaryLabel="Descrever meu problema"
          ctaSecondaryHref="/envie-sua-dor"
        />
        <FAQSection limit={6} showFilter={false} />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
