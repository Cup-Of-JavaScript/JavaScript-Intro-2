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
   const array = ['this', 'is', 'a', 'test', 'happy'];
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

//
// Your functions here...
//

//ex7



//ex6
       const countItems = (array) => {
        
        let retval = {
            numStrings: 0, 
            numIntegers: 0,
            numDecimals: 0
        }
        retval.numStrings =  countStrings(array);
        retval.numIntegers = countIntegers(array);
        retval.numDecimals = countDecimals(array);
        return retval;
    }
    
        
    const countIntegers = array => { 
        let numInt = 0;
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) == "number" && Number.isInteger(array[i])) {
                numInt++;
        }
    }   
    return numInt;
}

    const countDecimals = array => {
        let numDec = 0;
        for (let i = 0; i < array.length; i++) {
            if(typeof (array[i]) == "number" && !Number.isInteger(array[i])) {
               numDec++;
        }
    }   
    return numDec;
}        
            
const countStrings = array => {
    let numStr = 0;
    for (let i = 0; i < array.length; i++) {       
            if(typeof(array[i]) == "string") {
                numStr++;
        }
    }
    return numStr;
}

        
        
    
        
    
    



//ex4
const countLetters = (array)=> {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i].length
        }
    
    return counter;
}

//ex3
const shortestString = (array) => {
    let shortest = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i].length < shortest.length) {
            shortest = array[i]
        }
    }
    return shortest
}

//ex2 
const minNumber = (array) => {
    let retval = array[0];
    for (let i of array) {
        if (typeof(i) == "number" && i < retval) {
            retval = i;
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
    ex6();
}

main();