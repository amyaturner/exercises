// The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();

// What is the difference between the two methods and which one should you use?

/* ANSWER:
today.getYear()
is deprecated and should no longer be used, but may still work.
It returns a 2 or 3 digit number for the year.

The MDN docs says:

"Returns the year (usually 2–3 digits)
in the specified date according to local time.
Use getFullYear() instead."

Launch School says:
"Date.prototype.getYear() returns a number representing
the year of the date on which it is invoked, minus 1900.
For example, if the date is sometime in 2019, getYear() will return 119."



today.getFullYear()
returns (as a 4-digit number) the year of the
specified date according to local time.
Use instead of today.getYear().

The MDN docs says:

"A number corresponding to the year of the given date, according to local time."

*/

// Example of today.getFullYear():

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());
// expected output: 1969

// CORRECT