/* Take a look at the code below. Without running it,
determine what it will log to the console.
If you're not sure, refer to the MDN documentation on switch statements.

*/

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// ANSWER: neigh

/* INCORRECT. Too fast - thought I was hot stuff for a second ;P

Provided Solution:

neigh
tweet tweet
*cricket*

I realized right away it's because no break statements were used in each case.
You need to use a break statement in each case of a switch statement in order to exit after the code for the first matched case runs.
Otherwise, all following cases will run until the switch statement ends.

"The switch statement evaluates the provided expression (animal in our case)
and will execute the statement associated with the case that matches,
as well as the statements in all cases following the matching case
until reaching either the end of the switch statement or a break.

In order to avoid this "fall through" behavior,
we can place a break statement in each clause of our switch statement, as seen below:"
*/

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*crickets*');
}