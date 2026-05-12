# Design System V-STACK

Atualizado em: 2026-05-11

## Direção Visual

O site deve parecer uma ferramenta séria de tecnologia aplicada à operação, não uma landing page genérica. A estética é escura, técnica e organizada, com contraste alto, laranja como ação principal e blocos bem espaçados.

## Princípios

- Informação primeiro: cada seção precisa responder uma dúvida real do cliente.
- Diagnóstico antes de venda: CTAs devem levar para entender o problema, não prometer solução pronta.
- Interfaces densas, mas respiráveis: evitar cards decorativos sem função.
- Consistência: usar os primitives `Container`, `Section`, `SectionHeader` e `Surface`.
- Mobile sem corte: elementos fixos precisam respeitar `100dvh`, largura disponível e área segura.

## Tokens Principais

As cores e utilitários vivem em `src/app/globals.css`.

- Fundo base: `--bg`
- Fundo profundo: `--bg-deep`
- Superfície/card: `--bg-card`
- Texto principal: `--text-1`
- Texto secundário: `--text-2`
- Texto discreto: `--text-3`
- Ação/acento: `--accent`
- Borda: `--border`
- Borda ativa: `--border-hover`

## Componentes Base

Use:

- `Container`: largura máxima e padding horizontal.
- `Section`: espaçamento vertical e tom de fundo.
- `SectionHeader`: eyebrow, título e descrição.
- `Surface`: bloco/card funcional.
- `CTASection`: chamada final ou transição para diagnóstico.

Evite:

- Card dentro de card.
- Gradientes decorativos demais.
- Texto explicativo sobre como usar a interface.
- CTAs vagos como “Saiba mais” quando o objetivo é conversão.

## Tipografia

- Títulos grandes: `font-display`, peso alto, linha curta.
- Texto de apoio: 15px a 16px, line-height amplo.
- Eyebrows: uppercase, laranja, tracking alto.
- Não usar escala baseada em viewport.

## CTAs

Primário:

- “Solicitar diagnóstico”
- “Avaliar uso de IA”
- “Mapear integrações”
- “Planejar sistema sob medida”

Secundário:

- “Enviar minha dor”
- “Descrever meu caso”
- “Enviar sistemas atuais”

## Estrutura Recomendada Para Páginas SEO

1. Hero com dor + solução.
2. Sinais de que a empresa precisa daquela frente.
3. Resultados esperados.
4. Processo de diagnóstico e implantação.
5. CTA para diagnóstico ou envio da dor.

## Checklist Antes de Publicar

- `npm run lint`
- `npm run build`
- `npm audit`
- Conferir preview desktop e mobile.
- Confirmar que a página possui link interno vindo de `/solucoes` ou do footer.
- Confirmar metadata title, description e canonical.
