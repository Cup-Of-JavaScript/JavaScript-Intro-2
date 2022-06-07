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
  console.log("Number of Integers: " + result.numIntegers);
  console.log("Number of Decimal Numbers: " + result.numDecimals);
  console.log("Number of Strings: " + result.numStrings);
};

const ex7 = () => {
  console.table(personList);
};

const ex8 = () => {
  let p1 = createPerson("Alice", 11);
  let p2 = createPerson("Bob", 22);
  let p3 = createPerson("Charlie", 33);

  let personArray = [];
  personArray.push(p1);
  personArray.push(p2);
  personArray.push(p3);

  console.log(countOver20(personArray));
};

const ex9 = () => {
  let item1 = { quantity: 1, cost: 1.0 };
  let item2 = { quantity: 2, cost: 2.0 };
  let item3 = { quantity: 3, cost: 3.0 };

  let personArray = [];
  personArray.push(item1);
  personArray.push(item2);
  personArray.push(item3);
  // console.log(personArray)
  console.log(calculateTotal(personArray));
};

const ex10 = () => {
  let usageData = [
    { userId: 1111, minutes: 10.0 },
    { userId: 2222, minutes: 20.0 },
    { userId: 3333, minutes: 30.0 },
  ];

  let person = { userId: 3333, fullName: "Charlie" };
  let result = calcCellBillForPerson(usageData, person);
  console.log(result);
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
const countItems = (array) => {
  let retval = {
    numIntegers: 0,
    numDecimals: 0,
    numStrings: 0,
  };
  retval.numIntegers = countIntegerNumbers(array);
  retval.numDecimals = countDecimalNumbers(array);
  retval.numStrings = countStrings(array);
  return retval;
};

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
let person1 = { name: "Alice", age: 22 };
let person2 = { name: "Bob", age: 21 };
let person3 = { name: "Charlie", age: 23 };
let personList = [];
personList.push(person2);
personList.push(person1);
personList.push(person3);

//exercise 8
const createPerson = (name, age) => {
  let object = {
    fullName: name,
    age: age,
  };
  return object;
};
const countOver20 = (personArray) => {
  let retval = 0;
  for (let i of personArray) {
    if (typeof i.age === "number" && i.age > 20) {
      retval++;
    }
  }
  return retval;
};

//exercise 9
const calculateTotal = (personArray) => {
  let price = personArray.map(
    (personArray) => personArray.quantity * personArray.cost
  );
  let calculatetotal = price.reduce((a, b) => a + b);
  return calculatetotal;
  //console.log(calculatetotal);
  //console.log(price);
};

//exercise 10
const calcCellBillForPerson = (usageData, person) => {
  let personObject = {};
  let charge = 0;
  let minute = { PerMinuteCharge: 0.1 };
  for (let i = 0; i < usageData.length; i++) {
    if (usageData[i].userId === person.userId) {
      charge = formatCurrency(usageData[i].minutes * 0.1);
      let amount = { charges: charge };
      let minutes = { minutes: usageData[i].minutes };
      let personObject = Object.assign(
        person,
        usageData[i].minutes,
        minutes,
        minute,
        amount
      );
      return personObject;
    }
  }
}
const formatCurrency = (dollarAmount) => {
    let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formatter.format(dollarAmount)
}

const main = async () => {
  ex10();
};

main();
