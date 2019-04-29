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
