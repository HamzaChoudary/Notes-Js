
        // **** Lexical Scopeing *****


    // function init() {
    //     let name = 'Mosilla';

    //     function displayName() {

    //         console.log(name);
    //     }

    //         displayName();
    // }
    //     init();

    // function outer() {
    //     let username = 'Hamza'
    //     function innerfn(){
    //         let secret = 'your432'
    //         console.log('inner', username);
    //     }
    //     function innerTwo(){
    //         console.log('innerTwo', username);
    //         console.log(secret);
    //     }
    //     innerfn();
    //     innerTwo();
    // }
    // outer();
    // console.log('TOO Outer', username);


            // Clouser's  

        //    when you return the whole function then there whole scope return that's is not there scope it's return there lexical scope.

    // function makeFunc() {
    //     const name = 'Moxilla';
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const myFunc = makeFunc();
    // myFunc();

    // document.getElementById('orange').onclick = function(){
    //     document.body.style.backgroundColor = `orange`
    // }
    // document.getElementById('green').onclick = function(){
    //     document.body.style.backgroundColor = `Green`
    // }
// when we have huge code to make like upper code the we use click handler.

function clickhandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickhandler('orange')
document.getElementById('green').onclick = clickhandler('green')


