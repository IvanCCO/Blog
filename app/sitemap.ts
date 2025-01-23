import { MetadataRoute } from "next";

const BASE_URL = "https://www.ivanfreire.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2025-01-23T23:38:14+00:00"),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about/me`,
      lastModified: new Date("2025-01-23T23:38:14+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/world`,
      lastModified: new Date("2025-01-23T23:38:14+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2025-01-23T23:38:14+00:00"),
      priority: 0.8,
    },
  ];
}
