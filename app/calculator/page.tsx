import AdSlot from "@/components/AdSlot";
import Calculator from "./Calculator";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mortgage Payment Calculator",
  description: "Calculate your monthly mortgage payment instantly — free tool from MortgagePaymentEstimator.",
};
export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-2">Mortgage Payment Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate your monthly mortgage payment instantly.</p>
      <AdSlot slot="1122334455" format="horizontal" />
      <Calculator />
      <AdSlot slot="5544332211" format="rectangle" />
    </div>
  );
}
