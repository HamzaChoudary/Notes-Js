// ******* Classes ******

//  ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password} abc`
//     }
//     changeUsername(){
//     return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('ali', 'Ali@gmail.com', '123')


// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abd`
}
User.prototype.chngeUsername = function (){
    return `${this.username.toUpperCase()}`
    }

const tea = new User('ali', 'Ali@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.chngeUsername());
