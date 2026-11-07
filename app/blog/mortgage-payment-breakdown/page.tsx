import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "What Makes Up Your Monthly Mortgage Payment", description: "Understand principal, interest, taxes and insurance.", alternates: { canonical: "https://monthlymortgagecalc.com/blog/mortgage-payment-breakdown/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/blog/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">What Makes Up Your Monthly Mortgage Payment</h1>
    <p className="mt-3 mb-8 text-gray-600">Understand principal, interest, taxes and insurance.</p>
    <AdSlot slot="2345678901" format="horizontal" />
    <div className="prose-article mt-8"><h2>Principal and interest</h2><p>Principal reduces the loan balance; interest is the cost of borrowing. For a typical fixed-rate loan the combined principal-and-interest payment remains the same, while the split changes over time. See the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-included-in-my-monthly-mortgage-payment-en-1943/">CFPB explanation of amortization</a>.</p><h2>Other costs</h2><p>Payments can also include escrow for taxes and homeowners insurance, and may include mortgage insurance. Actual coverage and costs depend on the policy and loan. HOA dues and maintenance are additional expenses. Use actual quotes in the <a href="/calculator/">calculator</a> and compare the payment and costs in your Loan Estimate.</p></div>
    <AdSlot slot="3456789012" format="horizontal" />
  </article>;
}
