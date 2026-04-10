import { catalog } from '../data/catalog';

export default function sitemap() {
  const baseUrl = 'https://froveninnovations.com';

  const staticPages = [
    '',
    '/products',
    '/rental',
    '/sales',
    '/amc',
    '/contact',
    '/careers',
    '/gallery',
    '/privacy-policy',
    '/refund-policy',
    '/terms-of-use',
    '/warranty-activation',
    '/business-opportunity'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const categoryPages = catalog.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  let productPages = [];
  catalog.forEach((cat) => {
    cat.products.forEach((product) => {
      productPages.push({
        url: `${baseUrl}/products/${cat.slug}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return [...staticPages, ...categoryPages, ...productPages];
}
