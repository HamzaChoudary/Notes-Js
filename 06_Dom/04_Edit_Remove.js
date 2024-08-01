// ***************** Edit and Remove **********

// This is tw0 basic method to add element 
// 1 way:
function addlanguage(langName) {
   const li = document.createElement('li')
   li.innerHTML = `${langName}`;
   document.querySelector('.language').appendChild(li)
}
addlanguage('python');
addlanguage('Ruby');

// Optimize method to add element 

function addoptilanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(
        document.createTextNode(langName));
        document.querySelector('.language').appendChild(li);
}

addoptilanguage('Typescript');

//  Edit mehtod

// 1 way:
// const secondlang = document.querySelector("li:nth-child(2)")
// secondlang.innerHTML = "Mojo"

// 2 way:
// const secondlang = document.querySelector("li:nth-child(2)")
// const newli = document.createElement('li')
// newli.textContent = 'Mojo';
// secondlang.replaceWith(newli)

// 3 way:
// const firstlang = document.querySelector("li:first-child");
// firstlang.outerHTML = '<li>TypeScript</li>'


//  Remove Method

// const lastlang = document.querySelector('li:last-child');
// lastlang.remove()





// The DOM Is End if You wanna more explore then go to Element tracing and browser tools  