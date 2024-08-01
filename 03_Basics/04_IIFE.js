// ** Immediately Invoked Function Expression (IIFE) **

// when ever we want run our function immadiately then we use IIFE method 
// also remove the polution from the code 

// Global Scope ky polution sy problem hoti ha kai bar to os global scope ky variable or jo b decalration ky polution ko hatny ky liy IIFE ka use krty hn.


(function code(){
    // it's name IIFE 
    console.log(`DB CONNECTED`);
})();


( (name) => {
    //  it's unnamed IIFE
    console.log(`DB CONNECTED two ${name}`);
} ) ("hamza");



