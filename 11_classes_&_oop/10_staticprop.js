

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `432`
    }
}

const Ali = new User('Hamza')
// console.log(Ali.createId()); 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const hamza = new Teacher('Ali', 'Ali@gmail.com')
console.log(hamza.logMe()); 
// console.log(hamza.createId()); 