

const User = {
    _email: 'ali@ali.com',
    _password: 'bcd',

    get email(){
        return this._email.toUpperCase()
    },

    set (value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);