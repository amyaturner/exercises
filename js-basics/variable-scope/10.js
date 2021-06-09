// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/* ANSWER:
It will log:
{
  firstName: 'Jane',
  lastName: 'Doe'
}

CORRECT.

Provided Solution/Explanation:
"The fact that const variables cannot be re-assigned
does not mean that the value they hold is immutable.
As we see in the example above, objects that are assigned
to const variables can be mutated."

NOTE: In other words, you can't reassign a variable declared with const, but
you can mutate (or reassign) the properties of an object stored in a variable declared with const.

Further Provided Explanation:
"One way to make an object immutable is by means of the Object.freeze() method.
But it's important to note that this is a shallow freeze,
meaning it only applies to the immediate properties of the object [one level deep]––
If the value of those properties are objects themselves, they can still be mutated."

*/