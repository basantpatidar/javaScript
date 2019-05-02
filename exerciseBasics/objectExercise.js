let address = {
    street: 222,
    city: "New York",
    zipcode: 123213
};

function showAddress(address){
    for (let i in address){
        console.log(i+" "+address[i]);
    }
}
showAddress(address);

// Factory Function
function myAddress(){
    return{
        street: 222,
    city: "New York",
    zipcode: 123213
    };
}
let factoryFunction = myAddress();
console.log(factoryFunction);

function ShowMyAddress(street,city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
let myNewAddress1 = new ShowMyAddress(123,"a",123400);
let myNewAddress2 = new ShowMyAddress(123,"a",123410);


function objectChecker(myNewAddress1, myNewAddress2){
    let c = 0;
    let l = Object.keys(myNewAddress1).length;
    for (let key in myNewAddress1){
        if(myNewAddress1[key] === myNewAddress2[key]){
            c++;
        if(c === l){
            console.log("Same");
            return true;
             }
             else{
                 console.log("Both are different");
                 return false
                 
             }
        }
    }
}

objectChecker(myNewAddress1,myNewAddress2);

function blogPost(blogTitle,body,author,views, commentAuthor, commentBlog,isLive){
    const blog = {
        title : blogTitle,
        body: body,
        author: author,
        views: views,
        comments: {
            commentAuthor: commentAuthor,
            commentBlog: commentBlog
        },
        isLive: isLive
    };
    return blog;

}

console.log(blogPost("myBlog", "This is body", "Jone", "15", "Comment author name", "This is comment blog",true));


function blogPostArray(blogTitle,body,author,views, commentAuthor, commentBody,isLive){
    const blog = {
        title : blogTitle,
        body: body,
        author: author,
        views: views,
        comments: [
            {commentAuthor: commentAuthor,
            commentBody: commentBody},
            {
                commentAuthor: 'b',
                commentBody: 'c'
            }
        ],
        isLive: isLive
    };
    return blog;

}

console.log(blogPostArray("myBlog", "This is body", "Jone", "15", "Comment author name", "This is comment blog",true));

// creating a blog post fucntion
function Post (title, body,author ) {
    this.title = title;
    this.body = body;
    this.author = author;
    views = 0;
    this.comments = [];
    this.isLive = false;
    // let today = new Date();
    this.day = new Date().getDay();
}

let post1 = new Post("a","b","c");
console.log(post1);

//use of delete
function useOfDelete(){
    let student = {
        name: "John",
        sclass: "x",
        rollno: "v"
    }
    delete student.rollno;
    return student;
}

let result = useOfDelete();
console.log(result);

// Length of object
 function findLength(){
    let student = {
        name: "John",
        sclass: "x",
        rollno: "v"
    }
    lengthOfStudent = Object.keys(student).length;
    console.log(lengthOfStudent);
 }
findLength();

//Array

function arrayMethods(){

//use of arrow function
const numbers = [1,2,3];
numbers.forEach(number => console.log(number));

//same code without arrow function
numbers.forEach(function (number) {
    console.log(number);
    });

// for each method of array with 2 parameteres
numbers.forEach((number, index) => console.log(index+" <= Index || Element => "+number));

// use of Joined method
const joined = numbers.join('A');  //1A2A3  // returns a string with all the elements of array joined
console.log(joined);

const message = 'This is John';
const parts = message.split(" "); // returns a array with all the letters in a string splited in array
console.log(parts);

const combined = parts.join("-");
console.log(combined);  //return a string will all the elements in array combined

}
arrayMethods();

function arraySorting(){
    console.log("-----------------Array sorting----------------")
    const numbers = [2,3,1];
    // Use of sort method
    numbers.sort();
    console.log(numbers);
    
    //use of reverse sorting
    numbers.reverse();
    console.log(numbers);

    //Sorting on object 
    const courses = [{id:1, name:'Node.js'},
    {id:2, name: 'javascript'},
    {id:3, name:'Python'},
    {id:4, name: 'zavascript'},
    {id:5, name: 'Aython'}]; // sorting works with any number of keys in an object

    courses.sort(function(a,b){
        const nameA = a.name.toLowerCase(); // removing case sensitivity.
        const nameB = b.name.toLowerCase();

        if( nameA < nameB) return -1;
        if( nameA < nameB) return 1;
        return 0;
    });
    console.log(courses);
    
}
arraySorting();

