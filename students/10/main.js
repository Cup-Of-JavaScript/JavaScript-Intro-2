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

const ex7 = () => {
    const groupArray = [];
    console.table(objList(groupArray));
}

const ex8 = () => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray));
}

const ex9 = () => {
    let totalArray = [];
    console.log(calculateTotal(totalArray));
}

const ex10 = () => {
    let usageData = [
        { userId: 1111, minutes: 10.0 },
        { userId: 2222, minutes: 20.0 },
        { userId: 3333, minutes: 30.0 }
    ]
    
    let person = { userId: 3333, fullName: "Charlie" }
    let result = calcCellBillForPerson(usageData, person)
    console.log(result)
}

//
// Your functions here...
//

const calcCellBillForPerson = (usageData, person) => {
    let personReceipt = {}
    let charge = 0
    let minute = {PerMinuteCharge: 0.1}
    for(let i = 0; i < usageData.length; i++) {
        if(usageData[i].userId === person.userId) {
            charge = formatCurrency(usageData[i].minutes * 0.1)
            let amount = {charges: charge}
            let minutes = {minutes: usageData[i].minutes}
            let personReceipt  = Object.assign(person, usageData[i].minutes, minutes, minute, amount);
            return personReceipt; 
        }
    }
    
}

const formatCurrency = (dollarAmount) => {
    let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formatter.format(dollarAmount)
}

//ex9
const calculateTotal = (totalArray) => {
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    totalArray.push(item1)
    totalArray.push(item2)
    totalArray.push(item3)

    let count = 0;
    for(let i of totalArray) {
        count += i.quantity * i.cost;
    }
    return count;
}   
    
//ex8
const createPerson = (name, age) => {
    let retval = {
        fullName: name,
        age: age
      }
      return retval;
};

const countOver20 = (peopleArray) => {
    let count = 0;
    for(let i of peopleArray) {
        if(typeof (i.age) == "number" && i.age > 20) {
            count++;
        }
    }   
    return count;
}


//ex7
const objList = (groupArray) => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    groupArray.push(person1);
    groupArray.push(person2);
    groupArray.push(person3);

    groupArray.sort((a, b) => (a.age - b.age))
    return groupArray;
}

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
    ex10();
}

main();