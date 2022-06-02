//
// File: main.js
// Date: 5/24/2022
//

  const ex1 = () => {
    const array = [1, "2", 3, "test", 1.2];
    console.log(countNumbers(array));
  }

  const ex2 = () => {
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
  }

  const ex3 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
  }

  const ex4 = () => {
    let array = ["this", "is", "a", "test"];
   console.log(countLetters(array));
  }


//
// Your functions here...
//

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
}

  const minNumber = (array) => {
    let lowestval = array[0];
    for (let i of array) {
    if (typeof i == "number" && i < lowestval) {
      lowestval = i;
      }
    }
    return lowestval;
  }
     
  const shortestString= (array) => {
    let retval= array.sort((a,b)=> b.length- a.length);
    return retval[array.length- 1]
  }

  const countLetters = (array) => {
    let letterCount = 0
    for (let i = 0; i < array.length; i++) {
      letterCount += array[i].length
    }  return letterCount
    
  }   



const main = async () => {
  ex4();
}

main();
