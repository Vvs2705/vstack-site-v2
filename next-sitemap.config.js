/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vstack-solution.com.br',
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
      '/envie-sua-dor': 0.8,
      '/sobre': 0.8,
      '/faq': 0.7,
    };

    const changefreqs = {
      '/': 'daily',
      '/contato': 'monthly',
      '/cotacao': 'monthly',
      '/solucoes': 'weekly',
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
