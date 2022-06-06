//
// File: main.js
// Date: 5/24/2022
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const ex2 = () => {
  const array = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array));
};

const ex3 = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

const exx3 = () => {
  const str = ["this", "is", "a", "test", "happy"];
  console.log(shortestString(str));
};

const ex4 = () => {
  const array = ["this", "is", "a", "test"];
  console.log(countLetters(array));
};

const ex5 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];
  console.log("Number of Integers:" + intergerNumbers(array));
  console.log("Number of Decimal Numbers:" + decimalNumbers(array));
  console.log("Number of Strings:" + numberOfStrings(array));
};

const ex6 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];
  let result = countItems(array);
  console.log("Number of Integers: " + result.numIntegers)
  console.log("Number of Decimal Numbers: " + result.numDecimals)
  console.log("Number of Strings: " + result.numStrings)
};

//
// Your functions here...

//exercise 1
const countNumbers = (array) => {
  let number = 0;
  for (let i of array) {
    if (typeof i === "number") {
      if (!Number.isInteger(i)) {
        number++;
      }
    }
  }
  return number;
};

//exercise 2
const minNumber = (array) => {
  let i = 0;
  let smallestNumber = array[0]; // const array = [12, 55, "2", 22, 11, true];
  for (let i of array) {
    if (Number.isInteger(i) && i < smallestNumber) {
      // && means and.
      smallestNumber = i;
    }
  }
  return smallestNumber;
};

//exercise 3
const interleave = (array1, array2) => {
  let newArray = [];
  if (array1.length != array2.length) {
    newArray = "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < array1.length; i++) {
      newArray.push(array1[i], array2[i]);
    }
  }
  return newArray;
};

//exercise x3
const shortestString = (str) => {
  let shortestString;
  let lgth = str[0].length;

  for (let i = 0; i < str.length; i++) {
    if (str[i].length < lgth) {
      lgth = str[i].length;
      shortestString = str[i];
    }
  }
  return shortestString;
};

//exercise 4
const countLetters = (array) => {
  let newArray = array.join("");
  return newArray.length;
};
//exercise 5
const intergerNumbers = (array) => {
  let intergers = 0;
  for (let i of array)
    if (typeof i === "number" && Number.isInteger(i)) {
      intergers++;
    }
  return intergers;
};
const decimalNumbers = (array) => {
  let decimals = 0;
  for (let i of array)
    if (typeof i === "number" && !Number.isInteger(i)) {
      decimals++;
    }
  return decimals;
};
const numberOfStrings = (array) => {
  let strings = 0;
  for (let i of array)
    if (typeof i === "string") {
      strings++;
    }
  return strings;
};

//exercise 6
const countItems = (array) =>{
    let retval ={
    numIntegers: 0,
    numDecimals: 0,
    numStrings: 0,
    }
    retval.numIntegers = countIntegerNumbers(array);
    retval.numDecimals = countDecimalNumbers(array);
    retval.numStrings = countStrings(array);
    return retval; 
}

const countIntegerNumbers = (array) => {
  let numIntegers = 0;
  array.forEach((element) => {
    if (typeof element === "number" && Number.isInteger(element)) {
      numIntegers++;
    }
  });
  return numIntegers;
};
const countDecimalNumbers = (array) => {
  let numDecimals = 0;
  array.forEach((element) => {
    if (typeof element === "number" && !Number.isInteger(element)) {
      numDecimals++;
    }
  });
  return numDecimals;
};
const countStrings = (array) => {
  let numStrings = 0;
  array.forEach((element) => {
    if (typeof element === "string") {
       numStrings++;
    }
  });
  return numStrings;
};
 
// exercise 7


const main = async () => {
  ex6();
};

main();
