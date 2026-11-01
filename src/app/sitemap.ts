import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/a-propos", priority: 0.8 },
    { path: "/nos-actions", priority: 0.8 },
    { path: "/programmes", priority: 0.9 },
    { path: "/actualites", priority: 0.7 },
    { path: "/soutenir", priority: 0.8 },
    { path: "/credits", priority: 0.3 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/conditions", priority: 0.2 },
    { path: "/en", priority: 0.9 },
    { path: "/en/about", priority: 0.7 },
    { path: "/en/actions", priority: 0.7 },
    { path: "/en/programmes", priority: 0.8 },
    { path: "/en/news", priority: 0.6 },
    { path: "/en/support", priority: 0.7 },
    { path: "/en/legal", priority: 0.2 },
    { path: "/en/terms", priority: 0.2 },
    { path: "/en/credits", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: "2026-10-17",
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...posts.flatMap((post) => [
      {
        url: `${site.url}/actualites/${post.slug}`,
        lastModified: post.updatedAt.toISOString(),
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: { languages: { fr: `${site.url}/actualites/${post.slug}`, en: `${site.url}/en/news/${post.slug}` } },
      },
      {
        url: `${site.url}/en/news/${post.slug}`,
        lastModified: post.updatedAt.toISOString(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
        alternates: { languages: { fr: `${site.url}/actualites/${post.slug}`, en: `${site.url}/en/news/${post.slug}` } },
      },
    ]),
  ];
}
