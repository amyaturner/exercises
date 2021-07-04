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
