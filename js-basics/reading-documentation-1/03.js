/* Is there a method to capitalize a string,
for example turning 'mountain' into 'Mountain'?
 */

// ANSWER: It looks like no, but you could do something like this:

String.prototype.capitalizeSentence = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log("my energy is whoa.".capitalizeSentence());

String.prototype.capitalizeEveryWord = function() {
  arrOfWords = this.split(" ");
  capsArr = arrOfWords.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capsArr.join(' ');
}

console.log("amy turner".capitalizeEveryWord());

// CORRECT