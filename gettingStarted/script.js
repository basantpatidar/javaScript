/*
//Variables

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);   


//  Variables 2
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);  

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

//console.log(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');

age = 'thrity six';
job = 'driver';

//console.log(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');

/*var lastName = prompt('what is the last name?');
console.log(lastName);  

alert(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');





// Lecture :  Operators
var now = 2018

var birthYear = now - 26;
//1996

birthYear = now-26*2;

console.log(birthYear);


var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3+5)*4-6;
//ageJohn = ageMark = 26;
//ageJohn = 26;

ageJohn ++;
ageMark*= 2;
ageMark = ageMark *2;

console.log(ageJohn);
console.log(ageMark);



//If else Statments


/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes'){
    console.log('yes')
}else{
    console.log('No');
}

isMarried = true;

if(isMarried){
    console.log('Yes');
}
else{
    console.log(name + ' is Not Married');
}

if(isMarried){
    console.log('Yes');
}



//  Boolean Logic

var age = 25;

if (age < 20){
    console.log(name +' is Teen');
}else if(age > 20 && age < 30){
    console.log(name +' is young');
}else{
    console.log(name +' is Man');
}

var job = 'teacher';
job = prompt('What does john do?');
switch (job){
    case 'teacher':
    console.log("John Teaches kids");
    break;
    case 'driver':
    console.log("He is a driver");
    break;
    case 'cop':
    console.log('He is a cop');
    break;
    default:
    console.log('Something else');
}
*/

// Challenge 1 Q: John and mark invented a game where player with the highest value 
// of height (in cm) plus five times of his age wins.


var johnAge = 20;
var markAge = 22;
var player3Age = 20;

var johnHeight = 200;
var markHeight = 180;
var player3Height = 200;

var johnPoints = johnAge * 5;
var markPoints = markAge * 5;
var player3Points = player3Age * 5;

johnPoints = johnPoints + johnHeight;
markPoints = markPoints + markHeight;
player3Points += player3Height; 

//var johnPoints = johnAge * 5 + johnHeight;
//var markPoints = markAge * 5 + markHeight;
//var player3Points = player3Age * 5 + player3Height;

if(johnPoints > markPoints && johnPoints > player3Points){
    console.log("john wins with " + johnPoints);
}else if (markPoints > johnPoints && markPoints > player3Points){
    console.log('Mark wins with ' + markPoints);
} else if(player3Points > johnPoints && player3Points > markPoints){
    console.log('Player 3 is winner with ' + player3Points);
} else{
    console.log('its a tie' + johnPoints + ' ' + markPoints + ' ' + player3Points);
}







