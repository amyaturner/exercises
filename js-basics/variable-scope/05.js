// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/* ANSWER:
It will log 1 and then throw an error that a was already initialized/declared.

Incorrect.

Provided Solution / Explanation:
"Your initial hunch might have been that this code should output
the numbers 1 (on line 5) and 2 (on line 7). The reason that
doesn't happen is that variables declared by let aren't available
until the code runs. Therefore, the let statement on line 6 creates a
new variable a that isn't available on line 5. Since we try to
log a before assigning it a value, a ReferenceError is raised.

Technically, the scope of a is the entire block. JavaScript does
hoist the variables defined by let, but, when it does, it creates
a "temporal dead zone" in which the variable exists but doesn't have a value --
not even a value of undefined. We talk more about the temporal dead zone in a later course.

Note that the variable a defined on line 6 shadows the variable a defined on line 2."

NOTE: The reason this is the case is that the if statement needs to finish before exiting out of the function stack, and because it
sees that the second let a = is inside the same scope as the console.log(a) call, it thinks that a is trying to refer to the second a
declaration, not the first (since they are both inside the same scoped if statement). So, that if statement cannot complete and exit out
in order to get to the point where it can actually log 1 from the first let a = 1 initialization. And so it throws an error before it
ever gets to that point (basically because it reads the full if statement first).
*/