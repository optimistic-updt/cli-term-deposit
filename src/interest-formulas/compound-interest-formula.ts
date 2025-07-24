import {
  INTEREST_PAID_FREQUENCY,
  InterestPaidFrequency,
} from "../term-deposit-calculator";

type MonthlyCompoundingFrequency = Omit<InterestPaidFrequency, "maturity">;

const getMonthlyCompoundingFrequency = (
  interestPaidFrequency: MonthlyCompoundingFrequency,
) => {
  const MONTHLY_COMPOUNDING_FREQ = {
    [INTEREST_PAID_FREQUENCY.annually]: 1 / 12,
    [INTEREST_PAID_FREQUENCY.quarterly]: 1 / 3,
    [INTEREST_PAID_FREQUENCY.monthly]: 1,
  } as const;

  // TODO come back to TS error
  return MONTHLY_COMPOUNDING_FREQ[interestPaidFrequency];
};

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  termInMonths: number,
  interestPaidFrequency: InterestPaidFrequency,
) {
  let monthlyCompoundingFrequency = getMonthlyCompoundingFrequency(
    interestPaidFrequency,
  );
  let monthlyInterest = annualRate / 12;

  let result =
    principal *
    (1 + monthlyInterest / monthlyCompoundingFrequency) **
      (monthlyCompoundingFrequency * termInMonths);

  // Rounding to two decimal
  return parseFloat(result.toFixed(2));
}
