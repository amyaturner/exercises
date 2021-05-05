// Write a while loop that logs all odd natural numbers between 1 and 40.

let count = 1;

while (count < 40) {
  if (count % 2 !== 0) {
    console.log(count);
  }

  count += 1;
}

// CORRECT, but the SOLUTION is more elegant and saves resources, because you iterate 1/2 as many times:

let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}