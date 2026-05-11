# VSTACK Site - Status Atual do Projeto

Atualizado em: 2026-05-11

## Contexto

Projeto: `vstack-site`

Caminho local:

```txt
C:\Users\VINICIUS\Videos\MEUS PROJETOS\vstack-site
```

Stack principal:

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- Prisma
- Vercel

## Decisao Atual

O projeto nao vai usar Builder.io.

A direcao correta definida foi:

1. Remover residuos do Builder.io.
2. Corrigir a fundacao visual.
3. Padronizar tokens, layout, componentes e ritmo visual.
4. Reconstruir visualmente o site de forma progressiva.
5. Evitar adicionar novas features ate a base visual ficar consistente.

## Trabalho Executado Nesta Etapa

### Builder.io removido

Foram removidos residuos de Builder.io:

- Script `dev:builder` removido do `package.json`.
- Dependencia `concurrently` removida.
- Variaveis Builder removidas de `.env.example`.
- Rotas removidas:
  - `src/app/api/enable-draft/route.ts`
  - `src/app/api/disable-draft/route.ts`
- Middleware voltou a usar matcher simples para `/api/:path*`.
- `next.config.ts` voltou a bloquear iframe:
  - `X-Frame-Options: DENY`
  - `frame-ancestors 'none'`

### Fundacao visual corrigida

Arquivo principal:

```txt
src/app/globals.css
```

Mudancas:

- Entrada do Tailwind 4 corrigida para `@import "tailwindcss";`.
- Tokens visuais reorganizados.
- Variaveis principais padronizadas:
  - `--bg`
  - `--bg-deep`
  - `--bg-card`
  - `--accent`
  - `--accent-light`
  - `--text-1`
  - `--text-2`
  - `--text-3`
  - `--border`
  - `--shadow`
  - `--radius-card`
  - `--radius-btn`
- Classes globais reduzidas e mais coerentes:
  - `.btn-primary`
  - `.btn-secondary`
  - `.btn-outline`
  - `.card-vstack`
  - `.eyebrow`
  - `.gradient-text`
- O problema visual de desktop parecendo mobile esticado foi corrigido pela entrada correta do Tailwind.

### Primitives adicionadas

Novo arquivo:

```txt
src/components/primitives/Layout.tsx
```

Componentes criados:

- `Container`
- `Section`
- `SectionHeader`
- `Surface`

Objetivo:

Padronizar largura, spacing, superficies, headers de section e reduzir classes soltas nas paginas.

### Logo reutilizavel criado

Novo arquivo:

```txt
src/components/brand/VStackLogo.tsx
```

Objetivo:

Centralizar a logo SVG da V-STACK SOLUTIONS para Navbar, Footer e futuras secoes.

### Home reconstruida visualmente

Arquivos atualizados:

```txt
src/app/page.tsx
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx
src/components/sections/HeroSection.tsx
src/components/sections/TechStripSection.tsx
src/components/sections/PillarsSection.tsx
src/components/sections/ContaFlowSection.tsx
src/components/sections/CTASection.tsx
```

Mudancas principais:

- Navbar simplificada e mais premium.
- Footer reorganizado e menos ruidoso.
- Hero refeito com narrativa mais clara.
- Dashboard/preview do ContaFlow mais limpo.
- Cards de capacidades menos genericos.
- Tech strip sem emojis quebrados.
- CTA final mais forte.
- Layout validado em desktop e mobile via preview local.

### Textos quebrados corrigidos nos arquivos tocados

Foi feita varredura por sinais comuns de mojibake em arquivos tocados.

Nos arquivos principais da Home/Navbar/Footer/sections nao restaram ocorrencias.

## Validacao

Comando executado:

```bash
npm run build
```

Resultado:

```txt
Build passou com sucesso.
```

Rotas geradas com sucesso, incluindo:

- `/`
- `/sobre`
- `/solucoes`
- `/solucoes/contaflow`
- `/contato`
- `/cotacao`
- `/envie-sua-dor`
- `/faq`
- `/login`
- `/pedidos`
- `/termos`
- `/privacidade`
- `/cookies`

## Observacao Sobre Lint

`npm run lint` ainda possui problemas antigos nao relacionados diretamente ao redesign:

- `any` em formularios/libs.
- `setState` sincronico em alguns effects.
- strings com aspas nao escapadas em paginas legais.
- imports nao usados.

O build passa. O lint deve ser tratado em uma etapa separada.

## Preview Local

Servidor local usado:

```txt
http://localhost:3000
```

Validados visualmente:

- Desktop 1280x720.
- Mobile 390x844.

## Arquivos Alterados Ainda Nao Commitados

Principais arquivos alterados nesta etapa:

```txt
.env.example
middleware.ts
next.config.ts
package-lock.json
package.json
public/sitemap.xml
src/app/globals.css
src/app/login/page.tsx
src/app/page.tsx
src/components/brand/VStackLogo.tsx
src/components/layout/Footer.tsx
src/components/layout/Navbar.tsx
src/components/primitives/Layout.tsx
src/components/sections/CTASection.tsx
src/components/sections/ContaFlowSection.tsx
src/components/sections/HeroSection.tsx
src/components/sections/PillarsSection.tsx
src/components/sections/TechStripSection.tsx
src/lib/orders.ts
```

Arquivos removidos:

```txt
src/app/api/disable-draft/route.ts
src/app/api/enable-draft/route.ts
```

## Proximo Passo Recomendado

Status apos etapa de copy/SEO e paginas internas:

- Home ja possui fundacao visual nova.
- Paginas `/sobre`, `/solucoes`, `/contato`, `/cotacao`, `/envie-sua-dor` e `/faq` foram padronizadas.
- Textos publicos foram reposicionados para diagnostico, automacao, IA, integracoes e sistemas sob medida.
- Formularios publicos passaram a usar CTAs mais fortes: solicitar diagnostico, solicitar contato e enviar para analise.
- Estrategia de SEO/copy registrada em `docs/SEO_COPY_STRATEGY.md`.

Antes de deploy:

1. Rodar `npm run build`.
2. Revisar visualmente as paginas principais no navegador.
3. Fazer commit das alteracoes.
4. Fazer deploy na Vercel somente apos confirmacao.

Depois:

1. Corrigir lint legado em `src/lib/openai.ts`, `src/lib/redis.ts`, `src/lib/resend.ts` e paginas legais.
2. Criar paginas SEO especificas por cluster: automacao, IA, integracoes, sistemas sob medida e ContaFlow.
3. Criar documentacao de design system.

## Regra de Continuidade

Nao voltar para Builder.io.

Nao adicionar novas features ate concluir:

- fundacao visual,
- padronizacao de componentes,
- consistencia tipografica,
- responsividade,
- lint essencial.
