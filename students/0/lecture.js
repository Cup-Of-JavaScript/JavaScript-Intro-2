const update = (a, b) => {
    a = 55;
    b = "world";
}

const main = () => {
    let a = 11;
    let b = "hello";
    update(a, b);
    console.log(a, b);






    // let person = { // JavaScript Object 
    //     firstName: "Joe", 
    //     lastName: "Smith"
    // }

    // A JavaScript object that is serialized becomes JSON...
    
    //console.log(a, b, person)

    //let jsonPerson = JSON.stringify(person)
    //console.log(jsonPerson)
    // let jsObject = JSON.parse(jsonPerson)
    // console.log(jsObject)

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