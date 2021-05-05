/* Using the code below as a starting point,
write a while loop that logs the elements of
array at each index, and terminates after logging
the last element of the array.
*/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// CORRECT

// ALT SOLUTION BY STUDENT
while(index < array.length) {
  console.log(array[index++]);
}

/* This works because ++ placed after the number returns the number BEFORE it increments.
Whereas ++ placed before the number returns the number AFTER it increments.
Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/