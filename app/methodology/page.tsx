import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Methodology and Sources",
  description: "How the fixed-rate mortgage calculator works and what it excludes.",
  alternates: { canonical: "https://monthlymortgagecalc.com/methodology/" },
};
export default function MethodologyPage() {
  return <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Methodology and Sources</h1>
    <div className="prose-article text-gray-700">
      <h2>Fixed-rate payment</h2>
      <p>Loan principal is home price minus the entered down payment. For monthly interest rate r (annual rate divided by 12) and n monthly payments, principal and interest are P × r / (1 − (1 + r)<sup>−n</sup>). At a zero interest rate, the payment is P / n. Total interest is the monthly principal-and-interest payment times n minus principal. The model assumes a fixed rate, level monthly payments for the entire term, and no extra payments. It does not model adjustable rates or a balloon payment. See the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-included-in-my-monthly-mortgage-payment-en-1943/">CFPB explanation of mortgage amortization</a>.</p>
      <h2>Other inputs</h2>
      <p>Monthly property tax equals home price times the entered annual tax percentage divided by 12; the actual tax may be based on a different assessed value. Annual homeowners insurance is divided by 12. If you enter a monthly mortgage-insurance quote, it is added to the subtotal; otherwise the subtotal excludes it. The tool does not determine whether insurance is required or when it ends. See <a href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/">CFPB guidance on PMI cancellation</a>.</p>
      <p>Default values are examples, not live rates, local tax data, or insurance quotes. Results are rounded for display, so components may not add exactly. Closing costs, HOA dues, maintenance, changing taxes or premiums, and other charges are excluded. Total interest concerns the loan only, not taxes or insurance. Actual lender calculations and escrow amounts can differ. Compare your <a href="https://www.consumerfinance.gov/owning-a-home/compare/request-and-review-multiple-loan-estimates/">Loan Estimates</a>.</p>
    </div>
  </div>;
}
