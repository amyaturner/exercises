/* Find the MDN documentation on operator precedence,
and use it to find out which result
the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

*/

/* ANSWER:
(note to self: exponentiation (**) is higher precedence 
than multiplication or division (* /)
*/

4 * 5 + 3 ** 2 / 10  // = (4 * 5) + ((3 ** 2) / 10) = (4 * 5) + (9 / 10) = (20) + (.9) = 20.9

// CORRECT