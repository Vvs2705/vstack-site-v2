# Fix Execution Guide — vstack-site Build Failures

**Tempo Estimado:** 30-45 minutos  
**Dificuldade:** Baixa (3 passos principais)  
**Pré-requisitos:** Git, npm, Terminal/Git Bash

---

## PASSO 1: Criar tailwind.config.ts (CRÍTICO)

### 1.1 Criar arquivo

```bash
cd C:\Users\VINICIUS\Videos\MEUS PROJETOS\vstack-site
```

### 1.2 Criar o arquivo com conteúdo

Copiar este bloco exato e colar em novo arquivo `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

export default config
```

### 1.3 Validação

```bash
# Verificar que arquivo foi criado
ls -la tailwind.config.ts

# Deve retornar algo como:
# -rw-r--r-- 1 VINICIUS ... tailwind.config.ts
```

---

## PASSO 2: Corrigir package.json (Mover Types)

### 2.1 Problema Atual

```json
"dependencies": {
  "@types/bcryptjs": "^2.4.6",    ✗ AQUI (errado)
  "@types/node": "^20",           ✗ AQUI (errado)
  "@types/react": "^19",          ✗ AQUI (errado)
  "@types/react-dom": "^19",      ✗ AQUI (errado)
}
"devDependencies": {
  // estes devem estar aqui
}
```

### 2.2 Solução

**Opção A: Manual (Seguro)**

1. Abrir `package.json`
2. Encontrar seção `"dependencies"` (linha ~16)
3. Remover estas 4 linhas:
   - `"@types/bcryptjs": "^2.4.6",`
   - `"@types/node": "^20",`
   - `"@types/react": "^19",`
   - `"@types/react-dom": "^19",`

4. Encontrar seção `"devDependencies"` (linha ~37)
5. Adicionar no final (antes do último `}`):
   ```json
   "@types/bcryptjs": "^2.4.6",
   "@types/node": "^20",
   "@types/react": "^19",
   "@types/react-dom": "^19",
   ```

**Opção B: Automática (via npm)**

```bash
# Remover de dependencies
npm uninstall @types/bcryptjs @types/node @types/react @types/react-dom

# Adicionar a devDependencies
npm install --save-dev @types/bcryptjs @types/node @types/react @types/react-dom
```

### 2.3 Validação

```bash
# Verificar que tipos saíram de dependencies
grep -A2 '"@types/bcryptjs"' package.json

# Deve estar na seção devDependencies, não dependencies
```

---

## PASSO 3: Regenerar package-lock.json

### 3.1 Executar Regeneração

```bash
# Remove o lock atual
rm package-lock.json

# Regenera baseado em package.json corrigido
npm install --package-lock-only
```

### 3.2 Validação

```bash
# Verificar que lock foi regenerado
ls -la package-lock.json

# Deve ter data/hora recente

# Verificar que tipos não estão em dependencies no lock
grep -A3 '"@types/bcryptjs"' package-lock.json

# Deve estar em devDependencies, não em root dependencies
```

---

## PASSO 4: Teste Local (Crítico)

### 4.1 Limpar Cache de Build

```bash
# Remover build anterior
rm -rf .next

# Remover node_modules (fresh install)
rm -rf node_modules
```

### 4.2 Fresh Install

```bash
# Instalar deps usando npm ci (como Vercel faz)
npm ci
```

**Output esperado:**
```
added 456 packages in 25s
```

Se houver erro, parar e revisar steps 1-3.

### 4.3 Testar Build

```bash
# Executar next build (mesmo que Vercel)
npm run build
```

**Output esperado:**
```
 ▲ Next.js 16.2.4
 - Local:        http://localhost:3000
 - Environments: .env.local

 ✓ Compiled successfully
 ✓ Linting
 ✓ Collecting page data
 ✓ Generating static pages (12/12)
 ✓ Collecting build traces

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
└ ✓ Other routes

Page Size  Total Size
...
```

Se houver **erro**, analisar:
- "Cannot find module '@tailwindcss/postcss'" → Volta ao PASSO 1
- "TypeScript error" → Volta ao PASSO 2
- Outro erro → Consultar BUILD_FAILURE_ANALYSIS.md

### 4.4 Testar Dev

```bash
# Iniciar servidor dev
npm run dev

# Deve abrir http://localhost:3000 sem erros CSS
```

Verificar no navegador:
- [ ] Página carrega sem erro de CSS
- [ ] Cores estão corretas (tema light/dark)
- [ ] Layout está correto (não quebrado)
- [ ] DevTools → Console sem erros de módulos

Se tudo OK, continuar ao PASSO 5.

---

## PASSO 5: Git Commit

### 5.1 Verificar Status

```bash
git status

# Deve retornar algo como:
# On branch main
# Changes not staged for commit:
#   modified:   package.json
#   modified:   package-lock.json
#   
# Untracked files:
#   tailwind.config.ts
```

### 5.2 Adicionar Arquivos

```bash
git add package.json package-lock.json tailwind.config.ts
```

### 5.3 Verificar Staging

```bash
git status

# Deve mostrar verde (staged for commit)
```

### 5.4 Criar Commit

```bash
git commit -m "fix: add missing tailwind.config.ts and move types to devDependencies

- Create tailwind.config.ts with content paths for Turbopack CSS processing
- Move @types/* from dependencies to devDependencies (should not ship to production)
- Regenerate package-lock.json for consistency with Vercel npm ci build

This fixes the 'Cannot find module @tailwindcss/postcss' error that was causing
repeated build failures. Turbopack requires explicit Tailwind config file and
correct dependency classification.

Fixes: 8+ build failures since commit e17ae2b"
```

### 5.5 Verificar Commit

```bash
git log --oneline | head -1

# Deve retornar o seu novo commit
```

---

## PASSO 6: Push para Vercel

### 6.1 Push para Origin

```bash
git push origin main
```

**Output esperado:**
```
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), ...

To github.com:vsouz009/vstack-site.git
   abc1234..def5678  main -> main
```

### 6.2 Monitorar Vercel

1. Ir para: https://vercel.com/vstacksolution/vstack-site
2. Clicar em "Deployments" ou "Latest Deployment"
3. Esperar build começar (pode levar 30-60s)

**Status esperado:**
```
Building... (2/3)
  ✓ Downloaded lambda for nodejs16.x
  ✓ Running build
  ✓ Build completed
  ✓ Created deployment
  ✓ Preview URL ready
```

### 6.3 Validação no Vercel

Se build passou:
- [ ] Vercel mostra checkmark ✓
- [ ] Preview URL disponível
- [ ] Clicar em Preview URL e verificar que carrega

Se build falhou:
- [ ] Clicar em "Build Logs"
- [ ] Procurar por erro específico
- [ ] Comparar com BUILD_FAILURE_ANALYSIS.md
- [ ] Ajustar e fazer novo commit

---

## PASSO 7: Validação Final

### 7.1 Production Preview

```bash
# Se Vercel build passou:
# 1. Clicar no Preview URL
# 2. Verificar que página carrega
# 3. Abrir DevTools F12 → Console → sem erros CSS
# 4. Verificar que tema light/dark funciona
```

### 7.2 Local Teardown

```bash
# Limpar locais (opcional, mas recomendado)
rm -rf .next
npm run build  # Re-build para cache local

# Agora pode iniciar npm run dev com confiança
npm run dev
```

---

## TROUBLESHOOTING

### Problema: "tailwind.config.ts not found" error local

**Solução:**
```bash
# Verificar que arquivo existe
ls -la tailwind.config.ts

# Se não existir, voltar ao PASSO 1
# Se existir, limpar cache e rebuildar
rm -rf .next node_modules
npm ci && npm run build
```

### Problema: Types ainda em dependencies após PASSO 2

**Solução:**
```bash
# Verificar package.json
grep '"@types' package.json

# Se ainda aparecer em "dependencies", remover manualmente

# Então regenerar lock
rm package-lock.json
npm install --package-lock-only
```

### Problema: npm ci falha em PASSO 4.2

**Solução:**
```bash
# Pode ser conflito de versão, usar npm install ao invés
rm -rf node_modules
npm install

# Se persistir, verificar que PASSOS 1-3 foram completos
# Especialmente package-lock.json sincronização
```

### Problema: Vercel ainda falha após push

**Solução:**
1. Ir para Vercel → Build Logs
2. Copiar mensagem de erro exata
3. Procurar em BUILD_FAILURE_ANALYSIS.md
4. Se não encontrar, criar issue com log completo

---

## CHECKLIST FINAL

Antes de considerar "DONE":

- [ ] `tailwind.config.ts` criado no raiz
- [ ] `package.json` tem types em devDependencies (não dependencies)
- [ ] `package-lock.json` foi regenerado
- [ ] `npm ci && npm run build` passou localmente
- [ ] `npm run dev` funciona sem erros CSS
- [ ] Git commit criado e pushed
- [ ] Vercel build passou
- [ ] Preview URL carrega corretamente
- [ ] Nenhum erro de CSS/módulos no console

Se todas as caixas estão checked, **FIX COMPLETO!**

---

## Próximas Ações

Após confirmar que build passou:

1. Implementar CI/CD checks (veja BUILD_RELIABILITY_PLAN.md)
2. Adicionar pré-commit hooks
3. Documentar no README
4. Compartilhar com equipe

---

## Tempo Decorrido

Anotar tempo em cada passo para otimização futura:

| Passo | Tempo Esperado | Tempo Real | Notas |
|-------|---|---|---|
| 1. Criar tailwind.config.ts | 2 min | | |
| 2. Mover types | 5 min | | |
| 3. Regenerar lock | 3 min | | |
| 4. Teste local | 15 min | | |
| 5. Commit | 2 min | | |
| 6. Push Vercel | 5 min | | |
| 7. Validação | 5 min | | |
| **TOTAL** | **37 min** | | |

---

**Boa sorte! Qualquer dúvida, consulte BUILD_FAILURE_ANALYSIS.md ou BUILD_RELIABILITY_PLAN.md**
