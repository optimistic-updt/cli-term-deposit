export function calculateAtMaturityInterest(
  principal: number,
  annualInterestRate: number,
  termInMonths: number,
) {
  let termInYears = termInMonths / 12;

  let result = principal + principal * annualInterestRate * termInYears;

  return result;
}
