'use client'

import { Builder } from '@builder.io/react'
import HeroSection from '@/components/sections/HeroSection'
import TechStripSection from '@/components/sections/TechStripSection'
import PillarsSection from '@/components/sections/PillarsSection'
import ContaFlowSection from '@/components/sections/ContaFlowSection'
import CTASection from '@/components/sections/CTASection'

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  inputs: [
    { name: 'badge',             type: 'string', defaultValue: 'ContaFlow · Em breve' },
    { name: 'headline',          type: 'string', defaultValue: 'Sistemas que trabalham' },
    { name: 'headlineAccent',    type: 'string', defaultValue: 'cresce.' },
    { name: 'subtext',           type: 'longText', defaultValue: 'A V-STACK SOLUTIONS desenvolve automações inteligentes, APIs enterprise e produtos SaaS.' },
    { name: 'ctaPrimaryLabel',   type: 'string', defaultValue: 'Conheça o ContaFlow' },
    { name: 'ctaPrimaryHref',    type: 'string', defaultValue: '/cotacao' },
    { name: 'ctaSecondaryLabel', type: 'string', defaultValue: 'Fale com um especialista' },
    { name: 'ctaSecondaryHref',  type: 'string', defaultValue: '/contato' },
  ],
})

Builder.registerComponent(TechStripSection, {
  name: 'Tech Strip',
  inputs: [
    { name: 'label', type: 'string', defaultValue: 'Stack' },
    { name: 'tags',  type: 'string', defaultValue: 'Python / FastAPI,Next.js,PostgreSQL,AWS / GCP,LLMs & Agentes,Open Banking', helperText: 'Itens separados por vírgula' },
  ],
})

Builder.registerComponent(PillarsSection, {
  name: 'Pillars Section',
  inputs: [
    { name: 'sectionLabel', type: 'string', defaultValue: 'O que fazemos' },
    { name: 'headline',     type: 'string', defaultValue: 'Tecnologia aplicada a resultados reais' },
    {
      name: 'pillars',
      type: 'list',
      defaultValue: [
        { icon: '⚡', title: 'Automação de processos', description: 'Eliminamos trabalho repetitivo com fluxos inteligentes.' },
        { icon: '🤖', title: 'Inteligência artificial', description: 'Agentes autônomos e LLMs aplicados a problemas reais.' },
        { icon: '🔗', title: 'Integrações enterprise', description: 'Conectamos ERPs, APIs financeiras e plataformas.' },
        { icon: '📦', title: 'Produtos SaaS', description: 'Desenvolvemos produtos digitais do zero ao PMF.' },
      ],
      subFields: [
        { name: 'icon',        type: 'string' },
        { name: 'title',       type: 'string' },
        { name: 'description', type: 'string' },
      ],
    },
  ],
})

Builder.registerComponent(ContaFlowSection, {
  name: 'ContaFlow Section',
  inputs: [
    { name: 'eyebrow',     type: 'string',   defaultValue: 'ContaFlow' },
    { name: 'badge',       type: 'string',   defaultValue: 'ACESSO ANTECIPADO' },
    { name: 'headline',    type: 'string',   defaultValue: 'Automação financeira que fecha o mês no prazo' },
    { name: 'description', type: 'longText', defaultValue: 'Chega de planilhas manuais e conciliações que levam dias.' },
    { name: 'features',    type: 'string',   defaultValue: 'Conciliação bancária automática,Integração com Open Banking BR,Relatórios e dashboards em tempo real,Alertas inteligentes e anomalias', helperText: 'Itens separados por vírgula' },
  ],
})

Builder.registerComponent(CTASection, {
  name: 'CTA Section',
  inputs: [
    { name: 'headline',          type: 'string', defaultValue: 'Pronto para transformar seu negócio?' },
    { name: 'description',       type: 'string', defaultValue: 'Conte-nos sobre seus desafios e descubra como podemos ajudar.' },
    { name: 'ctaPrimaryLabel',   type: 'string', defaultValue: 'Solicitar Cotação Gratuita' },
    { name: 'ctaPrimaryHref',    type: 'string', defaultValue: '/cotacao' },
    { name: 'ctaSecondaryLabel', type: 'string', defaultValue: 'Envie Sua Dor' },
    { name: 'ctaSecondaryHref',  type: 'string', defaultValue: '/envie-sua-dor' },
  ],
})
