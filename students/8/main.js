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
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}


//
// Your functions here...
//

//Ex 4

const countLetters = (array) => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
         counter += array[i].length   
    }

    return counter;

}

//Ex 3

const shortestString = (array) => {
    let lgth = array[0].length;
    let shortest;    
    for (let i = 0; i < array.length; i++) {
      if (array[i].length < lgth) {
        let lgth = array[i].length;
        shortest = array[i];
      }
    }
    return shortest;
}


//Ex 2

const minNumber = (array) => {
    let lowest = array[0];
    for (let i=0; i < array.length; i++)  {
        if (typeof (array[i]) == "number" && array[i] < lowest) {
            lowest = array[i]
        }
    }
    return lowest;
}


//Ex 1

const countNumbers = (array) => {
    let retval = 0;
    for (let i=0; i < array.length; i++) {
        if (typeof (array[i]) == 'number' && !Number.isInteger(array[i])) {
                retval++;
            }
        }
    return retval;
}


const main = async () => {
    ex4();
}

main();
