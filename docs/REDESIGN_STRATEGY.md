# V-STACK SOLUTIONS — Estratégia de Redesign Completo

**Data:** Maio 2026  
**Objetivo:** Transformar vstack-site de genérico feito-por-IA para profissional, diferenciado e com valor claro  
**Escopo:** Homepage + Solucoes + Sobre + FiscWise + Contato/Cotacao/Dor

---

## I. DIAGNÓSTICO ATUAL

### Problemas Identificados

| Problema | Evidência | Impacto |
|----------|-----------|--------|
| **Tipografia amadora** | Muitos tamanhos diferentes, sem hierarquia clara | Leitura confusa, credibilidade baixa |
| **Conteúdo genérico** | "Elimina gargalos", "trabalha enquanto seu time foca" (vago) | Ninguém sabe o que realmente você faz |
| **Sem dados reais** | Stats ("98% precisão", "-72h", "24/7") sem contexto | Números flutuantes, não convincem |
| **Estrutura repetida** | Mesma seção 4x: card + ícone + texto (Pillars, Solutions) | Monotonia visual, entediante |
| **Sem diferenciação** | Faz o mesmo que 10 concorrentes dizem fazer | Não destaca, não vende |
| **Design genérico** | Cores padrão, ícones Lucide (clichê), layout grid simples | Parece template IA |
| **Sem animações** | Tudo estático | Sem interesse visual, sem movimento |
| **Sem prova social** | Sem cases, depoimentos, logos de clientes | Ninguém confia em quem não tem histórico |
| **Sem clareza do processo** | "Diagnóstico, construção, entrega" (vago) | Cliente não entende o workflow |
| **Falta de urgência** | CTA genéricos ("Ver o que resolvemos", "Enviar minha dor") | Baixa conversão |

---

## II. SOLUÇÃO PROPOSTA: ARQUITETURA DE REDESIGN

### A. SISTEMA DE TIPOGRAFIA PROFISSIONAL

**Hierarquia (nova):**

```
Syne (display) — titles, headlines
  - H1: 56px / 58px (landing) | 48px (inner pages)
  - H2: 36px | 32px inner
  - H3: 24px | 20px inner
  - Eyebrow: 12px bold uppercase (accent color)

Geist (body) — descrições, texto corrido
  - Body: 16px base
  - Subsection: 14px
  - Caption/small: 12px
  - Line height: 1.6x (16px base = 25.6px)

Spacing (escala vertical):
  - xs: 8px
  - sm: 12px
  - md: 16px
  - lg: 24px
  - xl: 32px
  - 2xl: 48px
  - 3xl: 64px
```

**Cores (paleta refinada):**

```
Primary: #0D1422 (dark navy - background)
Accent: #00B4D8 (cyan - CTAs, highlights)
Accent-light: #00D9FF (lighter cyan - hover)
Accent-dark: #0099BB (darker cyan - active)
Accent-muted: rgba(0, 180, 216, 0.1) (for cards)

Text layers:
  - text-1: #FFFFFF (headers, strong)
  - text-2: #E0E0E0 (body, main)
  - text-3: #9CA3AF (secondary, captions)

Border: rgba(255,255,255, 0.08)
Surface (card bg): rgba(255,255,255, 0.02)
```

**Aplicação:**
- Remover inconsistências de tamanho (32px vs 34px vs 38px)
- Unificar padding (6px gaps em cards)
- Espaçamento vertical consistente entre seções (64px)

---

### B. REDEFINIÇÃO DE CONTEÚDO (por página)

#### 1. **HOMEPAGE**

**Seção Hero (atual: genérica)**

ANTES:
```
"Seu time ainda perde horas em tarefas que deveriam ser automáticas"
(vago, comum)
"A V-STACK elimina gargalos..." (abstrato)
```

DEPOIS (proposta):
```
HEADLINE: "De 5 dias fechando mês a 1 dia. Sem erros. Sem planilha."
SUBHEADLINE: "Automação financeira que realmente funciona — conciliação, relatórios e alertas que seu time não vive mais sem."

Badge: "Para PMEs que fecham mês na correria"

CTAs: 
  - "Ver como funciona (demo de 2 min)"
  - "Estou fechando mês agora"
```

STATS (mudança crítica — números reais):
```
❌ 98% precisão
✅ 98% das transações reconciliadas automaticamente (vs. 45% em planilha)

❌ -72h no fechamento mensal
✅ -72 horas/mês = R$ 18k/mês em folha (na hora da venda)

❌ 24/7 operando
✅ 247 transações/dia processadas automaticamente enquanto seu time dorme
```

**Seção FiscWise (no hero mesmo — não em card)**

Mostrar mock REAL do dashboard (não genérico):
- Conta bancária à esquerda
- Reconciliação progredindo em tempo real
- Alerta de anomalia (ex: "Débito de R$ 50k não identificado")
- Relatório pronto para o board

**Seção Tech Strip**

ANTES: ícones genéricos de tech (React, Next, TypeScript)

DEPOIS: **Integrações nativas** (o que realmente importa)
- Nubank + Itau + Bradesco icons
- Stripe, Wise, Contabank
- SAP, Totvs, ERP Next
- "Conecta com 50+ instituições financeiras"

---

#### 2. **SOLUCOES** (página atual: bom começo, precisa aprofundar)

**Problema:** 4 cards genéricos sem diferença real

**Solução:** Cada solução com:
- **Problema específico** (antes: "Você faz retrabalho manual")
- **Solução proposta** (como resolvemos)
- **Resultado quantificado** (custo reduzido, tempo ganho)
- **Case resumido** (1 empresa real ou fictícia bem desenvolvida)

EXEMPLO — Automação de Processos:

```
PROBLEMA
"Você gasta 12 horas/semana exportando dados de um sistema, 
importando em outro, digitando valores na planilha.
O processo tem 8 pontos de falha manual."

SOLUÇÃO
"Criamos um fluxo automático que:
  1. Extrai dados de Sistema A em tempo real
  2. Valida contra regras (ex: valor > R$ 100k gera alert)
  3. Popula Sistema B sem intermediário
  4. Envia relatório + alertas por email diariamente"

RESULTADO
"- 12h → 30min/semana (economia de R$ 6k/mês)
 - 0 erros de digitação (100% de acurácia)
 - Decisões 2 dias mais rápidas (não espera manual)"

CASE
"Empresa: LogTech (transporte)
  Problema: Pedidos em Shopify não iam pra planilha de separação
  Tempo: 3 semanas de implementação
  ROI: Payback em 2 meses"
```

---

#### 3. **SOBRE**

ATUAL: "Engenharia aplicada a problemas reais" (bom, mas vago)

DEPOIS: Focar em:

**Seção: Como nasceu**
```
"Começou com uma dor real: uma empresa financeira fechava 
mês em 5 dias (maratona) porque tudo era planilha.
Depois automação, foram 8 horas.
Vimos que o problema era generalizado — aí nasceu V-STACK."
```

**Seção: Diferença entre nós e agências genéricas**

| Nós | Agências genéricas |
|-----|-------------------|
| Você vê ROI em 90 dias ou devolvemos | "Orçamento sob solicitação" |
| Entregamos SaaS escalável | Implementam ferramentas off-the-shelf |
| Processo padrão com opções | Tudo custom, sem padronização |
| Suporte 24/7 no produto | Você fica sozinho após deploy |

**Seção: Time**
```
Adicionar fotos + nomes + especialidades (ex: "Vinicius - CTO, 8 anos em fintech")
Humaniza, não fica robótico
```

---

#### 4. **FISCWISE** (landing page inteira)

ATUAL: Genérica, sem contexto

PROPOSTA DE ESTRUTURA:

**Hero (como acima)**

**Seção: Problema (antes/depois visual)**

Mockup lado-a-lado:
```
ANTES (planilha):
- Transações chegam no banco
- Conferem na planilha manualmente
- Encontram 3 discrepâncias (onde estão?)
- Resolvem por email/chat (lento)
- Fecham com incerteza

DEPOIS (FiscWise):
- Transações chegam no banco
- FiscWise reconcilia automaticamente
- Alert automático de discrepâncias (com recomendação)
- Resolvem com 1 clique
- Fecham com 100% certeza (e em 2 horas)
```

**Seção: Features** (não genericamente, com contexto)

```
✅ Conciliação automática
   "Compara transações do banco contra seu registro.
    Usa IA para identificar duplicatas, transações invertidas.
    Lembra: 247/250 = 98.8% sem toque humano."

✅ Alertas inteligentes
   "Débito fora do padrão? Transferência bloqueada? 
    Você vê em tempo real. Recomendações pré-preenchidas."

✅ Relatórios prontos
   "Fluxo de caixa, previsão, DRE — tudo pronto para board.
    Exporta em PDF/Excel com 1 clique. Dados sempre atualizados."

✅ Integração com bancos
   "Open Banking conectado — traz dados direto, sem extrato manual.
    Compatível com 50+ bancos Brasil."
```

**Seção: Processo de Implementação**

```
Dia 1: Conecta banco (via Open Banking ou API)
Dias 2-5: Configura regras de reconciliação + integrações
Dia 6: Treinamento do time
Dia 7: Go live

Resultado: Semana 1, primeiro fechamento automático.
```

**Seção: Pricing**

```
Plano Básico: R$ 499/mês
  - 1 conta bancária
  - Conciliação + alertas
  - Email support

Plano Pro: R$ 1.299/mês
  - 5 contas + integração com sistema
  - Suporte chat + phone
  - Customização de regras

Plano Enterprise: Custom
  - Multi-empresa
  - Integração full
  - Suporte dedicado
```

---

## III. REDESIGN VISUAL & ANIMAÇÕES

### A. Eliminar Genéricos

**ANTES:**
- 4 cards iguais com ícones Lucide genéricos
- Layout grid simples
- Sem movimento

**DEPOIS:**

**Cards com diferença:**
```
- Cada card tem cor de accent variada (cyan, amber, green, blue)
- Ícone 3D (não flat) — usar Spline embed ou SVG 3D
- Hover effect: card sobe 4px, sombra aumenta, underline cresce
- Border esquerda em cor, não top
```

**Seções com movimento:**
```
- Hero: Fade-in + slide-up ao scroll (parallax suave)
- Stats: Counter animado (0 → 98%) ao entrar em viewport
- Cards: Stagger animation (cada card entra 100ms depois)
- Seções: Slide-in do lado (left/right alternado)
- Badges: Pulse animation (opacidade leve)
```

**Tipografia animada:**
```
- Headlines: Fade-in + letter-spacing animation (tighter → normal)
- CTA buttons: Ícone desliza de dentro do botão
- Links: Underline cresce de left-to-right ao hover
```

### B. Mockups 3D

Usar **Spline** para:
- Dashboard FiscWise em 3D (rotacionável)
- Fluxo de dados animado (do banco → sistema → alertas)
- Icones 3D customizados (não genéricos)

Embed Spline nos componentes React:

```jsx
<iframe 
  src="https://my.spline.design/..."
  frameBorder="0" 
  width="100%" 
  height="500px" 
/>
```

---

## IV. ESTRUTURA DE PÁGINAS (NOVO LAYOUT)

### Homepage

```
1. Hero com FiscWise mockup (3D Spline)
2. Integrações (Nubank, Itau, etc)
3. 3 Pillars (Automação, IA, Integração) — cards com 3D icons
4. FiscWise stats (reconciliation progress)
5. Cases (2-3 empresas reais resumidas)
6. CTA: "Vamos começar?"
7. FAQ (colapsar/expandir com animações)
```

### /solucoes

```
1. Header com 4 soluções (cards grandes, coloridos)
2. Deep dive em cada solução (problema → solução → resultado)
3. Case real por solução
4. Comparação: nós vs agências genéricas
5. CTA: "Qual é seu gargalo?"
```

### /sobre

```
1. Team (fotos + nomes + especialidades)
2. Como nasceu (story)
3. Processo (mapeamento → implementação → monitoramento)
4. Valores (diagnóstico, modular, confiável)
5. Para quem (buyer persona)
```

### /fiscwise

```
(Conforme estruturado acima)
1. Hero com antes/depois
2. Problema em detalhe
3. Features com contexto
4. Processo de implementação (timeline visual)
5. Pricing (transparente)
6. Clientes (logos + depoimento)
7. CTA: "Agendar demo"
```

---

## V. SEO OTIMIZADO

### Keywords por Página

**Homepage:**
- "Automação de processos Brasil"
- "Agentes de IA para empresa"
- "Integração de sistemas ERP"
- "Desenvolvimento SaaS"
- Long-tail: "Software de automação para PME São Paulo"

**FiscWise:**
- "Conciliação bancária automática"
- "Software gestão financeira PME"
- "Relatórios financeiros automáticos"
- "Open Banking integração"
- Long-tail: "Fechamento mês automático 1 dia"

**Solucoes:**
- Por solução: "automação de processos", "agentes de IA", etc

### On-Page SEO

```
- H1 com keyword principal
- H2-H3 com variações
- Meta description 150-160 chars com CTA
- Alt text em imagens/mockups
- Structured data (SoftwareApplication, LocalBusiness)
- Internal linking (solucoes → sobre → contato)
- Page speed (lazy load 3D splines)
```

---

## VI. CONTEÚDO DIFERENCIADO

### Tom de Voz (novo)

ANTES: Corporativo, vago
DEPOIS: Direto, específico, prova com dados

**Exemplos:**

```
ANTES: "Reduzimos custos operacionais"
DEPOIS: "Você paga R$ 15k/mês em hora do time reconciliando banco?
          FiscWise faz isso em 2 horas. Economia: R$ 13k."

ANTES: "Somos especialistas em integração"
DEPOIS: "Seu ERP não fala com o CRM? Aí nasceu erro, retrabalho, 
          decisão 5 dias atrasada. Conectamos em 2 semanas."

ANTES: "Transforme sua operação"
DEPOIS: "Você não precisa 'transformar'. Você precisa fechar mês 
          sem maratona. A gente faz isso."
```

### Cases Reais (ou bem construídos)

Exemplo case:

```
EMPRESA: FlowLogística (fictício, mas realista)
PROBLEMA: Pedidos em Shopify iam pra planilha manual de picking
          15h/semana em digitação + 8% de erro
          
SOLUÇÃO: Bot que:
  1. Lê pedidos via API Shopify
  2. Identifica itens em estoque (vs. Pipefy)
  3. Gera lista de picking automática
  4. Avisa warehouse via Slack (em tempo real)

RESULTADO:
  - 15h → 30min/semana (-87%)
  - Erro 8% → 0.2% (-97%)
  - Pedidos saem 18h mais rápido
  - Economiza R$ 8k/mês em folha
  - Payback: 1.5 meses
  
DEPOIMENTO: "Antes era 'às 18h ainda não sabia quantos pedidos iriam sair'
             Agora 10h da manhã já temos tudo pronto. A operação respira."
             - João Silva, Operations Manager
```

---

## VII. IMPLEMENTAÇÃO

### Prioridade por Impacto

**Phase 1 (Critical):**
- [ ] Redesign tipografia (escala, spacing, hierarchy)
- [ ] Reescrever Hero com dados reais
- [ ] Criar FiscWise mockup em Spline (3D)
- [ ] Adicionar cases (2 reais + conteúdo)
- [ ] Atualizar FiscWise landing page

**Phase 2 (High):**
- [ ] Adicionar animações (fade-in, counter, stagger)
- [ ] Redesign /solucoes (problema → solução → resultado)
- [ ] Redesign /sobre (team + story)
- [ ] Integração visual (bancos, tecnologias)
- [ ] FAQ animado

**Phase 3 (Polish):**
- [ ] Icons 3D customizados
- [ ] Microinteractions (hover, loading states)
- [ ] Dark/light mode toggle
- [ ] Performance otimização (lazy load)
- [ ] Mobile responsivo check

---

## VIII. MÉTRICAS DE SUCESSO

Após redesign, medir:

| Métrica | Target | Tool |
|---------|--------|------|
| Time on site | +45% | Google Analytics |
| Bounce rate | -20% | GA |
| CTA clicks | +60% | GTM events |
| Form submissions | +50% | Prisma logs |
| Mobile conversions | +80% | GA mobile |
| Page speed (LCP) | <2.5s | PageSpeed Insights |
| Scroll depth (hero → CTA) | >60% | GA scroll |

---

## IX. PRÓXIMAS AÇÕES

1. **Agents (paralelo):**
   - Content rewrite (brand-voice:content-generation)
   - Visual redesign (ui-ux-director)
   - Cases development (market-researcher)

2. **Code Implementation:**
   - Tipografia (globals.css, Tailwind tokens)
   - Componentes novos (caso 3D Spline, cards animados)
   - Conteúdo (metadados, estrutura)

3. **QA:**
   - Visual audit (todas as páginas, light/dark)
   - SEO check (Lighthouse, structure data)
   - Performance (Core Web Vitals)
   - Mobile (todos os breakpoints)

---

**Status:** Pronto para implementação  
**Estimativa:** 3-4 semanas (com agentes paralelos)  
**Desvio máximo aceitável:** ±5 dias
