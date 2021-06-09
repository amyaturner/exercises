/* Write a function that returns the last element of an input array. For example:

last(['Earth', 'Moon', 'Mars']); // 'Mars'

ANSWER:
*/

function last(arr) {
  return arr.length ? arr[arr.length - 1] : "Array is emtpy."; ;
}

console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'
console.log(last(['Earth'])); // 'Earth'
console.log(last([])); // "Array is empty."
console.log(last([undefined])); // undefined

// CORRECT