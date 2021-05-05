/* Loop over the elements of the array fish, logging each one.
Terminate the loop immediately after logging the string 'Nemo'.
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

// CORRECT

// ALT STUDENT SOLUTIONS:

for(x in fish) {
  console.log(fish[x]);

  if(fish[x] === 'Nemo') {
    break;
  }
}

// I knew about the for...in loop, but did not know you could also use a for...of loop ?)
for (let name of fish){
  console.log(name);

  if(name === 'Nemo'){
      break;
  }
}

/* I looked up the difference and here's what I found:
"Both for..in and for..of are looping constructs which are
used to iterate over data structures. The only difference between them
is the entities they iterate over: for..in iterates over all
enumerable property keys of an object. for..of iterates over
the values of an iterable object."

So basically, they are the same if the element you're iterating over is an array of singular elements:
['a', 'b', 'c'], but in the case of an Object {a: 1}, or in the case where the array has objects as its elements [{a: 1}, {b: 2}],
then with a 'for...in' loop, the entity it's looking at is the property, whereas with a 'for...of' loop, the entity it's looking at
is the value. Here's an example:
*/

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"