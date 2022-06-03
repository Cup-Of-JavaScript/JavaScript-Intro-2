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
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }
    
    let items = [];
    items.push(item1);
    items.push(item2);
    items.push(item3);

    console.log(calculateTotal2(items))
}

const calculateTotal2 = (items) => {
    let retval = 0;
    for (let i of items) {
        retval += (i.quantity * i.cost)
    }
    return retval;
}

const formatCurrency = (dollarAmount) => {
    let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formatter.format(dollarAmount)   
}

const calcCellBillForPerson = (usageData, person) => {
    let retval = person;
    // let ud = usageData.find(i=>i.userId == person.userId) // functional approach
    for (let ud of usageData) {
        if (ud.userId == person.userId) {
            person.minutes = ud.minutes;
            person.perMinuteCharge = .10
            person.charges = formatCurrency(ud.minutes * person.perMinuteCharge) 
        }
    }
    return retval; 
}

const ex4 = () => {    
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

const main = async () => {
    ex4();

}

main();