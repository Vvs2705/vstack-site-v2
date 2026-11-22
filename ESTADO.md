---
projeto: vstack-site
repo: Vvs2705/vstack-site-v2
conferido_em: 2026-11-22
---

# ESTADO: vstack-site (site da V-STACK Solutions)

## Onde paramos
- O site é a vitrine da V-STACK: apresenta a empresa, as landings dos produtos, o blog e os formulários que captam contato.
- O que foi mesclado na `main` mais recentemente (e que publica na Vercel): reposicionamento para vender sites, sistemas, automação e jogos (PR #13), home refeita por funil (PR #14) e páginas do FiscWise sem a promessa de Open Banking (PR #15).
- Em andamento: o PR #12 (o contato não se perde se o banco cair) está aberto desde 21/10 e precisa de revisão e de atualização com a `main`. Há também 6 PRs do Dependabot abertos desde julho.
- Próximo passo sugerido: decidir o PR #12 e criar os primeiros testes automáticos (hoje não existe nenhum).
- Depende de você: aprovar qualquer merge (cada merge na `main` vai para produção), decidir os PRs do Dependabot e quais branches antigos podem ser apagados.

## Stack
- Next.js 16 (App Router, `src/app`), React 19.2, TypeScript 5, Tailwind CSS 4, componentes shadcn/ui + Base UI + Radix.
- Prisma 5 + PostgreSQL (hoje só as rotas dos formulários de contato, cotação e "envie sua dor" usam o banco).
- Zod 4 + react-hook-form nos formulários; Resend para e-mail dos leads; Upstash Redis para rate limit.
- Analytics: Vercel Analytics; GA4 só carrega com ID configurado e depois do aceite no banner de cookies.
- Hospedagem: Vercel (região gru1), deploy automático a cada push na `main`; PR gera Preview.
- Sitemap gerado no `postbuild` (`next-sitemap`). Não há test runner.

## Rodar e publicar
- Instalar e rodar: `npm install` · copiar `.env.example` para `.env` e preencher · `npm run dev` (http://localhost:3000).
- Checar antes do PR: `npm run lint` · `npx tsc --noEmit` · `npm run build` (o build roda `prisma generate` antes).
- Banco: `npm run db:push` (dev) / `npm run db:migrate` (produção). Variáveis: lista de nomes em `.env.example`; valores só na Vercel e no `.env` local.
- Publicar: merge na `main` = deploy em produção. Antes do merge, PR com ata do Conselho em `_conselho/atas/`.
- Detalhes de rotas, SEO e tokens de texto: `README.md` (trechos desatualizados, ver Armadilhas).

## Em andamento
- PR #12 `fix/lead-sem-banco`: e-mail como reserva quando o banco está fora (toca as 3 rotas de lead e `src/lib/prisma.ts`); 1 commit à frente, `main` andou 11 commits desde então.
- PR #3 `dependabot/github_actions/actions/checkout-7`: actions/checkout 4 para 7.
- PR #4 `dependabot/npm_and_yarn/react-hook-form-7.80.0`: react-hook-form 7.76 para 7.80.
- PR #5 `dependabot/npm_and_yarn/eslint-config-next-16.2.10`: eslint-config-next 16.2.6 para 16.2.10.
- PR #6 `dependabot/npm_and_yarn/base-ui/react-1.6.0`: @base-ui/react 1.4.1 para 1.6.0.
- PR #7 `dependabot/npm_and_yarn/framer-motion-12.42.2`: framer-motion 12.40 para 12.42.
- PR #8 `dependabot/npm_and_yarn/prisma/client-7.8.0`: @prisma/client 5.22 para 7.8 (salto de duas versões maiores; o `prisma` CLI continua em 5).
- `claude/gifted-lamarr-bbd2c2` e `claude/recursing-kirch-d8d389`: branches de julho/2026, sem PR, divergentes da `main`.
- Já contidos na `main` (sem PR aberto; apagar é decisão do dono): `chore/free-security-scan`, `claude/upbeat-davinci-b9472c`, `claude/sweet-ritchie-1bd822`, `claude/project-thread-2im43k`, `fix/forms-sem-jsdom`, `fix/og-url-e-limpeza`, `fix/fiscwise-sem-open-banking`, `redesign/visual-2026-11`.

## Decisões
- Este repositório é só a vitrine e a máquina de aquisição; os produtos (FiscWise, SessãoInk, Fretamento Pro, ERP-V) vivem em repositórios próprios e aqui ficam as landings.
- Out/2026 (PR #13): o site passou a vender sites, sistemas, automação e jogos; a seção de cases foi retirada.
- Login e pedidos foram removidos do site; o chatbot com OpenAI foi removido. Os modelos de usuário, pedidos, chat e admin continuam no `prisma/schema.prisma`, sem uso no código atual (só `Lead`, `Cotacao`, `DorCliente` e `AuditLog` são usados).
- O FiscWise não tem Open Banking nem conciliação bancária: nenhuma página pode prometer isso (PR #15; ata em `_conselho/atas/`).
- Formulário de lead nunca pode cair: rate limit que falha aberto e e-mail como reserva (PR #12, em aberto).
- Analytics (GA4) só depois do aceite de cookies, por LGPD.
- Os PRs recentes (#14 e #15) passaram por revisão de 3 pareceres do Conselho, registrada em ata em `_conselho/atas/`.
- Host canônico é `www` (301 do domínio sem `www`, em `next.config.ts`).

## Armadilhas
- O repositório é PÚBLICO: nunca versionar `.env`, valores de variáveis, dados de cliente ou notas internas (o rodapé do README ainda diz "privado": está errado).
- Next 16: o rate limit fica em `src/proxy.ts` (não existe `middleware.ts`); `params` e `searchParams` são assíncronos (`await`).
- O `openGraph` do Next não faz merge profundo: toda página que define o seu precisa espalhar `OG_DEFAULTS` (`src/lib/structured-data.ts`), senão perde `og:url` e `og:image`.
- Não usar `isomorphic-dompurify`/jsdom: quebra na Vercel e derrubou os formulários com 500.
- Não há teste automático nem CI de build; o único workflow é Semgrep em PR. Quem garante é `lint` + `tsc` + `build` rodados à mão.
- `vercel.json` tem `ignoreCommand`: commit que só altera `*.md`, `.github/` ou `.vscode/` não gera deploy.
- Não há pasta `prisma/migrations`: o schema é aplicado com `db push`. Mudança de schema pede cuidado e revisão.
- README e `.env.example` estão defasados: citam `/cases`, `middleware.ts`, a dependência `openai` (já removida) e arquivos em `docs/` que não existem mais. Na dúvida, vale o código.
- O clone local do dono tem `main` defasado e branches locais sem upstream: comparar sempre com `origin/main`; se o `git fetch` falhar no clone local, usar um clone novo.

## Melhorias replicáveis
- Rate limit com Upstash que não derruba o formulário (falha aberta, timeout de 1,5 s, limite por rota) · `1b4ecf4` · `src/proxy.ts`
- Escape de HTML próprio em vez de `isomorphic-dompurify` (jsdom quebra em serverless) · `0cb7b19` · `src/lib/security.ts`, `package.json`
- JSON-LD seguro: escapar `<` para evitar quebra de `</script>` · `a1077ef` · `src/components/seo/JsonLd.tsx`
- `OG_DEFAULTS` espalhado em todo `openGraph` (url, imagem e siteName em todas as páginas) · `670138c` · `src/lib/structured-data.ts`, `src/app/**/page.tsx`
- GA4 só após consentimento, carregando na hora do aceite, sem recarregar · `99f3c6b` · `src/components/analytics/GoogleAnalytics.tsx`, `src/components/CookieBanner.tsx`, `src/lib/analytics.ts`
- CI gratuito: Semgrep (security-audit + secrets) em PR e Dependabot · `079806b` · `.github/workflows/security-review.yml`, `.github/dependabot.yml`
- Next 16: `params` assíncrono nas páginas dinâmicas, host canônico `www` e FAQPage em JSON-LD · `b8b98ad` · `src/app/solucoes/[slug]/page.tsx`, `next.config.ts`, `src/app/faq/page.tsx`
- Ata do Conselho versionada por PR (votos e evidência) · `e655e36` · `_conselho/atas/`

delta: git log --oneline $(git log -1 --format=%H -- ESTADO.md)..HEAD
