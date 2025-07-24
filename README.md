# Term deposit calculator CLI

A CLI utility for calculating term deposits.

[photo]

## Quickstart

To calculate the final balance of a principal of $10,000, at a annual interest rat of 3%, re-invested monthly for 3 years (36 months)

```bash
npx tdc --principal 10000 --rate 5 --term 36 --paid monthly
```

## Assumptions

### functionnal

- The interests are accrued monthly
- the result is rounded to the nearest dollar

### non-fonctionnal

- project is will not be used as a library
- project setup is done for a minimal setup, not a full blown development environment

## Contribute

(how to run the code)

## Tests

(how to run the tests)

## Discussion

tradoff/design decisions

## Further Work

- output as a table of accrued interest
- enable passing term in years
