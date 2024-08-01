

// phly classes to hoti ni thi function hi hoty thy 

function User(email, password){
    this._email = email;
    this._password = password

    // phly ky time py getter and setter kysy define krty thy 

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User('Chai@chi.com', 'chai')

console.log(chai.email);
console.log(chai.password);

// Upper we use function base syntax 


