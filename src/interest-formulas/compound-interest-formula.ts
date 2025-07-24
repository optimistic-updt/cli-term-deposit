import {
  INTEREST_PAYMENT_FREQUENCY,
  InterestPaymentFrequency,
} from "../interest-types";

type MonthlyCompoundingFrequency = Omit<InterestPaymentFrequency, "maturity">;

const getMonthlyCompoundingFrequency = (
  interestPaidFrequency: MonthlyCompoundingFrequency,
) => {
  const MONTHLY_COMPOUNDING_FREQ = {
    [INTEREST_PAYMENT_FREQUENCY.annually]: 1 / 12,
    [INTEREST_PAYMENT_FREQUENCY.quarterly]: 1 / 3,
    [INTEREST_PAYMENT_FREQUENCY.monthly]: 1,
  } as const;

  return MONTHLY_COMPOUNDING_FREQ[
    interestPaidFrequency as keyof typeof MONTHLY_COMPOUNDING_FREQ
  ];
};

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  termInMonths: number,
  interestPaidFrequency: InterestPaymentFrequency,
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
