/* Write code that capitalizes the words in the string
'launch school tech & talk', so that you get the string
'Launch School Tech & Talk'.
*/

let talkTitle = 'launch school tech & talk';
let classTitle = 'javascript basics 101';

function toTitleCase(str) {
  return str.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}

console.log(toTitleCase(talkTitle));
console.log(toTitleCase(classTitle));

// CORRECT

// Provided Solution:

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'