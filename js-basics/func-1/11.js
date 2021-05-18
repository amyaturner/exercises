/* Building on your solutions from the previous exercises,
write a function localGreet that takes a locale as input,
and returns a greeting. The locale allows us to greet people
from different countries differently also when they share the language, for example:
*/

let extractLanguage = (locale) => {
  return locale.split('_')[0];
}

let extractRegion = locale => {
  return locale.split("_")[1].split(".")[0];
}

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return "Hello!"
  }
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  if (language === "en") {
    switch (region) {
      case "US":
        return "Hey!";
      case "GB":
        return "Hello!";
      case "AU":
        return "Howdy!";
    }

  } else {
    return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

console.log(localGreet('da_DK.UTF-8')); // ?
console.log(localGreet('da_GL.UTF-8')); // ?


/* CORRECT

Provided Solution
does not have the wrapped if statement I included in mine, but simply adds the 'else' in its switch statement, like so:
*/

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}