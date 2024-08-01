//  *** Fetch ***

fetch('https://jsonplaceholder.typicode.com/users')
.then( (respone)=> {
    return respone.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))


/*
            DaiGram of Fetch
            
                response = fetch('something')
                ↙                           ↘
            Data:___                       web browser/node⤵
     Onfulfiled[fn].➡returntodata⤴                 Network request 
    On Rejection[fn].➡returntodata⤴                  ↙     ↘
                                                 [Yes]      [No]

        Data:___  ➡ return to data ➡ Global Memory (responce: )
        if network request rejected then they back to Data

    */
                                                    