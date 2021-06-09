/* Write a function clone that takes an object as argument and returns
a shallow copy of that argument. A shallow copy returns a new object
that is a copy of the original object. However, only the object itself
and any properties with primitive values are duplicated. Properties that are themselves
objects are copied "by reference" -- that is, only a pointer to the object is copied.

For instance, consider the following object:



let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

// If we make a shallow copy of obj, we'll create a new object that has the same 3 properties as obj:

let objCopy = clone(obj);
console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

/* Note that all 3 properties have the same value.
However, what happens if we modify these values in one of the two objects and then inspect both objects?


objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }

/* As you might expect, the values for the number and string keys changed in objCopy, but not in obj.
However, when we mutated the value of objCopy.array, it also mutated that value of obj.array.
That's because a shallow copy only copies pointers for nested objects; since arrays are objects,
the shallow copy just copied the pointer to the original array to objCopy.
If you're wondering why this happens, you might want to review Variables as
Pointers section in the Introduction to JavaScript book.
*/

function clone(obj) {
  // ANSWER
  let clonedObj = {
    title: obj.title,
    name: obj.name,
    age: obj.age
  }

  return clonedObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);

console.log(person);
console.log(clonedPerson);

person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;

console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

console.log(person);
console.log(clonedPerson);


/* INCORRECT. The reason this is incorrect is that the function should probably clone ANY object.
And right now, the only thing it does is copy three set properties of the person object. So that's
not a very useful or diverse function. I'm not sure what's going on under the hood of this provided method,
but Launch School's solution was:

LS Provided Solution:
*/

function clone(obj) {
  return Object.assign({}, obj);
}

/* The arguably easiest way to clone an object is to use the Object.assign method.
Note that this method only creates a SHALLOW COPY, which means that if you mutate one of the values
in either the original (for instance, person) or the copied object, they will be mutated in clonedPerson as well.
If you reassign a primitive value of a first-level property however, then the values will no longer be shared. It's when
a first-level property has an object as a value and then you mutate that object's property values
that the shared object then gets mutated for both.
*/