/*
// Reversing a number from digit 
    
function reverse_number(number){
    number = number + "";
    return number.split("").reverse().join("");
}
console.log(reverse_number(123456));   


//Splitting Strings into Array

function splitString(name){
    return name.split("");
}
    console.log(splitString("Basant"));


//Reversing Array using split and reverse method

function reverseArray(nameArray){
    return nameArray.split("").reverse();
}
    console.log(reverseArray("basant"));


//Joining Array Characters B, a, s, a, n, t

function joinArray(givenArray){
    return givenArray.join("");
}
    console.log(joinArray(["B", "a", "s", "a", "n", "t"]))


// Reverse String ",splite,reverse,join

function reverseString(givenString){
    return givenString.split("").reverse().join("");
}
    console.log(reverseString("Basant"));

// Checking Palindrome 

function palindromeChecker(abc){
  //  var original = abc;
 var newString =  abc.split("").reverse().join("");
    console.log(abc)
    if(abc === newString){
            console.log("Yes its Palindrome")
    }else{
            console.log("Not Its not a Palindrome")
    }
}
    palindromeChecker("aba");
 

//Arrays examples, push, pop, shift

var names = ['Basant','Yash','Akshay'];
var year = new Array(1992,1996,1993);

console.log(names[2]);
name[1] = 'Udit';

var yash = ['Yash','Jain','1996','Student',false];

yash.push('blue');
yash.unshift('Mr.');
yash.pop();
yash.shift();

console.log(yash);

if (yash.indexOf('Student') === -1){
    console.log("No he is not a student.");
}else{
    console.log("he is a student.")
}


// Objects and Methods

var basant = {
    name: 'Basant',
    lastName: 'Patidar',
    yearOfBirth: 1992,
    job: 'Student',
    isMerried: false
};

console.log(basant.lastName);
console.log(basant['yearOfBirth']);

var xyz = 'job';
console.log(basant[xyz]);

basant.lastName = 'Patel';
basant['job'] = 'Developer';

console.log(basant);


var udit = new Object();
udit.name = 'Udit';
udit.lastName = 'Gupta';
udit.yearOfBirth = 1992;
udit.job = 'DA';
udit.isMerried = false;

console.log(udit);

udit.lastName = 'Singh';
console.log(udit.lastName);

var abc = 'name';
console.log(udit[abc]);
console.log(abc);


//V 1.00

var akshay = {
    name : 'Akshay',
    lastName : 'Gupta',
    yearOfBirth : 1993,
    job : 'GA',
    isMerried : false,
    family : ['abcd','edf','hij'],
    calculateAge : function(yearOfBirth){
        return 2018 - yearOfBirth;
    }
};

 console.log(akshay.calculateAge(1993));
 

// V 1.01
 var akshay = {
    name : 'Akshay',
    lastName : 'Gupta',
    yearOfBirth : 1993,
    job : 'GA',
    isMerried : false,
    family : ['abcd','edf','hij'],
    calculateAge : function() {
        return 2018 - this.yearOfBirth;
    }
};
console.log(akshay.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(akshay);


// V 1.20
var akshay = {
    name : 'Akshay',
    lastName : 'Gupta',
    yearOfBirth : 1993,
    job : 'GA',
    isMerried : false,
    family : ['abcd','edf','hij'],
    calculateAge : function(yearOfBirth){
      //  return 2018-yearOfBirth;
      this.age = 2018 - this.yearOfBirth;
    }
};

akshay.calculateAge();
    console.log(akshay);


//Loops
//For Loops
var names = ['Basant', 'Akshay', 'udit','Avtar'];
for (var i = 0; i < 4; i ++ ){
    console.log(names[i]);
}

for(i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(i = names.length - 1; i > -1; i--){
    console.log(names[i]);
}


// While Loops with Arrey
var names = ['Basant', 'Akshay', 'udit','Avtar'];
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

//Continue and Break Statments in for loop
for (var i = 0; i <= 5; i++){
    console.log(i);
    if(i === 3){
        break;
    }
}

for (var i = 0; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
    
}

*/

//Coding Challenge 2, Question is not here.

var years = [1990,1992,1994,1996,2008];
var ages = [];
for(i = 0; i < years.length; i ++){
    ages[i] = 2018 - years[i];
}

for(i = 0; i < ages.length; i ++){
    if(ages[i] < 18){
        console.log(ages[i] +' Age is Under 18')
    }else{
        console.log(ages[i] +' Age is OK')
    }
}

function printFullAge(years){
    var ages = [];
    var abc = [];
    for(i = 0; i < years.length; i ++){
        ages[i] = 2018 - years[i];
    }
    
    for(i = 0; i < ages.length; i ++){
        if(ages[i] < 18){
            abc[i] = false;
        }else{
            abc[i] = true;
        }
    }
    return console.log(abc);

}
var years = [1990,1992,1994,1996,2008];
var full_1 = printFullAge(years);

//different way using push method
var years = [1990,1992,1994,1996,2008];
function printFullAge(years){
    var ages = [];
    var fullAges = [];
    for(j = 0; j < years.length; j ++){
        ages[j] = 2018 - years[i];
    }
    
    for(j = 0; j < ages.length; j ++){
        if(ages[j] < 18){
            console.log(ages[j] +' Age is Under 18');
            fullAges.push(false);
        }else{
            console.log(ages[j] +' Age is OK');
            fullAges.push(true);
        }
    }
    return fullAges;
}
var full_2 = printFullAge(years);
