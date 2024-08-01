


class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }   
}
// Some time we need to make this user teacher and somtime student 

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('Ali', 'Ali@gmail.com', '123');

chai.addCourse();
const masalaChie = new User('Hamza');

masalaChie.logMe()


console.log(chai instanceof User);
