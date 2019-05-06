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
        if( nameA > nameB) return 1;
        return 0;
    });
    console.log(courses);
    
}
arraySorting();

// every() and some() are the methods used for serching in Js
// where every() needs evert index to be true while in 
//some() even if single index is true it returns true

//

function arrayExercise(){

let numbers = arrayFromRange(1,5);
console.log(numbers);


function arrayFromRange(min,max){
    let num = [];
    for (let i = min; i<= max; i++)
        num.push(i);   
    return num;
}

const find = includes(numbers,6);
console.log(find);


function includes(inputArray, searchElement){
    for (let value of inputArray)
        if (value === searchElement)
            return true;
        return false;

    }


const newArray = except(numbers,[1,2]);
console.log(newArray);
 
function except(array, excluded){
    for(let i = 0; i < array.length; i++)
        for(let values of excluded)
            if (array[i] == values)
                array.splice(i,1);
    return array;
}

const newOutput = exceptIncludes(numbers,[1,2]);
console.log(newOutput);

function exceptIncludes(array, excluded){
    const output = [];
    for (let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output;
    }

numbers = [1, 2, 3, 4, 5];
let output = move(numbers,1,3);
console.log(output);

function move(array, number, offset){
    let index = array.indexOf(number);
    array.splice(index,1);
    array.splice(index + offset,0,number);
    return array;
    }


numbers.push(5);
output = countOccurrences(numbers,5);
console.log(output);


function countOccurrences(array,searchElement){
    let output = 0;
    for (let value of array)
        if(value == searchElement)
            output += 1;
    return output;
}

// counting the number of occurence using reduce

output = countUsingReduce(numbers,5);
console.log(output);


function countUsingReduce(array,searchElement){
    return array.reduce((accomulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accomulator + occurence;
        }, 0);
    }

let max = getMax(numbers);
console.log(max);

function getMax(array){
    if (array.length === 0) return undefined;
    return array.reduce((a,b) => (a > b) ? a : b);
}

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

console.log(showMovieRating(movies));

function showMovieRating(movie){
   const title =  movie.filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
    return title;
    }

}
arrayExercise();

function functionExercise(){
    console.log("----------------Functions-------------------");
    

function sum(...args){
    let total = 0;
    console.log(args)
    if(Array.isArray(args[0])){
        for(let values of args[0]){
            total += values;     
        }
        return total;
    }
        for(let values of args){
            total += values;
        }
        return total;
}
const getSum = sum([1,2,3]);
console.log(getSum);
    
    let areaOfCircle = {
        radius: 2,
        get area() {
            return Math.PI*this.radius*this.radius;
        }
    };
    console.log(areaOfCircle.area);
    
    const numbers = [1,2,3,4];
    try{
        const count = countOccurrences(true,1);
        console.log(count);
    }catch(e){
        console.log(e.message);
        
    }

function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error("Not a array type");
    return array.reduce((accomulator,current)=> {
        const occurence = (current === searchElement)? 1 : 0;
        return accomulator+ occurence;
    }, 0);
}

}
functionExercise();


function Circle(radius){
    console.log("--------------Circle Function-------------");
    
    this.radius = radius;

    let defaultLocation = {x:0, y:1};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    this.draw = function(){
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    });

}

const circle = new Circle(10);
circle.defaultLocation = {x:4,y:5}
console.log(circle.defaultLocation)
circle.draw();

function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if(running)
            throw new Error('Stopwatch is already running');
        running = true;

        startTime = new Date();
    };
    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is already stop');
        
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() -startTime.getTime())/1000 ;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

   Object.defineProperty(this, 'duration', {
       get: function(){return duration;}
   });
}

const sw = new Stopwatch();

