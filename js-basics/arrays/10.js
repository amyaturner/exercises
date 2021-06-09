/* We generated parts of a passcode and now want to combine them into a string.
Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
*/

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

function passcodeFinal(passcodeArr) {
  return passcodeArr.join('-');
}

console.log(passcodeFinal(passcode));

// LS Provided Solution:

passcode.join('-'); 
/* My Notes:
  no function written, since the Array object's join() method returns
  a string and is non-destructive (does not mutate the caller).
*/

/* LS Comments:
  If no separator argument is passed to join, the default separator is a comma:
    passcode.join();  =>  '11,jZ5,hQ3f*,8!7g3,p3Fs'
*/
