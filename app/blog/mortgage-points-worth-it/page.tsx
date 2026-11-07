import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "Are Mortgage Points Worth Buying?", description: "Compare upfront points against potential monthly savings.", alternates: { canonical: "https://monthlymortgagecalc.com/blog/mortgage-points-worth-it/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/blog/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">Are Mortgage Points Worth Buying?</h1>
    <p className="mt-3 mb-8 text-gray-600">Compare upfront points against potential monthly savings.</p>
    <AdSlot slot="2345678901" format="horizontal" />
    <div className="prose-article mt-8"><p>Discount points trade a higher upfront cost for a lower interest rate. One point is 1% of the loan amount; the size of a rate reduction depends on the offer. See the <a href="https://www.consumerfinance.gov/ask-cfpb/what-are-discount-points-and-lender-credits-and-how-do-they-work-en-136/">CFPB guide to points and lender credits</a>.</p><p>A simple break-even divides the extra upfront cost by the monthly principal-and-interest savings, if savings are positive. It ignores the time value of money, different loan balances and tax effects. Compare total costs over several possible periods and consider whether you may sell or refinance. Tax treatment is conditional; see <a href="https://www.irs.gov/taxtopics/tc504">IRS Topic 504</a>.</p><p>Read our <a href="/learn/mortgage-points-explained/">points guide</a> for an illustrative calculation.</p></div>
    <AdSlot slot="3456789012" format="horizontal" />
  </article>;
}
