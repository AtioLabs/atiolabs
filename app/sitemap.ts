import { MetadataRoute } from "next";
import { essays } from "./writing/_data/essays";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.asynarch.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.asynarch.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.asynarch.com/writing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...essays.map((e) => ({
      url: `https://www.asynarch.com/writing/${e.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
