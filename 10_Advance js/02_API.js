//  **** API TALK *****

            // About API 

// API is talking language in between two systems. Such as.. Front_End and Back_End
// API structure is little bit diffcult to understand but not impossible it's take 15 minutes or take whole day to understand


// We see her old Method to make API that is (AJAX).

const requestURL = 'https://api.github.com/users/professorhamza';



const  xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
// if we wanna chase request then we need to use below fn 
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState === 3) {
        const data = JSON.parse(this.responseText);
        // console.log(typeof data);
        // console.log(data.avatar_url);
        // console.log(data.followers);

         // console.log(data.avatar_url);
        const createEle = document.createElement('img')
        createEle.setAttribute('id', 'data');
        createEle.setAttribute('src',  "https://avatars.githubusercontent.com/u/120127085?v=4");
        createEle.setAttribute('alt', 'Image');
        createEle.style.borderRadius = '20px';
        createEle.style.padding = ' 10px';
        const addimg = document.createTextNode('avatar_url')
        createEle.appendChild(addimg);
        document.body.appendChild(createEle);

        // console.log(data.followers);
        const addH1 = document.createElement('h1');
        addH1.setAttribute('src', 'data.follower');
        addH1.style.margin = '30px';
        const addfol = document.createTextNode(`followers: ${data.followers} `);
        addH1.appendChild(addfol);
        document.body.appendChild(addfol);
    }
}

xhr.send();




