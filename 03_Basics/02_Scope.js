//  *********** Scope *****************
// let a = 10 
// const b = 20 
// var c = 30;

if (true) {
    let a = 10 
    const b = 20 
    var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);


// curel braces is scope {} 


let a = 300;
if (true){
    let a = 10 
    const b = 20
    // console.log("INNER:", a);
}

console.log(a);
// console.log(b);
// console.log(c);

 
//  Nested scope

// when nested function run there child function access there parent function 


function one(){
    const username = "Hamza"

    function two(){
        const website = "Google"
        // console.log(username);
    }
    // console.log(website);

    // two(); 
}

// one();
//   The above function one is biger then two function two access till one function and one function can't access two function and the two function alive under the one function.

if (true) {
    const username = "Hamza"
    if (username === "Hamza") {
        const website = "Google"
        // console.log(username + website);
    }
    // console.log(website);
} 

// console.log(username);


// *************** Interesting ***********
// Here is two way to make functions 

// first Syntax

function addone(num) {
    return num + 1 ;
};

// console.log(addone(5)); 

// second Syntax

const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));


