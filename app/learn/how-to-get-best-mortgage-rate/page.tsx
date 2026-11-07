import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "How to Compare Mortgage Rates", description: "Compare loan offers, fees, points and rate risks.", alternates: { canonical: "https://monthlymortgagecalc.com/learn/how-to-get-best-mortgage-rate/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/learn/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">How to Compare Mortgage Rates</h1>
    <p className="mt-3 mb-8 text-gray-600">Compare loan offers, fees, points and rate risks.</p>
    <AdSlot slot="2233445566" format="horizontal" />
    <div className="prose-article mt-8"><h2>Compare complete offers</h2>
<p>Request Loan Estimates from multiple lenders for the same loan type and features. Compare the interest rate, monthly payment, points, closing costs and whether the rate is locked. A lower rate alone does not necessarily mean a lower total cost. See the <a href="https://www.consumerfinance.gov/owning-a-home/compare/request-and-review-multiple-loan-estimates/">CFPB guide to comparing Loan Estimates</a>.</p>
<h2>Check credit and timing</h2><p>Review your credit report for errors before applying. The CFPB says multiple mortgage-lender credit checks within a 45-day window are recorded as a single inquiry. See its <a href="https://www.consumerfinance.gov/ask-cfpb/what-exactly-happens-when-a-mortgage-lender-checks-my-credit-en-2005/">explanation of mortgage credit checks</a>.</p>
<h2>Understand rate risk</h2><p>With an adjustable-rate mortgage, payments can rise after the initial period. Do not assume you can sell or refinance before a rate change; review adjustment limits and whether you can afford the highest possible payment. See the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/">CFPB comparison of fixed and adjustable rates</a>.</p><p>Use the <a href="/calculator/">calculator</a> for an illustrative fixed-rate scenario, not a lender quote.</p></div>
    <AdSlot slot="6655443322" format="rectangle" />
  </article>;
}
