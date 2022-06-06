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

const ex5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countIt(array);
    console.log("Number of Integers: " + result.numOfIntegers + "\n" + "Number of Decimals: " + result.numOfDecs + "\n" + "Number of Strings: " + result.numOfStrings)
}

const ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
    //console.log("Number of Integers: " + result.numOfIntegers + "\n" + "Number of Decimals: " + result.numOfDecs + "\n" + "Number of Strings: " + result.numOfStrings)
}

const ex7 = () => {
    const peopleArray =[];
    console.table(makepeople(peopleArray));
}

//
// Your functions here...
//

//Ex 7

const makepeople = (peopleArray) => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }
 
    peopleArray.push(person1);
    peopleArray.push(person2);
    peopleArray.push(person3);

    peopleArray.sort((a, b) => (a.age > b.age) ? 1 : -1)
    return peopleArray;

}
    // const getData = (tableName)  => {
    //     let retval = "No Data";
    //     if (tableName == "person") {
    //       retval = [
    //         { firstName: "Alice", lastName: "Jones", age: 10 },
    //         { firstName: "Bob", lastName: "Smith", age: 7 },
    //         { firstName: "Charlie", lastName: "Thumb", age: 5 },
    //       ];
    //     }

// const main = () => {     //For making the table and sorting alpha
//     let table = "person";
//     let personList = getData(table);
//     personList.sort((a,b) => (a-b));
//     displayResults(personList);
//   }

//Ex 6


const countItems = array => {
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
    let numIntegers = 0;
    array.forEach((element) => {
        if (typeof element === "number" && Number.isInteger(element)) {
          numIntegers++;
        }
    });
    return numIntegers;
}

const countDecimals = array => {
    let numDecimals = 0;
    array.forEach((element) => {
        if (typeof element === "number" && !Number.isInteger(element)) {            //Decimals
        numDecimals++;
        }
    });
    return numDecimals;
}

const countStrings = array => {
    let numStrings = 0;
    array.forEach((element) => {
        if (typeof (element) == "string") {      //Strings
        numStrings++;
        }
    });  
    return numStrings;
}


//Ex 5

// const countIt = array => {
//     let CountInt = 0;
//     let CountDec = 0;
//     let CountStr = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof (array[i]) == "number" && Number.isInteger(array[i])) {            //Integers
//             CountInt++;
//         }
//         if (typeof (array[i]) == "number" && !Number.isInteger(array[i])) {            //Decimals
//             CountDec++;
//         }
//         if (typeof (array[i]) == "string") {      //Strings
//             CountStr++;
//         }
//     }

//     return {
//         numOfIntegers: CountInt,
//         numOfDecs: CountDec,
//         numOfStrings: CountStr
//     }
// }

//Ex 4

const countLetters = array => {
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
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == "number" && array[i] < lowest) {
            lowest = array[i]
        }
    }
    return lowest;
}


//Ex 1

const countNumbers = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == 'number' && !Number.isInteger(array[i])) {
            retval++;
        }
    }
    return retval;
}


const main = async () => {
    ex7();
}

main();
