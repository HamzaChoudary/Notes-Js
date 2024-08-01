//  ********* For Of ***********

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]; 

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hellow_World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// ********* Maps *********

const map = new Map();
map.set('Pak', "Pakistan");
map.set('USA', "United States of America");
map.set('Pak', "Pakistan");
map.set('IN', "India");

// console.log(map);
//  if we want seperate value here shortcut
// make squre bracs and hold the key, value separatly

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2 : 'spiderman'
}

// with sting and without sting situation are same

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}

