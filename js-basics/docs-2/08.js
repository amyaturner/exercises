// Find out how we can join two or more strings together.

// ANSWER: With string concatenation:

'this' + ' ' + 'that'

// CORRECT

/* PROVIDED SOLUTION:

Both the String.prototype.concat() method and
the + operator concatenate two or more strings, returning a new string.

Note to self:
The Discussion on the String.prototype.concat() method is interesting:
https://launchschool.com/exercises/d669aae9

str.concat(string2[, string3, ..., stringN])

Note that str is the calling string,
and the method parameters are placed within parentheses.
The brackets indicate optional arguments.
So, this line of the documentation indicates
that we can provide any number of string arguments,
but we must provide at least one.

*/

//Example:

let firstName = 'Ada';
let lastName = 'Lovelace';

''.concat(firstName, ' ', lastName);
// 'Ada Lovelace'

/* This is valid JS, but the MDN docs even says:

"It is strongly recommended that the assignment operators (+, +=)
are used instead of the concat() method."