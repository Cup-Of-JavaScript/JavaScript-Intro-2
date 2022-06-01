//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
   const array = [1, '2', 3, 'test', 1.2]; 
   console.log(countNumbers(array));
}

const ex2 = () => {

}

const ex3 = () => {

}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
        if(typeof(i) == "number" || !Number.isInteger(i)) {
        }
    }
    retval++
    return retval
}
const main = async () => {
    ex1();
}

main();
