/* Find out what Date.now() returns.

ANSWER:
Date.now() returns the number of milliseconds
elapsed since January 1, 1970 (which is called "the UNIX epoch" or "UNIX Time").

Note: .now() called on Date (Date.now())
is a 'Static' method (vs. an 'Instance' method).

*/

console.log(Date.now());

/* PROVIDED SOLUTION NOTES:

This way of representing a point in time is called
Unix time or epoch milliseconds (https://en.wikipedia.org/wiki/Unix_time).
Chances are high that you will encounter
and use Unix time quite a few times throughout your future career.
Check out this Wired article if you want to read a bit more about it:
https://www.wired.com/2001/09/unix-tick-tocks-to-a-billion/

*/