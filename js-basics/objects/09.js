// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// ANSWER: 

let person = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  person[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(person);

// CORRECT