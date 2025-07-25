# Term deposit calculator CLI

A CLI utility for calculating term deposits.

[screenshot of the tool](./cli-start@2x.png)

## Usage

> **Prerequisites**
> Node.js (v22 or higher)

Clone the repo, install dependencies then run the start script

```bash
git clone git@github.com:optimistic-updt/cli-term-deposit.git
cd cli-term-deposit
npm i
npm start
```

Follow the instructions on the CLI

## Tests

The tests are written with Jest and can be run with `npm test` once the dependencies are installed

```bash
npm test
```

## Assumptions

### Functionnal

- The interests are accrued monthly
- The result is rounded to the nearest dollar (as per website)
- The tool is primarly user-facing instead of machine use

### Non-fonctionnal

- Project is will not be used as a library
- The naming chosen within the project is considering that the project is self-contained and not part of a bigger codebase
- Project setup is done for a minimal setup, not a full blown development environment

## Discussion

I decided to go for an interactive interface as the brief document mentionned a UI interface versus going for a full CLI unix utility style.

I broke down the sofware in 3 main parts:

- Input gathering + validation
- Calculation + formula selection
- Output

### Interest Rate

One key design choice is that I decided that, once in the sytem, the interest rate should be represented as decimal. This is to avoid having to convert the rate to decimal in each formula and possibly in more places in the system.

With more time, the interest rate conversion and validation would be a bit more robust. Maybe with some domain related constraints such as upper and lower bound.
I can see something more along the lines of:

```javascript
const interest = new InterestRate(1.1);
// should error if invalid format

interest.isValid();
interest.toPercentageString();
```

### Compound formula: month based vs year based

I decided to go for the a month based formula to calculate the coumpound interest because:

- From my readings/experience, interests are generally accrued monthly, hence the behaviour of the system represent more the real life representation.
- The website contains a month-by-month table representation. This table would be easier to generate from a month based formula instead of a year based formula.

One of the downside is there's a bit more manipulation and converstion that have to be made in the system but the granularity and correctness is, I believe, worth it.

### Control Flow

In my head, there is two ways to do the control flow for the formulas.

Option 1

```typescript
if maturity
  calcMaturity(...args)
else
  calcCompound(...args)
```

Option 2

```typescript
switch (frequency) {
  case "monthly":
    result = calcCompound(...args, "monthly");

  case "annually":
    result = calcCompound(...args, "annually");

  case "maturity":
    result = calcAtMaturity(...args);

  default:
    throw new Error(`
      Please Provide a valid interest payment frequency
      choose from: ${INTEREST_PAYMENT_FREQUENCIES.join(", ")}
    `);
}
```

In all honesty, now that I wrote both of them down, I think prefer option 2 because the error is more "integrated" and written more cleanly.

In the exercise I decided to go for option 1 because there was only 2 possible formulas ans one of those had just one case hence the if statement

If each or most of the formulas had been different, it would have pushed me more towards a `switch` or an alternative pattern.

### Coding Approach

I did go for a more functionnal programming approach instead of a OOP because the calculator felt like a process or action. I believe this, in this context, is better represented using functionnal programming vs OOP

## Appendix

Quick whiteboard thoughts

[link to excalidraw](https://link.excalidraw.com/readonly/Mh0WMyNouyjSVmPhGntu)

## Further Work

[ ] Output as a table of accrued interest
[ ] enable term in years as arguments
