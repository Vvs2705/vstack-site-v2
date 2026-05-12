# Search Console e indexação

## Objetivo

Garantir que o Google consiga validar, rastrear e indexar o domínio principal:

- `https://vstack-solutions.com.br`
- `https://www.vstack-solutions.com.br`

## Passo a passo

1. Acesse o Google Search Console e adicione a propriedade do domínio `vstack-solutions.com.br`.
2. Escolha a validação por meta tag HTML.
3. Copie apenas o valor do atributo `content`.
4. Configure esse valor no ambiente de produção:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=valor_copiado_do_google
```

5. Faça novo deploy na Vercel.
6. Confirme a propriedade no Search Console.
7. Envie o sitemap:

```txt
https://vstack-solutions.com.br/sitemap.xml
```

## URLs prioritárias para solicitar indexação

- `https://vstack-solutions.com.br/`
- `https://vstack-solutions.com.br/solucoes`
- `https://vstack-solutions.com.br/automacao-de-processos`
- `https://vstack-solutions.com.br/agentes-de-ia`
- `https://vstack-solutions.com.br/integracao-de-sistemas`
- `https://vstack-solutions.com.br/sistemas-sob-medida`
- `https://vstack-solutions.com.br/contaflow`
- `https://vstack-solutions.com.br/conteudos`

## Observação

O projeto já lê `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` no metadata global do Next.js. Sem o token do Google não é possível finalizar a validação automaticamente pelo código.
