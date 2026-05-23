# FiscWise Landing Page — Diagnóstico Completo

**Data:** 22 de Maio de 2026  
**Autor:** Análise de Sistema (Frontend + Backend)  
**Status:** 🔴 Crítico — Requer ações imediatas  
**Prioridade:** Alta  

---

## 📋 Resumo Executivo

A landing page do FiscWise (`/fiscwise` no vstack-site) possui **estrutura sólida com 7 seções bem organizadas**, mas apresenta **6 questões críticas** que prejudicam a conversão e credibilidade do produto. A análise identificou problemas de renderização técnica, falta de prova social, contradição de mensagens e desalinhamento com o produto real.

**Score de Conversão Estimado:** 4/10  
**Impacto de Negócio:** Alto — afeta taxa de conversão de leads

---

## ✅ O que está funcionando bem

- ✓ **Estrutura SEO:** Metadata completa, OpenGraph tags, JSON-LD SoftwareApplication schema
- ✓ **Hero Section:** Headline clara, CTA bem posicionado
- ✓ **Copywriting Base:** Mensagem de valor adequada
- ✓ **Design Responsivo:** Layout funciona em mobile/desktop
- ✓ **Seções Lógicas:** Flow intuitivo do visitante (pain → solution → pricing → CTA)

---

## 🔴 Questões Críticas

### 1. **3D Mockup Não Renderiza — BLOCKER CRÍTICO**

**Arquivo:** `src/app/fiscwise/page.tsx` → componente `FiscWise3DMockup.tsx`

**Problema:**
```tsx
// page.tsx — linha ~45
<FiscWise3DMockup /> 

// FiscWise3DMockup.tsx — nunca recebe splineUrl
export function FiscWise3DMockup() {
  const splineUrl = undefined; // ❌ Nunca foi definido
  return <Spline scene={splineUrl} />;
}
```

O componente 3D nunca renderiza porque o prop `splineUrl` não é passado do pai para o filho.

**Impacto:** Dashboard mockup visualmente vazio/quebrado — reduz credibilidade imediatamente.

**Solução:**
- [ ] Obter URL do Spline 3D (já existe em `Spline.com`?)
- [ ] Passar `splineUrl` como prop: `<FiscWise3DMockup splineUrl="https://..." />`
- [ ] Testar renderização em staging

**Tempo estimado:** 30 min  
**Prioridade:** 🔥 IMEDIATA

---

### 2. **Contradição na Mensagem: "Acesso Antecipado" vs. Pricing Fixo**

**Problema:**
- Seção Hero + CTA dizem: *"Acesso antecipado exclusivo"*
- Pricing section mostra: 3 planos com valores fixos (R$499, R$1.299, Enterprise)

**Impacto:** Confunde visitantes — se é "early access", por que tem pricing? Se tem pricing, não é early access.

**Contexto Comercial:**
- Estamos em fase de beta?
- Os preços já estão finalizados?
- Há limite de vagas para early access?

**Solução Recomendada:**

**OPÇÃO A — Se ainda em beta/early access:**
```
Hero: "Junte-se aos primeiros contadores a transformar sua gestão"
CTA: "Solicitar Acesso Antecipado" → form para waitlist
Ocultar: Pricing section ou mostrar "Preço a confirmar"
```

**OPÇÃO B — Se pricing definido:**
```
Hero: "Gestão de clientes inteligente para seu escritório"
CTA: "Começar Teste Gratuito" ou "Ver Planos"
Mostrar: Pricing full, com badge "Lançamento Especial"
```

**Tempo estimado:** 2-4h (depende da decisão comercial)  
**Prioridade:** 🔴 ALTA (afeta positioning)

---

### 3. **Falta de Prova Social — Testimoniais e Logos**

**Problema:** Nenhum visitante pode ver:
- ❌ Testimoniais de contadores reais usando FiscWise
- ❌ Logos/nomes de clientes (mesmo que anonimizados)
- ❌ Números (clientes ativos, tempo economizado, etc.)
- ❌ Logos de integrações bancárias (Open Finance, bancos conectados)

**Impacto:** Muito alto — visitantes não sabem se "funciona de verdade" ou é beta desconhecido.

**Solução:**

**Novo Bloco — "Quem Confia em FiscWise":**
```
[Logo Cliente 1] [Logo Cliente 2] [Logo Cliente 3]
"Escolhido por 50+ escritórios contábeis no Brasil"
```

**Novo Bloco — "Integrações Confirmadas":**
```
[Logo Banco do Brasil] [Logo Caixa] [Logo Bradesco] [Logo Itaú]
"Conectado aos principais bancos via Open Finance"
```

**Seção de Testimoniais:**
```
"Economizei 8 horas por semana com a gestão de clientes"
— Mariana S., Contadora, SP

"Finalmente uma ferramenta feita para quem trabalha com PJ"
— Carlos T., Sócio-gerente, MG
```

**Opções para Prova Social:**
1. **Dados Anônimos:** "50+ clientes", "2.500+ transações processadas", "98% de acurácia"
2. **Case Studies:** 2-3 histórias de contadores (nome, empresa, resultado)
3. **Integração Logos:** Logos dos bancos + badge "Integrado via Open Finance Brasil"

**Tempo estimado:** 1-2 dias (design + copywriting + aprovação)  
**Prioridade:** 🔴 ALTA

---

### 4. **FAQ e Comparação com Concorrentes — Faltam**

**Problema:**
- Nenhuma seção de FAQ específica do FiscWise
- Nenhuma comparação clara com alternativas (ContaAzul, Omie, Contabilizei)
- Visitante não sabe: "O que FiscWise faz que Omie/ContaAzul não faz?"

**Concorrentes Principais:**
- Omie
- Sage
- Contabilizei
- Contaja
- Bluesoft

**Solução:**

**Novo Bloco — FAQ (6-8 perguntas):**
```
P: Posso migrar meus clientes do Omie/ContaAzul para FiscWise?
R: Sim, oferecemos suporte completo na migração...

P: O FiscWise funciona com qual regime tributário?
R: Simples, Lucro Presumido, Lucro Real e MEI...

P: Como funciona a integração com bancos?
R: Via Open Finance Brasil, automático e seguro...

P: Preciso de suporte técnico?
R: Atendimento por chat, email e documentação completa...

P: Há limite de clientes que posso gerenciar?
R: Não há limite, você paga por escritório/usuários...
```

**Novo Bloco — "Por Que Escolher FiscWise?" (Comparação Implícita):**
```
✅ Construído PARA contadores (não genérico)
✅ Sem taxas por transação (modelo preço fixo)
✅ Integração Open Finance nativa
✅ Automação de honorários (cobrança automática)
✅ Dashboard intuitivo (sem curva de aprendizado)
```

**Tempo estimado:** 1-2 dias (pesquisa + redação)  
**Prioridade:** 🟡 MÉDIA-ALTA

---

### 5. **Dashboard Mockup Desalinhado com Produto Real**

**Problema:**
O dashboard exibido pode não refletir a interface real do FiscWise que os clientes vão ver.

**Validação Necessária:**
- [ ] O mockup 3D/screenshot mostra a tela correta?
- [ ] A UI atual no produto é igual ou mudou?
- [ ] Há novos campos/funcionalidades que não aparecem no mockup?

**Solução:**
1. Tirar screenshot real do dashboard do FiscWise
2. Garantir que o mockup na landing page é idêntico ao produto real
3. Atualizar anualmente ou quando houver mudança major de UX

**Tempo estimado:** 1h (screenshot + swap)  
**Prioridade:** 🟡 MÉDIA

---

### 6. **Falta de Video Demo / ROI Calculator**

**Problema:**
Visitante vê slides estáticos, sem ver o produto "em ação".

**Solução (Nice-to-Have):**
- [ ] **Video de 2-3 min:** "Como usar FiscWise para gerenciar clientes PJ" (screencast)
- [ ] **ROI Calculator:** "Quanto tempo você vai economizar?" (input: nº clientes → output: horas/mês economizadas)

**Tempo estimado:** 3-5 dias  
**Prioridade:** 🟢 BAIXA (implementar depois das críticas)

---

## 📊 Matriz de Ações

| # | Ação | Impacto | Complexidade | Tempo | Prioridade | Owner |
|---|------|--------|--------------|-------|-----------|-------|
| 1 | Corrigir 3D Mockup (splineUrl) | 🔴 Crítico | Trivial | 30min | 🔥 NOW | Frontend |
| 2 | Resolver contradição Early Access/Pricing | 🔴 Crítico | Média | 2-4h | 🔥 NOW | PM + Copywriting |
| 3 | Adicionar Testimoniais + Logos | 🔴 Alto | Média | 1-2d | 🔴 SOON | Design + Copywriting |
| 4 | Adicionar FAQ + Comparação | 🟡 Média | Baixa | 1-2d | 🔴 SOON | Copywriting |
| 5 | Validar Dashboard Mockup | 🟡 Média | Trivial | 1h | 🔴 SOON | Frontend |
| 6 | Video Demo + ROI Calculator | 🟢 Baixo | Alta | 3-5d | 🟢 LATER | Design + Dev |

---

## 🎯 Plano de Ação Sugerido

### **Sprint 1 (Esta Semana)**
1. Corrigir splineUrl (BLOCKER)
2. Resolver contradição Early Access/Pricing (requer decisão comercial)
3. Tirar screenshot real do dashboard

### **Sprint 2 (Próxima Semana)**
1. Desenhar + implementar seção de Testimoniais + Logos
2. Escrever + implementar FAQ

### **Sprint 3+ (Futuro)**
1. Video demo
2. ROI calculator
3. Case studies detalhados

---

## 📝 Checklist de Validação Pré-Deploy

- [ ] splineUrl renderiza corretamente (testar em Chrome, Safari, Firefox, Mobile)
- [ ] Mensagem de Early Access vs. Pricing está consistente
- [ ] Testimoniais com fotos reais de clientes
- [ ] Logo de integrações (bancos) aparecem corretamente
- [ ] FAQ carrega sem erros
- [ ] Mobile responsivo em all breakpoints
- [ ] Meta tags e OpenGraph refletem conteúdo atual
- [ ] Analytics eventos estão sendo registrados (CTA cliques)
- [ ] Teste A/B preparado para medir impacto de cada seção

---

## 🔗 Referências Técnicas

**Arquivos do Projeto:**
- `src/app/fiscwise/page.tsx` — Landing page principal
- `src/components/FiscWise3DMockup.tsx` — Componente 3D (quebrado)
- `src/components/FiscWisePricing.tsx` — Seção de preços

**Dependências Relacionadas:**
- Spline (3D library) — versão e import
- Next.js Image optimization — para logos
- Schema.org JSON-LD — já implementado ✓

---

## 👥 Próximas Etapas

1. **Review de Stakeholders:** PM, Design, Copywriting (1h)
2. **Priorização:** Quais ações fazer primeiro? (30min)
3. **Sprint Planning:** Assignar tasks aos devs (1h)
4. **Implementation:** Seguir plano de ação acima
5. **QA + Validação:** Testar landing page completa antes de deploy

---

**Documento preparado para alinhamento da equipe do vstack-site.**  
**Para dúvidas, consulte a análise técnica completa armazenada internamente.**
