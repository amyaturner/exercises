/* Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

PEDAC Practice:
- start at 1, log it to the console
- skip any even nums => if num % 2 !== 0, skip.
- move to the next integer, do this all the way to 99, inclusive.
- make sure each integer is logged to console on own line.
- could use an array, but that would mean would have to write out all those numbers.
- could method hunt to see if there's a range method (probably the best option)
- could just input 2 numbers into a function, beginning number, and ending number and use those, but would still need the range method.
- Don't see a range method for the Number object in JS.
- Could just iterate with += 1 or 2 :)
- So, rather than a function, since the problem specifies using 1 - 99, don't need a function
- Need a loop.

*/

for (let i = 1; i < 100; i += 2 ) {
  console.log(i);
}

/* CORRECT


FURTHER EXPLORATION:
Repeat this exercise with a technique different from the one that you used, and different from the one provided.
Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

let i = 1;

while (i < 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// CORRECT