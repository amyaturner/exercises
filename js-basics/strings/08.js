/* Change your isBlank function from the previous exercise
to return true if the string is empty or only contains whitespace. For example:
*/

function isBlank(str) {
  return str.trim() === '';
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

/* I didn't get this one. After considering it for a while and skimming through
some of the available mothods for String in the MDN docs, I had to look at the answer.
But now I know more about the trim() method, that it 'trims' whitespace at either end
and could be a helpful method for cleaning up and checking input form fields, comparing
data values without any whitespace, or other uses.
*/