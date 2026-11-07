import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "15-Year vs 30-Year Mortgage", description: "Compare fixed-rate loan terms and their tradeoffs.", alternates: { canonical: "https://monthlymortgagecalc.com/learn/15-vs-30-year-mortgage/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/learn/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">15-Year vs 30-Year Mortgage</h1>
    <p className="mt-3 mb-8 text-gray-600">Compare fixed-rate loan terms and their tradeoffs.</p>
    <AdSlot slot="2233445566" format="horizontal" />
    <div className="prose-article mt-8"><h2>Monthly payments and total interest</h2><p>For the same loan amount and interest rate, a shorter fixed-rate term generally has a higher monthly principal-and-interest payment but less total interest. Actual offers may have different rates and fees. The <a href="https://www.consumerfinance.gov/owning-a-home/loan-options/">CFPB explains loan-term tradeoffs</a>.</p>
<h2>Compare your offers</h2><p>Use the <a href="/calculator/">calculator</a> twice with the same price and down payment and each lender’s rate and term. Compare principal and interest, the cash needed at closing, mortgage insurance, and other costs in the Loan Estimates. Property taxes and insurance can change over time; the calculator does not predict their changes or investment returns.</p></div>
    <AdSlot slot="6655443322" format="rectangle" />
  </article>;
}
