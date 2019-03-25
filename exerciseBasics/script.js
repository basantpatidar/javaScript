// Q1 print Date and time
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


// Q2 print current page
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

// Q3 Area of Triangle
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

// Q4 find the leap year
function leapYear(){
    a = new Date();
    y = a.getFullYear();
    if (y % 4 == 0){
        let result = "Its a leap year"
        document.getElementById("ly").innerHTML = result;
        console.log(result);
    }else{
        let result = "No its not a leap year";
        document.getElementById("ly").innerHTML = result;
        console.log(result)
    }
    
}


// Q5 finding 1st january on Sundays between 2014 and 2050

function sundays(){
    let j = 1;
    for (i = 2014; i < 2051; i ++){
        var d = new Date(i, 0, 1);
        if(d.getDay() === 0){
            console.log("Year "+i+" has sunday on 1 Jan");
            j += 1
        }
        
}
console.log("There are "+j+" Number of sundays on Jan 1");
}
sundays();

// Q6 Guess the number
function numGuess(){
    let ran = Math.floor(Math.random()*3);
    let guess = prompt(" Please enter your guessed number");
    
    function again(){
        if(guess == ran){
            console.log(guess+" is correct guess");
        } 
        else{
          guess = prompt("Please enter the Number again");
          again();
        }
    }
    again();
}
// numGuess();

// Q7 Days to Christmas
function findDate(){
    var today = new Date();
    var thenDate = new Date(today.getFullYear(),11,25);
    if(today.getDate > 25 && today.getMonth == 11){
        thenDate.setFullYear(today.getFullYear()+1);
    }
    thenDate.setFullYear(today.getFullYear()+1);
    
    let one_day = 1000*60*60*24;
    let diff = Math.ceil((thenDate.getTime()-today.getTime())/one_day);
    console.log(diff+" days are left for the next chritmas");
}
findDate();

//Q8 understanding object with different ways
 function understandingObject(){
     
    console.log(Date.prototype);

    const basant = new Object();
    basant.height = 160;
    basant.weight = 250;
    basant['city'] = 'indore';
    console.log(basant);
    console.log(Object.prototype);

    const avtar = {
        height: 120,
        weight: 650,
        city: 'patna'
    }


    console.log(avtar);

    console.log(avtar.city);
    console.log(basant['city']);

    function Person(height, weight, city ){
        this.height = height;
        this.weight = weight;
        this.city = city;
    }

    const udit = new Person(120,52,'ghaziabad');
    Person.prototype.changeHeight = function(newHeight) {
        return this.height = newHeight;
    }

    console.log(udit);
    console.log(Person.prototype)

    udit.changeHeight(900);
    udit.height = 200;5

    console.log(udit.height);
}
understandingObject();

//Q9 Multiplication and divide  ..way 1.. 
function calcMultipy(){
    var text1 = document.getElementById("value1").value;
    var text2 = document.getElementById("value2").value;
    var result = text1 * text2;
    document.getElementById("result").innerHTML = result;
}
function calcdivide(){
var text1 = document.getElementById("value1").value;
var text2 = document.getElementById("value2").value;
var result = text1 / text2;
document.getElementById("result").innerHTML = result;
}

//Celcius to Fahranheit
function tempConverter(d){
 console.log("\xB0C to \xB0F. is : "+((d*9/5)+32));
 console.log("\xB0F to \xB0C. is : "+(d - 32)*(5/9));
}
tempConverter(20);

//get website URL
function getURL(){
    // This are the two ways to find website URL
    console.log(document.URL);
    return window.location.href;
}
console.log(getURL());

// creaating a variable using user defined name
function userDefineVar(){
    var var_name = 'abcd';
    var v = 100;
    this[var_name] = v;
    console.log(this[var_name]);
    console.log(var_name);
    this.var_name = v;
    console.log(var_name);
}
userDefineVar();


