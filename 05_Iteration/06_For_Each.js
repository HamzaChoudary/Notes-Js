//  ******* For Each Loop p2 ********8


// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     // return item;
// })

// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// this is filter method 
// const newNum = myNums.filter( (num) => {
//      return num > 4 });

const newNums = [];

// this is if method 
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non_Fiction', publish: 1993, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre:'Non_Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Sicence', publish: 1989, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 2010, edition: 2009},
    {title: 'Book Seven', genre: 'Fiction', publish: 2009, edition: 2010},
    {title: 'Book Eight', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Nine', genre: 'jeo_graphy', publish: 1994, edition: 1996},
    {title: 'Book Ten', genre: 'Biology', publish: 2003, edition: 2000}
];

const userBooks = books.filter( (bk) => bk.genre === 'History');

// console.log(userBooks);\

const userBook = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'Biology');

// console.log(userBook);









