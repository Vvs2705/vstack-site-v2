# V-STACK — Site Institucional e Máquina de Aquisição

Site oficial da **V-STACK Solutions** ([vstack-solutions.com.br](https://vstack-solutions.com.br)).

Este repositório **não é um produto vendável**: é a **vitrine e a máquina de aquisição** da V-STACK. Sua função é apresentar a empresa, explicar cada produto SaaS vertical, ranquear no Google, capturar leads e dar suporte à venda consultiva. Os produtos em si (FiscWise, SessãoInk, Fretamento Pro, ERP-V) vivem em repositórios próprios — aqui ficam suas **landing pages de venda**, o **blog de SEO** e os fluxos de captação.

---

## Stack real

Aplicação **SSR completa** em Next.js (App Router), não um site estático.

- **Next.js 16** (App Router, diretório `src/app`) — leia os guias em `node_modules/next/dist/docs/` antes de mexer no framework; esta versão tem breaking changes.
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`, `lightningcss`)
- **Prisma 5** + **PostgreSQL** (Neon / Supabase / Railway)
- **Autenticação** própria com `jose` (JWT) + `bcryptjs` (área administrativa de pedidos)
- **Upstash Redis** + `@upstash/ratelimit` (rate limiting de formulários/APIs)
- **Resend** (envio de e-mails de leads e contato)
- **OpenAI SDK** (chat/assistentes e a calculadora fiscal do FiscWise)
- **Validação** com `zod` + `react-hook-form` + `@hookform/resolvers`
- **UI**: `@base-ui/react`, `@radix-ui/react-dialog`, `lucide-react`, `framer-motion`, `class-variance-authority`, `tailwind-merge`, `next-themes`
- **Analytics**: Vercel Analytics (ativo) + componente GA4 que degrada graciosamente (ver abaixo)
- **SEO**: `next-sitemap` (sitemap gerado no `postbuild`), JSON-LD próprio
- **Hospedagem**: **Vercel** (deploy automático no push para `main`)

---

## Estrutura de pastas

```txt
.
├── src/
│   ├── app/                      # App Router (rotas, layouts, route handlers)
│   │   ├── page.tsx              # Home
│   │   ├── layout.tsx            # Layout raiz: metadata, JSON-LD, providers
│   │   ├── fiscwise/             # Landing FiscWise (contadores)
│   │   ├── sessaoink/            # Landing SessãoInk (tatuadores)
│   │   ├── fretamento-pro/       # Landing Fretamento Pro (frota)
│   │   ├── erp-v/                # Landing ERP-V (ERP/motor fiscal)
│   │   ├── solucoes/[slug]/      # Páginas de serviço/solução
│   │   ├── conteudos/[slug]/     # Blog (SEO)
│   │   ├── cases/[slug]/         # Estudos de caso
│   │   ├── cotacao/, contato/,   # Conversão (formulários)
│   │   │   envie-sua-dor/, faq/
│   │   ├── privacidade/, termos/, cookies/   # Legal / LGPD
│   │   ├── login/, pedidos/      # Área administrativa (auth)
│   │   └── api/                  # Route handlers (contato, cotacao, dor, chat,
│   │                             #   auth, orders, fiscwise/calculator, ...)
│   ├── components/               # UI, sections, forms, layout, seo, analytics
│   ├── lib/                      # Dados e serviços (ver abaixo)
│   │   ├── articles.ts           # Conteúdo do blog (/conteudos)
│   │   ├── products/             # Especificação das landings de produto
│   │   ├── structured-data.ts    # JSON-LD (Organization, WebSite, Service, ...)
│   │   ├── prisma.ts, redis.ts,  # Clientes de infraestrutura
│   │   │   resend.ts, openai.ts
│   │   ├── analytics.ts          # Camada de eventos (despacha p/ window.gtag)
│   │   └── validations.ts        # Schemas zod dos formulários
│   └── hooks/                    # Hooks React (ex.: useAuth)
├── prisma/schema.prisma          # Modelo de dados
├── middleware.ts                 # Middleware de borda
├── next.config.ts                # Security headers, redirects, canonical host
├── next-sitemap.config.js        # Geração do sitemap
├── docs/                         # Documentação interna (SEO, deploy, design)
└── public/                       # sitemap.xml, robots.txt, manifest.json, ícones
```

---

## Como rodar

Pré-requisitos: **Node.js**, um banco **PostgreSQL** acessível e as variáveis de ambiente abaixo.

```bash
# 1. Instalar dependências
npm install

# 2. Criar o .env a partir do exemplo e preencher as variáveis
cp .env.example .env

# 3. Sincronizar o schema com o banco (dev)
npm run db:push        # prisma db push

# 4. Subir o ambiente de desenvolvimento
npm run dev            # next dev  ->  http://localhost:3000
```

### Scripts disponíveis (`package.json`)

| Script              | Comando                          | O que faz |
|---------------------|----------------------------------|-----------|
| `npm run dev`       | `next dev`                       | Servidor de desenvolvimento |
| `npm run build`     | `prisma generate && next build`  | Gera o Prisma Client **antes** do build de produção |
| `npm run postbuild` | `next-sitemap`                   | Gera o sitemap (roda automático após `build`) |
| `npm run start`     | `next start`                     | Sobe o build de produção |
| `npm run lint`      | `eslint`                         | Lint (possui pendências legadas — fase de limpeza própria) |
| `npm run db:push`   | `prisma db push`                 | Aplica o schema no banco (dev) |
| `npm run db:migrate`| `prisma migrate deploy`          | Aplica migrations (produção) |
| `npm run db:studio` | `prisma studio`                  | Abre o Prisma Studio |

> O `build` **sempre roda `prisma generate` antes** do `next build` — necessário para o Prisma Client estar disponível no bundle. O sitemap é regenerado no `postbuild`.

---

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha. Principais:

| Variável | Obrigatória | Descrição |
|----------|:-----------:|-----------|
| `NEXT_PUBLIC_SITE_URL` | sim | URL canônica do site (`https://vstack-solutions.com.br`) |
| `DATABASE_URL` | sim | String de conexão PostgreSQL (Prisma) |
| `UPSTASH_REDIS_REST_URL` | sim | Endpoint do Upstash Redis (rate limiting) |
| `UPSTASH_REDIS_REST_TOKEN` | sim | Token do Upstash Redis |
| `OPENAI_API_KEY` | sim | Chave da OpenAI (chat / calculadora fiscal) |
| `RESEND_API_KEY` | sim | Chave da Resend (envio de e-mails) |
| `RESEND_FROM_EMAIL` | sim | Remetente dos e-mails transacionais |
| `LEADS_EMAIL` | sim | Destino dos leads recebidos pelos formulários |
| `JWT_SECRET` | sim | Segredo de assinatura JWT (mín. 32 caracteres) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Verificação do Google Search Console |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | não | ID do GA4 (`G-XXXXXXXXXX`) — sem ele o GA4 não injeta nada |

> **Analytics — estado real:** o componente `GoogleAnalytics` (`src/components/analytics/GoogleAnalytics.tsx`) só injeta o `gtag.js` quando `NEXT_PUBLIC_GA_MEASUREMENT_ID` está definido; sem a variável ele retorna `null` (no-op gracioso, não quebra build nem produção). Enquanto a propriedade GA4 não é criada, apenas **Vercel Analytics** está ativo.

Nunca commite o `.env`. Em produção, configure tudo nas **Environment Variables da Vercel**.

---

## Convenção de tokens de texto (`--text-1/2/3`)

A cor de texto é padronizada por **design tokens** (CSS variables), aplicados via Tailwind 4 com a sintaxe `text-[var(--token)]`. A escala segue a hierarquia visual:

- `--text-1` → texto primário (títulos, headlines, ênfase máxima)
- `--text-2` → texto secundário (parágrafos, corpo, descrições)
- `--text-3` → texto terciário (legendas, breadcrumbs, metadados, estados desativados)

Exemplos reais (`src/app/conteudos/page.tsx`):

```tsx
<h1 className="... text-[var(--text-1)]">Conteúdos</h1>
<p  className="... text-[var(--text-2)]">descrição da seção</p>
<span className="text-[var(--text-3)]">›</span>
```

> Ao criar/editar componentes, **use os tokens** em vez de cores literais (`text-gray-500`, `text-black`) — eles garantem consistência entre tema claro/escuro e com a fundação visual em andamento. Há outros tokens de marca (ex.: `--accent`) seguindo o mesmo padrão; ver `docs/DESIGN_SYSTEM.md`.

---

## Rotas e landings principais

### Produtos (landings de venda — na raiz, **não** em `/produtos/*`)

| Rota | Produto | Público-alvo |
|------|---------|--------------|
| `/fiscwise` | **FiscWise** | Escritórios e contadores |
| `/sessaoink` | **SessãoInk** | Tatuadores e estúdios |
| `/fretamento-pro` | **Fretamento Pro** | Empresas de fretamento / frota |
| `/erp-v` | **ERP-V** | Gestão / motor de cálculo fiscal sob medida |

### Conteúdo e conversão

- `/` — Home (apresentação da empresa e produtos)
- `/conteudos` + `/conteudos/[slug]` — **Blog de SEO** (pautas em `src/lib/articles.ts`)
- `/cases` + `/cases/[slug]` — Estudos de caso
- `/solucoes` + `/solucoes/[slug]` — Serviços (desenvolvimento SaaS, automação com IA, integração, dashboards/BI)
- `/cotacao`, `/contato`, `/envie-sua-dor` — Formulários de captação (Resend + Upstash + zod)
- `/faq`, `/sobre` — Apoio à venda
- `/privacidade`, `/termos`, `/cookies` — Legal / LGPD
- `/login`, `/pedidos` — Área administrativa (auth com `jose`/`bcrypt`)

Plano editorial completo do blog em [`docs/PLANO_CONTEUDO_90D.md`](docs/PLANO_CONTEUDO_90D.md).

---

## SEO técnico

Já implementado no repositório (validar em produção, não recriar):

- `public/sitemap.xml` via `next-sitemap` (config em `next-sitemap.config.js`)
- `public/robots.txt`, URLs canônicas, host canônico non-www → www (em `next.config.ts`)
- Metadata, Open Graph (1200×630) e Twitter Card em `src/app/layout.tsx`
- JSON-LD em `src/lib/structured-data.ts` (Organization, WebSite, Service, BreadcrumbList, Article)
- Manifest PWA + ícones, `lang` pt-BR
- Security headers e CSP em `next.config.ts`

Documentação de apoio: `docs/SEO.md`, `docs/SEO_COPY_STRATEGY.md`, `docs/SEARCH_CONSOLE_SETUP.md`, `docs/DESIGN_SYSTEM.md`, `docs/DEPLOY.md`, `docs/CURRENT_PROJECT_STATUS.md`.

---

## Deploy

Hospedado na **Vercel**. O deploy de produção acontece **automaticamente no push para a branch `main`**; cada Pull Request gera um **Preview Deployment**.

Antes de subir:

1. Garanta que `npm run build` passa (ele roda `prisma generate` e gera o sitemap no `postbuild`).
2. Configure todas as variáveis de ambiente nas **Environment Variables da Vercel**.
3. Em produção, as migrations são aplicadas via `npm run db:migrate` (`prisma migrate deploy`).

Detalhes em `docs/DEPLOY.md`.

---

## Estado atual

- `npm run build` passa após o trabalho recente de fundação visual.
- `npm run lint` ainda tem pendências legadas — tratadas como fase de limpeza separada.
- Direção atual: **estabilizar a fundação visual** (design tokens, primitivos, consistência de layout, QA responsivo) **antes** de adicionar novas features. Ver `docs/CURRENT_PROJECT_STATUS.md`.

---

© V-STACK Solutions — repositório privado de uso interno.
