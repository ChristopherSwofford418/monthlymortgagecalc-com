import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "Mortgage Points Explained", description: "Understand points, monthly savings and tax limitations.", alternates: { canonical: "https://monthlymortgagecalc.com/learn/mortgage-points-explained/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/learn/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">Mortgage Points Explained</h1>
    <p className="mt-3 mb-8 text-gray-600">Understand points, monthly savings and tax limitations.</p>
    <AdSlot slot="2233445566" format="horizontal" />
    <div className="prose-article mt-8"><h2>What are points?</h2><p>One discount point equals 1% of the loan amount. Discount points generally trade higher upfront costs for a lower interest rate; the rate reduction depends on the lender, loan and market. Compare offers for the same kind of loan. See the <a href="https://www.consumerfinance.gov/ask-cfpb/what-are-discount-points-and-lender-credits-and-how-do-they-work-en-136/">CFPB explanation of points and lender credits</a>.</p>
<h2>A simple comparison</h2><p>Divide the additional upfront points cost by the monthly principal-and-interest saving to get a simple break-even period. For example, $3,000 divided by $50 per month is 60 months. This is illustrative, not a quote. It ignores the time value of money, tax effects, changes in loan balance and other differences; selling or refinancing earlier may change the outcome. If monthly savings are zero or negative, there is no break-even using this method.</p>
<h2>Tax treatment is conditional</h2><p>Do not assume points are deductible in the year paid. The <a href="https://www.irs.gov/taxtopics/tc504">IRS guidance on home mortgage points</a> describes itemization and other requirements for a deduction in the year paid, and says points are generally deducted over the loan term. Your circumstances matter; consider professional tax advice.</p></div>
    <AdSlot slot="6655443322" format="rectangle" />
  </article>;
}
