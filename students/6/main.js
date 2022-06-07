//
// File: main.js
// Date: 5/24/2022
// skipped ex5 per instructor

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2, 2.2, 4, '2.3', 2.4, 3, 39.1, '2311', 23.11];
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
    console.log("Number of Integers: " + result.countInt);
    console.log("Number of Decimal Numbers: " + result.countDec);
    console.log("Number of Strings: " + result.countStrings);
}

const ex7 = () => {
    const sortedpersons = [];
    console.table(peoplearray(sortedpersons));
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

const createPerson = (name, age) => {         //ex8
    return {
        fullName: name,
        age: age
    }
}

const countOver20 = (personArray) => {          // part of ex8
    let counter = 0;
    for (let i of personArray) {
        if (i.age >= 20) {
            counter++;
        }
    }
    return counter;
}



const peoplearray = (sortedpersons) => {      //ex7
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    sortedpersons.push(person1);
    sortedpersons.push(person2);
    sortedpersons.push(person3);

    sortedpersons.sort((a, b) => (a.age - b.age));
    return sortedpersons;

}


const countItems = (array) => {         //ex6
    let value = {
        countInt: 0,
        countStrings: 0,
        countDec: 0
    };
    value.countInt = IntNumbers(array);
    value.countDec = DecNumbers(array);
    value.countStrings = NumStrings(array);
    return value;
}


const IntNumbers = (array) => {         //part of ex6
    let countInt = 0;
    for (let i of array) {
        if (typeof (i) === 'number' && Number.isInteger(i)) {
            countInt++;
        }
    }
    return countInt;

}

const DecNumbers = (array) => {         //part of ex6
    let countDec = 0;
    for (let i of array) {
        if (typeof (i) == 'number' && !Number.isInteger(i)) {
            countDec++;
        }
    }
    return countDec;

}

const NumStrings = (array) => {         //part of ex6
    let countStrings = 0;
    for (let i of array) {
        if (typeof (i) == 'string') {
            countStrings++;
        }
    }
    return countStrings;

}


const countLetters = (array) => {       //ex4
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i].length
    }
    return counter;
}


const shortestString = (array) => {     //ex3
    let retval = array.sort((a, b) => b.length - a.length);
    return retval[array.length - 1];

}


const minNumber = (array) => {           //ex2
    let lowestvalue = array[0];
    for (let i of array) {
        if (typeof (i) == "number" && i < lowestvalue) {
            lowestvalue = i
        }
    }
    return lowestvalue;

}


const countNumbers = (array) => {       //ex1
    let retval = 0;
    for (let i of array) {
        if (typeof (i) == 'number' && !Number.isInteger(i)) {
            retval++;
        }
    }
    return retval;
}

const main = async () => {
    ex8();
}

main();
