// Pass by value (copy)/pass by reference
// Objects

const update = (a, b, c, person) => {
    a = 55;
    b = "world";
    c.push(4);
    c.push(5);
    person.firstName = "Joey"
}

const test = () => {

    let person1 = { name: "Alice", age: 14 }
    let person2 = { name: "Bob", age: 15 }
    let dog = { name: "Jones", age: 15 }

    let personList = [];
    personList.push(person1);
    personList.push(person2);
    personList.push("Hello World")
    console.table(personList)

    console.table(personList)
}


const main = () => {

    test();











    let a = 11; // Primitive type
    let b = "hello"; // Primitive type
    let c = [1,2,3]; // Reference array

    //console.log(a,b,c);

    let person = {  // JavaScript Object
        firstName: "Joe", 
        lastName: "Smith" 
    } // Reference type
    
    update(a, b, c, person);
    
    // A JavaScript object that is serialized becomes JSON...
    
    let jsonPerson = JSON.stringify(person)
    //console.log(jsonPerson)
    //console.log(person)


    //let jsObject = JSON.parse(jsonPerson)
    //console.log(jsObject)

    /**
     * JSON 39 chars
        {"firstName":"Joey","lastName":"Smith"}
    */

    /**
     * XML 70 chars
    <person>
        <firstName>Joe</firstName>
        <lastName>Smith</lastName>
    </person>
    */
}



main();