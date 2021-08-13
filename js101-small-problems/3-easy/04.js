/* (Too long) Read instructions at Launch School lesson here:
https://launchschool.com/exercises/6ec7341d

Essentially:
Write a function that calculates and returns
the index of the first Fibonacci number that has the number
of digits specified by the argument.
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

The last example may take a minute or so to run.
*/

function fibonacci_series(n) {
  if (n === 1) {
    return [1, 1];
  } else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

fibonacci_series(2); // [1, 1, 2]
fibonacci_series(3); // [1, 1, 2, 3]
fibonacci_series(5); // [1, 1, 2, 3, 5, 8]
fibonacci_series(8); // [1, 1, 2, 3, 5, 8, 13, 21, 34]

function findFibonacciIndexByLength(numOfDigits) {
  let fibonacciIndex = 2;
  let fibonacciArray = [];
  let result = undefined;
  let numToArr = [];

  while (numToArr.length === 0) {
    fibonacciArray = fibonacci_series(fibonacciIndex);
    fibonacciArray.find(num => {
                let numToString = String(num);
                if (numToString.length === Number(numOfDigits)) {
                  numToArr.push(num);
                }
            });

    fibonacciIndex += 1;
  }

  result = fibonacciArray.indexOf(numToArr[0]) + 1;
  return BigInt(result);
}

console.log(findFibonacciIndexByLength(2n));    // 7n => 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 12n => 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)); // 45n
console.log(findFibonacciIndexByLength(16n)); // 74n
console.log(findFibonacciIndexByLength(23n)); // 485n
/* console.log(findFibonacciIndexByLength(24n)); // => RangeError: Maximum call stack size exceeded
console.log(findFibonacciIndexByLength(100n)); // 476n => RangeError: Maximum call stack size exceeded
console.log(findFibonacciIndexByLength(1000n)); // 4782n => RangeError: Maximum call stack size exceeded
console.log(findFibonacciIndexByLength(10000n)); // 47847n => RangeError: Maximum call stack size exceeded

Well, I was WAY off (update, the first time, but I actually GOT IT?!! Omg). I knew that it was likely a much easier solution than I was making it,
but I wanted to give it a try and not allow the fact that my brain couldn't see the easier
solution to give up and just look at the answer. Well, after an hour an a WAY more complicated
function than necessary, my function was infinite looping and so I glanced at the provided
solution.

I still want to look over my function definition and try to debug and step through it
to see if I can actually make it work, despite its over-complication.

I'll come back to it tomorrow.

UPDATE: I figured it out! Woot! The only thing now is that if the argument is over 23n (even 24n),
then a RangeError: Maximum call stack size exceeded" is thrown :/ Not exactly sure why or where
in my code that's being caused, but I know it has to do with recursion and not hitting a condition
that stops it, or changing the base so it catches up with the return. ??
*/