// *********** for in loop w object ***********

const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut isfor ${myObject[key]}`);
}


const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// this is not iterate able 
// const map = new Map();
// map.set('Pak', "Pakistan");
// map.set('USA', "United States of America");
// map.set('Pak', "Pakistan");
// map.set('IN', "India");


// for (const key in map) {
//     console.log(key);
// }
