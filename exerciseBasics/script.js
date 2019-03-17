// print Date and time
function DateAndTime(){
let today = new Date();
let a = today.getDay();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log("Today is : "+ week[a]);
console.log("Today is : "+ week[today.getDay()]);

let hr = today.getHours();
if (hr < 12){
    var m = "AM";
}else{
    var m = "PM";
}
let min = today.getMinutes();
let sec = today.getSeconds();
console.log(hr+" "+m+" "+min+" "+sec);
}
DateAndTime();


// print current page
function printThis(){
    window.print();
}

//Current Date in specific formates
function dateNow(){
    let today = new Date();
    let day  = today.getDate();
    let month  = (today.getMonth())+1;
    let year = today.getFullYear();
    console.log(month+"-"+day+"-"+year)
}
dateNow();

// Area of Triangle
function aot(l,b,h){
   let s = (l+b+h)/2;
   let a = Math.round(Math.sqrt(s*((s-l)*(s-b)*(s-h))));
   console.log(a); 
}
aot(5,6,7)

function rString(h1){
    var element = document.getElementById(h1);
    var textNode = element.childNodes[0];
    var str = textNode.data;
    setInterval(function(){
        // let str = "Basant";
        // str = str[str.length - 1] + str.substring(0,str.length - 1);
        str = str.substring(1,str.length) + str[0] ;
        // console.log(str);
        textNode.data = str;
    }, 250);
}

