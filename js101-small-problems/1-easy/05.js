/* Create a simple tip calculator.
The program should prompt for a bill amount and a tip rate.
The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input
validation and assume that the user will enter numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

*/

let readlineSync = require('readline-sync');
 
console.log('What is the bill?');
let billAmount = readlineSync.prompt();

console.log('What is the tip percentage?');
let tipRate = readlineSync.prompt();
let tipAmount = parseInt(billAmount * (tipRate / 100));
let totalBill = parseInt(billAmount) + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);

/* CORRECT! Working, woot.

PROVIDED SOLUTION:
*/

let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/* And here's a alternative student's solution:
*/

let rlSync = require('readline-sync');

function tipCalculator() {
  let bill = parseFloat(rlSync.question("What's the bill? "));
  let tipPercentage = parseFloat(rlSync.question("What's the tip percentage? "));

  let tip = (bill / 100) * tipPercentage;
  let total = tip + bill;
  console.log(`The tip is $${tip.toFixed(2)}.
The total is $${total.toFixed(2)}.`);
}

tipCalculator();

/* I like this but he has too much going on here. He has a bunch of calculations happening inside the one function,
and I'm betting LS teacher aids would have him refactor his code so less was happening in just one function. Especially
where there is a console.log at the end. But allso that there are prompts and calculations and then a console log. Too much.

Refactored:
*/

let rlSync = require('readline-sync');

let bill = parseFloat(
             rlSync.question("What's the bill? ")
           );

let tipPercentage = parseFloat(
                      rlSync.question("What's the tip percentage? ")
                    );

let tip = (bill / 100) * tipPercentage;

let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}.
The total is $${total.toFixed(2)}.`);

/* What I am thinking after parse out the code is that, none of this really NEEDS to be a function. More likely,
This would all just be its own program or file within a larger program and you would run that smaller program if you
wanted to reuse the code. I hope I'm thinking about that correctly. This might be something to ask about.
*/