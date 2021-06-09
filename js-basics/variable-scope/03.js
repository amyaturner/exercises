/* What will the following code log to the console and why?
Don't run it until you have tried to answer.
*/

if (true) {
  let myValue = 20;
}

console.log(myValue);

/* ANSWER:
It will throw a ReferenceError: "myValue is undefined (or not initialized/declared)" -- something like that.

CORRECT (though the error is "myValue is not defined")

Provided Solution:
"Variables declared with let are block scoped.
This means that when we declare the variable myValue within a block on line 2,
that variable is not accessible outside of the block on line 5,
and a ReferenceError is raised.
*/