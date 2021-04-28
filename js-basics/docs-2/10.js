// Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

/* You'll see that it raises an error:

TypeError: tweet.length is not a function

Check the documentation of both TypeError and length,
in order to find out what causes the error.

ANSWER:
.length is a property of the String global object (and also the Array object)
It is not a method (i.e., function).
Property's can be accessed with . (dot) notation, but you don't use perentheses
like you do if calling a method.
So, to get the length of the tweet variable's string value, we need to remove
the perentheses at the end of it:
*/

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else {
  console.log("Good job!");
}

// CORRECT