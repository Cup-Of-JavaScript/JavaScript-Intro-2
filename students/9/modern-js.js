//
// File: modern-js.js
// Date: 5/30/2022
// Desc: Modernize this legacy JavaScript:
//       - Replace ALL functions with arrow functions (this includes the sort callback function)
//       - Replace var with let or const.
//

const displayResults= (personList, count) => {
    let count = 0;
    count = personList.length;
    console.table(personList);
    console.log("There are " + count + " people in the list.");
}

const getData = (tableName) => {
  let retval= "no data";
  if(tablename=="person"){
  retval = [
      { firstName: "Alice", lastName: "Jones", age: 10 },
      { firstName: "Bob", lastName: "Smith", age: 7 },
      { firstName: "Charlie", lastName: "Thumb", age: 5 },
    ];
  }
  return retval;
}

const main = () => {
  let table = "person";
  let personList = getData(table);
  personList.sort((a,b) => return a.age - b.age);
  displayResults(personList);
}

main();