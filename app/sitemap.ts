import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://monthlymortgagecalc.com";
  const paths = ["/", "/calculator/", "/learn/", "/learn/how-to-get-best-mortgage-rate/", "/learn/15-vs-30-year-mortgage/", "/learn/mortgage-points-explained/", "/blog/", "/blog/mortgage-payment-breakdown/", "/blog/how-to-lower-mortgage-payment/", "/blog/mortgage-points-worth-it/", "/blog/biweekly-mortgage-payments/", "/about/", "/contact/", "/privacy/", "/terms/", "/disclaimer/", "/methodology/"];
  return paths.map(path => ({ url: base + path }));
}
