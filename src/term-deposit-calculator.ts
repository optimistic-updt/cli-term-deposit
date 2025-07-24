import { calculateAtMaturityInterest } from "./interest-formulas/maturity";

const INTEREST_PAID_FREQUENCY = {
  monthly: "monthly",
  quarterly: "quarterly",
  annually: "annually",
  maturity: "maturity",
} as const;
type InterestPaidFrequency = keyof typeof INTEREST_PAID_FREQUENCY;

export function calculateTermDeposit(
  principal: number,
  annualRate: number,
  termInMonths: number,
  interestPaidFrequency: InterestPaidFrequency,
) {
  // choose the right calculation method
  if (interestPaidFrequency === INTEREST_PAID_FREQUENCY.maturity) {
    return calculateAtMaturityInterest(principal, annualRate, termInMonths);
  } else {
    // return calculateCompoundInterest(
    //   principal,
    //   annualRate,
    //   termInMonths,
    //   interestPaidFrequency,
    // );
  }
}

// it's either maturity
// and all others
// OR
// case for each
