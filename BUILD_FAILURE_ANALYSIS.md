# Build Failure Analysis — vstack-site

**Gerado em:** 2026-05-05  
**Status:** Diagnóstico Completo

## Resumo Executivo

O vstack-site está em um ciclo de build repetitivo causado por três problemas interconectados: (1) incompatibilidade entre Tailwind CSS v4 com Turbopack do Next.js 16.2.4, (2) conflito entre dependências de produção vs devDependencies para ferramentas de build (TypeScript, Tailwind, Prisma), e (3) falta de `tailwind.config.ts`. O resultado é que mesmo após 8 commits de fixes, o build continua falhando porque a raiz não foi endereçada.

---

## 1. Problemas Identificados

### Problema 1: Tailwind CSS v4 + Turbopack Incompatibility

**Evidência:**
- Arquivo `postcss.config.mjs` existe e está correto (usa `@tailwindcss/postcss`)
- **FALTA:** Não há `tailwind.config.ts` no raiz do projeto
- `globals.css` usa a sintaxe correta (`@tailwind base; @tailwind components; @tailwind utilities;`)
- `package.json` tem AMBOS `@tailwindcss/postcss` (v4) e `tailwindcss` (v4) em dependencies

**Causa Raiz:**
Next.js 16.2.4 usa Turbopack, que processa CSS diferente da versão anterior. Tailwind CSS v4 introduziu `@tailwindcss/postcss` (novo), mas o pipeline de build Next.js/Turbopack espera um `tailwind.config.*` no raiz. Sem ele, Turbopack não consegue inicializar o processador de CSS corretamente.

**Por que repeate:**
- Cada commit tenta "mover tailwindcss para dependencies" (commits `8c1f9be`, `e17ae2b`)
- Mas o verdadeiro problema (falta de config file) nunca foi resolvido
- O build "passa" temporariamente quando NODE_ENV ou cache Vercel muda, mas falha novamente

---

### Problema 2: Dependências Críticas de Build em devDependencies

**Evidência:**
- `package.json` contém conflitos históricos:
  - Commit `7b1e646`: "move TypeScript and type definitions to production dependencies"
  - Commit `90e1723`: "remove duplicate typescript from devDependencies"
  - Commit `8c1f9be`: Move `tailwindcss` de devDeps para dependencies
  - Commit `21366da`: Move `next-sitemap` para dependencies

**Causa Raiz:**
Vercel usa `npm ci` em produção (não `npm install`), que respira apenas `dependencies`. Ferramentas de build necessárias durante `next build` (TypeScript, Tailwind, next-sitemap) precisam estar em `dependencies`, não `devDependencies`. Porém:
- Não há documento/padrão claro de quais ferramentas vão onde
- Cada novo erro causa move ad-hoc sem entender a regra geral

**Por que repeate:**
- Sem um schema documentado, novos problemas causam moves cegos
- Quando um agente frontend-developer adiciona nova dependência, pode colocar em devDeps por padrão
- O build local funciona (tem devDeps instalado), mas Vercel falha

---

### Problema 3: package-lock.json Desincronizado

**Evidência:**
```
package.json (linha 38):
  "@tailwindcss/postcss": "^4" — em devDependencies (INCORRETO)

package-lock.json (linha 7):
  "@tailwindcss/postcss": "^4" — em dependencies (CORRETO por acaso)
```

Commit `20d5680` ("regenerate package-lock.json with updated dependencies") não resolveu a inconsistência.

**Causa Raiz:**
Manual regeneration de package-lock.json não garante que o estado reflete a intenção no package.json. NPM pode resolver dependências de forma diferente na segunda rodada.

---

### Problema 4: Falta de tailwind.config.ts

**Evidência:**
- Verifica-se que não existe `tailwind.config.ts` ou `tailwind.config.js` no raiz
- `postcss.config.mjs` existe e aponta para `@tailwindcss/postcss`
- `globals.css` tem sintaxe Tailwind v4 válida

**Causa Raiz:**
Tailwind CSS v4 com a nova arquitetura `@tailwindcss/postcss` ainda espera um arquivo de config no raiz para:
1. Definir content paths (quais arquivos Tailwind deve escanear)
2. Tema customizado (core colors, spacing, etc.)
3. Configurações de plugin

Turbopack não consegue inferir isso e falha.

---

### Problema 5: Prisma Generate still Running

**Evidência:**
- Commit `00fd2e2` (mais recente): "fix: remove prisma generate from build script"
- Commit `33f6aa6`: "Fix: Remove prisma generate from build script"
- Ambos tentam remover, sugerindo que volta a aparecer

**Causa Raiz:**
`next-sitemap` (na linha 11 do package.json: `"postbuild": "next-sitemap"`) pode estar re-adicionando a geração do Prisma, ou há script redundante.

---

## 2. Padrão de Falhas — Tabela Consolidada

| Erro | Commits que tentam fix | Causa Raiz | Por que repeate | Solução Definitiva | Status |
|------|--------|-----------|----------|-----------|--------|
| `@tailwindcss/postcss not found` | `e17ae2b`, `8c1f9be` | Tailwind v4 + Turbopack incompatibility | Falta `tailwind.config.ts` | Criar `tailwind.config.ts` no raiz | **NEEDS FIX** |
| `typescript not found` | `7b1e646`, `90e1723` | TypeScript em devDeps durante build Vercel | Vercel usa `npm ci`, não instala devDeps | Mover TypeScript para dependencies (já feito) | **FIXED** |
| `next-sitemap not found` | `21366da` | next-sitemap em devDeps | Usada em postbuild script | Mover para dependencies (já feito) | **FIXED** |
| `prisma generate` | `00fd2e2`, `33f6aa6` | Build script chama geração redundante | Prisma Client já gera no install | Remover do build script (já feito) | **NEEDS VERIFY** |
| `lightningcss` issue | `96c4ff3`, `a889060` | Lightning CSS não instalado | Tailwind v4 usa Lightning CSS, falta em deps | Adicionar `lightningcss` (já feito) | **FIXED** |

---

## 3. Diagnóstico do Turbopack + Tailwind v4

**Problema Específico:**
Tailwind CSS v4 introduz uma nova arquitetura baseada em `@tailwindcss/postcss` que é um plugin PostCSS moderno. Turbopack (novo no Next.js 16) processa CSS de forma diferente:

1. **Old Flow (Webpack):** `tailwind.config.js` → content paths → template files
2. **New Flow (Turbopack):** `tailwind.config.ts` → Turbopack intermediate → TypeScript-aware

Sem `tailwind.config.ts`, Turbopack não consegue resolver:
- Content paths (quais arquivos conter classes Tailwind)
- Theme extensions
- Plugin loading

**Resultado:** PostCSS falha, `@tailwindcss/postcss` não consegue processar, build quebra.

---

## 4. Estado Atual do package.json

### Dependências (para Vercel — npm ci instala):
```json
{
  "dependencies": {
    "@prisma/client": "^5.22.0",        ✓ Correto
    "@tailwindcss/postcss": "^4",       ✓ Correto (v4 nova arquitetura)
    "@types/bcryptjs": "^2.4.6",        ✗ ERRO: Types em dependencies (deve ir devDeps)
    "@types/node": "^20",               ✗ ERRO: Types em dependencies
    "@types/react": "^19",              ✗ ERRO: Types em dependencies
    "@types/react-dom": "^19",          ✗ ERRO: Types em dependencies
    "tailwindcss": "^4",                ✓ Correto (ferramentas de build)
    "typescript": "^5",                 ✓ Correto (necessário para build)
    // ... resto das dependências corretas
  },
  "devDependencies": {
    "prisma": "^5.22.0",                ✓ Correto (CLI only)
    "eslint": "^9",                     ✓ Correto
    "eslint-config-next": "16.2.4",     ✓ Correto
    // ... resto correto
  }
}
```

**Achado Crítico:** Types (`@types/*`) estão em `dependencies` quando deveriam estar em `devDependencies`. Isso aumenta o bundle de produção desnecessariamente.

---

## 5. Checklist de Fixes Necessários

- [ ] **Criar `tailwind.config.ts`** com configuração mínima
- [ ] **Validar `postcss.config.mjs`** (já está correto)
- [ ] **Validar `globals.css`** (já está correto)
- [ ] **Mover `@types/*` para devDependencies** (estão incorretamente em dependencies)
- [ ] **Verificar `postbuild` script** — se ainda chama prisma generate, remover
- [ ] **Regenerate package-lock.json** após fixes em package.json
- [ ] **Testar build local** com `next build`
- [ ] **Testar em Vercel** com trigger manual
- [ ] **Validar que Turbopack consegue processar CSS**

---

## 6. Prevenção Futura

### Schema de package.json (Documento de Verdade)

**DEVE estar em `dependencies`:**
- `next`, `react`, `react-dom` — Runtime
- `@prisma/client` — ORM (usado em runtime)
- `typescript` — **Build tool necessária para Turbopack**
- `tailwindcss`, `@tailwindcss/postcss` — **Build tools necessárias**
- `lightningcss` — **Dependência de Tailwind v4**
- `next-sitemap` — **Ferramentas de build (postbuild script)**
- Todas as dependências de runtime: `jose`, `zod`, `openai`, `bcryptjs`, etc.

**DEVE estar em `devDependencies`:**
- `@types/*` — Apenas tipos TypeScript
- `prisma` — CLI only (Prisma Client é runtime)
- `eslint`, `eslint-config-next` — Linting
- `concurrently` — Dev util

**NUNCA em `optionalDependencies`:**
- Platform-specific binaries são problema em builds cloud (use `.npmrc` com `legacy-peer-deps=true`)

### CI/CD Checks (Implementar no GitHub Actions)

1. **Validate package.json schema** — Rodar script que verifica tipos em devDeps
2. **Verify package-lock.json sync** — `npm ci && npm diff --name-only` deve retornar nada
3. **Test build locally** — `next build` deve passar antes de PR
4. **Lint commit messages** — "move X to dependencies" commits sem referência de erro são rejeitados

### Pre-commit Hooks

```bash
# .husky/pre-commit
npm run validate-build-config
npm ci --verify
```

---

## 7. Próximos Passos (Ordem de Execução)

1. **Criar `tailwind.config.ts`** — Essencial para Turbopack
2. **Remover `@types/*` de dependencies** — Mover para devDeps
3. **Executar `npm install` localmente** e validar `npm ci`
4. **Testar `next build`** localmente
5. **Regenerate package-lock.json** — `npm install --package-lock-only`
6. **Commit e push** — Trigger Vercel rebuild
7. **Monitorar log de build Vercel**

---

## 8. Conclusão

O vstack-site está preso em um ciclo de "whack-a-mole" onde cada fix resolve um sintoma, não a raiz. A causa fundamental é a incompatibilidade entre Tailwind CSS v4 e Turbopack, exacerbada pela falta de um arquivo de configuração crítico (`tailwind.config.ts`). Os 8 commits anteriores não resolveram porque focaram em reorganizar dependências sem entender que Turbopack precisa de configuração explícita.

**Solução:** Criar `tailwind.config.ts`, corrigir tipos em devDeps, regenerar lock, e validar com `next build` localmente antes de push.
