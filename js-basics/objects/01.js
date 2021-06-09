// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// ANSWER:

console.log(student.courses);
console.log(student['courses']);

/* CORRECT

Further Exploration:

What is returned if you attempt to access an object property that does not exist?
Try it out for yourself, for example calling student.locker with the above example object.
Especially notice that no exception is raised.

ANSWER: I think it returns undefined.
*/

console.log(student.locker);

// CORRECT