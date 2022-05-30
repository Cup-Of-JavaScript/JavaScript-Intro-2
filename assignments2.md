## Ex. 1
Modernize the JavaScript file found in `~/students/Lab/modern-js.js`.  Replace the legacy functions with arrow functions and replace the `var` with either `let` or `const`.  Place this file in your student directory.

There's a function signature that isn't right. Can you find it and fix it?  :-)

## Ex. 2
Create an arrow function called `countNumbers` that takes an array and
returns the number of numbers that only contain decimal points.

Usage:
```
const array = [1, '2', 3, 'test', 1.2];
console.log(countNumbers(array));
```

Output:
```
1
```

## Ex. 2
Create an arrow function called `minNumber` that takes an array of numbers and
returns the lowest number.  The function must use a for loop.

Usage #1:
```
const array = [12, 55, 2, 22, 11];
console.log(minNumber(array));
```

Output:
```
2
```










## Ex. 3
Create an arrow function called `interleave` that accepts two arrays and interleave them.  The function returns the following error string if the two arrays have a different length:  `ERROR: Array length mismatch`

Usage #1:
```
const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
```

Output:
```
1a2b3c4d5e
```

Usage #2:
```
const array1 = [1, 2];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));
```

Output:
```
ERROR: Array length mismatch
```
## Ex. 4
Write an arrow function named: `palindrome` that returns a boolean if a string is a palindrome:

Usage:
```
console.log(palidrome('radar'));
console.log(palidrome('month'));
```
Output:
```
true
false
```

## Ex. 5
Given the following string:

```
let str = "today this is a this is a this is a test.";
```

Display the number of times the word `this` appears:

Output:
```
this appears: 3 times.
```

## Ex. 6
Create an arrow function named: `longestString` that returns the longest string from an array of strings:

Usage:
```
array = ['this', 'is', 'a', 'test', 'happy'];
console.log(longestString(array));
```

Output:
```
happy
```

## Ex. 7

Create an arrow function named: `sort` that sorts an array of numbers in ascending order:

Usage:
```
let n = [1, 3, 6, 3, 6, 10];
console.log(sort(n));
```
Output:
```
[ 1, 3, 3, 6, 6, 10 ]
```

## Ex. 8

Create an arrow function named: `countWords` that counts the number of words for this string:

Usage:
```
let words = "Count the words in this string";
console.log(countWords(words));
```

Output:
```
6
```

## Ex. 9
Create an arrow function named: `countS` that counts the number of words that end in "s":

Usage:
```
var a = "this counts the number of words that end in s";
console.log(countS(a));
```

Output:
```
4
```

## Ex. 10
Create an arrow function named: `countLetters` that counts the number of letters for an array of words:

Usage:
```
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
```

Output:
```
11
```

Bonus points for using `map` and `reduce`.

## Ex. 11
Create an arrow function named: `countIt` that counts the number of integer numbers, decimal numbers and strings from an array.  This arrow function calls the following functions:
  - `countNumbers`
  - `countStrings`
  - `countDecimals`