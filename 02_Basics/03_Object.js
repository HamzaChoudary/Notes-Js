// ************ Objects in Depth **********
 

//  Singleton
// Object.create it's make through contructor method
// when ever we make any constructer then singleton build 
// it is object itself 

//  Object Literals

// how to decler symbol 
const mySym = Symbol("key1");

const JsUser = {
    name: "Hamza",
    "full name": "Hamza Sarwar",
    age: 22,
    [mySym]: "your fault",
    location: "Pakistan",
    email: "hamzasarwar1971@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["Sunday", "Friday"]
};

// console.log(JsUser.age);  // this is not good way
//  try another way
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);



JsUser.email = "alysarwarm@gmial.com";
// if want that our email unable to change by anyone the we use freeze method below.
// Object.freeze(JsUser);
// JsUser.email = "Saramch@gmail.com";
// console.log(JsUser);


JsUser.greeting =  function(){
    console.log("Hello Hamza");
}

JsUser.greetingTwo =  function(){
    console.log(`Hello Hamza ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

