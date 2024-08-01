//   ********** For Each Loop ********

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// the callback function have't there name 

// 1:
//  with arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })

// 2:
// with proper function 
// coding.forEach( function (item){
//     console.log(item);
// })

// 3:
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// }) 

const myCoding = [
    {
        languageName: "JavaScript",
        languagefile: "js"
    },
    {
        languageName: "java",
        languagefile: "java"
    },
    {
        languageName: "Ruby",
        languagefile: "Rb"
    }
]

myCoding.forEach( (item) => {
    // console. log(item.languageName);
})













