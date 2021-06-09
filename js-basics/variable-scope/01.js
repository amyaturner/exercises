// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

// ANSWER: I think it will throw an error: Gretting is undefined.

/* Incorrect. It did not throw an error; it simply logged 'undefined'.

Provided Solution:

"All variables in JavaScript declared with var are hoisted,
meaning they are virtually moved to the beginning of the scope.
This means that our code snippet above behaves like the following one:
*/

var greeting;

console.log(greeting);

greeting = 'Hello world!'

/* When a var variable is declared but not assigned a value, like on the first line,
it is initialized to the value undefined. For that reason, the code logs undefined to the console.
*/