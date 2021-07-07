/* Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on
those two numbers: addition, subtraction, product,
quotient, remainder, and power. Do not worry about validating the input.

Example:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

*/

let rlSync = require('readline-sync');

let num1 = parseInt(rlSync.question('Enter your first positive integer\n'));
let num2 = parseInt(rlSync.question('Enter your second positive integer\n'));

let addition = num1 + num2;
let subtraction = num1 - num2;
let product = num1 * num2;
let quotient = parseFloat(num1 / num2).toFixed(2);
let remainder = num1 % num2;
let power = num1 ** num2;

console.log(`${num1} + ${num2} = ${addition}`);     // 23 + 17 = 40
console.log(`${num1} - ${num2} = ${subtraction}`);  // 23 - 17 = 6
console.log(`${num1} * ${num2} = ${product}`);      // 23 * 17 = 391
console.log(`${num1} / ${num2} = ${quotient}`);     // 23 / 17 = 1.35
console.log(`${num1} % ${num2} = ${remainder}`);    // 23 % 17 = 6
console.log(`${num1} ** ${num2} = ${power}`);       // 23 ** 17 = 1.4105003956066297e+23

// CORRECT
