const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { url } = require('inspector');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
    { url: '/capabilities', changefreq: 'monthly', priority: 0.7 },
    { url: '/industries', changefreq: 'monthly', priority: 0.7 },
    { url: '/insights', changefreq: 'monthly', priority: 0.7 },
    { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  ];

  const sitemapStream = new SitemapStream({ hostname: 'https://planetxsolutions.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  const xml = await streamToPromise(sitemapStream);
  sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();
}

generateSitemap();
