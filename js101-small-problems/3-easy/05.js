/* Write a function that takes a positive integer, n,
as an argument and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle (the diagonal side
in the images below) should have one end at the
lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Pseudo code practice:
- function takes integer (as n)
- counter = 1
- loop (until counter <= n)
  - log n-(n-counter) ' '  + counter(n) '*'
  - counter += 1
*/

function triangle(n) {
  let counter = 1;
  let numOfSpaces;
  let spaces = '';
  let numOfAsterisks;
  let asterisks = ''

  while (counter <= n) {
    numOfSpaces = 1;
    numOfAsterisks = 1;

    while (numOfSpaces <= (n - counter)) {
      spaces += ' ';
      numOfSpaces += 1;
    }
    
    while (numOfAsterisks <= (n - (n - counter))) {
      asterisks += '*';
      numOfAsterisks += 1;
    }

    console.log(spaces + asterisks);
    counter += 1;
  }
}

triangle(9);
triangle(5);

// NOPE. Definitely not.
