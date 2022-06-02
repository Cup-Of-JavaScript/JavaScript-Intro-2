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
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  console.log(interleave(array1, array2));
};

const exx3 = () => {
    const str = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(str));
}

const ex4 = () => {
    const array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

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

//exercise 2
const minNumber = (array) => {
  let i = 0;
  let smallestNumber = array[0]; // const array = [12, 55, "2", 22, 11, true];
  for (let i of array) {
    if (Number.isInteger(i) && i < smallestNumber) {
      // && means and.
      smallestNumber = i;
    }
  }
  return smallestNumber;
};

//exercise 3
const interleave = (array1, array2) => {
  let newArray = [];
  if (array1.length != array2.length) {
    newArray = "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < array1.length; i++) {
      newArray.push(array1[i], array2[i]);
    }
  }
  return newArray;
};

//exercise x3
const shortestString = (str) => {
    let shortestString; 
     let lgth =str[0].length
    
    for(let i=0; i<str.length; i++){
       if( str[i].length< lgth ) {
           lgth = str[i].length;
           shortestString = str[i]
       }
    }
    return shortestString
}
 
//exercise 4
const countLetters = (array) => {
    let newArray = array.join('');
    newArray;
    return newArray.length
}


const main = async () => {
  ex4();

};

main();
