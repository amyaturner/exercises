// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = [];

for (let key in person) {
  nestedPerson.push([key, person[key]]);
}

console.log(nestedPerson);

// BOOM, CORRECT!

/* LS Solutions:

(mine)

but they also used Object.entries(), which I didnt' previously know about,
which returns an array of a given's object key/value pairs (or a nested array if more than one key/value pair in the object):
*/

let nestedPerson2 = Object.entries(person);

console.log(nestedPerson2);
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]


let myObj = { this: 'that', my: 'yours', hello: 'goodbye' };
let objEntries = Object.entries(myObj);

console.log(objEntries);

// COOL
