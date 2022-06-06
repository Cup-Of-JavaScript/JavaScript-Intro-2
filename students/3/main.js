//
// File: main.js
// Date: 5/24/2022
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
    let array = ['this', 'is', 'a', 'test', 'happy'];
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
//
// Your functions here...
//

// EX 6



// EX 4
const countLetters = (array) => {
    let newArray = array.join('');
    return newArray.length;
}


// EX 3
const shortestString = (array) => {
    let retval = array.reduce((a, b) => a.length <= b.length ? a : b)
    return retval
}


// EX 2
const minNumber = (array) => {
    let smallestNum = array[0];
    for (let i of array) {
        if (Number.isInteger(i) && i < smallestNum) {
            smallestNum = i
        }
    }
    return smallestNum
}


// EX 1
const countNumbers = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (i) == "number" || !Number.isInteger(i)) {
        }
    }
    retval++
    return retval
}
const main = async () => {
    ex4();
}

main();
