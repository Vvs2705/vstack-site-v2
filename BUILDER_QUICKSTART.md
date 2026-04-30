# 🚀 Builder.io — Ativação em 5 Passos

## ✅ Pré-requisito: Preencher as chaves no .env.local

O arquivo `.env.local` já foi criado com o `BUILDER_PREVIEW_SECRET` gerado automaticamente.
Você só precisa adicionar a **API Key do Builder.io**.

---

## 📋 Passo 1: Obter API Key do Builder.io

1. **Acesse** https://builder.io e **crie uma conta gratuita**
2. **Crie um Space** chamado **"V-Stack Solutions"** (ou o nome que preferir)
3. Vá em **Settings → API Keys**
4. **Copie a "Public API Key"**
5. **Cole no arquivo `.env.local`**:
   ```bash
   NEXT_PUBLIC_BUILDER_API_KEY=COLE_SUA_CHAVE_AQUI
   ```

---

## 📦 Passo 2: Criar o Modelo "page" no Builder.io

1. No dashboard do Builder.io, vá em **Models → + Create Model**
2. Escolha **Page** como tipo
3. Configure:
   - **Name**: `page`
   - **Description**: Páginas editáveis da V-Stack Solutions
   - **Preview URL**: Deixe em branco por enquanto (vamos configurar no Passo 4)
4. Clique em **Create Model**

---

## 🌐 Passo 3: Iniciar Ambiente com Tunnel (ngrok)

O Builder.io precisa acessar seu ambiente local via HTTPS. Use o comando:

```bash
npm run dev:builder
```

Este comando irá:
- ✅ Iniciar o servidor Next.js na porta 3000
- ✅ Expor o localhost via ngrok automaticamente

**Aguarde o ngrok gerar uma URL como:**
```
https://abc123.ngrok.io
```

⚠️ **IMPORTANTE**: Copie essa URL HTTPS — você usará no próximo passo!

---

## 🔗 Passo 4: Configurar Preview URL no Builder.io

1. No Builder.io, vá em **Models → page → Edit**
2. Na seção **Preview URL**, configure:

```
https://SEU-NGROK.ngrok.io/api/enable-draft?secret=493a466a161e32f4113368230b6b6a2de79bf25aef49707f0880049dcd62ebd7&redirect={url}
```

**Substitua `SEU-NGROK.ngrok.io`** pela URL gerada pelo ngrok no Passo 3.

**Exemplo completo:**
```
https://abc123.ngrok.io/api/enable-draft?secret=493a466a161e32f4113368230b6b6a2de79bf25aef49707f0880049dcd62ebd7&redirect={url}
```

3. Clique em **Save**

---

## 🎨 Passo 5: Criar e Editar Sua Primeira Página

1. No Builder.io, vá em **Content → + New → page**
2. Configure a URL da página (ex: `/teste-builder`)
3. Clique em **Create**
4. O **editor visual** abrirá automaticamente
5. **Arraste e solte componentes** do painel esquerdo:
   - ✅ Hero Section
   - ✅ Tech Strip
   - ✅ Pillars Section
   - ✅ ContaFlow Section
   - ✅ CTA Section
6. **Edite os textos, cores e imagens** diretamente no editor
7. Clique em **Publish** quando terminar

---

## 🎯 Componentes Disponíveis

Os seguintes componentes da V-STACK foram registrados e estão prontos para uso:

| Componente | Descrição |
|------------|-----------|
| **Hero Section** | Seção principal com título, subtítulo e CTAs |
| **Tech Strip** | Faixa de tecnologias/stack |
| **Pillars Section** | Pilares do negócio com ícones |
| **ContaFlow Section** | Seção dedicada ao produto ContaFlow |
| **CTA Section** | Call-to-action com botões |

---

## 🔄 Alternativa Mais Simples (Sem Draft Mode)

Se quiser testar mais rápido **sem configurar o Draft Mode**, use como Preview URL:

```
https://SEU-NGROK.ngrok.io?builder.preview=page
```

Isso funciona, mas você não verá as alterações em tempo real — precisará recarregar a página manualmente.

---

## 🐛 Troubleshooting

### ❌ Problema: "Token inválido" ao acessar preview
**Solução**: Verifique se o `BUILDER_PREVIEW_SECRET` no `.env.local` corresponde ao configurado na Preview URL.

### ❌ Problema: "Página não encontrada no Builder"
**Solução**: Certifique-se de criar o modelo "page" no Builder.io (Passo 2).

### ❌ Problema: "Iframe bloqueado"
**Solução**: Já resolvido! O CSP foi configurado corretamente no `next.config.ts`.

### ❌ Problema: "Builder.io não consegue acessar localhost"
**Solução**: Use o comando `npm run dev:builder` para expor via ngrok.

### ❌ Problema: "Componentes não aparecem no Builder.io"
**Solução**: 
1. Verifique se o servidor Next.js está rodando
2. Limpe o cache do Builder.io (Ctrl+Shift+R no navegador)
3. Reinicie o servidor: `npm run dev:builder`

---

## 📚 Recursos Adicionais

- **Documentação Oficial**: https://www.builder.io/c/docs/developers
- **API Reference**: https://www.builder.io/c/docs/api-reference
- **Ngrok Docs**: https://ngrok.com/docs
- **Next.js Draft Mode**: https://nextjs.org/docs/app/building-your-application/configuring/draft-mode

---

## ✅ Checklist de Validação

Antes de começar a editar, verifique:

- [ ] `NEXT_PUBLIC_BUILDER_API_KEY` preenchido no `.env.local`
- [ ] Modelo `page` criado no Builder.io
- [ ] Comando `npm run dev:builder` rodando
- [ ] URL do ngrok copiada (ex: `https://abc123.ngrok.io`)
- [ ] Preview URL configurada no Builder.io com o secret correto
- [ ] Primeira página criada no Builder.io

---

## 🎉 Pronto!

Agora você pode editar visualmente a landing page da V-STACK SOLUTIONS diretamente no Builder.io, com preview em tempo real!

**Dúvidas?** Consulte o arquivo `BUILDER_IO_SETUP.md` para documentação técnica completa.
