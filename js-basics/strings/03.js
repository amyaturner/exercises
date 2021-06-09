/* Implement a function repeat that repeats an input string a given number of times,
as shown in the example below; without using the pre-defined string method String.prototype.repeat().
*/

function repeat(num, str) {
  for (let counter = 1; counter <= num; counter += 1) {
    console.log(str);
  }
}

repeat(3, 'ha'); // 'hahaha'

/* INCORRECT. Logs:
ha
ha
ha

Try again.

*/

function repeatB(num, str) {
  let newStr = str;

  for (let counter = 1; counter < num; counter += 1) {
    newStr += str;
  }

  console.log(newStr);
}

repeatB(3, 'ha'); // 'hahaha'

/* CORRECT, but guessing the provided solution is more elegant ?

Provided Solution/Explanation:
function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

NOTE: The reason this is more accurate and elegant is that is uses return instead of console.log, which is what's really required for
a proper function. In my function declaration/definition, undefined is returned because console.log always returns undefined,
and console.log is the last line of my function before it returns.

So, mine could be something better like:
*/

function repeatC(num, str) {
  let newStr = '';

  for (let counter = 1; counter <= num; counter += 1) {
    newStr += str;
  }

  return newStr;
}

console.log(repeatC(5, 'ha')); // 'hahaha'