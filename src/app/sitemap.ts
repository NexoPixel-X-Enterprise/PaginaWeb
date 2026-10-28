import { MetadataRoute } from 'next';

const host = 'https://nexo-pixel-x.vercel.app';
const locales = ['es', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/galeria']; // Rutas pública

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${host}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}