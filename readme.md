Compound Interest Calculator in JavaScript
What We Learned
This small JavaScript program teaches us two important things:

How to use variables to store numbers
How to calculate Compound Interest using a formula

Variables Used
VariableValueMeaningP10000Principal – the starting amount of money r = 0.12 Rate – 12% annual interest rate; n= 3 Times compounded per year (e.g., every 4 months); t=3 Time – number of years

The Formula
A = P _ (1 + r / n) \*\* (n _ t)
This is the standard Compound Interest formula:

A → Final amount after interest
\*\* → means "to the power of" (exponent) in JavaScript
compoundInterest = A - P → We subtract the original amount to get only the interest earned

What the Code Does, Step by Step

Sets up the starting values (principal, rate, time, etc.)
Applies the compound interest formula to calculate the final amount A
Subtracts the principal P from A to find out how much interest was earned
Prints the result using console.log()
.toFixed(0) rounds the answer to zero decimal places (whole number)

Key JavaScript Concepts Practiced

let – declares a variable whose value can change
const – declares a variable whose value stays fixed
\*\* – exponentiation operator (power of)
console.log() – prints output to the screen
.toFixed(n) – rounds a number to n decimal places
String concatenation – joining text and numbers using +

The Compound interest after 3 years is: 4067
So on a ₹10,000 investment at 12% interest compounded 3 times a year for 3 years, you earn roughly ₹4,067 in interest.
