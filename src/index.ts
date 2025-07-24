#!/usr/bin/env ts-node

import os from "os";
import { calculateTermDeposit } from "./term-deposit-calculator";

let username = os.userInfo().username;

function startCalculator() {
  console.log(`Welcome to the term deposit calculator, ${username}`);

  try {
    // Get variables here
    const principal = 10000;
    const rate = 1.1;
    const termInMonths = 36;
    const paid = "maturity";
    //

    // HERE convert %interest rate to decimal
    let rateInDecimal = rate / 100;

    calculateTermDeposit(principal, rateInDecimal, termInMonths, paid);
  } catch (error) {
    console.error(
      "We could not calculate the term deposit. Please check your inputs:",
      error,
    );
    process.exit(1);
  }
}

startCalculator();
