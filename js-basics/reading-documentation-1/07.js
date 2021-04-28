/* Look up the MDN documentation for the typeof operator.
What is its return value?
Determine what the following statements will return:

ANSWER:

typeof's return value will be the data type of the argument
given as a string (lowercase).

*/

typeof 23.5;  // number
typeof 'Call me Ishmael.';  // string
typeof false;  // boolean
typeof 0;  // number
typeof null;  // null  (THIS IS INCORRECT. Apparently this is a bug in JS, but it's too old to change it. So null's typeof data type returns 'object' but null is really its own primitive data type.
typeof undefined;  // undefined

typeof NaN  // NaN  (ALSO INCORRECT. NaN's data type is actually number! Weird.
typeof ['boo', 'this']  // 'object'  (this is an array, but arrays are objects, so this is a quirk of JS)
typeof Inifinity  // 'number'

// CORRECT
// (Except I didn't put quotes around my answers to indicate they are strings,
// but I did note that in my written answer.)