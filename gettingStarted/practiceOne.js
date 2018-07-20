/*
// Reversing a number
    
function reverse_number(number){
    number = number + "";
    return number.split("").reverse().join("");
}
console.log(reverse_number(123456));   


//Spliting String in Array

function splitString(name){
    return name.split("");
}
    console.log(splitString("Basant"));


//Reversing Array

function reverseArray(nameArray){
    return nameArray.split("").reverse();
}
    console.log(reverseArray("Basant"));


//Joining Array Characters

function joinArray(givenArray){
    return givenArray.join("");
}
    console.log(joinArray(["B", "a", "s", "a", "n", "t"]))


// Reverse String

function reverseString(givenString){
    return givenString.split("").reverse().join("");
}
    console.log(reverseString("Basant"));

// Palindrome Check

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

*/ 

//Arrays

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


