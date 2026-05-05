# Build Reliability Plan — vstack-site

**Data:** 2026-05-05  
**Projeto:** vstack-site (Next.js 16.2.4 + React 19 + Tailwind CSS v4 + Turbopack)  
**Objetivo:** Quebrar o ciclo de builds repetitivos e implementar sistema de prevenção

---

## PARTE 1: Análise dos Problemas

### 1.1 Tabela de Problemas com Raízes

| # | Erro/Sintoma | Commit(s) que tentam fix | Causa Raiz | Por que repeate | Solução Definitiva | Status |
|---|---|---|---|---|---|---|
| P1 | `Cannot find module '@tailwindcss/postcss'` | e17ae2b, 8c1f9be | **FALTA `tailwind.config.ts`** — Turbopack não consegue inicializar o processador Tailwind v4 | Arquivo config foi removido ou nunca criado | Criar `tailwind.config.ts` no raiz com content paths | **CRÍTICO** |
| P2 | `typescript not found` during build | 7b1e646, 90e1723 | TypeScript estava em devDependencies, Vercel usa `npm ci` que não instala devDeps | Instalação local mascara o problema (inclui devDeps) | TypeScript já foi movido para dependencies — verificar se permaneceu | **FIXED** |
| P3 | `next-sitemap not found` | 21366da | next-sitemap em devDependencies mas usado em postbuild script | Mesmo motivo: Vercel `npm ci` | Já foi movido para dependencies — verificar se permaneceu | **FIXED** |
| P4 | `prisma generate` redundante | 00fd2e2, 33f6aa6 | Build script chama geração de Prisma que já ocorre automaticamente no `prisma install` | Não é testado se realmente foi removido | Verificar que `package.json` não tem `prisma generate` em scripts | **PRECISA VALIDAR** |
| P5 | `lightningcss` não encontrado | 96c4ff3, a889060 | Tailwind CSS v4 depende de Lightning CSS (novo compilador CSS de alta performance) | Dependência explícita foi adicionada — verificar se permaneceu | Já foi adicionado (`lightningcss: ^1.32.0`) — verificar se está em dependencies | **FIXED** |
| P6 | Types em `dependencies` ao invés de `devDependencies` | Nenhum commit específico | Erro histórico de setup — `@types/*` devem estar em devDeps, não dependencies | Nunca foi corrigido porque não era visto como "quebra build" | Mover `@types/bcryptjs`, `@types/node`, `@types/react`, `@types/react-dom` para devDeps | **NOVO** |
| P7 | package-lock.json desincronizado com package.json | 20d5680 | Regeneração manual não sincroniza corretamente quando há conflitos de versão | Não há CI check que valide sincronização | Executar `npm install` e verificar `npm ci --verify` antes de commit | **NOVO** |

---

## PARTE 2: Checklist de Fixes

### 2.1 Verificações Imediatas

- [ ] **P1: Verificar se `tailwind.config.ts` existe**
  ```bash
  ls -la tailwind.config.ts  # Se não existir, é o problema crítico
  ```

- [ ] **P2: Verificar status de TypeScript em package.json**
  ```bash
  grep -A2 '"typescript"' package.json  # Deve estar em dependencies, não devDependencies
  ```

- [ ] **P3: Verificar status de next-sitemap**
  ```bash
  grep -A2 '"next-sitemap"' package.json  # Deve estar em dependencies
  ```

- [ ] **P4: Verificar que build script não tem prisma generate**
  ```bash
  grep -i "prisma generate" package.json  # Não deve haver
  ```

- [ ] **P5: Verificar que lightningcss está em dependencies**
  ```bash
  grep -A2 '"lightningcss"' package.json
  ```

- [ ] **P6: Mover types para devDependencies**
  ```bash
  # Types que precisam se mover:
  # @types/bcryptjs
  # @types/node
  # @types/react
  # @types/react-dom
  ```

### 2.2 Recomendação de Fix Ordem

**Ordem Crítica (executar sequencialmente):**

1. **Criar `tailwind.config.ts`** — CRÍTICO, bloqueia build
   ```typescript
   import type { Config } from 'tailwindcss'
   
   export default {
     content: [
       './src/components/**/*.{js,ts,jsx,tsx}',
       './src/app/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   } satisfies Config
   ```

2. **Corrigir package.json** — Mover types para devDeps
   - Remove: `"@types/bcryptjs"`, `"@types/node"`, `"@types/react"`, `"@types/react-dom"` de dependencies
   - Adiciona: As mesmas 4 em devDependencies

3. **Regenerar package-lock.json** após correção
   ```bash
   rm package-lock.json
   npm install --package-lock-only
   ```

4. **Testar build local**
   ```bash
   npm ci
   npm run build
   ```

5. **Validar próximo passo** — Se build local passa, commit + push

---

## PARTE 3: Sistema de Prevenção

### 3.1 Schema de Package.json — Documento de Verdade

**DEVE estar em `dependencies` (Vercel instala com `npm ci`):**

**Runtime Libraries:**
- `next`, `react`, `react-dom` — Framework
- `@prisma/client` — ORM usado em runtime
- `@builder.io/react`, `@builder.io/widgets` — Visual editor SDK
- `@upstash/ratelimit`, `@upstash/redis` — Serviços
- `bcryptjs` — Crypto
- `jose` — JWT
- `openai` — API client
- `resend` — Email
- `zod` — Validation
- Utilities: `clsx`, `tailwind-merge`, `lucide-react`, `isomorphic-dompurify`, `next-themes`

**Build Tools (necessárias no Vercel):**
- ✅ `typescript` — **ESSENCIAL para Turbopack**
- ✅ `tailwindcss` — **ESSENCIAL para compilar CSS**
- ✅ `@tailwindcss/postcss` — **ESSENCIAL para Tailwind v4 novo**
- ✅ `lightningcss` — **ESSENCIAL dependência de Tailwind v4**
- ✅ `next-sitemap` — **Usada em postbuild script**

**DEVE estar em `devDependencies` (dev-only, não necessárias em Vercel build):**

**Type Definitions:**
- ✅ `@types/bcryptjs`
- ✅ `@types/node`
- ✅ `@types/react`
- ✅ `@types/react-dom`

**Development Tools:**
- ✅ `prisma` — CLI only (Prisma Client é runtime)
- ✅ `eslint`, `eslint-config-next`
- ✅ `concurrently` — Dev utility

**NUNCA em optionalDependencies:**
- ❌ Platform-specific binaries (causa problemas em builds cloud)
- Solução: Use `.npmrc` com `legacy-peer-deps=true` se necessário

---

### 3.2 CI/CD Checks — GitHub Actions

Criar `.github/workflows/validate-build-config.yml`:

```yaml
name: Validate Build Config

on:
  pull_request:
    paths:
      - 'package.json'
      - 'package-lock.json'
      - 'tailwind.config.ts'
      - 'postcss.config.mjs'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Check tailwind.config.ts exists
        run: |
          if [ ! -f tailwind.config.ts ]; then
            echo "ERROR: tailwind.config.ts not found"
            exit 1
          fi
      
      - name: Verify types in devDependencies
        run: |
          node -e "
          const pkg = require('./package.json');
          const types = ['@types/bcryptjs', '@types/node', '@types/react', '@types/react-dom'];
          const inDeps = types.filter(t => pkg.dependencies[t]);
          if (inDeps.length > 0) {
            console.error('ERROR: Types in dependencies:', inDeps);
            process.exit(1);
          }
          const notInDevDeps = types.filter(t => !pkg.devDependencies[t]);
          if (notInDevDeps.length > 0) {
            console.error('ERROR: Types missing from devDependencies:', notInDevDeps);
            process.exit(1);
          }
          console.log('✓ All types correctly in devDependencies');
          "
      
      - name: Check critical build tools in dependencies
        run: |
          node -e "
          const pkg = require('./package.json');
          const critical = ['typescript', 'tailwindcss', '@tailwindcss/postcss', 'lightningcss', 'next-sitemap'];
          const missing = critical.filter(t => !pkg.dependencies[t]);
          if (missing.length > 0) {
            console.error('ERROR: Critical build tools missing from dependencies:', missing);
            process.exit(1);
          }
          console.log('✓ All critical build tools in dependencies');
          "
      
      - name: Verify package-lock.json sync
        run: |
          npm install --dry-run
          npm ci --verify || true
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install and test build
        run: |
          npm ci
          npm run build
```

---

### 3.3 Pre-commit Hooks — Husky

Criar `.husky/pre-commit`:

```bash
#!/bin/sh

echo "🔍 Validating build config..."

# Check tailwind.config exists
if [ ! -f tailwind.config.ts ]; then
  echo "❌ ERROR: tailwind.config.ts not found"
  exit 1
fi

# Check types in devDependencies
node -e "
const pkg = require('./package.json');
const types = ['@types/bcryptjs', '@types/node', '@types/react', '@types/react-dom'];
const inDeps = types.filter(t => pkg.dependencies[t]);
if (inDeps.length > 0) {
  console.error('❌ ERROR: Types in dependencies:', inDeps);
  process.exit(1);
}
"

echo "✅ Build config validation passed"
exit 0
```

---

### 3.4 Validação de Commit Message

Padrão para commits de fix de dependencies:

❌ **NÃO ACEITAR:**
```
"fix: move X to dependencies"
```

✅ **ACEITAR:**
```
"fix: move X to dependencies — required during Vercel build (npm ci) because used in next build step"
```

Verificar no CI que commit message justifica a mudança.

---

## PARTE 4: Rollback Plan

Se todos os fixes acima não resolverem o build:

### 4.1 Último Estado Bom Conhecido

```bash
# Último commit que passou build com sucesso:
# (executar `git log --all --oneline` para encontrar)

git log --all --oneline | grep -i "build\|fix" | head -20
```

### 4.2 Revert Seguro

```bash
# Se build está quebrado, revert para último estado bom
# Exemplo: se commit abc123 foi o último que passou

git revert abc123..HEAD  # Reverte range de commits
git push origin main

# Esperar Vercel rebuild
```

### 4.3 Atomic Fixup

```bash
# Se precisa fazer fix incremental:
# 1. Create feature branch
git checkout -b fix/build-reliability

# 2. Apply each fix individually with validation
# Commit 1: Create tailwind.config.ts
# Commit 2: Fix types
# Commit 3: Regenerate lock
# Commit 4: Test locally + push

# 5. Verify each step
npm ci && npm run build

# 6. Push e merge quando build passa
```

---

## PARTE 5: Validação do Fix

### 5.1 Checklist de Validação Local

Após aplicar todos os fixes:

- [ ] `tailwind.config.ts` existe no raiz
- [ ] `npm ci` executa sem erros
- [ ] `npm run build` passa (next build)
- [ ] `npm run dev` funciona (next dev)
- [ ] Nenhum erro de "Cannot find module '@tailwindcss/postcss'"
- [ ] CSS é compilado corretamente (verificar no navegador)
- [ ] TypeScript type checking passa (`npx tsc --noEmit`)
- [ ] Nenhum warning de missing dependencies

### 5.2 Checklist de Validação Vercel

Após push:

- [ ] Trigger manual deploy no Vercel
- [ ] Build log não tem avisos de dependencies
- [ ] Build completa em menos de 5 minutos
- [ ] Vercel preview URL carrega sem erros de CSS
- [ ] Inspeccionar DevTools → Network → CSS carregou corretamente

---

## PARTE 6: Documentação Futura

### 6.1 README.md — Seção de Build

Adicionar ao README:

```markdown
## Build & Deployment

### Package.json Schema

Este projeto segue um schema rigoroso de dependencies:

- **dependencies**: Runtime libraries + build tools necessários no Vercel
- **devDependencies**: Type definitions + dev-only tools
- **optionalDependencies**: Nunca (plataforma-específicos causam problemas)

Veja [BUILD_RELIABILITY_PLAN.md](./BUILD_RELIABILITY_PLAN.md) para o schema completo.

### Validação Local

Antes de commit:
```bash
npm ci
npm run build
npm run lint
```

### Conhecidos problemas de Build

- Tailwind CSS v4 requer `tailwind.config.ts` — não deve ser removido
- Vercel usa `npm ci`, não instala devDependencies — ferramentas de build devem estar em dependencies
```

---

## PARTE 7: Sumário de Ações

### Immediate (Esta semana)

- [ ] Aplicar todos os fixes da PARTE 2 (Checklist)
- [ ] Testar build local (`npm ci && npm run build`)
- [ ] Commit + push + validar Vercel

### Short-term (Próxima semana)

- [ ] Implementar CI/CD checks (GitHub Actions)
- [ ] Implementar pre-commit hooks (Husky)
- [ ] Documentar no README

### Long-term (Q3)

- [ ] Rever decisão de usar Tailwind CSS v4 (pode considerar v3 se problemas persistirem)
- [ ] Considerar usar esbuild ou Turbopack de forma explícita
- [ ] Monitorar releases do Next.js para melhor suporte a Tailwind v4

---

## Conclusão

O vstack-site está preso em ciclo de "symptom fixing" porque a causa raiz nunca foi identificada. Este plano oferece:

1. **Diagnóstico completo** — Problema é falta de `tailwind.config.ts` + dependencies incorretas
2. **Solução imediata** — Fixes em ordem crítica, testáveis localmente
3. **Prevenção futura** — CI/CD checks + pre-commit hooks + schema documentado
4. **Escalabilidade** — Quando novos membros adicionarem dependências, saberão exatamente onde colocar

**Tempo esperado para resolver:** ~30 minutos (criar config, mover types, regenerar lock, testar, commit)
