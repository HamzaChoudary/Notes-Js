//  ***** Promises ********

// Mostly we see that we consume promises mostly

// fetch('htttps://somthing.com').then().catch().finally()

// We need to understand before consume promises.

        // Promises creation
    // There is the two parts of promises (Resovle, rejected).   
    // resolve and .then() have relation between in.
    // there is no need make variable for promise with vaiable and without variable promise Worker.

    // first Way to make promise with variable

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
    // if we want to connected to both then we use resolve() method 
        resolve();
    }, 1000)
});
 
promiseOne.then(function(){
    console.log("Promise consumed");
});

// Second Way to make promise without variable 
 
new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Async task 2');
        resolve();
    }, 1000)
    // when want to store in vaialbe then we use below method.
}).then(() => {
    console.log('Async 2 resolved');
});


        // Promise Three 
// here we know that how our data consuption and how get values 

const promisethree = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        console.log();
        resolve({username: "Hamza, email: hamzasarwar1971@gmil.com"})
    }, 1000)
});

promisethree.then(function(user){
    console.log(user);
});


        // Four Promise 

const promisefour =  new Promise( function(resolve, reject) {
     setTimeout( function(){
        let error = true
        if(!error){
            resolve({username: 'Hamza', passward: '123'});
        }else {
            reject('ERROR: Something went wrong');
        }
     }, 1000);
});
 
promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then( (username) => {
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"));




            //  Promise Five

const promisefive =  new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true
        if (!error) {
            resolve({username: 'JavaScript', password: '123'})
        }else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
   try {
    const respone = await promisefive
    console.log(respone);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();

// async/await method 

// async function getAllUsers(){
//     try {
//         const respone = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(respone);
//     const data = await respone.json();
//     console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers();

// then/catch mehtod 

fetch('https://jsonplaceholder.typicode.com/users')
.then( (respone)=> {
    return respone.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))













