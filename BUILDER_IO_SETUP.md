# 🎨 Guia de Integração Builder.io - V-STACK SOLUTIONS

## ✅ Status da Integração

A integração com Builder.io está **COMPLETA** e pronta para uso. Todos os componentes necessários foram configurados.

---

## 📋 Pré-requisitos Concluídos

- ✅ `@builder.io/react` v9.3.0 instalado
- ✅ `@builder.io/widgets` instalado
- ✅ Componentes customizados registrados (HeroSection, TechStrip, Pillars, ContaFlow, CTA)
- ✅ Draft Mode configurado para preview em tempo real
- ✅ Middleware configurado para permitir rotas do Builder
- ✅ CSP (Content Security Policy) configurado para permitir iframe do Builder.io
- ✅ Rotas de API criadas: `/api/enable-draft` e `/api/disable-draft`

---

## 🚀 Passos para Ativar o Builder.io

### 1️⃣ Configurar Variáveis de Ambiente

Edite o arquivo `.env.local` e configure as seguintes variáveis:

```bash
# Builder.io - Public API Key
# 1. Acesse https://builder.io e faça login
# 2. Vá em Settings → API Keys
# 3. Copie a "Public API Key"
NEXT_PUBLIC_BUILDER_API_KEY=sua_chave_publica_aqui

# Builder.io - Preview Secret
# Gere um token aleatório seguro (ex: openssl rand -hex 32)
BUILDER_PREVIEW_SECRET=seu_secret_aleatorio_para_preview_aqui
```

**Gerar o Preview Secret:**
```bash
# No terminal, execute:
openssl rand -hex 32
# Ou use um gerador online: https://www.random.org/strings/
```

---

### 2️⃣ Expor o Localhost com Ngrok

⚠️ **IMPORTANTE**: Builder.io é um serviço em nuvem e **NÃO consegue acessar** `http://localhost:3000` diretamente.

Você precisa expor seu ambiente local publicamente usando um tunnel:

#### Opção A: Ngrok (Recomendado)

```bash
# Instalar ngrok globalmente (se ainda não tiver)
npm install -g ngrok

# Iniciar o servidor Next.js
npm run dev

# Em outro terminal, expor a porta 3000
ngrok http 3000
```

Você verá uma saída como:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

**Copie a URL HTTPS** (ex: `https://abc123.ngrok.io`) - você usará isso no Builder.io.

#### Opção B: Localtunnel

```bash
# Instalar localtunnel
npm install -g localtunnel

# Expor a porta 3000
lt --port 3000
```

#### Opção C: Deploy de Preview (Vercel/Netlify)

Se preferir, faça deploy de uma branch de preview no Vercel ou Netlify e use essa URL.

---

### 3️⃣ Configurar o Builder.io Dashboard

1. **Acesse o Builder.io**: https://builder.io
2. **Crie um Space** (se ainda não tiver)
3. **Configure a Preview URL**:
   - Vá em **Settings → Preview URL**
   - Configure como:
     ```
     https://<sua-url-ngrok>/api/enable-draft?secret=<BUILDER_PREVIEW_SECRET>&redirect={url}
     ```
   - Substitua:
     - `<sua-url-ngrok>` pela URL do ngrok (ex: `abc123.ngrok.io`)
     - `<BUILDER_PREVIEW_SECRET>` pelo secret que você gerou no passo 1

   **Exemplo completo:**
   ```
   https://abc123.ngrok.io/api/enable-draft?secret=a1b2c3d4e5f6&redirect={url}
   ```

4. **Criar o Model "page"**:
   - Vá em **Models → + New Model**
   - Nome: `page`
   - Type: `Page`
   - URL Pattern: `/*` (para capturar todas as rotas)

---

### 4️⃣ Testar a Integração

1. **Reinicie o servidor Next.js** (necessário após alterar `.env.local`):
   ```bash
   npm run dev
   ```

2. **Certifique-se que o ngrok está rodando** e aponte para a porta 3000

3. **No Builder.io Dashboard**:
   - Clique em **+ New** → **Page**
   - Escolha uma URL (ex: `/teste-builder`)
   - Você deverá ver o preview do seu site carregando no iframe
   - Arraste e solte os componentes registrados:
     - Hero Section
     - Tech Strip
     - Pillars Section
     - ContaFlow Section
     - CTA Section

4. **Edite os componentes** e veja as alterações em tempo real!

---

## 🎯 Componentes Disponíveis no Builder.io

Os seguintes componentes da V-STACK foram registrados e estão disponíveis para arrastar e soltar:

### 1. **Hero Section**
- Badge, Headline, Subtext
- CTAs primário e secundário

### 2. **Tech Strip**
- Label e tags de tecnologias

### 3. **Pillars Section**
- Seção de pilares com ícones, títulos e descrições

### 4. **ContaFlow Section**
- Seção dedicada ao produto ContaFlow
- Eyebrow, badge, headline, descrição e features

### 5. **CTA Section**
- Call-to-action com headline, descrição e botões

---

## 🔧 Rotas da API

### Habilitar Draft Mode (Preview)
```
GET /api/enable-draft?secret=<BUILDER_PREVIEW_SECRET>&redirect=<url>
```

### Desabilitar Draft Mode
```
GET /api/disable-draft?redirect=<url>
```

---

## 🛡️ Segurança

### Content Security Policy (CSP)
O `next.config.ts` foi configurado para permitir:
- Scripts e estilos do `cdn.builder.io`
- Conexões com `*.builder.io`
- Iframe do Builder.io via `frame-ancestors`

### Middleware
O middleware foi configurado para **NÃO aplicar rate limiting** nas rotas:
- `/api/enable-draft`
- `/api/disable-draft`

Isso garante que o Builder.io consiga acessar essas rotas sem bloqueios.

---

## 📝 Estrutura de Arquivos

```
vstack-site/
├── .env.local                          # Variáveis de ambiente (API keys)
├── next.config.ts                      # CSP configurado para Builder.io
├── middleware.ts                       # Excluir rotas do Builder do rate limiting
├── src/
│   ├── app/
│   │   ├── (builder)/
│   │   │   └── [...slug]/
│   │   │       └── page.tsx            # Página dinâmica do Builder (com Draft Mode)
│   │   └── api/
│   │       ├── enable-draft/
│   │       │   └── route.ts            # Habilitar Draft Mode
│   │       └── disable-draft/
│   │           └── route.ts            # Desabilitar Draft Mode
│   ├── components/
│   │   └── builder/
│   │       ├── builder-registry.ts     # Registro de componentes customizados
│   │       └── BuilderRenderer.tsx     # Renderizador do Builder
│   └── lib/
│       └── builder.ts                  # Configuração da API key
```

---

## 🐛 Troubleshooting

### Problema: "Página não encontrada no Builder"
**Solução**: Certifique-se de criar um modelo "page" no Builder.io dashboard.

### Problema: "Token inválido" ao acessar preview
**Solução**: Verifique se o `BUILDER_PREVIEW_SECRET` no `.env.local` corresponde ao configurado na Preview URL do Builder.io.

### Problema: "Iframe bloqueado" ou "X-Frame-Options DENY"
**Solução**: Já resolvido! O `X-Frame-Options: DENY` foi removido e substituído por `frame-ancestors` no CSP.

### Problema: "Builder.io não consegue acessar localhost"
**Solução**: Use ngrok ou localtunnel para expor seu localhost publicamente. Builder.io é um serviço em nuvem e não consegue acessar `localhost` diretamente.

### Problema: "Componentes não aparecem no Builder.io"
**Solução**: 
1. Verifique se `builder-registry.ts` está sendo importado no `BuilderRenderer.tsx`
2. Reinicie o servidor Next.js após fazer alterações
3. Limpe o cache do Builder.io (Ctrl+Shift+R no navegador)

---

## 📚 Recursos Adicionais

- **Documentação Oficial**: https://www.builder.io/c/docs/developers
- **API Reference**: https://www.builder.io/c/docs/api-reference
- **Ngrok Docs**: https://ngrok.com/docs
- **Next.js Draft Mode**: https://nextjs.org/docs/app/building-your-application/configuring/draft-mode

---

## ✅ Checklist de Validação

Antes de considerar a integração completa, verifique:

- [ ] `@builder.io/react` instalado (não `@builder.io/sdk`)
- [ ] `@builder.io/widgets` instalado
- [ ] `NEXT_PUBLIC_BUILDER_API_KEY` definido no `.env.local`
- [ ] `BUILDER_PREVIEW_SECRET` definido no `.env.local`
- [ ] Modelo `page` criado no dashboard do Builder.io
- [ ] Ngrok rodando e URL HTTPS configurada no Builder.io
- [ ] Preview URL configurada com o secret correto
- [ ] Draft Mode funcionando (rotas `/api/enable-draft` e `/api/disable-draft`)
- [ ] Componentes registrados aparecem no Builder.io
- [ ] CSP permite `frame-ancestors *.builder.io`
- [ ] Middleware não bloqueia rotas `/api/enable-draft` e `/api/disable-draft`
- [ ] Servidor Next.js reiniciado após alterações no `.env.local`

---

## 🎉 Pronto!

Agora você pode editar visualmente a landing page da V-STACK SOLUTIONS diretamente no Builder.io, com preview em tempo real e sem precisar tocar no código!

**Dúvidas?** Consulte a documentação oficial do Builder.io ou abra uma issue no repositório.
