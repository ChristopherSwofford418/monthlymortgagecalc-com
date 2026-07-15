import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Calculate Your Monthly Mortgage Payment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insurance. Compare loan types and terms.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Mortgage Payment Calculator →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/how-to-get-best-mortgage-rate/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Rate Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">How to Get the Best Mortgage Rate in 2025</h3>
            <p className="mt-1 text-sm text-gray-600">Proven strategies to qualify for the lowest mortgage rate possible, potentially saving tens of thousands of dollars over the life of your loan.</p>
          </a>
          <a href="/learn/15-vs-30-year-mortgage/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Loan Comparison</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">15-Year vs 30-Year Mortgage: Which Is Right for You?</h3>
            <p className="mt-1 text-sm text-gray-600">A detailed comparison of 15-year and 30-year mortgages, including total interest costs, monthly payment differences, and which is better for your situation.</p>
          </a>
          <a href="/learn/mortgage-points-explained/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Mortgage Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Mortgage Points Explained: Are They Worth It?</h3>
            <p className="mt-1 text-sm text-gray-600">A clear explanation of mortgage discount points, how they work, and how to calculate whether buying points makes financial sense for your situation.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Understanding Monthlymortgagecalc</h2>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Navigating the complexities of monthlymortgagecalc requires clear, objective data. Our calculator uses established industry formulas to provide a baseline estimate for your specific situation. While no automated tool can replace professional advice, understanding these foundational numbers is the first step toward making an informed decision.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Factors Influencing Your Estimate</h3>
            <p className="mb-4">Several variables can significantly alter the final outcome when dealing with monthlymortgagecalc:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Jurisdiction and Location:</strong> State laws and regional economic factors often dictate baseline costs, tax rates, or settlement multipliers.</li>
              <li><strong>Timeline and Duration:</strong> Longer time horizons introduce compounding variables, inflation adjustments, or statute of limitations considerations.</li>
              <li><strong>Individual Circumstances:</strong> Your specific financial standing, medical history, or legal background acts as a multiplier on standard formulas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Use This Data</h3>
            <p className="mb-6">
              We recommend using the estimate generated above as a starting point for discussions with qualified professionals. Whether you are speaking to an attorney, a financial planner, or a healthcare provider, having a baseline calculation helps you ask better questions and set realistic expectations.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8 rounded-r-lg">
              <p className="text-sm text-blue-800 mb-0">
                <strong>Editorial Note:</strong> The formulas used on this site are regularly reviewed against current public data sources. For a detailed breakdown of our calculation methods, please review our <a href="/methodology" className="underline hover:text-blue-900">Methodology & Sources</a> page.
              </p>
            </div>
          </div>
        </div>

    </div>
  );
}
