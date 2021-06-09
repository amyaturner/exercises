// The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

/* Write a function that checks whether or not a particular destination is
included within destinations, without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations,
the expected output is true, whereas the expected output for 'Nashville' is false.


contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

ANSWER:

Psuedo:
  function that passes a string
    Loop over elements in 'destinations' {
      if string argument equals element in this iteration {
        return true;
      }
    
    return false;
    }
  }

*/

function destinationIncluded(destination) {
  for(i = 0; i < destinations.length; i += 1) {
    if (destination === destinations[i]) {
      return true;
    }
  }

  return false;
}

console.log(destinationIncluded('Barcelona')); // true)
console.log(destinationIncluded('Nashville')); // false)
console.log(destinationIncluded('Bora Bora')); // true)
console.log(destinationIncluded('Madrid')); // false)

/* CORRECT

I did not include a second parameter in the function definition b/c the instructions
specified that the function was checking the variable 'destinations' for a destination; not checking any string in any array.

LS Provided Solutions:
1.
  function contains(element, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === element) {
        return true;
      }
    }

    return false;
  }

2.
  function contains(element, list) {
    return list.indexOf(element) >= 0;
  }

Our second solution leverages the built-in method Array.prototype.indexOf(),
which returns the index of an element in the array, and returns -1 if the element is not in the array.

*/