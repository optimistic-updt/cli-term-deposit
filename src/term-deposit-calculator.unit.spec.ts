import { calculateTermDeposit } from "./term-deposit-calculator";

const PRINCIPAL = 100000;
const INTEREST_RATE = 0.011;
const TERM_IN_MONTHS = 36; // 3 years

describe("[calculateTermDeposit] interest payment occurence", () => {
  it("when interest is paid MONTHLY", () => {
    const interestPayment = "monthly";

    const result = calculateTermDeposit(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103353);
  });

  it("when interest is paid QUARTERLY", () => {
    const interestPayment = "quarterly";

    const result = calculateTermDeposit(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103350);
  });

  it("when interest is paid at ANNUALLY", () => {
    const interestPayment = "annually";

    const result = calculateTermDeposit(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103336);
  });

  it("when interest is paid at maturity", () => {
    const interestPayment = "maturity";

    const result = calculateTermDeposit(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103300);
  });
});
