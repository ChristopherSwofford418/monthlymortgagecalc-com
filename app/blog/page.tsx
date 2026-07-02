import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Blog — MortgagePaymentEstimator',
  description: 'In-depth guides and articles about mortgagepaymentestimator.',
}

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="font-serif text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 mb-8">In-depth guides and articles.</p>
      <AdSlot slot="3456789012" format="horizontal" />
      <div className="mt-8 grid gap-4">
        
      <Link href="/blog/mortgage-payment-breakdown/" className="block border border-line rounded-xl p-5 hover:border-accent hover:shadow-sm transition-all group">
        <h2 className="font-semibold text-ink mb-1 group-hover:text-accent">{"What Makes Up Your Monthly Mortgage Payment: PITI Explained"}</h2>
        <p className="text-sm text-gray-600">{"Breaking down principal, interest, taxes, and insurance in your mortgage payment."}</p>
      </Link>
      <Link href="/blog/how-to-lower-mortgage-payment/" className="block border border-line rounded-xl p-5 hover:border-accent hover:shadow-sm transition-all group">
        <h2 className="font-semibold text-ink mb-1 group-hover:text-accent">{"7 Ways to Lower Your Monthly Mortgage Payment"}</h2>
        <p className="text-sm text-gray-600">{"Refinancing, recasting, and other strategies to reduce what you pay each month."}</p>
      </Link>
      <Link href="/blog/mortgage-points-worth-it/" className="block border border-line rounded-xl p-5 hover:border-accent hover:shadow-sm transition-all group">
        <h2 className="font-semibold text-ink mb-1 group-hover:text-accent">{"Are Mortgage Points Worth Buying? Break-Even Analysis"}</h2>
        <p className="text-sm text-gray-600">{"How to calculate whether paying points upfront saves money over your loan term."}</p>
      </Link>
      <Link href="/blog/biweekly-mortgage-payments/" className="block border border-line rounded-xl p-5 hover:border-accent hover:shadow-sm transition-all group">
        <h2 className="font-semibold text-ink mb-1 group-hover:text-accent">{"Biweekly Mortgage Payments: How Much Do You Really Save?"}</h2>
        <p className="text-sm text-gray-600">{"The math behind biweekly payments and how they help you pay off your mortgage faster."}</p>
      </Link>
      </div>
    </div>
  )
}
