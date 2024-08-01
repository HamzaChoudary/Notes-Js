//  ********** Events of JavaScript ********

// This approch is't scale able 

//  attachEvent  a Method it's use early times when internal explorer faces problems, or diffcult to run our file on internal explorer. Now a days it's use is 0%.
//  jQuery is also a liberiar in early days jQuery - on (eventlister).

//  we need to study here: 
//  type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget.

// Mostly asked about in interview (clientX, clientY, screenX, screenY, keyCode).

//  There is two context of Event Propegation
// 1: Event Bubbleing, 2: Event capturing.
// bubbling run bottom to up. 
// capturing run up to bottom

// document.getElementById('owl').onclick = function (){
//     alert('owl clicked');
// }


// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
//     e.stopPropagation
// }, false);

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked ");
//     e.stopPropagation
// }, false);

//  For PreventDefault() work

// document.getElementById('google').addEventListener('click', function(e){
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
// }, false);


// When we click on image then image removed

// 1: Method to remove image 

document.querySelector('#Images').addEventListener('click', function (e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
    let removeIt = e.target.parentNode
    removeIt.remove();
    }
}, false)

// 2: Method to remove image 
// document.querySelector('#Images').addEventListener('click', function (e){
//         console.log(e.target.parentNode);
//         let removeIt = e.target.parentNode
//         removeIt.parentNode.removeChild(removeIt);
//     }, false)








