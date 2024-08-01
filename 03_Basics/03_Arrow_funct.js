// *************** This **********
// this function tell us  about current context
// study later 


//  ********* Arrow Function **************8

const user = {
    username: "Hamza",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "Sarwar";
// user.welcomeMessage()

// when we are in the node inviorment  then this function is empty 
// console.log(this);

// function chai () {
//     let username = "Hamza"
//     console.log(this);
// }
 
// chai();

// const chai = function (){
//     let username = "Hamza"
//     console.log(this.username);
// }

//  Now doing with arrow function 

const chai =  () => {
    let username = "Hamza"
    console.log(this);
}

// chai()

// this is basics  also called (explicit)
//  when we use curely braces then we need to use return word.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// now Implicit method 
// when we are'nt using curel bracs then we have'nt need to use return word.
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// when we need to pass a object 
// then we need to cover in simple braces 
const addTwo = (num1, num2) => ({username: "Hamza"})

// console.log(addTwo(3, 4));

//  When we study loop then we use these kind of arrows

// for example 

// const myArray = [2, 4, 5, 6,]

// myArray.forEach()

