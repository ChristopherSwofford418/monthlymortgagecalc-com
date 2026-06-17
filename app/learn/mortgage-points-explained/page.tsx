import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mortgage Points Explained: Are They Worth It?",
  description: "A clear explanation of mortgage discount points, how they work, and how to calculate whether buying points makes financial sense for your situation.",
  alternates: { canonical: "https://monthlymortgagecalc.com/learn/mortgage-points-explained/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">Mortgage Guide</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">Mortgage Points Explained: Are They Worth It?</h1>
        <p className="mt-3 text-lg text-gray-600">A clear explanation of mortgage discount points, how they work, and how to calculate whether buying points makes financial sense for your situation.</p>
      </div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>What Are Mortgage Points?</h2>
<p>Mortgage discount points are upfront fees paid to your lender to reduce your interest rate. One point equals 1% of your loan amount. On a $300,000 loan, one point costs $3,000. In exchange, your lender reduces your interest rate — typically by 0.25% per point, though this varies by lender and market conditions.</p>

<h2>Origination Points vs. Discount Points</h2>
<p>Don't confuse discount points with origination points. <strong>Discount points</strong> are optional and buy down your rate. <strong>Origination points</strong> are lender fees for processing your loan — they don't reduce your rate. When comparing loan offers, always separate these two types of points to make an apples-to-apples comparison.</p>

<h2>The Break-Even Calculation</h2>
<p>Formula: <strong>Break-Even Months = Point Cost ÷ Monthly Savings</strong></p>
<p>Example: 1 point on a $300,000 loan costs $3,000 and reduces your rate from 7.0% to 6.75%, saving $52/month. Break-even = $3,000 ÷ $52 = 57.7 months (about 4.8 years). If you stay in the home longer than 4.8 years, buying the point was financially beneficial.</p>

<h2>When Buying Points Makes Sense</h2>
<p>Points are most beneficial when: you plan to stay in the home long-term (10+ years); you have the cash available; current rates are high and you want to lock in a lower rate; or you're in a high tax bracket and can deduct the points (mortgage points are generally tax-deductible in the year paid for a home purchase).</p>

<h2>When to Skip Points</h2>
<p>Avoid buying points if: you might sell or refinance within 5 years; you need the cash for a larger down payment (which eliminates PMI); you have high-interest debt to pay off; or you're not planning to stay in the home long-term.</p>

<h2>Negative Points (Lender Credits)</h2>
<p>The reverse of buying points is accepting lender credits — the lender pays some of your closing costs in exchange for a higher interest rate. This makes sense if you're short on cash at closing or plan to sell or refinance within a few years.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
