// ************** Excution of Code **********

//  This lecture important and interesting about interview cracking
// ********  How Code Excute in js ********

//  JavaScript Excution Contex 
// javascript run our code in two fase 


// 1: Global Excution Context
// 2: Function Excution Context

// { } 3: memory creation phase (in memory creation phase variable ya jo b hm ny declar kia ha onky lia jaga locate hoti ha memory alocation phase hota ha memory creation m)
// { } 4: Excution phase (jo Mathmatical function likhy hn vo sb excution phase ma hota ha)

// Get code 
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 3);

// console.log(result1);
// console.log(result2);

//  1: we get global excution jitna bhara ya jitna chotha code ho osy global excution sy hona hi prta ha then this sy hota ha

//  3:memory phase sary variable ko akhta kia jata ha or on sb ka rakha jata ha
// val1 ➡ phly undefined ho ga 
// val2 ➡ undefined ho ga
// addNum ➡ defination jati ha
//  result1 ➡ undefined 
// result2 ➡ undefined 

// 4: Excution phase
// val1 ➡ 10 
// val2 ➡ 5 

// addNum ➡ new variable, environment, + excution thread
// addNum ➡ Memory phase val1 ➡ undefined, val2 ➡ undefined, total ➡ undefined, 
// addNum ➡ num1 ➡ 10, num2 ➡ 5, total ➡ 15, 

//  we return the total value to our global excution.

// addNum  ➡ after they are there work they gone delete.

//  get new box  
// in box 
// (nve + thread ➡ memory phaxe ➡ execution phase )

// **************Now we learn about Call Stack **********

// global excution box 
// one() golbal excution box ma aya to bahie chala gia 
// it's call simple excution 

// in global excution box 
// one(), two(), three(). come to global excution box of bahie nahi gayy.
//  to yahn py LiFo (last in first out) method use ho ga 
// sab sy last ma three() first bhir vo hi jay ga and so on.

// in Sources 

// make a function 
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
    // one();
}

one();
two();
// three();


