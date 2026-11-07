import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for monthlymortgagecalc.com.",
  alternates: { canonical: "https://monthlymortgagecalc.com/contact/" },
};
export default function ContactPage() {
  return <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Contact</h1>
    <p className="text-gray-700">Email: <a className="underline" href="mailto:info@clearpasstechnologies.com">info@clearpasstechnologies.com</a></p>
  </div>;
}
