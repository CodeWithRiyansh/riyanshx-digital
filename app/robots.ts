import type { MetadataRoute } from "next";
import { site } from "../src/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you"],
    },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}

