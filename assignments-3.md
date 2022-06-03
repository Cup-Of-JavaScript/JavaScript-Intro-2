# Assignments #3

## Ex. 6
Create an arrow function named: `countItems` that counts the number of integer numbers, decimal numbers and strings stored in an array.  The `countItems` function returns the following object:

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
let result = countItems(array);
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
Consider the following person objects:
```
let person1 = { name: "Alice", age: 22 }
let person2 = { name: "Bob", age: 21 }
let person3 = { name: "Charlie", age: 23 }
```

Add these person objects to an array using the `push()` method and sort the array based on age (ascending).  Write the following to the console using `console.table()`.

Output:
```
┌─────────┬───────────┬─────┐
│ (index) │   name    │ age │
├─────────┼───────────┼─────┤
│    0    │   'Bob'   │ 21  │
│    1    │  'Alice'  │ 22  │
│    2    │ 'Charlie' │ 23  │
└─────────┴───────────┴─────┘
```

## Ex. 8

