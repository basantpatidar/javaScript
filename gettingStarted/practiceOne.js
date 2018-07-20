
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


