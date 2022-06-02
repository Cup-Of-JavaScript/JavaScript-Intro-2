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

//
// Your functions here...
//

let shortestString = (array) => {
    let value = array.sort((a,b) => a.length + b.length)
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
    ex3();
}

main();
