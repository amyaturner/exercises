/* Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?

ANSWER:
*/

function first(arr) {
  return arr.length ? arr[0] : "Array is emtpy.";
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // 'Array is empty.'
console.log(first([undefined])); // undefined
console.log(first([''])); // ''

// CORRECT

