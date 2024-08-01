//  ******* Create Element in DOM *********

//  ********* Node LIST **************

// How To Create Element 

const div = document.createElement('div')

console.log(div);

// Create Element make classname and id.

div.className = "main"
// div.id = "myid"
div.id = Math.round(Math.random() * 10 +1)
div.setAttribute("title", "Generated title")
div.style.backgroundColor = "green" 
div.style.padding = "10px"

// To add on display
// 1 way:
div.innerText  = "Hamza Sarwar"
// 2 way:
// const addText = document.createTextNode('Hamza Sarwar')
// div.appendChild(addText);
// for attach on body 
document.body.appendChild(div)


