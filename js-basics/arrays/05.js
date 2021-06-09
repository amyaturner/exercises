// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let numsAbove100 = scores.filter(num => num >= 100);

let howManyNumsAbove100 = numsAbove100.length;

console.log(howManyNumsAbove100);

/* CORRECT.

LS Provided Solution:
*/
let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); // 3


//Alt Student Solution:

let countScoresAbove100 = scores.filter(num => num >= 100).length;
console.log(countScoresAbove100);