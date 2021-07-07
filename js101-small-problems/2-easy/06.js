/* Write a function that returns the next-to-last word
in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

PEDAC Practice:

Problem:
- write a function
- one argument => string (will always contain at least two words)
- function returns the next-to-last word from the string

Examples:
- console.log(penultimate("last word") === "last"); // logs true
- console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Types and Structures:
- function
- string
- maybe turn that string into an array with each word as one element
- filter by array.length - 2 for the 2nd to last element
- return that element (should be a one-word string)

Algorithm:
- function definition
- one argument: string with at least two words
- create an array variable using sting.split(" ")
- array.length - 2 to get 2nd-to-last element
- put that element into its own variable for clarity
- return that element

Code:

*/

function penultimate(str) {
  let sentenceArray = str.split(" ");
  let secondToLastWord = sentenceArray[sentenceArray.length - 2];
  
  return secondToLastWord;
}

console.log(penultimate("last word"));
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("Amy Turner"));
console.log(penultimate("Turner Amy"));
console.log(penultimate("It's been a long year."));

// CORRECT

