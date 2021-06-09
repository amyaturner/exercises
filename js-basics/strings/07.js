// Write a function that checks whether a string is empty or not. For example:

function isBlank(str) {
  return str === '';
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

// CORRECT

//Provided Solution:

function isBlank_Provided(string) {
  return string.length === 0;
}

//NOTE: I'm not sure if there is actually any edge cases with my implementation.