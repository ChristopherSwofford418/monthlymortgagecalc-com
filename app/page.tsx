import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "https://monthlymortgagecalc.com/" } };
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Calculate Your Monthly Mortgage Payment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insurance. Compare fixed-rate loan terms.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Mortgage Payment Calculator →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Mortgage Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/how-to-get-best-mortgage-rate/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Rate Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">How to Compare Mortgage Rates</h3>
            <p className="mt-1 text-sm text-gray-600">Compare loan offers, fees, points and rate risks.</p>
          </a>
          <a href="/learn/15-vs-30-year-mortgage/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Loan Comparison</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">15-Year vs 30-Year Mortgage: Which Is Right for You?</h3>
            <p className="mt-1 text-sm text-gray-600">A detailed comparison of 15-year and 30-year mortgages, including total interest costs, monthly payment differences, and which is better for your situation.</p>
          </a>
          <a href="/learn/mortgage-points-explained/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Mortgage Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Mortgage Points Explained: Are They Worth It?</h3>
            <p className="mt-1 text-sm text-gray-600">A clear explanation of mortgage discount points, how they work, and how to calculate whether buying points makes financial sense for your situation.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Using the calculator</h2>
        <p className="text-gray-700">The calculator estimates principal and interest for a fixed-rate loan, plus property tax and homeowners insurance based on your inputs. It does not predict market rates or determine mortgage insurance. Enter a lender quote when known, and compare actual costs in your Loan Estimates.</p>
        <p className="mt-4"><Link href="/methodology/" className="underline">Read the methodology and sources</Link>.</p>
      </section>

    </div>
  );
}
