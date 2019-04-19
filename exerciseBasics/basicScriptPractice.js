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
