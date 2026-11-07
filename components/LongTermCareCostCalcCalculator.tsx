import AdSlot from "@/components/AdSlot";

// This legacy component is not currently used by a route. Its former cost figures
// lacked a verifiable basis, so it must not produce an estimate.
export default function LongTermCareCostCalcCalculator() {
  return <div className="bg-white border border-line rounded-2xl p-6">
    <h2 className="font-serif text-xl font-bold">Long-Term Care Information</h2>
    <p className="mt-4">This site does not estimate long-term care costs or eligibility. For coverage information, see <a className="underline" href="https://www.medicare.gov/coverage/long-term-care">Medicare</a> and <a className="underline" href="https://www.medicaid.gov/medicaid/long-term-services-supports/index.html">Medicaid</a>. Ask care providers for current local prices and your state Medicaid agency about eligibility.</p>
    <AdSlot slot="3456789012" format="horizontal" />
  </div>;
}
