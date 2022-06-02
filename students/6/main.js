//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2, 2.2, 4, '2.3', 2.4, 3, 39.1, '2311', 23.11];
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










const shortestString = (array) => {
    let retval = array.sort((a, b) => b.length - a.length);
    return retval[array.length - 1];

}




const minNumber = (array) => {
    let lowestvalue = array[0];
    for (let i of array) {
        if (typeof (i) == "number" && i < lowestvalue) {
            lowestvalue = i
        }
    }
    return lowestvalue;

}


const countNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
        if (typeof (i) == 'number' && !Number.isInteger(i)) {
            retval++;
        }
    }
    return retval;
}

const main = async () => {
    ex3();
}

main();
