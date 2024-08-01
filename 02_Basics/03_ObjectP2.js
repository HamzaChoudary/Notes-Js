// In this video we talk about singleton 

// const thinderUser = new Object(); //THis is the singleton Object
const thinderUser = {} // this is non singleton object

thinderUser.id = "124abc";
thinderUser.name = "summy";
thinderUser.isLoggedIn = false;

// console.log(thinderUser);

const regularUser = {
    email: "hamzasarwar@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hamza",
            lastname: "Sarwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "d"};
const obj2 = {3: "e", 4: "g"};
const obj4 = {5: "k", 6: "o"};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign( {}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hamz@gmail.com"
    },
    {
        id: 1,
        email: "hamz@gmail.com"
    },
    {
        id: 1,
        email: "hamz@gmail.com"
    }
];

users[1].email;
// console.log(thinderUser);

// console.log(Object.keys(thinderUser));
// console.log(Object.values(thinderUser));
// console.log(Object.entries(thinderUser));

// console.log(thinderUser.hasOwnProperty('isLoggedIn'));


// Object de-structure and JSON Api intro 


const course = {
    coursename: "Js in urdu",
    price: "1999",
    courseInstructor: "Hamza"
}

// course.courseInstructor

const {courseInstructor: instructor} = course 

// console.log(course);
console.log(instructor);













//  This the JSON structor start
//  {
//     "name": "Hamza",
//     "cousreName": "js in urdu",
//     "price": "free"
//  }
//   End

// it about react start
// const navbar = ({company}) => {

// }

// navbar(company = "Hamza")
//    ****** end ******
