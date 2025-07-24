import { calculateCompoundInterest } from "./interest-formulas/compound-interest-formula";
import { calculateAtMaturityInterest } from "./interest-formulas/simple-interest-formula";

export const INTEREST_PAID_FREQUENCY = {
  monthly: "monthly",
  quarterly: "quarterly",
  annually: "annually",
  maturity: "maturity",
} as const;
export type InterestPaidFrequency = keyof typeof INTEREST_PAID_FREQUENCY;

export function calculateTermDeposit(
  principal: number,
  annualRate: number,
  termInMonths: number,
  interestPaidFrequency: InterestPaidFrequency,
) {
  if (!Object.values(INTEREST_PAID_FREQUENCY).includes(interestPaidFrequency)) {
    // TODO
    throw new Error(`Please Provide a valid interest payment frequency`);
  }

  let result: number;

  if (interestPaidFrequency === INTEREST_PAID_FREQUENCY.maturity) {
    result = calculateAtMaturityInterest(principal, annualRate, termInMonths);
  } else {
    result = calculateCompoundInterest(
      principal,
      annualRate,
      termInMonths,
      interestPaidFrequency,
    );
  }

  return Math.round(result);
}
