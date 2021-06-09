// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmxdWsIG9mIxGVlbHMu';

console.log(byteSequence.includes('x'));

/* CORRECT

Further Exploration:
"It's a great exercise to try to implement the functionality of String.prototype.includes() yourself."
*/

function hasChar(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }

  return false;
}

// OR

function hasChar_Alt(str, char) {
  for (let i in str) {
    if (str[i] === char) {
      return true;
    }
  }

  return false;
}

console.log(hasChar(byteSequence, 'x'));
console.log(hasChar_Alt(byteSequence, 'z'));

// YES! Learned well on this one due to the further exploration.