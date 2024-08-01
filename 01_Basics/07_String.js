// ***************** Strings **************
// A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging


const name = "Hamza";
const repoCount = 40;

// This is old way to concatinate the values for output
// console.log(name + repoCount + "values");

// The new way to concatinate the values that we use now-a-days 
// console.log(`${name} ${repoCount} Hello Sir`);

const gameName = new String('HamzaSarwar');
// console.log(gameName);

// to get unique value 
// console.log(gameName[1]);

// to get proto 
// console.log(gameName.__proto__);

// to get length
// console.log(gameName.length);

// to get toUpperCase
// console.log(gameName.toUpperCase);

// to get index of which position
// console.log(gameName.charAt(8));

// to get position of character 
// console.log(gameName.indexOf('w'));

const gameNameTwo = new String('Hamza_Sarwar');

// to get few lenght of our value 
const newString = gameNameTwo.substring(0, 3);
// console.log(newString);


// to get few lenght of our value  with slice we get neg value also.
const anotherString = gameNameTwo.slice(-4, 4);
// console.log(anotherString);

// if we are not wanna get space in our string then we use trim method (just for last and first space).
const newStringOne = "    Hamza_Sarwar   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); 

// if we wanna replace any value then we use replace method

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list";

console.log(url.replace('watch', 'Hamza'));

// if we wanna ask any question then we use (include) method
console.log(url.includes('Mohan daz'));


// use spilit method 
const hlosir = ' Hamza@Sarwar'
console.log(hlosir.split('@'));
