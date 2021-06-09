// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/* ANSWER:
It will log 2 because the a variable within the function is actually a parameter and so when you call myFunction on line 11,
you are passing it the argument with the value contained in the b variable, which is 2.

CORRECT.

Provided Solution/Explanation:
"This is another example of variable shadowing:
The parameter a of myFunction shadows the variable a declared on line 1.
The a we reference within the function body, on line 4, therefore,
refers to whatever argument is passed to the function, in our case the value of b, which is then logged."

*/