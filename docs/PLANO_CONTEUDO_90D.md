# Plano de Conteúdo 90 Dias — Blog `/conteudos`

**Autor:** Agente Growth Marketing · **Data:** 2026-06-27
**Base estratégica:** `analise-comercial-produtos/` (07 Roadmap 90d, 09 Estratégia SEO Geral, 10 Plano de Campanhas, 02 Análise Marketing/SEO do site)
**Onde os artigos vivem:** `src/lib/articles.ts` → renderizados em `/conteudos` e `/conteudos/[slug]`

---

## 1. Objetivo e estratégia

O blog `/conteudos` é um **growth loop de conteúdo (SEO compounding)**: cada artigo captura intenção de busca de fundo/meio de funil e **linka para a landing de produto ou serviço** correspondente, transferindo autoridade e tráfego qualificado para as páginas de conversão.

**Metas (SEO Geral, 90 dias):** 30+ páginas indexadas · 10.000+ impressões no Search Console · 300+ cliques orgânicos · 20+ leads orgânicos · **24 artigos publicados** no total.

**Princípio de organização:** por **intenção de busca**, agrupada em **clusters por produto/serviço** (topical authority). Cada cluster tem uma **página pilar** (a landing do produto, que já existe) e artigos-satélite que linkam de volta para ela.

> **Honestidade de produto (não prometer o que não existe):**
> - **ERP-V:** posicionar como **motor de cálculo/parsing fiscal**. NÃO prometer "emite NFe/NFSe", "PIX integrado" ou "Open Finance" — emissão é delegada a provedor e NFSe está ausente.
> - **Madeireira/paletes:** tema de **conteúdo de intenção de busca**, NÃO uma vertical de produto. Não existe rota/produto "Strema". Não prometer "cotação sob medida em minutos".
> - **Prova social:** nunca inventar números/casos.

---

## 2. Diagnóstico do que já existe (6 artigos — NÃO duplicar)

Os 6 artigos publicados estão **todos** nos clusters de Automação / IA / Estratégia. **Nenhum** cluster de produto vertical (FiscWise, SessãoInk, Fretamento, ERP) tem artigo ainda — essa é a maior lacuna e a prioridade do plano.

| # | Slug | Cluster atual | Linka hoje para |
|---|------|---------------|-----------------|
| 1 | `quando-vale-automatizar-um-processo` | Automação | `/automacao-de-processos`, `/cotacao` |
| 2 | `automacao-integracao-ou-sistema-sob-medida` | Estratégia | `/integracao-de-sistemas`, `/sistemas-sob-medida` |
| 3 | `agentes-de-ia-para-empresas` | IA | `/agentes-de-ia`, `/envie-sua-dor` |
| 4 | `como-escolher-uma-software-house-em-2026` | Estratégia | `/sistemas-sob-medida`, `/cotacao` |
| 5 | `agente-de-ia-aplicado-quando-faz-sentido` | IA | `/agentes-de-ia`, `/envie-sua-dor` |
| 6 | `automacao-de-processos-por-onde-comecar` | Automação | `/automacao-de-processos`, `/cotacao` |

**Conclusão:** a base de Automação/IA está coberta. O plano dos 90 dias foca em **abrir os 4 clusters de produto** (FiscWise, SessãoInk, Fretamento, ERP-V), reforçar Automação/IA com 1–2 peças de meio de funil e tratar madeireira/paletes como conteúdo de captura (sem produto).

---

## 3. Clusters e mapa de linkagem interna

Cada cluster aponta para sua **página pilar** (landing já existente). Regra de ouro: **todo artigo linka para ≥1 landing de produto/serviço** (link de conversão) e, quando útil, para 1 artigo irmão do mesmo cluster (reforço de cluster).

### Cluster A — FiscWise (contadores) → pilar `/fiscwise`
Intenção: dono de escritório contábil saindo de planilha/WhatsApp. Fundo de funil B2B, maior ticket → **prioridade nº 1**.

### Cluster B — SessãoInk (tatuadores) → pilar `/sessaoink`
Intenção: tatuador autônomo/estúdio. Baixo ticket, volume, viralidade → tração rápida.

### Cluster C — Fretamento Pro (frota) → pilar `/fretamento-pro`
Intenção: gestor operacional de empresa de fretamento. Piloto consultivo.

### Cluster D — ERP-V (motor fiscal) → pilar `/erp-v`
Intenção: CTO/dev/software house. Conteúdo técnico, autoridade. **Sem prometer emissão fiscal.**

### Cluster E — Automação & IA (transversal) → pilares `/automacao-de-processos`, `/agentes-de-ia`, `/sistemas-sob-medida`, `/integracao-de-sistemas`
Já tem 6 artigos. Reforço pontual + interligação com clusters de produto.

### Cluster F — Intenção de busca sem produto (madeireira/paletes/fiscal) → linka para serviço genérico `/sistemas-sob-medida` ou `/erp-v`
Captura busca, **não** cria vertical de produto.

---

## 4. Cadência (realista para operação enxuta)

**2 artigos por semana** durante 12 semanas = **24 artigos novos** + 6 existentes = **30 peças** (bate a meta de 30+ páginas indexadas).

- Frente de fundo de funil (cluster de produto) na 1ª publicação da semana.
- Frente de meio de funil / educacional na 2ª publicação.
- Revisar `updatedAt` dos 6 artigos existentes ao menos 1x no trimestre (sinal de frescor).

> Se a operação não sustentar 2/semana, o piso aceitável é **1/semana** priorizando o **Cluster A (FiscWise)** integralmente antes de avançar — é o de maior ticket.

---

## 5. Calendário editorial (12 semanas / 24 pautas)

Formato de cada pauta: **Título · intenção de busca · palavra-chave alvo · cluster · linka para**.

### Mês 1 — Abrir FiscWise e SessãoInk (tração nos dois produtos prioritários)

**Semana 1**
1. **Sistema para escritório contábil: o que é e quando vale a pena** · informacional/comercial · `sistema para escritório contábil` · FiscWise → **/fiscwise**
2. **Sistema para tatuador: como organizar agenda, clientes e portfólio** · comercial · `sistema para tatuador` · SessãoInk → **/sessaoink**

**Semana 2**
3. **Controle de certificados digitais dos clientes: como não perder prazo** · informacional · `controle de certificados digitais` · FiscWise → **/fiscwise**
4. **Agenda online para tatuador: como reduzir o no-show** · informacional · `agenda para tatuador` · SessãoInk → **/sessaoink**

**Semana 3**
5. **Automação fiscal para contadores: por onde começar** · comercial · `automação fiscal para contadores` · FiscWise → **/fiscwise** (+ irmão: artigo 3)
6. **Como cobrar sinal de tatuagem sem perder cliente** · informacional · `como cobrar sinal tatuagem` · SessãoInk → **/sessaoink**

**Semana 4**
7. **Planilha vs sistema contábil: quando a planilha vira risco** · comercial/comparativo · `planilha vs sistema contábil` · FiscWise → **/fiscwise**
8. **Como organizar flash arts e portfólio em um link profissional** · informacional · `portfólio online tatuador` · SessãoInk → **/sessaoink**

### Mês 2 — Abrir Fretamento Pro e ERP-V + reforçar produtos

**Semana 5**
9. **Sistema para fretamento: como sair das planilhas e do WhatsApp** · comercial · `sistema para fretamento` · Fretamento → **/fretamento-pro**
10. **ERP sob medida vs ERP pronto: como decidir** · comercial/comparativo · `erp sob medida vs erp pronto` · ERP-V → **/erp-v**

**Semana 6**
11. **Controle de documentos de frota: o que monitorar para não tomar multa** · informacional · `controle de documentos de frota` · Fretamento → **/fretamento-pro**
12. **O que é um motor de cálculo fiscal (fiscal engine)** · informacional/técnico · `motor de cálculo fiscal` · ERP-V → **/erp-v** *(não prometer emissão NFe/NFSe)*

**Semana 7**
13. **Gestão de motoristas e escala: como reduzir erros na operação** · informacional · `gestão de motoristas fretamento` · Fretamento → **/fretamento-pro**
14. **Como lidar com a complexidade tributária brasileira no seu SaaS** · técnico/comercial · `complexidade tributária SaaS` · ERP-V → **/erp-v**

**Semana 8**
15. **Portal do cliente contábil: por que centralizar documentos e prazos** · comercial · `portal do cliente contábil` · FiscWise → **/fiscwise**
16. **Controle de viagens e passageiros: indicadores para transporte corporativo** · informacional · `sistema transporte corporativo` · Fretamento → **/fretamento-pro**

### Mês 3 — Aprofundar clusters, meio de funil e captura de intenção

**Semana 9**
17. **Como organizar obrigações fiscais e nunca atrasar uma guia** · informacional · `controle de obrigações fiscais` · FiscWise → **/fiscwise**
18. **Como transformar o Instagram do estúdio em agenda de tatuagem** · informacional · `instagram para tatuador agenda` · SessãoInk → **/sessaoink**

**Semana 10**
19. **Contrato digital para tatuagem: o que precisa ter** · informacional · `contrato para tatuagem` · SessãoInk → **/sessaoink**
20. **Dashboards de gestão: quais indicadores realmente importam** · comercial · `dashboards de gestão` · ERP-V → **/erp-v** (+ serviço: **/solucoes** dashboards/BI)

**Semana 11**
21. **Sistema para madeireira: como responder orçamentos mais rápido** · informacional/captura · `sistema para madeireira` · Cluster F → **/sistemas-sob-medida** *(tema de captura, sem produto "Strema")*
22. **Integração de áreas operacionais: quando os sistemas precisam conversar** · comercial · `integração de sistemas empresa` · ERP-V/Automação → **/integracao-de-sistemas** (+ **/erp-v**)

**Semana 12**
23. **Como reduzir retrabalho no escritório contábil** · informacional · `reduzir retrabalho escritório contábil` · FiscWise → **/fiscwise** (+ irmão: artigo 5, automação)
24. **Quando vale um sistema personalizado para a sua operação** · comercial · `quando vale sistema personalizado` · ERP-V/Estratégia → **/erp-v** (+ **/sistemas-sob-medida**)

---

## 6. Distribuição por cluster (incluindo os 6 existentes)

| Cluster | Novos (90d) | Existentes | Total | Pilar / link de conversão |
|---------|:-----------:|:----------:|:-----:|---------------------------|
| A — FiscWise | 6 | 0 | 6 | `/fiscwise` |
| B — SessãoInk | 5 | 0 | 5 | `/sessaoink` |
| C — Fretamento Pro | 4 | 0 | 4 | `/fretamento-pro` |
| D — ERP-V | 5 | 0 | 5 | `/erp-v` |
| E — Automação & IA | 2 | 6 | 8 | `/automacao-de-processos`, `/agentes-de-ia`, `/sistemas-sob-medida`, `/integracao-de-sistemas` |
| F — Captura (madeireira) | 1 | 0 | 1 | `/sistemas-sob-medida` |
| em E (#22 conta em ERP+Integração) | (cross) | — | — | — |
| **Total** | **24** | **6** | **30** | — |

> Nota: o artigo #20 e #22 fazem cross-link com serviços (`/solucoes`, `/integracao-de-sistemas`) além do produto — reforço de cluster sem inflar a contagem.

Isso bate com a meta da Estratégia SEO (6 FiscWise, 5 SessãoInk, 5 Fretamento — aqui 4 por cadência realista, ERP 4–5, mais captura), priorizando profundidade nos clusters de maior ticket.

---

## 7. Estratégia de linkagem interna (resumo operacional)

**Regra 1 — Link de conversão obrigatório:** todo artigo termina com `relatedLinks` apontando para **a landing do seu cluster** (ex.: FiscWise → `/fiscwise`) + um CTA de captação (`/cotacao` ou `/envie-sua-dor`). Esse é o mecanismo que transfere tráfego de SEO para conversão.

**Regra 2 — Reforço de cluster:** quando houver artigo irmão publicado, linkar para ele no corpo (topical authority). Ex.: artigo 5 (automação fiscal) ↔ artigo 3 (certificados) ↔ pilar `/fiscwise`.

**Regra 3 — Da landing de volta ao blog:** as landings de produto devem expor 2–3 artigos do cluster (seção "Saiba mais"), fechando o loop pilar↔satélite. *(Implementação fora do escopo deste documento — é ajuste em `src/`.)*

**Regra 4 — Cross-cluster com critério:** automação/IA (cluster E) interliga com qualquer produto quando o tema encosta (ex.: "automação fiscal" linka FiscWise; "integração" linka ERP-V). Não forçar links irrelevantes.

**Mapa de destino por cluster:**

| Cluster | Link primário (conversão) | Link secundário |
|---------|---------------------------|-----------------|
| A FiscWise | `/fiscwise` | `/cotacao` |
| B SessãoInk | `/sessaoink` | `/cotacao` |
| C Fretamento | `/fretamento-pro` | `/cotacao` |
| D ERP-V | `/erp-v` | `/sistemas-sob-medida`, `/integracao-de-sistemas` |
| E Automação/IA | `/automacao-de-processos`, `/agentes-de-ia` | `/envie-sua-dor` |
| F Captura | `/sistemas-sob-medida` | `/cotacao` |

---

## 8. Medição e critérios de decisão

- **Por artigo (Search Console):** impressões, posição média, CTR; cliques para a landing linkada (eventos em `src/lib/analytics.ts` quando o GA4 estiver ativo).
- **Por cluster:** soma de impressões e leads atribuídos à landing pilar.
- **Decisão a cada 30 dias:** dobrar a aposta no cluster que mais gera lead/impressão; reescrever/atualizar (`updatedAt`) artigos parados na 2ª–3ª página em vez de só publicar novos.
- **Guardrail de honestidade:** revisar todo artigo de ERP-V/fiscal e madeireira contra a "Honestidade de produto" (seção 1) antes de publicar.

---

## 9. Riscos e observações

- **GA4 não está coletando ainda** — só Vercel Analytics está ativo (o componente GA4 existe mas depende de `NEXT_PUBLIC_GA_MEASUREMENT_ID`). Sem GA4, a atribuição artigo→lead fica parcial; priorizar ativar a propriedade GA4 para medir o loop.
- **Cadência de 2/semana é otimista** para operação solo — o piso de 1/semana priorizando FiscWise (maior ticket) é o plano de contingência.
- **Produção em `src/articles.ts` é manual** (array TS, sem CMS): cada pauta vira um objeto `Article`. Volume alto pode justificar um CMS no futuro — fora do escopo agora.
- **Não criar rotas/produtos** para madeireira/paletes ou "Fiscal Engine": são temas de captura de busca, não verticais.
- **Páginas comparativas** (FiscWise vs planilhas etc.) hoje são on-page dentro de `/fiscwise`; alguns artigos comparativos deste plano (#7, #10) preparam terreno para promovê-las a rotas dedicadas no futuro.
