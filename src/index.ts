#!/usr/bin/env ts-node

import os from "node:os";
import { calculateTermDeposit } from "./term-deposit-calculator";
import { askUserInputs } from "./ask-inputs";

let username = os.userInfo().username;

async function startCalculator() {
  console.log(
    `Welcome to the term deposit calculator, ${username}\nFind out how much more you could save with a term deposit.`,
  );

  try {
    let inputs = await askUserInputs();

    let finalBalance = calculateTermDeposit(
      inputs.principal,
      inputs.rate,
      inputs.termsInMonth,
      inputs.interestPaymentFrequency,
    );

    console.log(
      `Your final balance would be: $${finalBalance}\n\nGet started at https://www.nab.com.au/personal/bank-accounts/nab-term-deposit-checklist`,
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startCalculator();
