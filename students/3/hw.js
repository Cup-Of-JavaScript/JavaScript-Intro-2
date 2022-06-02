const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2]; 
    console.log(countNumbers(array));
 }
 
 const ex2 = () => {
     const array = [12, 55, "2", 22, 11, true];
     console.log(minNumber(array));
 
 }
 
 const ex3 = () => {
     array = ['this', 'is', 'a', 'test', 'happy'];
     console.log(shortestString(array));
 }
 
 //
 // Your functions here...
 //
 
 const minNumber = (array) => {
     let smallestNum = array[0];
     for(let i = 0; i < array.length; i++) {
         if(Number.isInteger(i) && i < smallestNum) {
             smallestNum = i
         }
     }
     return smallestNum
 }
 
 
 
 const countNumbers = (array) => {
     let retval = 0;
     for (let i = 0; i < array.length; i++) {
         if(typeof(i) == "number" || !Number.isInteger(i)) {
         }
     }
     retval++
     return retval
 }
 const main = async () => {
     ex2();
 }
 
 main();
 