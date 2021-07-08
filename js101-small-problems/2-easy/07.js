/* The || operator returns a truthy value if either or both
of its operands are truthy, a falsey value if both operands are falsey.
The && operator returns a truthy value if both of
its operands are truthy, and a falsey value if either operand is falsey.
This works great until you need only one, but not both,
of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor
that takes two arguments, and returns true if exactly
one of its arguments is truthy, false otherwise.
Note that we are looking for a boolean result instead of a
truthy/falsy value as returned by || and &&.
*/

function xor(arg1, arg2) {
  return (arg1 && !arg2) || (arg2 && !arg1) ? true : false;
}

console.log(xor(5, 0));  // => true
console.log(xor(false, true));  // => true
console.log(xor(1, 1));  // => false
console.log(xor(true, true));  // => false

/*
console.log(xor(5, 0) === true);  => true
console.log(xor(false, true) === true);  => true
console.log(xor(1, 1) === false);  => true
console.log(xor(true, true) === false);  => true
*/

/* CORRECT

LS PROVIDED SOLUTIONS

Long Version:
*/
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// Short Version:
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// Student Solution (David Pocsai):

let xor = (a, b) => !!a !== !!b;

/* CLEVER!


Further Exploration:
|| and && are so-called short circuit operators in that the
second operand is not evaluated if its value is not needed.
Does the xor function perform short-circuit evaluation of its operands? Why or why not?
Does short-circuit evaluation in xor operations even make sense?

Answer:
Yes, short curcuit is happening in JavaScript when you write an xor type function.
You are still using the || and && comparison operators, so the same functioning is happening
behind the scenes in Javascript.
It does still make sense to use short circuit, even in an xor function, since it will
still speed things up a tad. For example, in

  !!((value1 && !value2) || (value2 && !value1))

the first evaluation (value1 && !value2) short circuits if value1 is falsy. Same with the second
evaluation (value2 && !value1) – it will also short circuit if value2 is falsy.
Similarly, if the first evaluation (value1 && !value2) is true, then it short circuits and doesn't do the
second evaluation at all. So that saves the program time. It then moves out to the !! to change reverse twice
the boolan value from the last comparison made. So, if true, then false and back to true. If false, then true and back to false.

Note: The reason you want the !! at the beginning is b/c it's a way to not have to right out the blocks of an if statement like so:

  function xor(value1, value2) {
    if ((value1 && !value2) || (value2 && !value1)) {
      return true;
    }
    return false;
  }

*/
