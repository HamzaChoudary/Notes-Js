// ********  Setter & Setter ********


class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    } 

// here underscore almost private property

      // easy way to control method  we it on variables
    //   if we want the get value from out of class then we use getter 
    get password(){
        return `${this._password} Hamza`
        // return this._password.toUpperCase()
    }  
    
     //  if define getter then we able to define setter
    // if we want set the new value then we use setter 
    set password(value){
        this._password = value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

// sometime we need to finegrain control 
// when ever someone ask for password then we return them we're not give you password or give them encrypted

// sometime we make class then we want there propesty access are limited or not giving  or custumize code in them 
// like those scenrio we use Getter | Setter 


const Ali = new User('Ali@gmail.com', 'dcb')
// console.log(Ali.password);
// console.log(Ali.email);