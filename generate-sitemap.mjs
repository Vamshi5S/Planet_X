// generate-sitemap.mjs (ESM)
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';

/**
 * List all crawlable routes (no #hash paths).
 * Add every important page here.
 */
const HOST = 'https://planetxsolutions.com';
const LINKS = [
  { url: '/',                 changefreq: 'daily',   priority: 1.0 },
  { url: '/about-us',         changefreq: 'monthly', priority: 0.7 },
  { url: '/capabilities',     changefreq: 'monthly', priority: 0.8 },
  { url: '/industries',       changefreq: 'monthly', priority: 0.7 },
  { url: '/insights',         changefreq: 'weekly',  priority: 0.7 },
  { url: '/careers',          changefreq: 'monthly', priority: 0.6 },
  { url: '/contact-us',       changefreq: 'monthly', priority: 0.8 },
  // add any others you use, e.g. /services, /privacy, etc.
];

async function run() {
  // Write directly into the Vite build output
  const out = resolve('dist', 'sitemap.xml');
  const write = createWriteStream(out);

  const sm = new SitemapStream({ hostname: HOST });
  sm.pipe(write);

  for (const link of LINKS) sm.write(link);
  sm.end();

  await new Promise((res, rej) => {
    write.on('finish', res);
    write.on('error', rej);
  });

  console.log(`✔ sitemap.xml generated at ${out}`);
}

run().catch((e) => {
  console.error('Failed to generate sitemap:', e);
  process.exit(1);
});
