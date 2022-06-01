//
// File: main.js
// Date: 5/24/2022
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const ex2 = () => {};

const ex3 = () => {};

//
// Your functions here...

//exercise 1
const countNumbers = (array) => { 
    let number = 0;
 for (let i of array) {
    if (typeof i === "number") {
      if (!Number.isInteger(i)) {
        number++;
      }
    }
  }
  return number;
};

const main = async () => {
  ex1();
};

main();
