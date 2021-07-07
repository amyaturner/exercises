/* Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.

Examples:

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

*/

let rlSync = require('readline-sync');

let name = rlSync.question('What is your name?\n');
if ( (name !== '') && (name.includes('!')) ) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else if (name !== '') {
  console.log(`Hello ${name}`);
} else {
  console.log('Not a valid name.');
}

/* CORRECT, almost! The only thing is that I didn't realize that I needed
to remove the '!' off of the name on the SCREAMING version of the greeting.
LS's provided solution does that:

PROVIDED SOLUTION:
*/

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

