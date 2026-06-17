import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About MortgagePaymentEstimator",
  description: "About MortgagePaymentEstimator — Calculate Your Monthly Mortgage Payment",
};
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink mb-6">About MortgagePaymentEstimator</h1>
      <p>Free mortgage payment calculator. Estimate your monthly mortgage payment including principal, interest, taxes, and insurance. Compare loan types and terms.</p>
      <p>Our tools and guides are designed to help you make informed decisions with clear, accurate, and up-to-date information. All content is for educational purposes only and does not constitute financial, legal, or professional advice.</p>
      <h2>Our Mission</h2>
      <p>We believe everyone deserves access to clear, unbiased information to make better financial decisions. Our calculators and guides are free, ad-supported, and built to be genuinely useful — not just to rank on search engines.</p>
      <h2>Contact</h2>
      <p>Questions or feedback? Reach us at: info@monthlymortgagecalc.com</p>
    </div>
  );
}
