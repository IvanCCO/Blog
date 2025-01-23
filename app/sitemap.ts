import { MetadataRoute } from "next";

const BASE_URL = "https://www.ivanfreire.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/world`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
