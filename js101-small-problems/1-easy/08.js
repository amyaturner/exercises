/* In the modern era under the Gregorian Calendar, leap years occur in every year that
is evenly divisible by 4, unless the year is also divisible by 100.
If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0.
Write a function that takes any year greater than 0 as input and returns true if the year is a leap year,
or false if it is not a leap year.

PEDAC Practice:

Problem:
- Write a function
- takes an argument (any year greater than 0)
- Returns true if the year is a leap year
- Returns false if it is not a leap year

Make Requirements Explicit:
- Argument must be a number
- If argument passed is 0 or not a number, program needs to ask for a number (over 0) until a valid number is provided
  or if not a user-imput, program should provide exception handling (an error message) => maybe with try, catch, throw statements ?
- If argument does come from the user (user input), need to parseInt the input (since it will be a string data type).
- What if the input is a string that's not a number (like 'string') and we try to parseInt it, what will we get? The exception handling should
  address this or wrap around this as well.

Examples:
- (See list below)

Use Cases:
- Quickly and easily determining which years in the future or past will be or were leap years.

Data Structures and Types:
- function
- takes one argument
- argument needs to an integer over 0
- or otherwise capable of being parsed into an integer over 0 => using parseInt() method
- math operation (remainder / modulus operator)
- nested if statements/conditions


Algorith:
- function(year):
- if year is divisible by 4 and not by 100, return true
- if year is (divisible by 100 and not by 4) + (divisilbe by 400), return true
- else return false

Code:

*/

const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

/* CORRECT
(But I didn't do the edget cases or error handling - maybe for further exploration...)

PROVIDED SOLUTION:
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

/* Clever. More concise than mine.
Since whatever is divisible by 400, will also be divisible by 100, you can skip the &&s that I used and just check one condition,
as long as they're in correct order. And then on the final else, it just returns the result of the condition check,
which means you don't have to use another else if there.

SHORTER PROVIDED SOLUTION:
*/

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Super concise. Nice.
