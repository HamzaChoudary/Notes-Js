//  *** OOP (Object Oriented Programming) ***

//  What is Object Literals?

// Makeing Object is literal object 
//  example:

const user = {
    username: 'Hamza',
    loginCout: 5,
    SignedIn: true,


    getUserDetails: function(){
        // console.log('Got user detail from database');
        // console.log(`Username: ${this.username
        console.log(this);
    }
}

        // This keyword 
//  if we want to tell the context then we use this keyword 
//  Whenever we use this keyword then we need to talk current context.

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// if we need to make the more object(users) then we use copy/paste first user  
// it's diffcult tomake 
// rather then we use the  constructor mehtod 

        // Constructor function 

// Now We wonder about the new keyword where new keyword come From 
// Examples: 
// const Date = new Date();
// const promiseOne = new Promise()

// Actually the new keyword is a contructor function 
// new keyword is useful to make new context 


function User(username, loginCout, isLoggedIn){
    this.username = username;
    this.loginCout = loginCout;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
};

const userOne = new User('Hamza', 3, true);
const userTwo = new User('Ali', 7, false)
console.log(userOne.constructor);
// console.log(userTwo);

/* Now we know that contructor function give us new instense every time 
when we use new keyword firstly there is create empty object over there.

1: if there is create new object 

2: then call new constructor functiom cause of new keyword (or ya jitny os ky andar argument hn osy pack krta ha or os ap ko dy dyta ha)

3: then All argument that all we write  injecte  in it
4: then we get that


*/


