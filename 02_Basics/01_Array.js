// *********** Array *************

const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ['Hamza', 'Sarwar'];
const myArr2 = new  Array(1, 2, 3, 4);


// console.log(myArr[1]);
// console.log(myArr2[1]);


//  ******** Array Method *********

// To Add some thing in Array on last
// myArr.push(7);

// To remove something from last 
// myArr.pop();

// To add something in Array on first 
// myArr.unshift(8);

// To remove that value which we add by unshift in Array 
// myArr.shift();

// by useing this get the value false or true 
// console.log(myArr.includes(3));

// same as above but difference is result are not true or false form 
// console.log(myArr.indexOf(2));

// To change the type of the value
// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


//  ***** slice, splice ********

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr); 

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);


// The difference between slice and splice array is that the slice array output is under the range
// but the splice output is out of range. They are not print the that value which we give them.