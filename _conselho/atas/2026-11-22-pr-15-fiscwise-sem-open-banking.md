# Ata do Conselho — PR #15: tira Open Banking e conciliação bancária das páginas do FiscWise

- **Data:** 2026-11-22
- **Modo:** B
- **Projeto / repositório:** Vvs2705/vstack-site-v2 · **PR:** #15
- **Pedido literal:** "tira o Open Banking das outras páginas do FiscWise".
- **Estado:** APROVADA

## 1. Triagem
SEGUIR: o FiscWise é central do escritório contábil e não tem Open Banking nem conciliação bancária
(`src/lib/fiscwise-faq.ts:24`, README do FiscWise §3). Site público; o merge publica em produção na Vercel.

## 2–4. Pareceres (independentes)
- Ciclo 1 (3b82586): técnico APROVOU (arquivos apagados sem import estático nem dinâmico; tsc, eslint, build 42/42); produtor
  APROVOU; produto VETOU — a galeria e o og:image de `/solucoes/fiscwise` (`src/lib/projects.ts`) ainda usavam ilustrações
  (SVG com extensão .png) com "Integração com Open Banking" e "transações reconciliadas".
- Ciclo 2 (eabf26d): `screenshots: []` (a galeria some pela checagem de `length`), `thumbnail: '/og-image.png'` (1200×630, igual ao
  metadata), as 5 imagens de `public/images/projects/` apagadas sem referência restante; prova do SERPRO em `seo-service-pages.ts`
  agora "implementado, pronto para ligar quando houver contrato". CI: Semgrep e Vercel verdes.
- Não bloqueantes: `OriginStorySection.tsx:21` liga "protótipo de conciliação financeira" à origem do FiscWise (história, decisão do
  dono); link "Ver Demo" aponta para `demo.contabilidadeflow.com.br`; galeria volta quando houver capturas reais; repo sem CI de build.

## 6. Votos (Modo B — revisão do PR)
Commit revisado: eabf26db6d27ad4b90e6307aaf47275835cf07ed

| Diretor | Voto | Motivo / evidência |
|---|---|---|
| diretor-tecnico | APROVA | nenhuma referência às imagens apagadas; galeria vazia é segura; og-image 1200×630; tsc, eslint, build 42/42; CI verde |
| diretor-produto | APROVA | veto resolvido: sem Open Banking, conciliação nem número inventado em /solucoes/fiscwise |
| produtor | APROVA | escopo do pedido; delta atende o veto e os comentários; CI verde |

**Veredito final:** APROVADO
