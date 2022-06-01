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

}

//
// Your functions here...
//
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
    ex2();
}

main();
