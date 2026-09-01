# 🏗️ V-STACK — SETUP BASE (executar UMA VEZ, escopo global)

> **Instrução para o agente (Claude Code / Cowork):** Você é responsável por preparar o ambiente global de desenvolvimento do Vinicius (V-STACK). Execute as fases abaixo EM ORDEM, com verificação em loop fechado: nenhuma fase é considerada concluída sem o teste de verificação passar. Se um comando falhar, diagnostique, corrija e re-execute antes de avançar. Ao final, gere um relatório do que foi instalado.

## Contexto
- SO: Windows + PowerShell (atenção: servidores MCP stdio via npx podem precisar de `cmd /c npx` na config manual)
- Stack padrão: FastAPI + PostgreSQL (backend), Next.js/React + TypeScript + Tailwind + shadcn/ui (frontend)
- Deploy: Vercel e Fly.io
- Ambiente de execução principal: Claude Code, com orquestrador multiagente (subagents via Task tool, agentes em `C:\Users\User\Videos\MEUS PROJETOS\AGENTES`)

## Regras de execução (loop fechado)
1. Antes de instalar qualquer coisa, verifique se já existe (`claude mcp list`, `/plugin`, `pip show`, `npm ls`).
2. Após cada instalação, execute o passo de verificação correspondente.
3. Se a documentação oficial divergir deste arquivo, a documentação oficial vence — consulte-a via web antes de rodar comandos que pareçam desatualizados.
4. Nunca exponha segredos em arquivos versionados. Use `.env` + `.gitignore`.

---

## FASE 1 — MCPs globais (escopo user)

### 1.1 Context7 (documentação atualizada por versão — reduz alucinação de API)
```bash
claude mcp add --transport http --scope user context7 https://mcp.context7.com/mcp
```
✅ Verificar: `claude mcp list` mostra context7 conectado; dentro da sessão, `/mcp` sem erros.

### 1.2 GitHub MCP oficial (opcional, se for gerenciar issues/PRs pelo agente)
```bash
claude mcp add --transport http --scope user github https://api.githubcopilot.com/mcp -H "Authorization: Bearer SEU_GITHUB_PAT"
```
✅ Verificar: pedir ao agente para listar repositórios de @Vvs2705.

### 1.3 shadcn MCP (instala componentes de registries direto pelo agente)
- Consulte a doc oficial em https://ui.shadcn.com/docs/mcp e siga o comando de init atual para o cliente Claude Code.
✅ Verificar: pedir ao agente "liste os componentes disponíveis no registry shadcn".

---

## FASE 2 — Plugins e Skills globais

### 2.1 Marketplace oficial Anthropic
```
/plugin marketplace add anthropics/claude-plugins-official
```

### 2.2 Ponytail (anti-over-engineering — filosofia "lazy senior dev")
```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail
```
✅ Verificar: `/ponytail-review` disponível como comando.

### 2.3 Superpowers (TDD, debugging, planos)
```
/plugin marketplace add obra/superpowers-marketplace
```
Instale o pacote principal quando solicitado.
✅ Verificar: `/brainstorm` e `/write-plan` disponíveis.

---

## FASE 3 — Registry de design V-STACK (GitHub Registry do shadcn)

Objetivo: criar o repositório `vstack-registry` que distribui o design system unificado (DESIGN.md, tokens, componentes compartilhados) para TODOS os produtos via `npx shadcn add`.

1. Crie um repositório público `Vvs2705/vstack-registry` com:
   - `registry.json` na raiz (schema: https://ui.shadcn.com/schema/registry.json)
   - Item `design-conventions` (type `registry:item`) distribuindo `DESIGN.md` → target `~/DESIGN.md`
   - Itens de componentes compartilhados (type `registry:ui`) conforme forem extraídos dos produtos
2. Valide o registry conforme a doc: https://ui.shadcn.com/docs/registry/github
3. Documente no README como cada produto consome: `npx shadcn@latest add @github/Vvs2705/vstack-registry/<item>`

✅ Verificar: instalar o item `design-conventions` em um projeto de teste e confirmar que o DESIGN.md foi copiado.

---

## FASE 4 — Segurança (aplicar depois em cada repo)

- GitHub Action `anthropics/claude-code-security-review` — revisão de segurança automática em PRs. Repositório: https://github.com/anthropics/claude-code-security-review
- Guardar este passo para os setups por projeto (cada um adiciona o workflow no seu `.github/workflows/`).

---

## FASE 5 — Relatório final
Gere um resumo em Markdown com: MCPs ativos (`claude mcp list`), plugins instalados, status do vstack-registry, e pendências. Salve como `~/vstack-setup-report.md`.
