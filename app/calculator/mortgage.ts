export type MortgageInputs = {
  homePrice: string;
  downPct: string;
  rate: string;
  term: string;
  propTaxRate: string;
  insuranceAnnual: string;
  mortgageInsuranceMonthly: string;
};

type MortgageResult = {
  loan: number;
  principalInterest: number;
  taxes: number;
  homeownersInsurance: number;
  mortgageInsurance: number | null;
  subtotal: number;
  total: number | null;
  totalInterest: number;
};

// Blank and out-of-range values are rejected instead of silently becoming zero.
export function calculateMortgage(input: MortgageInputs): MortgageResult | null {
  const number = (value: string, min: number, max: number): number | null => {
    if (value.trim() === "") return null;
    const n = Number(value);
    return Number.isFinite(n) && n >= min && n <= max ? n : null;
  };
  const price = number(input.homePrice, 0.01, 1_000_000_000);
  const down = number(input.downPct, 0, 100);
  const annualRate = number(input.rate, 0, 100);
  const taxRate = number(input.propTaxRate, 0, 100);
  const annualInsurance = number(input.insuranceAnnual, 0, 1_000_000_000);
  const years = number(input.term, 1, 30);
  const mortgageInsurance = input.mortgageInsuranceMonthly.trim() === ""
    ? null : number(input.mortgageInsuranceMonthly, 0, 1_000_000_000);
  if (price === null || down === null || annualRate === null || taxRate === null ||
      annualInsurance === null || years === null || ![10, 15, 20, 30].includes(years) ||
      (input.mortgageInsuranceMonthly.trim() !== "" && mortgageInsurance === null)) return null;

  const loan = price * (1 - down / 100);
  const months = years * 12;
  const monthlyRate = annualRate / 1200;
  // Use the zero-rate limit if conversion underflows; otherwise divide before
  // multiplying by the loan so tiny rates do not underflow the payment numerator.
  // expm1/log1p also avoid cancellation near zero for supported values.
  const principalInterest = monthlyRate === 0 ? loan / months :
    loan * (monthlyRate / -Math.expm1(-months * Math.log1p(monthlyRate)));
  const taxes = price * taxRate / 100 / 12;
  const homeownersInsurance = annualInsurance / 12;
  const subtotal = principalInterest + taxes + homeownersInsurance;
  const totalInterest = Math.max(0, principalInterest * months - loan);
  return { loan, principalInterest, taxes, homeownersInsurance, mortgageInsurance, subtotal,
    total: mortgageInsurance === null ? null : subtotal + mortgageInsurance, totalInterest };
}
