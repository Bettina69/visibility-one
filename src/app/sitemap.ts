import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/sichtbarkeitscheck",
  "/meine-methode",
  "/angebote",
  "/angebote/analyse",
  "/angebote/optimierung",
  "/angebote/begleitung",
  "/ueber-mich",
  "/qualifikationen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
