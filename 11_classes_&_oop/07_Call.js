function SetUsername(Username){
    // complex DB calls 
    this.Username = Username;
    console.log('Called');
}

function createUser(Username, email, password) {
    // To hold the only reference use call method 
    SetUsername.call(this, Username);

    // this.Username = Username
    this.email = email   
    this.password = password
}


const Ali = new createUser('Ali', 'Ali@gmai.com', '123')

console.log(Ali);