
// **********************Sack Memory****************
// Stack: It is a data structure used to store static data.

// ************************** Heap Memory ***************
// Heap: It is used to store objects and functions in JavaScript.

// Stack (Primitive Value) : Heap (Non Primitive value)

let myName = "Hamza Sarwar";

let anotherName = myName;
anotherName = "Ali Sarwar";

// console.log(myName);
// console.log(anotherName);


let userOne = {
    email: "hamzasarwar1971@gmail.com"
}
    console.log(userOne);

let userTwo = userOne;

console.log(userTwo);

userTwo.email = "alysaram.com";

console.log(userOne);
console.log(userTwo);

