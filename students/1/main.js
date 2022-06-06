//
// File: main.js
// Date: 5/30/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
}

const ex7 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    let everyone = [];
    everyone.push(person1);
    everyone.push(person2);
    everyone.push(person3);
   
    everyone.sort((a, b) => a.age - b.age);
    console.table(everyone);
    // displayPeople(everyone);
}

const ex8 = () => {
let p1 = createPerson("Alice", 11)
let p2 = createPerson("Bob", 22)
let p3 = createPerson("Charlie", 33)

let personArray = [];
personArray.push(p1)
personArray.push(p2)
personArray.push(p3)

console.log(countOver20(personArray))
}

//
// Your functions here...
//

const createPerson = () => {
  let roster = [
        {
            fullName: "Alice",
            age: 22
          },
          {
            fullName: "Bob",
            age: 21
          },
          {
            fullName: "Charlie",
            age: 23
          }
    ]
    
}

const countOver20 = (personArray) => {
    
}

const displayPeople = (everyone) => {
    everyone.sort((a, b) => a.age - b.age);
    console.table(everyone);
}

const countItems = (array) => {
    let retval = {
        numIntegers: 0,
        numDecimals: 0,
        numStrings: 0
    }
    let r = countStrings(array)
    retval.numIntegers = countIntegers(array)
    retval.numDecimals = countDecimals(array)
    retval.numStrings = countStrings(array)
    return retval;
}
const countIntegers = (array) => {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number" && Number.isInteger(array[i])) {
            number++
        }
    }
    return number;
}
const countDecimals = (array) => {
    let decimal = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number"  && !Number.isInteger(array[i])) {
            decimal++
        }
    }
    return decimal;
}

const countStrings = (array) => {
    let string = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {
            string++
        }
    }
    return string;
}


let shortestString = (array) => {
    let value = array.sort((a, b) => a.length + b.length)
    return value[array.length - 3]
}

let minNumber = (array) => {
    let results = array[0] - 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] == "number" && i < results) {
            results = array[i];
        }
    }
    return results;
}

let countNumbers = (array) => {
    let retval = array[0];
    for (let i = 1; i > array.length; i++) {
        if (typeof (i) == "number" && !Number.isInteger(i)) {
            retval++
        }
    }
    return retval;
}

const main = async () => {
    ex8();
}

main();
