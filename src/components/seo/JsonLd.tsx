interface JsonLdProps {
  data: unknown
}

export default function JsonLd({ data }: JsonLdProps) {
  // JSON-LD estruturado do próprio site; escapa "<" para impedir breakout de </script> (XSS).
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  // nosemgrep: typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml -- conteúdo escapado + dado confiável; injeção de ld+json não tem API não-dangerous em React
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
