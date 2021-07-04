/* Build a program that asks the user to enter the length and width of a room in meters,
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

*/

/*let readlineSync = require('readline-sync');
let roomWidth = readlineSync.question('Enter the width of the room in meters:');
let roomLength = readlineSync.question('Enter the length of the room in meters:');
let roomArea = roomWidth * roomLength;
console.log(`The area of the room is ${roomArea} square meters (${roomArea * 10.7639} square feet).`);

/* CORRECT
Explanation:
readline-sync wasn't working, so I can to troubleshoot the error. Basically, it was that readline-sync was not installed on this machine,
I had installed it previously on a different machine. So, when I went to install it, I got another set of errors I didn't know how to
decipher. So I googled problem installing with npm and found a very helpful Stackoverflow.com thread about how if you installed
NVM (Node Version Manager) with root permissions, then any time you want to install packages or dependencies using nmp, you have to use
the root permissions (or sudo), which is very bad practice. So, there was an up-voted solution (by about 2300 votes) and a bunch of praise comments
on the solution to use sudo chown -R $(whoami) ~/.npm, which I researched whoami and chown, and basically this command changes a file or directory's
ownership to a different user (chown) and whoami is a variable for the username you're currently working under (as differentiated from $USER, which
outputs the username that was used to login to the session.For example, if the user logged in as John and su into root, whoami displays root and
echo $USER displays John. This is because the su command does not invoke a login shell by default.)
And I think -R means recursively, basically to include all the files and directories down from the given directory in the command.
So, based on my research, I somewhat hesitantly ran that command and it looked to have fixed the issue.
I tested the problem above, and all was working. Yay.
*/

// PROVIDED SOLUTION:

/*let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

/* Provided Explanation:

The approach is straightforward. It makes use of two readlineSync.prompt calls to get the length and width respectively,
performs the computation, and then logs the results to the console. The solution does not check if the user input appropriate values.

Some key things to note:

Notice that the constant, SQMETERS_TO_SQFEET, is written in ALL_CAPS. This follows the idiomatic naming convention for constants.
The readlineSync.prompt method returns a string. The parseInt function converts that string to an integer.
The Number.prototype.toFixed method returns a string. You can read more about this method here. Essentially, toFixed() method
formats a number. An argument can be also passed to the method call (we passed number 2 in our example)
and that signifies the number of digits to appear after the decimal point. This argument is optional, and if it is omitted,
it is treated as 0.

FURTHER EXPLORATION:
Modify the program so that it asks the user for the input type (meters or feet).
Compute for the area accordingly, and log it and its conversion in parentheses.
*/

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room:");
let length = readlineSync.prompt();

console.log("Enter the width of the room:");
let width = readlineSync.prompt();

console.log("Is this meters or feet?");
let format = readlineSync.prompt();

let area = (length * width);

if (format === 'meters') {
  let areaInFeet = (area * SQMETERS_TO_SQFEET);
  console.log(
    `The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
  );
} else {
  let areaInMeters = (area / SQMETERS_TO_SQFEET);
  console.log(
    `The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`
  );
}

// CORRECT!
