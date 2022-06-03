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