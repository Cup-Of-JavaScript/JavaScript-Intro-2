//
// File: modern-js.js
// Date: 5/30/2022
// Desc: Modernize this legacy JavaScript:
//       - Replace ALL fuctions with arrow functions (this includes sort)
//       - Replace var with let or const.
//

function displayResults(personList, count) {
    var count = 0;
    count = personList.length
    console.table(personList)
    console.log("There are " + count + " people in the list.")
}

function getData(tableName) {
  var retval = "No Data";
  if (tableName == "person") {
    retval = [
      { firstName: "Alice", lastName: "Jones", age: 10 },
      { firstName: "Bob", lastName: "Smith", age: 7 },
      { firstName: "Charlie", lastName: "Thumb", age: 5 },
    ];
  }
  return retval;
}

function main() {
  var table = "person";
  var personList = getData(table);
  personList.sort(function(a,b){return a.age - b.age})
  displayResults(personList)
}

main();
