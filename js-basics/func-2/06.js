// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

// ANSWER:

const removeLastChar = str => {
  str.slice([str.length - 1]);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

// INCORECT - could not figure this one out (brain is not awake yet).

// LS Provided Solution:

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}