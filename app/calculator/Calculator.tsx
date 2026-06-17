"use client";
import { useState } from "react";

export default function Calculator() {
  const [homePrice, setHomePrice] = useState<string>("400000");
  const [downPct, setDownPct] = useState<string>("20");
  const [rate, setRate] = useState<string>("6.75");
  const [term, setTerm] = useState<string>("30");
  const [propTaxRate, setPropTaxRate] = useState<string>("1.2");
  const [insuranceAnnual, setInsuranceAnnual] = useState<string>("1800");

  const price = parseFloat(homePrice) || 0;
  const down = price * (parseFloat(downPct) / 100);
  const loan = price - down;
  const r = parseFloat(rate) / 100 / 12;
  const n = parseInt(term) * 12;
  const pmi = parseFloat(downPct) < 20 ? loan * 0.01 / 12 : 0;

  const pi = r > 0 ? loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : loan / n;
  const taxes = price * (parseFloat(propTaxRate) / 100) / 12;
  const insurance = parseFloat(insuranceAnnual) / 12;
  const total = pi + taxes + insurance + pmi;

  const totalInterest = (pi * n) - loan;

  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Home Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={homePrice} onChange={e => setHomePrice(e.target.value)} min="50000" max="5000000" step="10000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Down Payment (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={downPct} onChange={e => setDownPct(e.target.value)} min="3" max="100" step="1" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Interest Rate (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={rate} onChange={e => setRate(e.target.value)} min="2" max="15" step="0.125" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Loan Term</label>
          <select className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={term} onChange={e => setTerm(e.target.value)}>
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Property Tax Rate (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={propTaxRate} onChange={e => setPropTaxRate(e.target.value)} min="0.1" max="4" step="0.1" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Annual Insurance ($)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={insuranceAnnual} onChange={e => setInsuranceAnnual(e.target.value)} min="500" max="10000" step="100" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border-2 border-accent text-center col-span-2 md:col-span-1">
          <div className="text-3xl font-bold text-accent">${Math.round(total).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Total Monthly Payment</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(pi).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Principal & Interest</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(taxes + insurance).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Taxes & Insurance</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(totalInterest).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Total Interest ({term}yr)</div>
        </div>
      </div>
      {pmi > 0 && <p className="text-xs text-yellow-600 mt-3">⚠ PMI of ~${Math.round(pmi)}/month added (less than 20% down). Eliminates when you reach 20% equity.</p>}
    </div>
  );
}
