import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { editions } from "@/data/editions";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    "/",
    "/en/",
    "/libro-arquitectas/",
    "/en/libro-arquitectas/",
    "/desafio/",
    "/en/desafio/",
    ...editions.flatMap((edition) => [
      `/${edition.path}/`,
      `/en/${edition.path}/`,
    ]),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" || path === "/en/" ? 1 : 0.8,
  }));
}
