/* Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.

Examples:

1)
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

2)
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let rlSync = require('readline-sync');

let num = parseInt(rlSync.question('Please enter an integer greater than 0:\n'));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');
let sum = 0;
let product = 1;

if (operation === 's') {
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between and including 1 and ${num} is ${sum}.`);
} else {
  for (let n = 1; n <= num; n += 1) {
    product *= n;
  }
  console.log(`The product of the integers between and including 1 and ${num} is ${product}.`);
}

/* Technically it's correct, but it's kind of too simplistic and sloppy thinking.
I could definitely refactor it for a more streamlined program that I can use again. For instance...
I could create some simple functions to do the sum and the product separately so I can call those throughout another program, etc.

REFACTORING MY OWN CODE WITHOUT REVIEWING PROVIDED SOLUTION IN DEPTH YET:

*/

let rlSync = require('readline-sync');

function calculateSumFrom1ToNum(num) {
  let sum = 0;

  for (let i = 1; i <= num; i += 1 ) {
    sum += i;
  }

  return sum;
}

function calculateProductFrom1ToNum(num) {
  let product = 1;

  for (let i = 1; i <= num; i += 1 ) {
    product *= i;
  }

  return product;
}

let userNum = parseInt(rlSync.question('Please enter an integer greater than 0:\n'));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

if (operation === 's') {
  console.log(`The sum of the integers between and including 1 and ${userNum} is ${calculateSumFrom1ToNum(userNum)}.`);
} else if (operation === 'p') {
  console.log(`The product of the integers between and including 1 and ${userNum} is ${calculateProductFrom1ToNum(userNum)}.`);
} else {
  console.log("Oops. Unknown operation.");
}



// PROVIDED SOLUTION:

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}

// NICE. Student solutions on this one are interesting too.