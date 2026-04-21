console.log("Hello World");
let P = 10000,
  r = 0.12,
  n = 3,
  t = 3;

const A = P * (1 + r / n) ** (n * t);
const compoundInterest = A - P;
console.log(
  "Th Compound interest after " +
    t +
    " years is: " +
    compoundInterest.toFixed(0),
);
