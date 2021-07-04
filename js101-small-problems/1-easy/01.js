/* Write a function that takes one integer argument,
which may be positive, negative, or zero.
This method returns true if the number's absolute value is odd.
You may assume that the argument is a valid integer value.

PEDAC Practice:
  - input is integer (positive, negative, or zero)
  - output is boolean
  - input will always be a valid integer value
  - returns true (if number's absolute value is odd)
  --  => if num % 2 !== 0, return true  (this works for negative nums and zero too)
  - Question: what if the input is a float? => It won't be b/c the problem definition says it will be a valid integer.
  - 
*/

const isOdd = (num) => {
  if (num % 2 !== 0) {
    return true;
  }

  return false;
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// CORRECT (I think)

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd2(2)); // => false
console.log(isOdd2(5)); // => true
console.log(isOdd2(-17)); // => true
console.log(isOdd2(-8)); // => false
console.log(isOdd2(0)); // => false
console.log(isOdd2(7)); // => true


/* LS Provided Solution

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

Explanation:
"In JavaScript, the remainder operator returns negative results if the number on the left is negative. 
For that reason, we need to call Math.abs() function and pass the number as the argument,
to convert it to a positive value. Then, we can check whether dividing that number
by 2 results in a remainder 1 or not."

I like my solution better so you don't have to use Math.abs(), but I do like students' use of the ternery operator:

const isOdd = num => return (num % 2 !== 0) ? true : false;

But you can simplify even further, since you don't need a return value on a one-line arrow function (the return is implicit only on one-line arrow functions):

let isOdd = num => num % 2 !== 0;