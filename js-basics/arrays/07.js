// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/* ANSWER:

false

Explanation:
  In JavaScript, a variable that contains an array value, points to a specific place in memory
  that is different from another variable that contains the 'same' array value. That second variable's array has a different space in memory,
  even if the elements inside each array are exactly the same.

CORRECT.

LS Provided Solution:
  Primitives, like strings or numbers, are compared by their value. For example, the two strings below are strictly equal:

  console.log('2, 6, 4' === '2, 6, 4'); // true

  Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

  Note that if we alter our original code so that array2 references the same object as array1, our comparison logs true:

  let array1 = [2, 6, 4];
  let array2 = array1;

  console.log(array1 === array2); // true

Alt Student Answers:
  The output will be false because from the JS perspective these arrays are not the same objects regardless of the content.

  Evaluates to false. Because even though array1 and array2 have the same numbers,
  they are not the same array stored in memory. They are two completely different arrays.
  
*/