# 🚀 Deploy Rápido - V-STACK SOLUTIONS

## Pré-requisitos
- [ ] Conta no GitHub
- [ ] Conta no Vercel (https://vercel.com)
- [ ] Domínio vstack-solutions.com.br já registrado

---

## 📦 Passo 1: Preparar Repositório GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar remote
git remote add origin https://github.com/Vvs2705/vstack-site.git

# Commit e push
git add .
git commit -m "feat: projeto completo pronto para deploy"
git push -u origin main
```

---

## 🌐 Passo 2: Deploy no Vercel

### 2.1. Conectar Repositório
1. Acessar https://vercel.com
2. Clicar em "Add New Project"
3. Importar repositório GitHub: `Vvs2705/vstack-site`
4. Configurações automáticas detectadas ✅

### 2.2. Adicionar Variáveis de Ambiente
Antes de fazer deploy, adicionar no Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://vstack-solutions.com.br
DATABASE_URL=postgresql://...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
OPENAI_API_KEY=sk-...
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=contato@vstack-solutions.com.br
ADMIN_JWT_SECRET=seu_secret_aqui_min_32_chars
```

### 2.3. Deploy
- Clicar em "Deploy"
- Aguardar 2-5 minutos
- Site estará disponível em: `https://vstack-site-xxx.vercel.app`

---

## 🌍 Passo 3: Configurar Domínio

### 3.1. No Vercel
1. Ir em Settings > Domains
2. Adicionar: `vstack-solutions.com.br`
3. Copiar os registros DNS fornecidos

### 3.2. No Registro.br
Adicionar registros DNS:

**Tipo A:**
```
Host: @
Tipo: A
Valor: 76.76.21.21
```

**Tipo CNAME:**
```
Host: www
Tipo: CNAME
Valor: cname.vercel-dns.com
```

**Aguardar:** 1-2 horas para propagação

---

## 🗄️ Passo 4: Configurar Serviços Externos

### 4.1. Banco de Dados (Supabase)
1. Criar conta: https://supabase.com
2. Criar projeto
3. Copiar `DATABASE_URL`
4. Adicionar no Vercel
5. Executar: `npx prisma migrate deploy`

### 4.2. Redis (Upstash)
1. Criar conta: https://upstash.com
2. Criar database (região: São Paulo)
3. Copiar URL e Token
4. Adicionar no Vercel

### 4.3. Email (Resend)
1. Criar conta: https://resend.com
2. Adicionar domínio
3. Configurar DNS (SPF, DKIM)
4. Criar API Key
5. Adicionar no Vercel

---

## ✅ Passo 5: Validar Deploy

### Testar URLs:
- [ ] https://vstack-solutions.com.br
- [ ] https://vstack-solutions.com.br/contato
- [ ] https://vstack-solutions.com.br/cotacao
- [ ] https://vstack-solutions.com.br/solucoes
- [ ] https://vstack-solutions.com.br/sobre
- [ ] https://vstack-solutions.com.br/faq
- [ ] https://vstack-solutions.com.br/envie-sua-dor
- [ ] https://vstack-solutions.com.br/sitemap.xml
- [ ] https://vstack-solutions.com.br/robots.txt

### Testar Funcionalidades:
- [ ] Formulário de contato
- [ ] Formulário de cotação
- [ ] Formulário "Envie sua dor"
- [ ] Chat widget
- [ ] Cookie banner

---

## 📊 Passo 6: SEO e Monitoramento

### Google Search Console
1. Adicionar propriedade: https://search.google.com/search-console
2. Verificar domínio
3. Enviar sitemap: `https://vstack-solutions.com.br/sitemap.xml`
4. Solicitar indexação das páginas principais

### Google Analytics (Opcional)
1. Criar propriedade GA4
2. Copiar Measurement ID
3. Adicionar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no Vercel

---

## 🎯 Checklist Final

- [ ] Deploy concluído no Vercel
- [ ] Domínio configurado e funcionando
- [ ] Todas as 7 páginas acessíveis
- [ ] Formulários funcionando
- [ ] Chat widget funcionando
- [ ] Sitemap acessível
- [ ] Robots.txt acessível
- [ ] Google Search Console configurado
- [ ] SSL ativo (HTTPS)
- [ ] Performance > 90 (PageSpeed)

---

## 🆘 Problemas Comuns

### Build Falha
```bash
# Limpar e rebuildar localmente
rm -rf .next node_modules
npm install
npm run build
```

### Domínio não funciona
- Aguardar 24-48h para propagação DNS
- Verificar em: https://dnschecker.org/

### Erro 500
- Verificar logs no Vercel Dashboard
- Verificar variáveis de ambiente
- Verificar conexão com banco de dados

---

## 📞 Suporte

**Documentação Completa:** `docs/DEPLOY.md`
**Vercel Docs:** https://vercel.com/docs
**Next.js Docs:** https://nextjs.org/docs

---

**Tempo Estimado:** 30-60 minutos (excluindo propagação DNS)
**Status:** Pronto para Deploy 🚀
