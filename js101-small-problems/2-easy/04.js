/* Using the multiply() function from the "Multiplying Two Numbers" problem,
write a function that computes the square of its argument
(the square is the result of multiplying a number by itself).
*/

const square = (num) => num * num;

console.log(square(5));
console.log(square(5) === 25); // logs true
console.log(square(-8));
console.log(square(-8) === 64); // logs true

/* NOT CORRECT. I didn't think long enough about what the problem was asking for.
I didn't fully understand what "using the multiply() function meant. I figured it was
just easier to use num * num instead of calling another function inside the function.
But that was the actual point.

PROVIDED SOLUTION:
*/

const multiply = (num1, num2) => num1 * num2;

function square(number) {
  return multiply(number, number);
}

/* Further Exploration:
What if we wanted to generalize this function to a "power to the n" type function:
cubed, to the 4th power, to the 5th, etc. How would we go about
doing that while still using the multiply() function?
*/

const multiply = (num1, num2) => num1 * num2;

function square(num) {
  return ?? // I don't know, but think it needs recursion.
}

/* // I think you might use recursion here,
but I'd have to look further into understanding recursion
to actually write this function.

Very cool Student Solution that uses recursion and he even explains is super well:
*/

//requiring in the multiply function from another file
let multiply = require('./multiplying_two_numbers');

let square = (num) => multiply(num, num);

let power = (num, exp) => (exp === 1 ? multiply(num, 1) : power(num, exp - 1) * num);


/* STUDENT'S (David Pocsai's) EXPLANATION: (under User-Sumbitted Solutions > David Pocsai at https://launchschool.com/exercises/5a165802 )
The power function uses a recursive solution: if the exponent is 1, then simply return the multiply function with our number, and 1 as the arguments. (exp === 1 ? multiply(num, 1) Otherwise return the power function with the exponent argument reduced by 1, and multiply its result by our number. : power(num, exp-1)*num); This is likely quite confusing so I will try to explain in more detail:

*** Recursion works by having a function call itself with smaller and smaller arguments until it arrives at some trivial base case (in our example, its when the exp variable is 1). One of the benefits of recursion is breaking any problem down into smaller, more manageable steps.

Lets use power(3,4) for example, or in other words 3 to the power of 4. First, in order to avoid an infinite loop we should think of some base case where the recursion will stop: I used the case when the exponent is 1, because then we know we simply need to call our multiply function with our number, and 1 as arguments. Since any number to the power of 1, is itself. if (exp===1) return multiply(num,1)

Then; from our starting point of power(3,4) we need to think of some logic to work our way down, step-by-step to that base case. My solution was: power(num, exp-1)*num) The way I verbalize this process to myself is as follows: We don't know what power(3,4) is, but we know that its equal to power(3,3) * 3. We don't know what power(3,3) is but we do know that its equal to power(3,2) * 3. We don't know what power(3,2) is but we do know its equal to power (3,1) * 3. And boom! we have hit our base case as the exponent is 1.

At this point we begin to work our way back up to our initial question. The base case has been reached: If the exponent argument is 1, then return multiply(num,1): (exp === 1 ? multiply(num, 1) this returns 3, since 3 * 1 is 3.

We now know that power(3,1) returns 3.

power(3,2) = power(3,1) * 3 which returns 9.

power(3,3) = power(3,2) * 3 which returns 27.

And finally...

power(3,4) = power(3,3) * 3 which returns 81.

While not always the most efficient solution time-wise, it does make for clean and concise code in certain situations. It's a topic that is very confusing for most programmers, but something worth practicing!
*/

