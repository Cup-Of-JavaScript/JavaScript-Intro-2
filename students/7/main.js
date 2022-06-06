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
        if(typeof(i)== 'numIntergers' && !Number.isInteger(i)) {
                count++
        }
    })
    return count;
}


const ex2 = () => {
    const array =  [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

const minNumber = (array) => {
    let lowestVal = array[0];

    for(let i of array){
        if(typeof(i) == 'numIntergers' || typeof(i) == 'true' || typeof(i) == 'false' && i < lowestVal  ){
            lowestVal = i;   
        }
    } return lowestVal;
}


const ex3 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
     console.log(shortestString(array));
     
 }
 
 const shortestString = (array) => {
     let stringVal = array[0].length;;
     let shortest;
     for (let i = 0; i < array.length; i++) {
         if (array[i].length < stringVal) {
              stringVal = array [i].length;
             shortest = array[i];
         }
     } return shortest;
 }
 

const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const countLetters = (array) => {
    let numLetters = 0;
    for (let word of array) {
        numLetters += word.length
    }
    return numLetters;
}

const ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
}

const countItems = (array) => {
    let retval = {
        numIntegers: 0,
        numDecimals: 0,
        numStrings: 0
    }
    retval.numIntegers = countNumberss(array);
    retval.numDecimals = countDecimals(array);
    retval.numStrings = countStrings(array);
    return retval;
}

const countNumberss = (array) => {
       let numIntergers = 0;
       for(let i of array) {
           if(typeof i === 'number' && Number.isInteger(i)) {
               numIntergers++;
           }
       }
       return numIntergers
}

const countDecimals = (array) => {
    let decimal = 0;
    for(let i of array) {
        if(typeof i === 'number' && !Number.isInteger(i)) {
            decimal++;
            
        }
    }
    return decimal
}

const countStrings = (array) => {
    let string = 0;
    for(let i of array) {
        if(typeof i === 'string') {
            string++;
            
        }
    }
    return string
}



const main = async () => {
    ex6();
}

main();
