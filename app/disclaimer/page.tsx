import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Limitations of the mortgage calculator and guides.",
  alternates: { canonical: "https://monthlymortgagecalc.com/disclaimer/" },
};
export default function DisclaimerPage() {
  return <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
    <p className="mb-6 text-gray-700">The calculator and guides are for general education and are not a loan offer or individualized financial, tax, legal or insurance advice. Results depend on the information entered and do not include every cost. Actual terms and costs can differ.</p>
    <p className="text-gray-700">Review your Loan Estimates and relevant documents, and consult a qualified professional where appropriate. Read the <a className="underline" href="/methodology/">methodology</a> for the calculator&apos;s assumptions and exclusions.</p>
  </div>;
}
