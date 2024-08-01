// *** Project With Async Project 2 ***

// setInterval(() => {
//     console.log('Hamza', Date.now());
// }, 1000);




const sayDate = function (str) {
    console.log(str, Date.now());
}

const stoppri = document.querySelector('#start').addEventListener('click', ()=>{
    const clearId =  setInterval(sayDate, 1000, 'Hamza_Sarwar');
    // console.log('Hamza');
    document.querySelector('#stop').addEventListener('click', () =>{
        clearInterval(clearId);
        // console.log("Stoped");
    })
})






// clearInterval(clearId);

