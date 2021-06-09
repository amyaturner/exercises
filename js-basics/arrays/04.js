// Split the string alphabet into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let charArr = [];

for (let char of alphabet) {
  charArr.push(char);
}

console.log(charArr);

/* CORRECT
However, I way overthought it. I didn't realize split() with an empty string as its argument would split up the characters ––
I thought it would just put the same string into the first element of the array. But guess I was wrong.

Provided Solution:
*/

console.log(alphabet.split(""));

// Alt provided solution:

Array.from(alphabet);
/* this is a static method on the Array object itself, which uses alphabet as its argument.
This is in contrast to calling an instance/prototype method directly on alphabet, as above: alphabet.split("").