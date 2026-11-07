import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description: "About the mortgage payment calculator and educational guides.",
  alternates: { canonical: "https://monthlymortgagecalc.com/about/" },
};
export default function AboutPage() {
  return <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">About this site</h1>
    <p className="mb-6 text-gray-700">Monthlymortgagecalc.com provides a fixed-rate mortgage payment calculator and educational guides. The calculator is an illustration based on the values you enter, not a loan offer or personalized financial advice.</p>
    <p className="text-gray-700">Read the <Link href="/methodology/" className="underline">methodology and sources</Link> for formulas and limitations, or compare actual terms with a lender&apos;s Loan Estimate.</p>
  </div>;
}
