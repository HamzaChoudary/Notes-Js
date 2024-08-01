// ********** For_Each Loop ***********

//     ********* Reduse *********

const myNums = [1, 2, 3]


// const myTotal = myNums.reduce( (acc, currval) => {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 2);


const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)


// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 300
    },
    {
        itemName: "java course",
        price: 590
    },
    {
        itemName: "moblie dev course",
        price: 3000
    }
]
 
const Cart = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(Cart);


// Make To Rebeat 

