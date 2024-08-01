//  ****** Function and Parameters ******


function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("Z");
    console.log("A");
}

// this reference and () this excution
// sayMyName();

function addTwoNumbers (number1, number2){

    // first way to write code

    // let result = number1 + number2
    // return result

    // second way to write code

    return number1 + number2
};

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);

function loginUserMessage(username = "Sarwar") {
    if ( !username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}


// console.log(loginUserMessage("Hamza"));
// console.log(loginUserMessage());


//  ****** Function with Object and Array******

// here we use rest/spread method that is ... it is also called rest operator and spread operator

function calculateCardPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCardPrice(200, 300, 600, 400));

// The  above val1 get first value and val2 get second value and jo baki bacha that get output

// Function with Object here 

const user = {
    username: "Hamza",
    price: 299
}


function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 
// handleObject(user);
handleObject({
    username: "sarwar",
    price: 330
});

//  ****** Function with Arrays ******

const myNewArray = [200, 300, 500]
function retrunSecondValue(getArray) {
    return getArray[0]
}

// console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([200, 300, 500]));


