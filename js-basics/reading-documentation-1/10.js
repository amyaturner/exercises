/* In your JavaScript console, execute the following
two lines of code to check whether their return values
differ and if so, how. Take a look at the MDN documentation
on equality comparisons to read about how == and === differ.

*/

'8' == 8;  // true ('loose' (Amy's term) or 'standard' (more common term) equality operator - will return true if a number matches its string equivalant (data types don't have to match). Basically, it coerces the string into a number.
'8' === 8;  // false (strict equality operator - will return false if data types don't also match.

/* CORRECt

Launch School recommends always using the strict equality operator (===)
unless you have a specific reason not to.
This will help to avoid unexpected behavior in your code.

*/