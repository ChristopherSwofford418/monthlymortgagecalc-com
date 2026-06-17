import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Free guides and resources from MortgagePaymentEstimator.",
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides & Resources</h1>
      <div className="grid gap-6">
                <Link href="/learn/how-to-get-best-mortgage-rate/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">How to Get the Best Mortgage Rate in 2025</h2><p className="mt-1 text-gray-600">Proven strategies to qualify for the lowest mortgage rate possible, potentially saving tens of thousands of dollars over the life of your loan.</p></Link>
        <Link href="/learn/15-vs-30-year-mortgage/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">15-Year vs 30-Year Mortgage: Which Is Right for You?</h2><p className="mt-1 text-gray-600">A detailed comparison of 15-year and 30-year mortgages, including total interest costs, monthly payment differences, and which is better for your situation.</p></Link>
        <Link href="/learn/mortgage-points-explained/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Mortgage Points Explained: Are They Worth It?</h2><p className="mt-1 text-gray-600">A clear explanation of mortgage discount points, how they work, and how to calculate whether buying points makes financial sense for your situation.</p></Link>
      </div>
    </div>
  );
}
