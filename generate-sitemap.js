// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/products', changefreq: 'weekly', priority: 0.8 },
  { url: '/doors-and-door-frames', changefreq: 'weekly', priority: 0.8 },
  { url: '/ecomagix', changefreq: 'weekly', priority: 0.8 },
  { url: '/claymagix', changefreq: 'weekly', priority: 0.8 },
  { url: '/woodmagix', changefreq: 'weekly', priority: 0.8 },
  { url: '/bricks', changefreq: 'weekly', priority: 0.8 },
  { url: '/fly-ash-brick-pallets', changefreq: 'weekly', priority: 0.8 },
  { url: '/boards-and-panels', changefreq: 'weekly', priority: 0.8 },
  { url: '/jali', changefreq: 'weekly', priority: 0.8 },
  { url: '/furniture', changefreq: 'weekly', priority: 0.8 },
  { url: '/shuttering-formwork', changefreq: 'weekly', priority: 0.8 },
  { url: '/roofing-flooring-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/construction-blocks', changefreq: 'weekly', priority: 0.8 },
  { url: '/brands', changefreq: 'monthly', priority: 0.6 }
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'http://www.infiniaindia.in' });

  links.forEach(link => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then(data => data.toString());

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  writeStream.write(sitemap);
  writeStream.end();
};

generateSitemap().then(() => {
  console.log('Sitemap generated successfully.');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
