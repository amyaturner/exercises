// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Snippet 1:
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2:
let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2); // ?

/* ANSWER:

In the first Snippet, the console will log { prefix: 'Pacific' }
In the second Snippet, because the bracket notation's value doesn't have quote marks arount it, JavaScript interprets it as
the name of a variable, whose value is 'Indian', so the console will log { Indian: Pacific }
*/

/* BOOM, CORRECT!

LS Explanation:

One important difference between bracket notation and dot notation is that
bracket notation accepts expressions, including variables.
So while ocean.prefix in Snippet 1 adds a property 'prefix' to the ocean object,
this is different on line 4 of Snippet 2. There we don't use the string 'prefix' but
the variable prefix as key. That is, JavaScript looks up the value of prefix
and uses it as the name of the property. Since the value of prefix is 'Indian',
we are adding the property 'Indian' to the object.
If we wanted to add a property 'prefix' using bracket notation,
we would need to write ocean['prefix'].
*/
