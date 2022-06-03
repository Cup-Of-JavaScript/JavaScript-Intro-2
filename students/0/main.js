//
// File: main.js
// Date: 5/31/2022
// 

const ex1 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    let personArray = [];
    personArray.push(person1)
    personArray.push(person2)
    personArray.push(person3)

    personArray.sort((a,b) => a.age - b.age )

    console.table(personArray)
}

const ex2 = () => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))
}

const countOver20 = (array) => {
    let retval = 0;
    for(let p of array) {
        if (p.age >= 20) {
            retval++;
        }
    }
    return retval;
}

const createPerson = (name, age) => {
    return { fullname: name, age }
}

const ex3 = () => {

    
}

//
// Your functions here...
//

const main = async () => {
    ex2();

}

main();