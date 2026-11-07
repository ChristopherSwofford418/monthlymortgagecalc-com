import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { title: "Biweekly Mortgage Payments", description: "Consider how extra payments are applied before choosing a schedule.", alternates: { canonical: "https://monthlymortgagecalc.com/blog/biweekly-mortgage-payments/" } };
export default function ArticlePage() {
  return <article className="mx-auto max-w-3xl px-4 py-12">
    <Link href="/blog/" className="text-sm text-accent hover:underline">← All guides</Link>
    <h1 className="mt-4 text-3xl font-bold text-ink">Biweekly Mortgage Payments</h1>
    <p className="mt-3 mb-8 text-gray-600">Consider how extra payments are applied before choosing a schedule.</p>
    <AdSlot slot="2345678901" format="horizontal" />
    <div className="prose-article mt-8"><p>Twenty-six half-payments add up to thirteen full monthly payments per year, rather than twelve. Whether that reduces the balance sooner depends on when the servicer applies the money. Ask your servicer about payment handling, fees and any prepayment penalty before signing up.</p><p>Extra principal payments can reduce the balance, but savings vary by loan, timing and terms. The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-prepayment-penalty-en-1957/">CFPB explains prepayment penalties</a>. This site’s calculator models regular monthly payments only; it does not calculate biweekly savings.</p></div>
    <AdSlot slot="3456789012" format="horizontal" />
  </article>;
}
