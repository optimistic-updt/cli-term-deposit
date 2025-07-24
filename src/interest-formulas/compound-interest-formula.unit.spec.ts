import { calculateCompoundInterest } from "./compound-interest-formula";

describe("[calculateCompoundInterest] interest payment occurence", () => {
  const PRINCIPAL = 100000;
  const INTEREST_RATE = 0.011;
  const TERM_IN_MONTHS = 36; // 3 years

  it("when interest is paid MONTHLY", () => {
    const interestPayment = "monthly";

    const result = calculateCompoundInterest(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103353.49);
  });

  it("when interest is paid QUARTERLY", () => {
    const interestPayment = "quarterly";

    const result = calculateCompoundInterest(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103350.37);
  });

  it("when interest is paid at ANNUALLY", () => {
    const interestPayment = "annually";

    const result = calculateCompoundInterest(
      PRINCIPAL,
      INTEREST_RATE,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103336.43);
  });

  // it("when interest is paid freqency is not supported", () => {
  //   const interestPayment = "biannually";

  //   const result = calculateCompoundInterest(
  //     PRINCIPAL,
  //     INTEREST_RATE,
  //     TERM_IN_MONTHS,
  //     interestPayment as any,
  //   );

  //   expect(result).toThrow();
  // });

  // it("matures at 12 months", () => {
  //   const result = calculateAtMaturityInterest(100000, 0.02, 12);
  //   expect(result).toBe(102000);
  // });
  // it("matures at 120 months", () => {
  //   const result = calculateAtMaturityInterest(100000, 0.02, 24);
  //   expect(result).toBe(104000);
  // });
  // it("has 0% interest rate", () => {
  //   const result = calculateAtMaturityInterest(100000, 0, 24);
  //   expect(result).toBe(100000);
  // });
  // it("has negative interest rate", () => {
  //   const result = calculateAtMaturityInterest(100000, -0.02, 24);
  //   expect(result).toBe(96000);
  // });
  // it("has no principal", () => {
  //   const result = calculateAtMaturityInterest(0, 0.02, 24);
  //   expect(result).toBe(0);
  // });
});

describe("[calculateCompoundInterest] various interest rates", () => {
  const PRINCIPAL = 100000;
  const TERM_IN_MONTHS = 36; // 3 years

  it("when interest is 1.1%", () => {
    const interestPayment = "monthly";

    const result = calculateCompoundInterest(
      PRINCIPAL,
      0.011,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(103353.49);
  });

  it("when interest is 0%", () => {
    const interestPayment = "monthly";

    const result = calculateCompoundInterest(
      PRINCIPAL,
      0,
      TERM_IN_MONTHS,
      interestPayment,
    );

    expect(result).toBe(100000);
  });

  // TODO negative rates
});

describe("[calculateCompoundInterest] various interest terms", () => {
  const PRINCIPAL = 100000;
  const INTEREST_RATE = 0.011;
  const INTEREST_PAYMENT = "monthly";

  it("matures at 12 months", () => {
    const result = calculateCompoundInterest(
      PRINCIPAL,
      INTEREST_RATE,
      12,
      INTEREST_PAYMENT,
    );

    expect(result).toBe(101105.56);
  });
  it("matures at 120 months", () => {
    const result = calculateCompoundInterest(
      PRINCIPAL,
      INTEREST_RATE,
      120,
      INTEREST_PAYMENT,
    );

    expect(result).toBe(111622.18);
  });
});
