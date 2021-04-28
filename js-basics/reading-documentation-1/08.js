// Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

// What will the following statements return?

typeof tweet;  // 'string'
typeof words;  // 'object' => ["I'm", "learning", "to", "program!", "Woooot", ":-)", "#javascript", "#launchschool"]
typeof isValid;  // 'boolean'

// CORRECT

