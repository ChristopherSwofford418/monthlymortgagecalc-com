import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
export const metadata: Metadata = { title: "Paying for Long-Term Care", description: "Official long-term care information.", robots: { index: false, follow: true }, alternates: { canonical: "https://monthlymortgagecalc.com/learn/how-to-pay-for-long-term-care/" } };
export default function Article() {
  return <article className="max-w-2xl mx-auto py-12 px-4">
    <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← All Guides</Link>
    <h1 className="font-serif text-3xl font-bold mb-4">Paying for Long-Term Care</h1>
    <AdSlot slot="2345678901" format="horizontal" />
    <div className="prose prose-gray max-w-none mt-6"><p>This mortgage site does not provide long-term care estimates or eligibility advice. For current coverage information, see <a href="https://www.medicare.gov/coverage/long-term-care">Medicare’s long-term care guidance</a> and <a href="https://www.medicaid.gov/medicaid/long-term-services-supports/index.html">Medicaid’s long-term services information</a>; state eligibility and coverage vary.</p>
      <AdSlot slot="1234567890" format="rectangle" />
    </div>
  </article>;
}
