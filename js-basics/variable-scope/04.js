// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/* ANSWER:
It will log 1 to the console because, even though a is defined within a function so that it will not be available outside of that function,
it IS avaiable to the block of the if statement because it has global scope within the function.

CORRECT.

Provided Solution / Explanation:
"Variables declared in an outer scope can be accessed in any inner scope.
In our case, the variable a is declared in the function definition and then
accessed in the body of the if statement.
*/