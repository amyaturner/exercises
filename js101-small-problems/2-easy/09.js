/* The parseInt() method converts a string of numeric characters
(including an optional plus or minus sign) to an integer.
The method takes 2 arguments where the first argument is the string we want to
convert and the second argument should always be 10 for our purposes.
parseInt() and the Number() method behave similarly.
In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer.
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs,
nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the
old-fashioned way and calculate the result by analyzing the characters in the string.

*/

const DIGITS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

/* function stringToIntegerMine(strOfIntegers) {
  let newNum = 0;
  for (let i = 1; i < strOfIntegers.length; i += 1) {
    newNum += DIGITS[strOfIntegers[setOfIntegers.length - i]]
  }
}*/

/* Dang, I could not solve this one on my own. Had to look at the answer!

LS PROVIDED SOLUTION:
*/

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("572") === 572); //logs true
console.log(stringToIntegerAlt2("ABC"));

console.log();

/* So...
let arrayOfDigits = string.split("").map(char => DIGITS[char]);
This turns '4321' into this:
[4, 3, 2, 1]
arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
This means...
value is reassigned to (10 * 0) + 4, so that = 4
so value (4) is now reassigned to...
(10 * 40) + 3 = 43
value reassigned to (10 * 43) + 2 = 432
value reassigned to (10 * 432) + 1 = 4321
There you go!
This one was beyond my level of programmatic thinking and understanding level right now in the program.
But that's okay, just need to remember this well for next time.
Come back to this one again.

LS Explanation:
"As usual, this isn't the shortest or even the easiest solution to this problem, but it's straightforward.
The big takeaway from this solution is our use of the DIGITS object to convert string digits to their numeric values.
This technique of using objects to perform conversions is a common idiom that
you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.

Keep in mind that the keys of an object are always strings.
Thus, on line 3, the 0 to the left of the colon (:) is a string even thought it doesn't look like a string.
The 0 to the right is a number. That's a convenient relationship in this problem
since we'll use digits stored as strings to look up the corresponding numeric values.

The actual computation of the numeric value of string is mechanical.
We take each digit and add it to 10 times the previous value,
which yields the desired result in almost no time."
*/

// Interesting Alt Solution by a Student:

function stringToIntegerAlt(string) {
  numberCharacters = string.split('').filter((element) => (element >= '0' && element <= '9'))
  return +numberCharacters.join('');
}

console.log(stringToIntegerAlt("4321") === 4321); // logs true
console.log(stringToIntegerAlt("570") === 570); // logs true
console.log(stringToIntegerAlt("572") === 572); //logs true
console.log(stringToIntegerAlt2("ABC"));  // logs NaN

// Or since the problem definition said we can just assume the string argument is digits, it could really just be:

function stringToIntegerAlt2(string) {
  return +string
}


console.log();

console.log(stringToIntegerAlt2("4321") === 4321); // logs true
console.log(stringToIntegerAlt2("570") === 570); // logs true
console.log(stringToIntegerAlt2("572") === 572); //logs true
console.log(stringToIntegerAlt2("ABC")); // logs NaN
