//  *********** Dates *****************

let myDate = new Date()


// console.log(myDate);

// to String method 
// console.log(myDate.toString());

// to Date String method 
// console.log(myDate.toDateString());

// to ios string method 
// console.log(myDate.toISOString());

// To local Date string method 
// console.log(myDate.toLocaleDateString());

// to  JSon string methood
// console.log(myDate.toJSON());

// To local String method
// console.log(myDate.toLocaleString());

// To local Time String method
// console.log(myDate.toLocaleTimeString());

// To UTCS string method
// console.log(myDate.toUTCString());

// To time String method
// console.log(myDate.toTimeString());

// To time Off set method
// console.log(myDate.getTimezoneOffset());

// What's the typeof 
// console.log(typeof myDate); 
// OBJECT

// let myCreateDate = new Date(2023, 6, 23);
// let myCreateDate = new Date(2023, 6, 23, 4, 30, 32);
let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "short"
});

console.log(newDate);