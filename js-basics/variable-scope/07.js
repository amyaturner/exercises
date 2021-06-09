// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

/* ANSWER:
It will log 1.

CORRECT.

Provided Solution/Explanation:
"The variable a declared in the let statement on line 1
is declared at the very top level of our code,
so it is accessible from everywhere in the code,
including from within the body of myFunction."

NOTE: The variable has 'global scope'. It is best practice/preferred to use blocked/local scoped variables over global scoped variables when possible.

*/