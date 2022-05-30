## Ex. 0
Modernize the JavaScript file found in `~/students/Lab/modern-js.js`.  Replace the legacy functions with arrow functions and replace the `var` with either `let` or `const`.  There's a function signature that isn't right. Can you find it and fix it?

When you are finished, place this file in your student directory and submit a PR.

## Ex. 1
Create an arrow function called `countNumbers` that takes an array and
returns the number of numbers that only contain decimal points.

When you are finished submit a PR.

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
returns the lowest number.  The function must use a for loop and must ignore data types that are of type string or boolean.

When you are finished submit a PR.

Usage #1:
```
const array = [12, 55, "2", 22, 11, true];
console.log(minNumber(array));
```

Output:
```
11
```

## Ex. 3
Create an arrow function named: `shortestString` that returns the longest string from an array of strings:

When you are finished submit a PR.

Usage:
```
array = ['this', 'is', 'a', 'test', 'happy'];
console.log(shortestString(array));
```

Output:
```
a
```

## Ex. 4
Create an arrow function named: `countLetters` that counts the number of letters for an array of words:

When you are finished submit a PR.

Usage:
```
var array = ["this", "is", "a", "test"];
console.log(countLetters(array));
```

Output:
```
11
```

## Ex. 5
Create an arrow function named: `countIt` that counts the number of integer numbers, decimal numbers and strings from an array.  This arrow function calls the following functions:
  - `countNumbers`
  - `countStrings`
  - `countDecimals`
