

const descripter =  Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);

//  There's many way to create the object we use factory fn also

const Chai = {
    name:'ginger chai',
    price: 150,
    isAvailable: true,

    orderChai: function(){
        console.log('Chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(Chai, 'name'));

// we able to define our properties 

Object.defineProperty(Chai, 'name', {
    // wrmiteable: false,
    enumerable: true,
    // configurable: false
});

console.log(Object.getOwnPropertyDescriptor(Chai, 'name'));

for (let [key, value] of Object.entries(Chai)) {
    if(typeof value !== 'function'){
        
    console.log(`${key} : ${value} `);
    }
}
