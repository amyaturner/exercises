/* How many arguments does the Array.prototype.join() method expect?
What happens if you call it with less or more arguments?

ANSWER:

One. It expects one argument that provides the desired 'spacer' that will
be used between each element from the original array. The return will
be a string of those elements with the provided 'spacer' between each.

So:

['boo', 'this', 'der'].join(' ');  =>  'boo this der'
['boo', 'this', 'der'].join(', ');  =>  'boo, this, der'

If no argument is provided, the array's elements
will be joined into one string with no spacers.
Sort of like you passed an empty string:

['boo', 'this', 'der'].join('');  =>  'boothisder'

ALMOST CORRECT, Except that:

If the argument is omitted, the separator defaults to ','  (not an empty string).

Any excess arguments passed to the method upon invocation are ignored.