// Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?

tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');

/* ANSWER:

> ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
> ['#launchshool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']
> '#launchshool #javascript it... of hang the get to Starting'

CORRECT!

*/