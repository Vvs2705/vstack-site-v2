# Build Fix Checklist — vstack-site

**Data Início:** 2026-05-05  
**Status:** [ ] Em Progresso | [x] Pronto para Execução  
**Responsável:** _________________

---

## PRÉ-EXECUÇÃO

- [ ] Li EXECUTIVE_SUMMARY.md
- [ ] Li FIX_EXECUTION_GUIDE.md
- [ ] Tenho terminal aberto em: `C:\Users\VINICIUS\Videos\MEUS PROJETOS\vstack-site`
- [ ] Tenho editor aberto (VS Code/similar)
- [ ] Backup local (commit atual está safe):
  ```bash
  git status  # Deve estar limpo
  ```

---

## PASSO 1: Criar tailwind.config.ts

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### Criar arquivo

- [ ] Criar novo arquivo em raiz: `tailwind.config.ts`
- [ ] Conteúdo exato:
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

### Validação

- [ ] Arquivo existe: `ls -la tailwind.config.ts` ✓
- [ ] Não há erros TypeScript no arquivo (verificar no editor)

---

## PASSO 2: Corrigir package.json (Mover Types)

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### Opção A: Manual (recomendado para verificação)

- [ ] Abrir `package.json` em editor
- [ ] Encontrar seção `"dependencies"` (perto da linha 16)
- [ ] Remover estas 4 linhas:
  - [ ] `"@types/bcryptjs": "^2.4.6",`
  - [ ] `"@types/node": "^20",`
  - [ ] `"@types/react": "^19",`
  - [ ] `"@types/react-dom": "^19",`

- [ ] Encontrar seção `"devDependencies"` (perto da linha 37)
- [ ] Adicionar estas 4 linhas (se não existirem):
  ```json
  "@types/bcryptjs": "^2.4.6",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  ```

- [ ] Salvar arquivo

### Opção B: Automática (apenas se confortável com npm)

```bash
npm uninstall @types/bcryptjs @types/node @types/react @types/react-dom
npm install --save-dev @types/bcryptjs @types/node @types/react @types/react-dom
```

- [ ] Comando executado sem erros

### Validação

- [ ] Verificar tipos em dependencies: 
  ```bash
  grep -A2 '"@types/bcryptjs"' package.json
  ```
  Deve estar em `devDependencies` ✓

---

## PASSO 3: Regenerar package-lock.json

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### Executar

```bash
rm package-lock.json
npm install --package-lock-only
```

- [ ] Comando completou sem erros
- [ ] Output: `added X packages` (ou similar)

### Validação

- [ ] Arquivo regenerado: `ls -la package-lock.json` (data recente) ✓
- [ ] Tipos não em dependencies:
  ```bash
  grep '"dependencies"' package-lock.json | head -20
  ```
  Não deve conter `@types/` ✓

---

## PASSO 4: Teste Local (CRÍTICO)

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### 4.1 Limpar Cache

```bash
rm -rf .next
rm -rf node_modules
```

- [ ] Diretórios deletados ✓

### 4.2 Fresh Install (como Vercel)

```bash
npm ci
```

- [ ] Instalação completou sem erros
- [ ] Output: `added X packages` ✓
- [ ] Não há mensagens de `ERR!` ou `WARN` críticas

### 4.3 Build Test (CRÍTICO)

```bash
npm run build
```

**CRITÉRIO DE SUCESSO:** Output deve conter:
- [ ] `✓ Compiled successfully`
- [ ] Nenhuma mensagem de erro vermelho
- [ ] Build summary com routes listadas
- [ ] Tempo total (Ex: `Finished in 45.3s`)

**SE FALHAR:**
- [ ] Anotar mensagem de erro exata
- [ ] Voltar ao PASSO 1 ou consultar BUILD_FAILURE_ANALYSIS.md
- [ ] **NÃO CONTINUAR** sem que este passo passe

### 4.4 Dev Test

```bash
npm run dev
```

- [ ] Server iniciou: "▲ Next.js 16.2.4"
- [ ] URL: "http://localhost:3000"
- [ ] Abrir navegador e verificar:
  - [ ] Página carrega
  - [ ] Nenhuma mensagem vermelha no console (F12 → Console)
  - [ ] CSS foi aplicado (cores corretas, não branco/preto padrão)
  - [ ] Nenhum erro de módulos

**SE ERRO:**
- [ ] Parar server (Ctrl+C)
- [ ] Voltar ao PASSO 1
- [ ] **NÃO CONTINUAR** sem que este passo passe

- [ ] Parar server: Ctrl+C ✓

---

## PASSO 5: Git Commit

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### 5.1 Verificar Status

```bash
git status
```

- [ ] Deve mostrar:
  - [ ] `modified: package.json`
  - [ ] `modified: package-lock.json`
  - [ ] `Untracked files: tailwind.config.ts`

### 5.2 Add Arquivos

```bash
git add package.json package-lock.json tailwind.config.ts
```

### 5.3 Verificar Staging

```bash
git status
```

- [ ] Deve mostrar em verde (staged for commit)

### 5.4 Criar Commit

```bash
git commit -m "fix: add missing tailwind.config.ts and move types to devDependencies

- Create tailwind.config.ts with content paths for Turbopack CSS processing
- Move @types/* from dependencies to devDependencies (should not ship)
- Regenerate package-lock.json for consistency

This fixes 'Cannot find module @tailwindcss/postcss' errors in Turbopack builds.
Turbopack requires explicit Tailwind config and correct dependency classification."
```

- [ ] Commit criado com sucesso (não retorna erro)

### 5.5 Verificar

```bash
git log --oneline | head -1
```

- [ ] Seu novo commit aparece no topo ✓

---

## PASSO 6: Push para Vercel

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### 6.1 Push

```bash
git push origin main
```

- [ ] Push completo (sem erros de permissão)
- [ ] Output mostra branch atualizada

### 6.2 Monitorar Vercel

1. Ir para: https://vercel.com/vstacksolution/vstack-site
2. Clicar em "Deployments"
3. Ver seu commit no topo

- [ ] Build iniciou em Vercel (refresh page se preciso)
- [ ] Build status: `Building...` → `Success ✓` ou `Failed ✗`

**ESPERADO:**
- [ ] `✓ Compile successful` (ou similar)
- [ ] `✓ Production preview ready`
- [ ] Preview URL disponível

**SE FALHAR:**
- [ ] Clicar em "View logs"
- [ ] Copiar erro
- [ ] Parar aqui — consultar BUILD_FAILURE_ANALYSIS.md com erro específico

### 6.3 Validação (SE BUILD PASSOU)

```bash
# Copiar Preview URL de Vercel
# Abrir em navegador
```

- [ ] Preview carrega
- [ ] Nenhum erro CSS
- [ ] Tema funciona (light/dark toggle)
- [ ] Layout correto (não quebrado)

---

## PASSO 7: Validação Final

**Responsável:** _________________  
**Horário início:** ___:___ **Horário fim:** ___:___

### Checklist de Sucesso Completo

- [ ] ✅ `tailwind.config.ts` criado e validado
- [ ] ✅ `package.json` tipos em devDependencies
- [ ] ✅ `package-lock.json` regenerado
- [ ] ✅ `npm ci && npm run build` passou localmente
- [ ] ✅ `npm run dev` funciona sem erros CSS
- [ ] ✅ Git commit criado
- [ ] ✅ Push para origin feito
- [ ] ✅ Vercel build passou
- [ ] ✅ Preview URL carrega corretamente

### Se Todos ✅

**FIX COMPLETO!** 🎉

Próximos passos (opcionais, próximas semanas):
- [ ] Implementar CI/CD checks (BUILD_RELIABILITY_PLAN.md)
- [ ] Implementar pre-commit hooks
- [ ] Atualizar README com schema de package.json

---

## TROUBLESHOOTING RÁPIDO

| Problema | Solução | Passo |
|----------|---------|-------|
| `npm ci` falha | Tentar `npm install`, revisar PASSO 2-3 | 4.2 |
| `npm run build` falha | Ler erro completo, buscar em BUILD_FAILURE_ANALYSIS.md | 4.3 |
| CSS não carrega em dev | Limpar cache (.next, node_modules), refazer PASSO 4 | 4.4 |
| Vercel ainda falha | Clicar em "View logs", copiar erro, consultar plano | 6.2 |
| Git commit falha | Rodar `git status`, garantir arquivos foram adicionados | 5 |

---

## TEMPOS DECORRIDOS

Preencher após execução:

| Passo | Tempo Planejado | Tempo Real | Notas |
|-------|---|---|---|
| 1. tailwind.config.ts | 2 min | ___ min | |
| 2. Mover types | 5 min | ___ min | |
| 3. Regenerar lock | 3 min | ___ min | |
| 4. Teste local | 15 min | ___ min | |
| 5. Commit | 2 min | ___ min | |
| 6. Push Vercel | 5 min | ___ min | |
| 7. Validação | 5 min | ___ min | |
| **TOTAL** | **37 min** | **___ min** | |

---

## ASSINATURA DE CONCLUSÃO

Após todos os steps ✅:

**Nome:** _________________________  
**Data:** _________________________  
**Hora de Conclusão:** _________________________  
**Build Status:** [ ] Success [ ] Pending [ ] Failed  
**Preview URL Funciona:** [ ] Sim [ ] Não  

**Observações:**
```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

---

**Parabéns! Você resolveu o ciclo de build repetitivo!** 🚀
