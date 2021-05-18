// Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

/* ANSWER: It will log:

3 / 1 = 3
6 / 2 = 3
9 / 3 = 3
12 / 4 = 3
15 / 5 = 3
18 / 6 = 3
21 / 7 = 3
24 / 8 = 3
27 / 9 = 3
30 / 10 = 3

(and return undefined).

INCORRECT.

Provided Solution:

There will be no output, because the function multiplesOfThree is not invoked.

To invoke the function, we should append parentheses to the function name on line 12, like so:

multiplesOfThree();

Well, I considered that, but thought maybe I didn't yet know about a special circumstance in JavaScript. Now I know... there's not one.

*/