import { calculateAtMaturityInterest } from "./maturity";

describe("calculateAtMaturityInterest", () => {
  it("matures at 12 months", () => {
    const result = calculateAtMaturityInterest(100000, 0.02, 12);

    expect(result).toBe(102000);
  });
  it("matures at 120 months", () => {
    const result = calculateAtMaturityInterest(100000, 0.02, 24);

    expect(result).toBe(104000);
  });

  it("has 0% interest rate", () => {
    const result = calculateAtMaturityInterest(100000, 0, 24);

    expect(result).toBe(100000);
  });
  it("has negative interest rate", () => {
    const result = calculateAtMaturityInterest(100000, -0.02, 24);

    expect(result).toBe(96000);
  });

  it("has no principal", () => {
    const result = calculateAtMaturityInterest(0, 0.02, 24);

    expect(result).toBe(0);
  });
});
