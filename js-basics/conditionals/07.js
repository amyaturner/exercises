// Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// ANSWER: No...

/* INCORRECT. I almost had it but didn't think through it properly with the or (||) operator.
I was thinking it would always be false since false is the first operand and so it wouldn't compare the 'true' operand.
But that's for a '&&' operator, not '||'.

Provided Solution:
"The output will always be 'Yes!'.
The condition provided to our if statement uses the logical or operator ||. Therefore the condition will evaluate to a truthy value if either one of its operands is truthy. Since true is truthy, the condition will always be truthy as well.
*/