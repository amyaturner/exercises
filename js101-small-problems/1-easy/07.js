/* Write a function that takes two strings as arguments, determines the length of the two strings,
and then returns the result of concatenating the shorter string, the longer string,
and the shorter string once again. You may assume that the strings are of different lengths.

PEDAC Practice:

UNDERSTAND THE PROBLEM:
- write a function
- two arguments (strings)
- strings are different lengths
- determine the lengths of each string
- whichever is shorter, add to variable stringShort
- whichever is longer, add to variable stringLong
- concatenate string1 + string2 + string1
- return result

Make Requirements Explicit:
- Can assume strings are different lengths
- What if a non-string argument is ever passed ?  =>  could potentially coerce / turn it into a string => .toString()
- No spacers needed in between string1 and string2, etc.

EXAMPLES / USE CASES / EDGE CASES:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Edge Cases ?:
- NaN as argument ?  NaN will still be turned into a string 'NaN' using .toString().
- Empty string as argument ? Technically, it's still a string, so it will just be added as normal.
- Undefined as argument ?  => This doesn't seem to work with .toString(). Hmm. And when I try in node REPL, neither does any number ? Huh?

DATA TYPES / STRUCTURES:
- strings
- function
- toString() method (function)

ALGORITHM:
- function
- arguments: str1, str2
- compare length of str1 to length of str2
- if str1 is shorter, add str1 to result variable, then concatenate str2 and str1 again
- else add str2 to result variable, then concatenate str1 and str2 again
- return result
    
CODE:
*/

function shortLongShort(str1, str2) {
  let result;
  if (str1.length < str2.length) {
    return result = str1 + str2 + str1;
  } else {
    return result = str2 + str1 + str2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

/* CORRECT

PROVIDED SOLUTION (removes the variable declartion in the function, as it's not really needed and doesn't provided added clarity:
*/

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
