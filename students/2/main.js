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
//
// Your functions here...
//
const countLetters = (array) => {
    let letterCount = 0 
    for (let i = 0; i < array.length; i++) {
        letterCount += array[i].length 
    } return letterCount
}


const shortestString = (array) => {
    let stringVal = array[0].length;
    let shortest
    for(let i =0; i < array.length; i++) {
        if(array[i].length < stringVal) {
            let stringVal = array[i].length;
            shortest = array[i];
        }
    } return shortest
}
const minNumber = (array) => {
    let lowestVal = array[0];
    for (let i of array){
        if (typeof(i) == "number" && i < lowestVal) {
            lowestVal = i
        }
    } return lowestVal
}
const countNumbers = (array) => {
    let count = 0
    for (let i of array) {
        if (typeof (i) == 'number') {
            if (!Number.isInteger(i) ) {
                count++
            }
        }
    }
    return count;
}

const main = async () => {
    ex4();
}

main();
