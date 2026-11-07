import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateMortgage, type MortgageInputs } from "../app/calculator/mortgage";

const base: MortgageInputs = {
  homePrice: "0.01", downPct: "0", rate: "0", term: "30",
  propTaxRate: "0", insuranceAnnual: "0", mortgageInsuranceMonthly: "",
};

function close(actual: number, expected: number, relativeTolerance = 1e-12) {
  assert.ok(Number.isFinite(actual), `expected a finite value, got ${actual}`);
  assert.ok(Math.abs(actual - expected) <= Math.abs(expected) * relativeTolerance,
    `expected ${actual} to be approximately ${expected}`);
}

test("reported subnormal rate retains the minimum-price 30-year payment", () => {
  const result = calculateMortgage({ ...base, rate: "1e-320" });
  assert.ok(result);
  close(result.principalInterest, 0.01 / 360);
  assert.ok(result.principalInterest > 0);
});

test("zero and tiny positive rates approach principal divided by months", () => {
  // 5e-324 / 1200 underflows to zero; 1e-320 / 1200 remains subnormal.
  for (const rate of ["0", "5e-324", "1e-320", "1e-319", "1e-310", "1e-300", "1e-20"]) {
    for (const term of ["10", "15", "20", "30"]) {
      const result = calculateMortgage({ ...base, rate, term });
      assert.ok(result, `rate ${rate} and term ${term} should be accepted`);
      close(result.principalInterest, 0.01 / (Number(term) * 12));
      assert.equal(result.total, null);
    }
  }
});

test("normal loan payment and included costs remain correct", () => {
  const result = calculateMortgage({ ...base, homePrice: "400000", downPct: "20",
    rate: "6.75", propTaxRate: "1.2", insuranceAnnual: "1800", mortgageInsuranceMonthly: "75" });
  assert.ok(result);
  assert.equal(result.loan, 320000);
  close(result.principalInterest, 2075.5139090182887);
  assert.equal(result.taxes, 400);
  assert.equal(result.homeownersInsurance, 150);
  close(result.total!, result.principalInterest + 625);
  close(result.totalInterest, result.principalInterest * 360 - result.loan);
});

test("supported maximum rate remains finite for minimum and maximum prices", () => {
  const minimum = calculateMortgage({ ...base, rate: "100" });
  const maximum = calculateMortgage({ ...base, homePrice: "1000000000", rate: "100", term: "10" });
  assert.ok(minimum && maximum);
  close(minimum.principalInterest, 0.0008333333333335883);
  close(maximum.principalInterest, 83338948.92172605);
});

test("a fully paid down loan has no principal or interest", () => {
  const result = calculateMortgage({ ...base, downPct: "100", rate: "1e-320", mortgageInsuranceMonthly: "0" });
  assert.ok(result);
  assert.equal(result.loan, 0);
  assert.equal(result.principalInterest, 0);
  assert.equal(result.totalInterest, 0);
  assert.equal(result.total, 0);
});

test("blank, negative, excessive and non-finite rates are rejected", () => {
  for (const rate of ["", " ", "-1", "101", "Infinity", "NaN"]) {
    assert.equal(calculateMortgage({ ...base, rate }), null, `rate ${JSON.stringify(rate)}`);
  }
});
