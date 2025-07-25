import Readline from "node:readline/promises";
import {
  INTEREST_PAYMENT_FREQUENCIES,
  InterestPaymentFrequency,
} from "./interest-types";

export const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Inputs = {
  principal: number;
  rate: number;
  termsInMonth: number;
  interestPaymentFrequency: InterestPaymentFrequency;
};

export async function askUserInputs(): Promise<Inputs> {
  let principal = await rl.question(
    "\nWhat is the principal amount? (10000, 2500000, ...) ",
  );
  let sanitizedPrincipal = parseFloat(principal);

  if (isNaN(sanitizedPrincipal)) {
    throw new Error("Invalid format. Please just use numbers. (i.e. 1000)");
  }

  let rate = await rl.question(
    "\nWhat is the annual interest rate in %? (example: 1.1, 3.2) ",
  );

  let sanitizedRate = parseFloat(rate);

  if (isNaN(sanitizedRate)) {
    throw new Error("Invalid format. example: 1.1, 3.2");
  } else {
    // decimalise the rate
    sanitizedRate = sanitizedRate / 100;
  }

  let termInMonths = await rl.question(
    "\nWhat is the investment term in months? (12, 32, ....) ",
  );

  let sanitizedTermInMonths = parseFloat(termInMonths);

  if (isNaN(sanitizedTermInMonths)) {
    throw new Error("Invalid format. example: 12, 32");
  }

  let paid = await rl.question(
    "\nShould the interest be paid monthly, quarterly, annually or at maturity? ",
  );

  if (!INTEREST_PAYMENT_FREQUENCIES.includes(paid as any)) {
    throw new Error(
      `Invalid format. choose one of ${INTEREST_PAYMENT_FREQUENCIES.join(
        ", ",
      )}`,
    );
  }

  let sanitizedPaid = paid as InterestPaymentFrequency;

  rl.close();

  return {
    principal: sanitizedPrincipal,
    rate: sanitizedRate,
    termsInMonth: sanitizedTermInMonths,
    interestPaymentFrequency: sanitizedPaid,
  };
}
