// Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

let randomNumber = Math.round(Math.random());

randomNumber ? console.log("Yes!") : console.log("No.");

// CORRECT

// Provided Solution:

console.log(randomNumber ? 'Yes!' : 'No.');

/* "Ours is an alternative that uses the ternary operator
only to decide on the string that is going to be logged.
Take a close look at it: The expression randomNumber ? 'Yes!' : 'No.'
evaluates to either the string 'Yes!' or the string 'No.'.
Since it is an expression that evaluates to a string value,
we can use it as an argument to console.log.
It's similar to using other complex expressions with operators,
as in console.log('Hello' + 'World')."

*/