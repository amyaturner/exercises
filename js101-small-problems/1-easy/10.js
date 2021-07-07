/* Write a function that computes the sum of all numbers between 1 and some other number,
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20,
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

PEDAC Practice:

Problem:
- Write a function
- Takes one argument, an integer greater than 1 (can assume it's valid)
- Iterate through each number from 1 to the argument integer (inclusive) and
  check if each number is a multiple of 3 or 5.
- If a multiple, add it to the sum.
- Return the total sum.

Example and Use Cases:
- if the supplied number is 20,
  the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

Make Requirements Explicit:
- Based on the example, you only add unqiue factors to the sum.

Data Types/Structures:
- function
- number
- loop to iterate (probably a for loop)
- if statements to check if a multiple and to check if multiple is unique. How to check if unique?
- Maybe have to use an array to add each number, then check if the number is already in the array
- Then add all the nums in the array.

Algorithm:
- Write a function
- Function akes one argument, an integer greater than 1 (can assume it's valid)
- Initialize a sum variable and an empty array variable.
- Iterate through each number from 1 to the argument integer (inclusive) and
  check if each number is a multiple of 3 or 5, AND if the number is NOT in the array yet.
- If a multiple and not yet in array, add it to the array.
- Add up all the numbers in the array and store them in the sum variable.
- Return sum.

Code:

*/

function multisum(num) {
  let sum = 0;
  let multiples = [];

  for (let i = 1; i <= num; i += 1) {
    if ( (i % 3 === 0) && (!multiples.includes(i)) ) {
      multiples.push(i);
    }
  }

  for (let n = 1; n <= num; n += 1) {
    if ( (n % 5 === 0) && (!multiples.includes(n)) ) {
      multiples.push(n);
    }
  }

  multiples.forEach(multiple => {
    sum += multiple;
  });

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(20));      // 98
console.log(multisum(1000));    // 234168

/* CORRECT
but my first instinct to do an || comparison for the 3 or 5 factors was better
than changing it to two different for loops. It's actually fine as an ||, as shown
in the provided solution. Also, my first instinct to just add up the numbers, without
using an array was also better. Don't need the array or to iterate thru it with
forEach. So, my first instinct was good; I just messed up by using the argument
(rather than the counter) as the variable in the modulus condition. That messed up
the math calculations.

PROVIDED SOLUTION:
*/

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

// My code refactored:

function multisum(num) {
  let sum = 0;

  for (let i = 1; i <= num; i += 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }

  return sum;

}
