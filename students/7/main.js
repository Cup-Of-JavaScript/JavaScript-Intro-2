//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const countNumbers = (array) => {
    let count = 0;
    array.forEach( i => {
        if(typeof(i)== 'number' && !Number.isInteger(i)) {
                count++
            }
        })
    return count;
}

//Hard Coded Method:

// const countNumbers = (array) => {
//     let count = 0;
//     for (let i = 0; i < array.length; i++){
//         if(array[i]==1.2){
//             count+= 1;
//         }
//     }
//     return count;
// }

const ex2 = () => {

}

const ex3 = () => {

}

//
// Your functions here...
//

const main = async () => {
    ex1();
}

main();

