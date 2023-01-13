const main = () => {
    let person = {
        name: "Alice",
        age: 11
    }

    person.weight = 45

    let newPerson = { ...person }
    console.log(person)
    console.log(newPerson)
}

main()
    





// const main = () => {
//     const people = [
//         { name: "alice" },
//         { name: "bob"   },
//         { name: "charlie"}
//     ]
//     const person = people.find(p => p.name == "alice")
//     person.name = "ALICE"
//     console.log(people)
// }

// main()


// const people = [
//     { name: "alice" },
//     { name: "bob"   },
//     { name: "charlie"}
// ]
// const person = people.find(p => p.name == "alice")
// person.name = "ALICE"
// console.log(people)


// const main = () => {
//     const numbers = [1,2,3,4,5]
//     const newNumbers = numbers.map(n => n * 2)
//     console.log(newNumbers)

//     const list = numbers.map(n => {
//         if (n % 2 == 0) {
//             return `Even: ${n}`
//         } else {
//             return `Odd: ${n}`
//         }
//     })
//     console.log(list)
//     list[0] = 'gone'
//     console.log(numbers)
//     console.log(list)
// }

// main()

