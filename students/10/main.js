//
// File: main.js
// Date: 5/31/2022
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

//ex2 
const minNumber = (array) => {
    let retval = array[0];
    for (let i = 1; i < array.length; i++) {
        if ( array[i] < retval) {
            retval = array[i];
        }
    }
    return retval;
}

//ex1
const countNumbers = (array) =>{
    let retval = 0;
    for(let i of array){
        if (typeof i == "number" && !Number.isInteger(i)){
            retval++;
        }
    }
    return retval;
}

const main = async () => {
    ex2();
}

main();