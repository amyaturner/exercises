/* Below is a simple object representing our dog, Fido.
On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.
*/

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

fido.age = '';
fido.favorite_food = '';

console.log(fido);

// CORRECT. Since the instructions didn't specify what to assign, I assigned the properties to empty strings for now.
// Also, I changed 'favorite food' to 'favorite_food' in order to be able to use dot notation with that property name, b/c that's what I
// personally prefer over bracket notation. In the future, I want to be able to retrieve a value of an object with dot notion, so I prefer
// setting up the property names so that can be done.
// However, I don't know if this would be marked down in an assessment or not, since perhaps they would view it as not following instructions precisely ?

// LS Provided Solution:
fido['age'] = 2;
fido['favorite food'] = 'peanut butter';
