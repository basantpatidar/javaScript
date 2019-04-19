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

