/* In the following code snippet,
find all violations of the style guide.
Rewrite it so that it conforms with the guide.

*/

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');


// ANSWER:

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while(iceCreamDensity > 0) {
    console.log('Drip...');
    iceCreamDensity -= 1;
}

console.log('The '+ iceCreamTaste +' ice cream melted.');

/* PARTLY CORRECT
I missed:
- the line indentation; it should only be two lines in the while loop's body
- Use spaces between keywords (like while) and opening parentheses
- Put spaces before and after operators like +.

*/

// PROVIDED SOLUTION:

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');
