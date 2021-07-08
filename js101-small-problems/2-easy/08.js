/* Write a function that returns an Array that contains every other element of an Array that is passed in as an argument.
The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
*/

function oddities(arr) {
  let everyOtherElement = [];
  for (let i = 0; i < arr.length; i += 2 ) {
    everyOtherElement.push(arr[i]);
  }

  return everyOtherElement;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log();

/* CORRECT! (took me 1 min :)  - LS's provided solution was the same

Further Exploration:
Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.
Try to solve this exercise in a different way.
*/

function evenIndexes(arr) {
  return arr.filter((element, index) => {
    return index % 2 !== 0;
  });
}

console.log(evenIndexes([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenIndexes([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenIndexes(["abc", "def"])); // logs ['def']
console.log(evenIndexes([123])); // logs []
console.log(evenIndexes([])); // logs []

// CORRECT

// Student Solution:
let oddities4 = (arr) => arr.filter( (_, idx) => idx % 2 === 0);
