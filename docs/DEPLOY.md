# FASE 10 - Deploy Vercel - V Stack Solution

## 🎯 Objetivo
Realizar o deploy completo do site V Stack Solution no Vercel, configurar o domínio vstack-solution.com.br e preparar o ambiente de produção.

---

## 📋 Checklist de Deploy

### 1. Preparação de Imagens (Obrigatório)

#### Favicon
- [ ] Criar `public/favicon.ico` (32x32px)
- [ ] Formato: ICO
- [ ] Cor base: #F07028 (laranja V Stack)

#### Apple Touch Icon
- [ ] Criar `public/apple-touch-icon.png` (180x180px)
- [ ] Formato: PNG
- [ ] Fundo: #1E2535 (dark)
- [ ] Logo centralizado

#### PWA Icons
- [ ] Criar `public/icon-192.png` (192x192px)
- [ ] Criar `public/icon-512.png` (512x512px)
- [ ] Formato: PNG com transparência
- [ ] Logo V Stack centralizado

#### Open Graph Image
- [ ] Criar `public/og-image.png` (1200x630px)
- [ ] Formato: PNG ou JPG
- [ ] Conteúdo: Logo + Slogan "Transformação Digital com IA e Automação"
- [ ] Fundo: Gradiente #1E2535 com detalhes em #F07028

---

### 2. Configuração do Vercel

#### 2.1. Criar Conta/Projeto
1. [ ] Acessar https://vercel.com
2. [ ] Fazer login com GitHub
3. [ ] Clicar em "Add New Project"
4. [ ] Importar repositório: `Vvs2705/vstack-site` (ou criar novo)

#### 2.2. Configurações do Projeto
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

#### 2.3. Variáveis de Ambiente
Adicionar no Vercel Dashboard (Settings > Environment Variables):

```env
# Site
NEXT_PUBLIC_SITE_URL=https://vstack-solution.com.br

# Database (PostgreSQL - Supabase/Neon/Railway)
DATABASE_URL=postgresql://user:password@host:5432/vstack_db

# Redis (Upstash)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here

# OpenAI
OPENAI_API_KEY=sk-...

# Email (Resend)
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=contato@vstack-solution.com.br

# Admin Auth
ADMIN_JWT_SECRET=your_secure_secret_min_32_chars
ADMIN_JWT_EXPIRES_IN=7d

# Google (após verificação)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

### 3. Configuração do Domínio

#### 3.1. Adicionar Domínio no Vercel
1. [ ] Ir em Settings > Domains
2. [ ] Adicionar: `vstack-solution.com.br`
3. [ ] Adicionar: `www.vstack-solution.com.br`

#### 3.2. Configurar DNS (Registro.br)
Acessar o painel do Registro.br e adicionar:

**Tipo A (para domínio raiz):**
```
Host: @
Tipo: A
Valor: 76.76.21.21
TTL: 3600
```

**Tipo CNAME (para www):**
```
Host: www
Tipo: CNAME
Valor: cname.vercel-dns.com
TTL: 3600
```

**Aguardar propagação:** 24-48 horas (geralmente 1-2 horas)

---

### 4. Configuração do Banco de Dados

#### Opção 1: Supabase (Recomendado)
1. [ ] Criar conta em https://supabase.com
2. [ ] Criar novo projeto
3. [ ] Copiar `DATABASE_URL` (Settings > Database)
4. [ ] Adicionar no Vercel Environment Variables
5. [ ] Executar migrations:
```bash
npx prisma migrate deploy
```

#### Opção 2: Neon
1. [ ] Criar conta em https://neon.tech
2. [ ] Criar novo projeto
3. [ ] Copiar connection string
4. [ ] Adicionar no Vercel

#### Opção 3: Railway
1. [ ] Criar conta em https://railway.app
2. [ ] Criar PostgreSQL database
3. [ ] Copiar `DATABASE_URL`
4. [ ] Adicionar no Vercel

---

### 5. Configuração do Redis (Upstash)

1. [ ] Criar conta em https://upstash.com
2. [ ] Criar novo Redis database
3. [ ] Região: São Paulo (latência menor)
4. [ ] Copiar `UPSTASH_REDIS_REST_URL` e `UPSTASH_REDIS_REST_TOKEN`
5. [ ] Adicionar no Vercel Environment Variables

---

### 6. Configuração do Email (Resend)

1. [ ] Criar conta em https://resend.com
2. [ ] Adicionar domínio: `vstack-solution.com.br`
3. [ ] Configurar registros DNS (SPF, DKIM, DMARC)
4. [ ] Verificar domínio
5. [ ] Criar API Key
6. [ ] Adicionar `RESEND_API_KEY` no Vercel

**Registros DNS para Email:**
```
TXT @ "v=spf1 include:_spf.resend.com ~all"
TXT resend._domainkey [valor fornecido pelo Resend]
TXT _dmarc "v=DMARC1; p=none; rua=mailto:dmarc@vstack-solution.com.br"
```

---

### 7. Deploy e Validação

#### 7.1. Primeiro Deploy
1. [ ] Fazer commit de todas as mudanças
2. [ ] Push para GitHub
3. [ ] Vercel fará deploy automático
4. [ ] Aguardar build completar (2-5 minutos)

#### 7.2. Validações Pós-Deploy
- [ ] Testar site: https://vstack-solution.com.br
- [ ] Testar todas as páginas (7 páginas)
- [ ] Testar formulários (contato, cotação, dor)
- [ ] Testar chat widget
- [ ] Verificar sitemap: https://vstack-solution.com.br/sitemap.xml
- [ ] Verificar robots.txt: https://vstack-solution.com.br/robots.txt
- [ ] Testar manifest: https://vstack-solution.com.br/manifest.json

#### 7.3. Testes de Performance
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
  - Meta: 90+ Mobile, 95+ Desktop
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

#### 7.4. Testes de SEO
- [ ] Google Search Console
  - Adicionar propriedade
  - Verificar domínio
  - Enviar sitemap
  - Solicitar indexação
- [ ] Open Graph Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] Schema Markup Validator: https://validator.schema.org/

---

### 8. Monitoramento e Analytics

#### 8.1. Google Analytics 4
1. [ ] Criar propriedade GA4
2. [ ] Copiar Measurement ID
3. [ ] Adicionar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no Vercel
4. [ ] Implementar no código (opcional - pode ser feito depois)

#### 8.2. Vercel Analytics
1. [ ] Ativar Vercel Analytics (Settings > Analytics)
2. [ ] Ativar Speed Insights
3. [ ] Monitorar Core Web Vitals

#### 8.3. Uptime Monitoring
- [ ] Configurar UptimeRobot: https://uptimerobot.com/
- [ ] Monitorar: https://vstack-solution.com.br
- [ ] Alertas via email

---

### 9. Segurança

#### 9.1. SSL/TLS
- [ ] Verificar certificado SSL (automático no Vercel)
- [ ] Forçar HTTPS (já configurado no next.config.ts)
- [ ] Testar: https://www.ssllabs.com/ssltest/

#### 9.2. Headers de Segurança
Já configurados no `next.config.ts`:
- ✅ Strict-Transport-Security
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Content-Security-Policy
- ✅ Referrer-Policy

#### 9.3. Rate Limiting
- ✅ Implementado via Redis (Upstash)
- ✅ Configurado no middleware.ts

---

### 10. Backup e Disaster Recovery

#### 10.1. Backup do Banco de Dados
- [ ] Configurar backups automáticos (Supabase/Neon/Railway)
- [ ] Frequência: Diária
- [ ] Retenção: 7 dias

#### 10.2. Backup do Código
- [ ] Repositório GitHub (já configurado)
- [ ] Branch principal: `main`
- [ ] Branch de desenvolvimento: `dev`

---

## 🚀 Comandos Úteis

### Deploy Manual (se necessário)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Verificar Build Localmente
```bash
# Build
npm run build

# Testar produção localmente
npm start
```

### Migrations do Prisma
```bash
# Gerar migration
npx prisma migrate dev --name init

# Aplicar em produção
npx prisma migrate deploy

# Gerar Prisma Client
npx prisma generate
```

---

## 📊 Métricas de Sucesso

### Performance
- ✅ LCP < 2.5s
- ✅ FID < 100ms
- ✅ CLS < 0.1
- ✅ PageSpeed Score > 90

### SEO
- ✅ Todas as páginas indexadas (7 páginas)
- ✅ Sitemap submetido
- ✅ Rich snippets funcionando
- ✅ Open Graph funcionando

### Disponibilidade
- ✅ Uptime > 99.9%
- ✅ Tempo de resposta < 500ms
- ✅ Zero erros críticos

---

## 🆘 Troubleshooting

### Build Falha
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erro de Variáveis de Ambiente
- Verificar se todas as variáveis estão no Vercel
- Verificar se começam com `NEXT_PUBLIC_` para variáveis client-side
- Fazer redeploy após adicionar variáveis

### Domínio Não Propaga
- Aguardar 24-48h
- Verificar DNS: https://dnschecker.org/
- Limpar cache DNS local: `ipconfig /flushdns` (Windows)

### Erro 500
- Verificar logs no Vercel Dashboard
- Verificar conexão com banco de dados
- Verificar variáveis de ambiente

---

## 📝 Notas Finais

1. **Primeiro Deploy**: Pode levar até 10 minutos para propagação completa
2. **DNS**: Propagação pode levar até 48h (geralmente 1-2h)
3. **SSL**: Certificado é gerado automaticamente pelo Vercel
4. **Custos**: Vercel Free Tier é suficiente para começar
5. **Escalabilidade**: Vercel escala automaticamente conforme demanda

---

## ✅ Checklist Final

- [ ] Imagens criadas e adicionadas
- [ ] Deploy no Vercel concluído
- [ ] Domínio configurado e funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados configurado
- [ ] Redis configurado
- [ ] Email configurado
- [ ] Todas as páginas funcionando
- [ ] Formulários testados
- [ ] Chat widget funcionando
- [ ] Sitemap acessível
- [ ] Robots.txt acessível
- [ ] Google Search Console configurado
- [ ] Analytics configurado
- [ ] Monitoramento ativo
- [ ] Backups configurados

---

**Status:** Pronto para Deploy 🚀
**Próximo Passo:** Criar imagens e iniciar deploy no Vercel
