//  *** Project With Async ***

// The set timeout only usefull in those situation where we want run any program one time. 

// setTimeout( function(){
//     console.log("Hamza Sarwar");
// }, 2000)

const PriName = setTimeout( function(){
        console.log("Hamza Sarwar");
    }, 2000)

    const changeText = function (){
        document.querySelector('h2').innerHTML = 'Hamza Sarwar';
    }
        const changeme = setTimeout(changeText, 2000);

        document.querySelector('#stop').addEventListener('click', function () {
            clearTimeout(changeme);
            console.log("STOPPED");
        })
        //

// Now WE use the setInterval method 

