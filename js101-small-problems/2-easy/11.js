/* In the previous two exercises, you developed functions that convert simple numeric strings to signed integers.
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on)
to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(),
Number.prototype.toString, or an expression such as '' + number.
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
*/

const stringIntegers = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

function integerToString(integer) {
  // could NOT get this one either. Uff.
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

// LS PROVIDED SOLUTION:

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

/* LS DISCUSSION:

Like in stringToInteger, this solution also uses a lookup table, but this time we use an array.
In building the DIGITS lookup table, we just need to be mindful to
align the string value to the array index position, so that when we do something like DIGITS[5],
we get the string representation of the index/number 5.

The tricky part of the solution is the "math" for getting the numbers digit by digit.
The solution gets the rightmost digit (a one's digit) by getting the remainder of
dividing the number by 10. For instance, 4321 % 10 returns 1.
The solution then chops off the rightmost digit to get the next number by reassigning
number to the result of Math.floor(number / 10).
Consequently, the result string is incrementally built by prepending the looked-up value,
using the remainder as the index, to the previous value of result.
This process repeats until the value of number becomes 0.
*/
