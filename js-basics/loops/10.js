/* What is the difference between the following two code snippets?
Check the MDN documentation on while and do...while.
*/

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/* ANSWER:

The difference between a while loop and a do...while loop is that
a do...while loop will always run its block at least one time, even if the condition evaluates to false,
since the condition is checked after the block of the loop has been executed.
But with a while loop, since the condition is checked first, if the condition evaluates to false, then the block will not run, even the first time.

CORRECT
*/