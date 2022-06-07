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


const ex6 = () => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)
}


console.log(countOver20(personArray))
//
// Your functions here...
//

// EX 6
const countItems = (array) => {
    let retval = {
        numIntegers: 0,
        numDecimals: 0,
        numStrings: 0
    }
    retval.numIntegers = countNumbers(array);
    retval.numDecimals = countDecimals(array);
    retval.numStrings = countStrings(array);
    return retval;
}

const countNums = (array) => {
    for (let i of array) {
        if (typeof i === 'number' && Number.isInteger(i)) {
            decimal++
        }
    }
    return decimal
}

const countDecimals = (array) => {
    let countDecimals = 0;
    for (let i of array) {
        if (typeof (i) == 'number' && !Number.isInteger(i)) {
            countDecimals++;
        }
    }
    return countDecimals
};

const countStrings = (array) => {
    let countStrings = 0;
    for (let i of array) {
        if (typeof (i) == 'string') {
            countStrings++;
        }
    }
    return countStrings;

};

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
    ex6();
}

main();
