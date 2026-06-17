import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://monthlymortgagecalc.com/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "https://monthlymortgagecalc.com/calculator/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://monthlymortgagecalc.com/learn/how-to-get-best-mortgage-rate/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://monthlymortgagecalc.com/learn/15-vs-30-year-mortgage/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://monthlymortgagecalc.com/learn/mortgage-points-explained/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://monthlymortgagecalc.com/about/", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];
}
