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

const ex3 = () => { };

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
    let smallestNumber = array[0] // const array = [12, 55, "2", 22, 11, true];
    for (let i of array) {
        if (Number.isInteger(i) && i < smallestNumber) { // && means and.
            smallestNumber = i
        }
    }
    return smallestNumber
}




const main = async () => {
    ex2();
};

main();
