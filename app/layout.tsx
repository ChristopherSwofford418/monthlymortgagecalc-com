import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://monthlymortgagecalc.com"),
  title: {
    default: "MortgagePaymentEstimator — Calculate Your Monthly Mortgage Payment",
    template: "%s · MortgagePaymentEstimator",
  },
  description: "Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insurance. Compare loan types and terms.",
  applicationName: "MortgagePaymentEstimator",
  openGraph: {
    type: "website",
    siteName: "MortgagePaymentEstimator",
    title: "MortgagePaymentEstimator — Calculate Your Monthly Mortgage Payment",
    description: "Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insurance. Compare loan types and terms.",
    url: "https://monthlymortgagecalc.com",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://monthlymortgagecalc.com" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889586007871680"
            crossOrigin="anonymous"
            suppressHydrationWarning
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              MortgagePaymentEstimator
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/calculator" className="hover:text-accent">Mortgage Calculator</Link>
              <Link href="/learn/how-to-get-best-mortgage-rate" className="hover:text-accent">Best Rates Guide</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line mt-20 py-10 bg-soft">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
              <div className="font-serif text-lg font-bold text-ink mb-2">MortgagePaymentEstimator</div>
              <p>Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insur...</p>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Guides</div>
              <ul className="space-y-1">
                <li><Link href="/learn/how-to-get-best-mortgage-rate/" className="hover:text-accent">How to Get the Best Mortgage Rate</Link></li>
                <li><Link href="/learn/15-vs-30-year-mortgage/" className="hover:text-accent">15 vs 30-Year Mortgage</Link></li>
                <li><Link href="/learn/mortgage-points-explained/" className="hover:text-accent">Mortgage Points Explained</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Site</div>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} MortgagePaymentEstimator. Educational content only. Not financial or legal advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
