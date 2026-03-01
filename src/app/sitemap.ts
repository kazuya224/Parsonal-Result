import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parsonal-result.vercel.app'
  const lastMod = new Date()
  return [
    { url: baseUrl, lastModified: lastMod, priority: 1 },
    { url: `${baseUrl}/guide/batter`, lastModified: lastMod, priority: 0.8 },
    { url: `${baseUrl}/guide/pitcher`, lastModified: lastMod, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: lastMod, priority: 0.3 },
  ]
}