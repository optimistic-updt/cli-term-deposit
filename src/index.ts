#!/usr/bin/env ts-node

import os from "os";
import { calculateTermDeposit } from "./term-deposit-calculator";
// import { Command } from "commander";

// const program = new Command();

// program
//   .name("tdc")
//   .description("CLI utility for calculating term deposits")
//   .version("0.0.1")
//   .option("-p, --principal <number>", "Principal amount")
//   .option("-r, --rate <number>", "Annual interest rate")
//   .option("-t, --term <number>", "Term in months")
//   .option("-p, --paid <string>", "Payment frequency");

// program.parse();

// v2 - user facing
var username = os.userInfo().username;

function startCalculator() {
  console.log(`Welcome to the term deposit calculator, ${username}`);

  // Get variables here
  const principal = 10000;
  const rate = 1.1;
  const termInMonths = 36;
  const paid = "maturity";
  //

  calculateTermDeposit(principal, rate, termInMonths, paid);
}

startCalculator();
