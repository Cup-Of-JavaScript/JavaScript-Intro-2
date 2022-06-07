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


const ex7 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    let group = []
    group.push(person2)
    group.push(person1)
    group.push(person3)

    console.table(group)
    
}

const ex8 = () => {

    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))
}

const createPerson = (name, age) => {
    let retval = {
        fullName: name,
        age: age
    }
    return retval;
};

 const countOver20 = (personArray) => {
    let count = 0;
    for(let i of personArray) {
        if(typeof(i.age) == 'number' && i.age > 20) {
            count++;
        }
    };
    return count
}

	
const ex9 = () => {
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    let array = [];
    array.push(item1)
    array.push(item2)
    array.push(item3)

    //console.log(array)
    console.log(calculateTotal(array))
}


const calculateTotal = array => {
    let total = 0;
    for (let i of array) {
        total += [i.cost] * [i.quantity] ;
    }
    return total;
}


const ex10 = () => {

}

let usageData = [
    { userId: 1111, minutes: 10.0 },
    { userId: 2222, minutes: 20.0 },
    { userId: 3333, minutes: 30.0 }
]

let person = { userId: 3333, fullName: "Charlie" }
let result = calcCellBillForPerson(usageData, person)
console.log(result)

const calcCellBillForPerson = () => {

}


const main = async () => {
    ex9();
}

main();
