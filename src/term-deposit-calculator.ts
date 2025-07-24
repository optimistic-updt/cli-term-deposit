import { calculateCompoundInterest } from "./interest-formulas/compound-interest-formula";
import { calculateAtMaturityInterest } from "./interest-formulas/simple-interest-formula";
import {
  INTEREST_PAYMENT_FREQUENCIES,
  INTEREST_PAYMENT_FREQUENCY,
  InterestPaymentFrequency,
} from "./interest-types";

export function calculateTermDeposit(
  principal: number,
  annualRate: number,
  termInMonths: number,
  interestPaymentFrequency: InterestPaymentFrequency,
) {
  if (!INTEREST_PAYMENT_FREQUENCIES.includes(interestPaymentFrequency)) {
    throw new Error(`
      Please Provide a valid interest payment frequency
      choose from: ${INTEREST_PAYMENT_FREQUENCIES.join(", ")}
    `);
  }

  let result: number;

  if (interestPaymentFrequency === INTEREST_PAYMENT_FREQUENCY.maturity) {
    result = calculateAtMaturityInterest(principal, annualRate, termInMonths);
  } else {
    result = calculateCompoundInterest(
      principal,
      annualRate,
      termInMonths,
      interestPaymentFrequency,
    );
  }

  return Math.round(result);
}
