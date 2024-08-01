// ************* Array part 2*********
const marvel_heros = ["thor","Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "Dalman"];

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// if we want to marge the two variable then we use concat().
const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// This method called concate spread method. 
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 6]]];

const real_another_array = another_Arr.flat(Infinity);

// console.log(real_another_array);

// console.log(Array.isArray("Hamza")); need more study about is
// console.log(Array.from("Hamza")); need more study about from 
// console.log(Array.from({name: "Hamza"}));  // interesting for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); need to more stude about of