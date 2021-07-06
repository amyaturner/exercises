/* Write a function that determines and returns the UTF-16 string value
of a string passed in as an argument.
The UTF-16 string value is the sum of the UTF-16 values of every character
in the string. (You may use String.prototype.charCodeAt()
to determine the UTF-16 value of a character.)
*/

function utf16Value(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += str[i].charCodeAt();
  }

  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

/* CORRECT! First try.

PROVIDED SOLUTION (only slightly different here: sum += string.charCodeAt(idx);
*/

function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}