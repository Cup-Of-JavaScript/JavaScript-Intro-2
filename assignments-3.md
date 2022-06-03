# Assignments #3

## Ex. 6
Create an arrow function named: `countIt` that counts the number of integer numbers, decimal numbers and strings stored in an array.  The `countIt` function returns the following object:

```
{
    numIntegers: 0,
    numDecimals: 0, 
    numStrings: 0
}
```

This arrow function calls the following arrow functions:
  - `countStrings`
  - `countIntegerNumbers`
  - `countDecimalNumbers`

When you are finished submit a PR.

Usage:
```
let array = ["this", "is", 1, 3, 2.1, "a", "test"];
let result = countIt(array);
console.log("Number of Integers: " + result.numIntegers)
console.log("Number of Decimal Numbers: " + result.numDecimals)
console.log("Number of Strings: " + result.numStrings)
```

Output:
```
Number of Integers: 2
Number of Decimal Numbers: 1
Number of Strings: 4 
```

## Ex. 7


