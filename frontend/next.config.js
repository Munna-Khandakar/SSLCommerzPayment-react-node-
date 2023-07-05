const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');
module.exports = withPlugins([withImages], {
  i18n,

  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/sitemap_index.xml',
        destination: '/api/sitemap_index',
      },
      {
        source: '/products_skills.xml',
        destination: '/api/products_skills',
      },
      {
        source: '/products_admission.xml',
        destination: '/api/products_admission',
      },
      {
        source: '/products_jobs.xml',
        destination: '/api/products_jobs',
      },
      {
        source: '/products_online_batch.xml',
        destination: '/api/products_online_batch',
      },
      {
        source: '/categories.xml',
        destination: '/api/categories',
      },
      {
        source: '/page_sitemap.xml',
        destination: '/api/page_sitemap',
      },
    ];
  },
});
