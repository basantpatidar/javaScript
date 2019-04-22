function greater(a,b){
return (a>b) ? a : b;
}
let max = greater(6,5)
console.log(max);

function isLandscape(width, height){
  // if (width > height) return true;
  //  return false;

  return (width > height)
}
check = isLandscape(150,150)
console.log(check);


function fizzbuzz(input){
  if (typeof input !== "number"){
    return NaN;
  }else if( (input % 3) == 0 && (input % 5) == 0){
    return "Fizzbuzz";
  }else if( (input % 3) == 0 ){
    return "Fizz";
  }else if( (input % 5) == 0 ){
    return "buzz";
  }else{
    return input;
  }

}

console.log(fizzbuzz(3));  //Fizz
console.log(fizzbuzz(5));  // Buzz
console.log(fizzbuzz(15)); // Fizzbuzz
console.log(fizzbuzz(2)); // input
console.log(fizzbuzz("a")); // Not a number

//Speed Limit
function checkSpeed(speed){
  const speedLimit = 70;
  const pointperSpeed = 5;
  if(speed > speedLimit + pointperSpeed){
    points = Math.floor((speed -speedLimit) / pointperSpeed);
    if(points > 12){
      return "Suspended"
    }
    return points;
  }
  return "ok";
}
console.log(checkSpeed(61));
console.log(checkSpeed(71));
console.log(checkSpeed(96));
console.log(checkSpeed(161));

function showNumbers(input){
  for (i = 0; i <= input; i++){
    if(i%2 == 0) console.log(i,"Even")
    else console.log(i,"Odd");
    
   let message =  (i%2 ===0)? "Even" : "Odd";
   console.log(i+" "+ message);
   
  }
}
showNumbers(5);

// One of the true value make all the values true 
function countTruthy(array){
  let truthyCounter = 0;
  let falsyCounter = 0;
  for (let value of array){
    console.log(value);
    
    if (value) {truthyCounter ++;}
    else {falsyCounter ++}
  }
  console.log(truthyCounter + " " + falsyCounter);
}
array = [0, 1,2,3, NaN, undefined, 0, ''];
countTruthy(array);

// accessing  object
function showProperties(movie){
  for (let key in movie){
    // console.log(movie[key]);
    
    if (typeof movie[key] == "string"){
      console.log(key+" "+movie[key]);
    }
  }
}
const movie = {
  title: 'a',
  releaseYear: 2019,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);

function sum(limit){
  const first = 3;
  const second = 5;
  let add = 0;
  
  for (let i = 0; i <= limit; i++)
    if (i % 3 == 0 || i % 5 == 0)
      add += i;
       
  console.log(add);
}
sum(10);

function gradeCalculator(marks){
  let sum = 0;
  for (let value of marks){
    sum += value;
  }
  let average = sum/marks.length;
  if(average > 89) console.log("A");
  else if (average > 79) console.log("B");
  else if (average > 69) console.log("C");
  else if (average > 59) console.log("D");
  else if (average < 60) console.log("F");
  

}
const marks = [80, 99, 95];
gradeCalculator(marks);

function forwordStars(count){
    for (let i = 1; i <= count; i++){
      let stars = '';
      for(let j = 0; j < i; j++){
          stars = stars+"*";
      }
      console.log(stars);
      
      
    }
}
forwordStars(5);

