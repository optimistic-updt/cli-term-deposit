#!/usr/bin/env ts-node

import { Command } from "commander";

const program = new Command();

program
  .name("tdc")
  .description("CLI utility for calculating term deposits")
  .version("0.0.1");

program.parse();

console.log("hello");
