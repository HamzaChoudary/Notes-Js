//  ******** PROTOTYPE ********


// let myName = "Hamza    ";
// let myNam = "Ali     ";

// console.log(myName.trim().length);



//    Talk about Path power

let myHeros = ["Thor", 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman

        }`);
    }
}

Object.prototype.Ali = function(){
    console.log('Ali is present in all objests');
}

Array.prototype.heyAli = function () {
    console.log('Ali says hello');
}

myHeros.Ali()
myHeros.heyAli()
// heroPower.heyAli()

            // Prototypel Inheritance
//  Talk about Inheritance

const User = {
    name: 'Ali',
    Email:  'Hamza@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    inAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=  User;

            // Modern Syntax 

 Object.setPrototypeOf(TeachingSupport, Teacher)


 let anotherUsername = "JavaScriptWithAli      "

 String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
 }

 anotherUsername.trueLength()
'Ali'.trueLength()
'iceTea  '.trueLength()