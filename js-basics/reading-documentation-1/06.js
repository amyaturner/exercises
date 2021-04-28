/* What are the return values of the statements
on lines 3 to 5? Refer to the
MDN documentation about the Array object for help.

*/

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];

/* ANSWER:

3
2

INCORRECT
(Read things more carefully - I missed the fact that
is was not returning the length - 1.
Rather, it was using that calculated result to access that index in the array.

So, the correct answers would be:
> 'palm tree'
> 'palm tree'
> 'sequoia'

*/