
// *********************** Data Types of summary  ***********************

//  Primitive Data Type 

// 7 Types : String, Number, Boolean, null, undefined,
// Sambol, BigInt.

// JavaScript is dynamically typed language

const score = 100
// console.log(typeof score);
// It's type of Number



const scoreValue = 100.3
// console.log(typeof score);
// also 
// It's type of Number

const inLoggedIn = false
// console.log(typeof inLoggedIn);
// It's type of Boolean

const outsideTemp = null
// console.log(typeof outsideTemp);
// It's type of object

let UserEmail;
// console.log(typeof UserEmail);
// it's type of Undefined

const Id = Symbol('123')
// console.log(typeof Id);
// it's type of Symbol

const anotherId = Symbol('123')
// console.log(typeof anotherId);
// also 
// it's type of Symbol

// Comparsion of Id and anotherId
// console.log(Id === anotherId);
// it's output is false

const bigNumber = 235322345432345n
// console.log(typeof bigNumber);
// it's type of bigint




// Reference (Non primitive)
 
// Array, Objects, Functions 


const heros = ["Shakin", "Farhia", "Maliha"]
// console.log(typeof heros);
// it's type of object

let myObj = {
    name: 'Hamza',
    age: 22
}
// console.log(typeof myObj);
// also 
// it's type of object

const myFunction = function(){
    console.log("Hello world");
}
// console.log(typeof myFunction);
// it's type of function
