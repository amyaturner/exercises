/* We are experimenting with some code to get more comfortable working with objects.
Run the snippet below and explain why "It's true!" is never output.
*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/* ANSWER:
Because within the 'obj' object, the property name of 'true' is not actually the value (boolean data type) of true.
Rather, it's more like a string: 'true'.
So, when JavaScript checks if 'true' === true, it's false (and so is every other comparison with the other property names/keys).

LS Explanation:
"Object property names are always strings.
When we omit quotes around our property names, JavaScript implicitly converts the name to a string.
So true is not a property defined on obj, but 'true' is."
*/