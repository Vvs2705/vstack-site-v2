# Ata do Conselho — PR #14: redesign da home, acento unificado e Next 16.4.6

- **Data:** 2026-11-22
- **Modo:** B
- **Projeto / repositório:** Vvs2705/vstack-site-v2 · **PR:** #14
- **Pedido literal:** deixar o site bonito, porém funcional e útil; corrigir a vulnerabilidade do Next.js.
- **Estado:** APROVADA

## 1. Triagem
SEGUIR: site público; o merge publica em produção na Vercel. Payload de `/api/dor` inalterado. Sem métrica, depoimento ou contagem
de clientes inventados; cartões de produto rotulados como esquemas ilustrativos.

## 2–4. Pareceres (independentes)
- Ciclo 1 (c4213eb): técnico APROVOU (handleSubmit/schema/rota fora do diff; tsc e eslint limpos; next 16.4.6, zod 4.6.7; Semgrep e
  Vercel verdes); produtor APROVOU; produto VETOU `src/lib/social-proof.ts:39` (FiscWise apresentado com Open Banking/conciliação,
  que o produto não tem).
- Ciclo 2 (33abf41): pitch trocado por "Central do escritório contábil: obrigações e prazos por cliente, portal do cliente e
  fechamento mensal com dossiê em PDF"; delta de 1 linha; Semgrep e Vercel verdes.
- Não bloqueantes: outras menções a Open Banking fora da home (`FiscWiseDashboard.tsx`, `projects.ts`, `seo-service-pages.ts`);
  `DorForm` pedir e-mail ou WhatsApp quando não anônimo; repo sem job de tsc/build na CI; Lighthouse/axe não medidos.

## 6. Votos (Modo B — revisão do PR)
Commit revisado: 33abf417cf5a70585b4f4fe0038d1faa6c02d226

| Diretor | Voto | Motivo / evidência |
|---|---|---|
| diretor-tecnico | APROVA | delta só de texto; ciclo 1 sem risco técnico; Semgrep e Vercel verdes |
| diretor-produto | APROVA | pitch fiel ao produto e ao público (escritório contábil) |
| produtor | APROVA | delta de 1 linha atende o veto; nada fora de escopo |

**Veredito final:** APROVADO
