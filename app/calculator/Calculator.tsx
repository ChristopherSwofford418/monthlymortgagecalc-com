"use client";
import { useState } from "react";
import { calculateMortgage } from "./mortgage";

const inputClass = "w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent";
const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function Calculator() {
  const [homePrice, setHomePrice] = useState("400000");
  const [downPct, setDownPct] = useState("20");
  const [rate, setRate] = useState("6.75");
  const [term, setTerm] = useState("30");
  const [propTaxRate, setPropTaxRate] = useState("1.2");
  const [insuranceAnnual, setInsuranceAnnual] = useState("1800");
  const [mortgageInsuranceMonthly, setMortgageInsuranceMonthly] = useState("");
  const result = calculateMortgage({ homePrice, downPct, rate, term, propTaxRate, insuranceAnnual, mortgageInsuranceMonthly });
  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <p className="text-sm text-gray-700 mb-5">Example inputs are illustrative, not current quotes. Enter the interest rate, taxes and insurance for your own scenario.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div><label htmlFor="home-price" className="block text-sm font-semibold mb-2">Home price ($)</label><input id="home-price" type="number" className={inputClass} value={homePrice} onChange={e => setHomePrice(e.target.value)} min="0.01" max="1000000000" step="any" /></div>
        <div><label htmlFor="down-payment" className="block text-sm font-semibold mb-2">Down payment (%)</label><input id="down-payment" type="number" className={inputClass} value={downPct} onChange={e => setDownPct(e.target.value)} min="0" max="100" step="any" /></div>
        <div><label htmlFor="interest-rate" className="block text-sm font-semibold mb-2">Annual interest rate (%)</label><input id="interest-rate" type="number" className={inputClass} value={rate} onChange={e => setRate(e.target.value)} min="0" max="100" step="any" /></div>
        <div><label htmlFor="loan-term" className="block text-sm font-semibold mb-2">Loan term</label><select id="loan-term" className={inputClass} value={term} onChange={e => setTerm(e.target.value)}><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option><option value="10">10 years</option></select></div>
        <div><label htmlFor="tax-rate" className="block text-sm font-semibold mb-2">Annual property tax (% of price)</label><input id="tax-rate" type="number" className={inputClass} value={propTaxRate} onChange={e => setPropTaxRate(e.target.value)} min="0" max="100" step="any" /></div>
        <div><label htmlFor="home-insurance" className="block text-sm font-semibold mb-2">Annual homeowners insurance ($)</label><input id="home-insurance" type="number" className={inputClass} value={insuranceAnnual} onChange={e => setInsuranceAnnual(e.target.value)} min="0" max="1000000000" step="any" /></div>
        <div><label htmlFor="mortgage-insurance" className="block text-sm font-semibold mb-2">Monthly mortgage insurance ($), if known</label><input id="mortgage-insurance" type="number" className={inputClass} value={mortgageInsuranceMonthly} onChange={e => setMortgageInsuranceMonthly(e.target.value)} min="0" max="1000000000" step="any" aria-describedby="mortgage-insurance-help" /><p id="mortgage-insurance-help" className="text-xs text-gray-600 mt-2">Leave blank if unknown; enter 0 only if none applies. Ask your lender for a quote.</p></div>
      </div>
      <div aria-live="polite">
        {!result ? <p className="text-red-700" role="alert">Enter valid values: a positive home price, percentages from 0 to 100, and nonnegative insurance amounts. Complete all fields except mortgage insurance.</p> : <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-accent text-center"><div className="text-2xl font-bold text-accent">{money(result.total ?? result.subtotal)}</div><div className="text-xs text-gray-500 mt-1">{result.total === null ? "Monthly subtotal (excludes mortgage insurance)" : "Monthly estimate including entered mortgage insurance"}</div></div>
            <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{money(result.principalInterest)}</div><div className="text-xs text-gray-500 mt-1">Principal &amp; interest</div></div>
            <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{money(result.taxes + result.homeownersInsurance)}</div><div className="text-xs text-gray-500 mt-1">Property tax &amp; homeowners insurance</div></div>
            <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{money(result.totalInterest)}</div><div className="text-xs text-gray-500 mt-1">Interest over {term} years</div></div>
          </div>
          <p className="text-xs text-gray-600 mt-4">Loan amount: {money(result.loan)}. Fixed rate, equal monthly payments and no extra payments assumed. Taxes are based on price, not assessed value; rates and premiums can change. Closing costs, HOA dues, other fees and future changes are excluded. Mortgage insurance may be required; this tool does not estimate its cost or cancellation. Compare your lender&apos;s Loan Estimate. <a className="underline" href="/methodology/">Methodology and sources</a>.</p>
        </>}
      </div>
    </div>
  );
}
