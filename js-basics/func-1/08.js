/* Write a function that takes an ISO 639-1 language code (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
and returns a greeting in that language. You can take the examples below or add whatever languages you like.
*/

function greet(iso_code) {
  switch (iso_code) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Olá!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai!';
      break;
    default:
      return 'Hi!';
  }
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'
console.log(greet('ro')); // 'Hi!'

/* Almost correct.

Provided Solution:

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

"Note that if we use return statements in the clauses,
we don't need to include additional break statements
because return will immediately exit from the function anyway."

Ahhh yes.
*/