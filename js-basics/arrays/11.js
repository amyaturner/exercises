/* We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty.
If you log the elements you remove, the expected behavior would look as follows.

*/

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

let groceryList2 = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// groceryList; // []

// ANSWER:

for (i = 0; i < groceryList.length; i += 1 ) {
  console.log(groceryList.shift());
}

console.log(groceryList);

// NOT CORRECT b/c you're mutating groceryList within the loop and then interating over that mutated (decreased) array.d
// Rethinking...

console.log();
console.log('****************');
console.log();

// LS Provided Solution:

while (groceryList2.length > 0) {
  let checkedItem = groceryList2.shift();

  console.log(checkedItem);
}