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
    const peopleArray = [];
    console.log(makepeople(peopleArray));
}

const ex8 = () => {
    let personArray = [];
    console.log(countOver20(personArray))
}

const ex9 = () => {
    let itemArray = [];
    console.log(calculateTotal(itemArray))
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

//Ex10

const calcCellBillForPerson = (usageData, person) => {
    let personBill = {}
    let personCharge = 0
    let MinuteCharge = { PerMinuteCharge: 0.1 }
    // for (let { userId, minutes: m } of usageData) 
    for (let i = 0; i < usageData.length; i++) 
    {
        if (usageData[i].userId === person.userId)
        {
            personCharge = formatCurrency(usageData[i].minutes * 0.1)
            let total = { charges: personCharge }
            let minutes = { minutes: usageData[i].minutes }
            let personBill = Object.assign(person, usageData[i].minutes, minutes, MinuteCharge, total)
            return personBill;
        }
        
    }
  
}


const formatCurrency = (dollarAmount) => {
    let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formatter.format(dollarAmount)
}

//Ex 9

const calculateTotal = itemArray => {
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    itemArray.push(item1)
    itemArray.push(item2)
    itemArray.push(item3)

    let dollarAmount = 0;
    for (let i of itemArray) {
        dollarAmount += i.quantity * i.cost;
    }
    return dollarAmount;
}


//Ex 8

const createPerson = (name, age) => {
    return {
        fullName: name,
        age: age,
    }
}

const countOver20 = (personArray) => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)


    let counter = 0;
    for (let i of personArray) {
        if (i.age > 20 && typeof i.age == 'number') {
            counter++;
        }
    }
    return counter;
}


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

//Ex 6


const countItems = array => {
    let retval = {
        numStrings: 0,
        numIntegers: 0,
        numDecimals: 0
    }
    retval.numStrings = countStrings(array);
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
    ex10();
}

main();
