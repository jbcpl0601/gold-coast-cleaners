import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jamesbondcleaning.au";

  const routes = [
    "",
    "/about",
    "/services",
    "/suburbs",
    "/gallery",
    "/blog",
    "/contact",
    "/booking",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency:
      route === "" || route === "/blog"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
