// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

/* CORRECT.
At first, I thought the keys() method was a prototype method, but it's actually a
static method (used directly on the Object constructor: Object.keys() and then you pass in the instance as the argument
to the method: Object.keys(instance);

LS Alternative Solution using a for...in loop, which iterates over the keys of an object (as opposed to a for...of loop, which
  iterates over the values in an object):
*/

let keys = [];

for (let property in vehicle) {
  keys.push(property);
}
