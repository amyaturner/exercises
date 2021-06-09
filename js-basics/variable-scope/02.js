/* What will the following code log to the console and why?
Don't run it until you have tried to answer.
*/

console.log(greeting);

let greeting = 'Hello world!';

/* ANSWER: It will throw an error: greeting is undefined.

Partially correct. It threw an error, but it threw: "ReferenceError: Cannot access 'greeting' before initialization"

Provided Solution:
"In contrast to var variables, let variables are not accessible before they are declared.
For that reason the above code raises an error."
*/