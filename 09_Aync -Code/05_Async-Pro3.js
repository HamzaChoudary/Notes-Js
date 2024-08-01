//  *** Project 3 With Async ***

// generate a random color for change background color

const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intId;
const StartChangingColor = function() {
    // here we apply the clean core code 
    if (!intId) {
        intId =  setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomcolor();
    }
};

const StopChangingColor = function () {
    clearInterval(intId);
    // here we apply the clean core code 
    intId = null;
}

    document.querySelector('#start').addEventListener('click', StartChangingColor);

    document.querySelector('#stop').addEventListener('click', StopChangingColor);





// console.log(Math.floor(Math.random() * 16));
// console.log(randomcolor());

