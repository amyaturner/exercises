/* Create a function that takes 2 arguments,
an array and an object. The array will contain 2 or more elements that,
when combined with adjoining spaces, will produce a person's name.
The object will contain two keys, "title" and "occupation",
and the appropriate values. Your function should return a greeting
that uses the person's full name, and mentions the person's title.

PEDAC Practice:

Problem:
- Create a function
- Takes two arguments, an array and an object.
- The array argument will contain 2 or more elements (to make up a person's name when
  combined with adjoining space).
- The object argument will contain two keys "title" and "occupation" (and their values).
- Function returns a greeting
- Greeting should use the person's full name and mention the person's title.

Examples and Use Cases:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs: Hello, John Q Doe! Nice to have a Master Plumber around.
// Use Case: to easily greet someone.

Data Types and Structures:
- function
- array
- object
- return statement
- array.join() method
- console.log object/method
- interpolation / template literals (template strings) (as opposed to using string contatenation with variables).

Algorithm:
- function definition (practice an arrow function vs. a function declation/statement)
- 2 args (nameArr, professionObj)
- name = nameArr.join(" ")
- title = professionObj.title
- return template string (string with template literals)
- outside the function definition, console.log the return of the function

Code:

*/

const greetings = (nameArr, professionObj) => {
  let name = nameArr.join(" ");
  let title = professionObj.title + " " + professionObj.occupation;

  return `Hello, ${name}! Nice to have a ${title} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/* CORRECT! First try. PEDAC HELPS!!

PROVIDED SOLUTION:
*/

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
