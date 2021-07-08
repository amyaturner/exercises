/* In the previous exercise, you developed a function that converts simple numeric strings to integers.
In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer.
The string may have a leading + or - sign; if the first character is a +,
your function should return a positive number; if it is a -, your function should return a negative number.
If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.
*/

function stringToSignedInteger(string) {
  return +string;
}

console.log(stringToSignedInteger("4321")); // logs 4321
console.log(stringToSignedInteger("-570")); // logs -570
console.log(stringToSignedInteger("+100")); // logs 100

console.log();

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

console.log();

// Student Solution (Del):

let stringToSignedInteger2 = (str) => str * 1;

console.log(stringToSignedInteger2("4321")); // logs 4321
console.log(stringToSignedInteger2("-570")); // logs -570
console.log(stringToSignedInteger2("+100")); // logs 100

console.log();

console.log(stringToSignedInteger2("4321") === 4321); // logs true
console.log(stringToSignedInteger2("-570") === -570); // logs true
console.log(stringToSignedInteger2("+100") === 100); // logs true

/* Since the problem definition was to analyze and manipulate the characters in the string, here is their solution:

LS PROVIDED SOLUTION:
*/

function stringToSignedIntegerLS(string) {
  switch (string[0]) {
    case "-":
      return -stringToIntegerLS(string.slice(1, string.length));
    case "+":
      return stringToIntegerLS(string.slice(1, string.length));
    default:
      return stringToIntegerLS(string);
  }
}
