/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.vstack-solutions.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Prioridades customizadas por página
    const priorities = {
      '/': 1.0,
      '/contato': 0.9,
      '/cotacao': 0.9,
      '/solucoes': 0.9,
      '/automacao-de-processos': 0.9,
      '/agentes-de-ia': 0.9,
      '/integracao-de-sistemas': 0.9,
      '/sistemas-sob-medida': 0.9,
      '/contaflow': 0.9,
      '/fiscwise': 0.9,
      '/sessaoink': 0.9,
      '/fretamento-pro': 0.9,
      '/erp-v': 0.9,
      '/conteudos': 0.8,
      // Comparativos (fundo de funil, SEO long-tail). Índice + slugs.
      // Mantidos em sincronia com src/lib/comparativos.ts.
      '/comparativos': 0.8,
      '/comparativos/fiscwise-vs-sistemas-para-contabilidade': 0.8,
      '/comparativos/sessaoink-vs-gestao-generica-de-estudio': 0.8,
      '/comparativos/erp-v-sob-medida-vs-erp-pronto': 0.8,
      '/envie-sua-dor': 0.8,
      '/sobre': 0.8,
      '/faq': 0.7,
    };

    const changefreqs = {
      '/': 'daily',
      '/contato': 'monthly',
      '/cotacao': 'monthly',
      '/solucoes': 'weekly',
      '/automacao-de-processos': 'weekly',
      '/agentes-de-ia': 'weekly',
      '/integracao-de-sistemas': 'weekly',
      '/sistemas-sob-medida': 'weekly',
      '/contaflow': 'weekly',
      '/fiscwise': 'weekly',
      '/sessaoink': 'weekly',
      '/fretamento-pro': 'weekly',
      '/erp-v': 'weekly',
      '/conteudos': 'weekly',
      '/comparativos': 'weekly',
      '/comparativos/fiscwise-vs-sistemas-para-contabilidade': 'monthly',
      '/comparativos/sessaoink-vs-gestao-generica-de-estudio': 'monthly',
      '/comparativos/erp-v-sob-medida-vs-erp-pronto': 'monthly',
      '/envie-sua-dor': 'monthly',
      '/sobre': 'monthly',
      '/faq': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
