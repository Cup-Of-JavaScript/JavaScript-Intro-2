//
// File: main.js
// Date: 5/24/2022
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const ex2 = () => {
  const array = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array));
};

const ex3 = () => {
  const array = ["this", "is", "a", "test", "happy"];
  console.log(shortestString(array));
};

const ex4 = () => {
  let array = ["this", "is", "a", "test"];
  console.log(countLetters(array));
};

const ex6 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];
  let result = countItems(array);
  console.log("Number of Integers: " + result.numIntegers);
  console.log("Number of Decimal Numbers: " + result.numDecimals);
  console.log("Number of Strings: " + result.numStrings);
};

const ex7 = () => {
  const peopleArray =[];
  console.table(makepeople(peopleArray));
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


const ex9 = () => {
  let money = [];
  console.log(calculateTotal(money));
}
//
// Your functions here...

const countNumbers = (array) => {
  let retval = 0;
  for (let i of array) {
    if (typeof i == "number") {
      if (!Number.isInteger(i)) {
        retval++;
      }
    }
  }
  return retval;
};

const minNumber = (array) => {
  let lowestval = array[0];
  for (let i of array) {
    if (typeof i == "number" && i < lowestval) {
      lowestval = i;
    }
  }
  return lowestval;
};

const shortestString = (array) => {
  let retval = array.sort((a, b) => b.length - a.length);
  return retval[array.length - 1];
};

const countLetters = (array) => {
  let letterCount = 0;
  for (let i = 0; i < array.length; i++) {
    letterCount += array[i].length;
  }
  return letterCount;
};

const countItems = (array) => {
  let retval = {
    numIntergers: 0,
    numDecimals: 0,
    numStrings: 0
  };
  retval.numIntegers = countNumberss(array)
  retval.numDecimals = countDecimals(array)
  retval.numStrings = countnumStrings(array)
  return retval;
};

const countNumberss = (array) => {
  let numIntegers = 0;
  array.forEach((element) => {
    if (typeof element === "number" && Number.isInteger(element)) {
      numIntegers++;
      }
  } );
  return numIntegers;
};

const countDecimals = (array) => {
  let numDecimals = 0;
  array.forEach((element) => {
    if (typeof element === "number" && !Number.isInteger(element)) {
      numDecimals++;
     }
  } );
  return numDecimals;
};

const countnumStrings = (array) => {
  let numStrings = 0;
  array.forEach((element) => {
    if (typeof element == "string") {
      numStrings++;
     }
  } );
   return numStrings;
};

const makepeople = (peopleArray) => {
  let person1 = { name: "Alice", age: 22 }
  let person2 = { name: "Bob", age: 21 }
  let person3 = { name: "Charlie", age: 23 }

  peopleArray.push(person1);
  peopleArray.push(person2);
  peopleArray.push(person3);

  peopleArray.sort((a, b) => (a.age > b.age) ? 1 : -1)
  return peopleArray;

}

const createPerson = (name, age) => {
  let retval = {
      fullName: name,
      age: age
  }
  return retval;
};

const countOver20 = (personArray) => {
  let count = 0;
  for(let i of personArray) {
      if(typeof(i.age) == 'number' && i.age > 20) {
          count++;
      }
  };
  return count
}

const calculateTotal = (money) => {
  let item1 = { quantity: 1, cost: 1.00 }
  let item2 = { quantity: 2, cost: 2.00 }
  let item3 = { quantity: 3, cost: 3.00 }

  money.push(item1)
  money.push(item2)
  money.push(item3)

  let amount = 0;
  for (let i of money) {
      amount += i.quantity * i.cost
  }
  return amount;

}

const main = async () => {
  ex9();
}

main();