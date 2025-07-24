export const INTEREST_PAYMENT_FREQUENCY = {
  monthly: "monthly",
  quarterly: "quarterly",
  annually: "annually",
  maturity: "maturity",
} as const;

export const INTEREST_PAYMENT_FREQUENCIES = Object.values(
  INTEREST_PAYMENT_FREQUENCY,
);

export type InterestPaymentFrequency = keyof typeof INTEREST_PAYMENT_FREQUENCY;
