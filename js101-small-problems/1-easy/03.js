// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let i = 1;

while (i < 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// PROVIDED SOLUTION:

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}

/* My comments on provided solution:
If the if statement condition is true, 'continue' moves you to the next iteration in the for loop ? I think ?
But if the if statement condition is false, you skip the code inside the if statement block and move on to the next statement
in the for loop.
What I'm not sure about is what number %2 === 1 evaluates to for each number. I'm not sure why any of the nums would evauate to true on that condition.
Why would there be a remainder of 1 on all of the odd numbers ?  Wouldn't they vary and be more like .5 or something ? I think I need to
read up on the modulus operator.
Actually, I needed to read up on division and remainders, lol and then do simple long-division to see that if you divide by 2, you'll always get 1 as the remainder.
Pff, I can't believe I need this much review. Oh well, better to dig in and understand, than to skip over and hit bigger snags later.
*/