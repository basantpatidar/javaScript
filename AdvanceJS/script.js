// // Function contructor

// var john ={
//     name: 'John',
//     yearOfBirth: 1990,
//     job:'teacher'
// };

// var Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth,
//     this.job = job;
//     // this.calculateAge = function(){
//     //     console.log(2016 - this.yearOfBirth);
//     // }
// }

// Person.prototype.calculateAge = function(){
//         console.log(2016 - this.yearOfBirth);
//     }

// var john = new Person('John',1990,'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1992, 'developer');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }

//   //Own Property
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   for(let property in canary){
//     if(canary.hasOwnProperty(property)){
//       ownProps.push(property);
//     }
//   }
//   console.log(ownProps);

//   //Use of Prototype
//   function Dog(name) {
//     this.name = name;
//   }
//   Dog.prototype.numLegs = 4;

//   let beagle = new Dog("Snoopy");

//   //verify object
//   function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }

//   let myHouse = new House(1);
//   myHouse instanceof House;

//   //Iterate over all properties
//   function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype.numLegs = 4;

//   let beagle = new Dog("Snoopy");

//   let ownProps = [];
//   let prototypeProps = [];

//   for (let property in beagle){
//     if(beagle.hasOwnProperty(property)){
//     ownProps.push(property);
//   } else {
//   prototypeProps.push(property);
//   }
//   }
//   console.log(ownProps);
//   console.log(prototypeProps);

//   //check property using constructor
//   function Dog(name) {
//     this.name = name;
//   }

//   function joinDogFraternity(candidate) {
//   if(candidate.constructor === Dog){
//     return true;
//   }  else{
//     return false;
//   }
//   }

//   //multiple prototype using object
//   function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype = {
//     constructor: Dog,
//     numLegs: 4,
//     eat: function(){
//       console.log("padigree");
//     },
//     describe: function(){
//       console.log("white color");
//     }
//   };

//   //check prototype
//   function Dog(name) {
//     this.name = name;
//   }
//   let beagle = new Dog("Snoopy");
//   Dog.prototype.isPrototypeOf(beagle);

//   //Use of DRY "Do not repeat yourself"
//   function Cat(name) {
//     this.name = name;
//   }

//   Cat.prototype = {
//     constructor: Cat
//   };

//   function Bear(name) {
//     this.name = name;
//   }

//   Bear.prototype = {
//     constructor: Bear
//   };

//   function Animal() { }

//   Animal.prototype = {
//     constructor: Animal,
//     eat: function(){}

//   };

//   //Inheritance
//   function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("Hmmm");
//   }
// };

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// duck.eat();
// beagle.eat();

// //

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   A = A.sort((a, b) => b - a);
//   const indexOfOne = A.indexOf(1);
//   if (indexOfOne == -1) {
//     console.log("1");

//     return 1;
//   } else {
//     for (let i = indexOfOne; i < A.length; i++) {
//       let k = 1;
//       if (A[i] != k) {
//         console.log(k);
//         return k;
//       }
//       k++;
//     }
//   }
// }

// solution([1, 2, 3]);
// solution([-2, -3]);
// solution([0]);

function solution(ranks) {
  let totalCount = 0;
  ranks.forEach(element => {
    if (ranks.indexOf(element + 1) !== -1) {
      totalCount = totalCount + 1;
    }
  });
  return totalCount;
}

// console.log(solution([4, 4, 3, 3, 1, 0]));

function sym(args) {
  for (i = 0; i < arguments.length - 1; i++) {
    arguments[i].forEach(innerLoop => {
      arguments[i + 1].forEach(nextInnerLoop => {
        if (innerLoop !== nextInnerLoop) {
          console.log(innerLoop, " ", nextInnerLoop);
        }
      });
      console.log(i + " Outer Loop => " + innerLoop);
    });
  }
  // return newArgs;
}

sym([1, 2, 3], [5, 2, 1, 4]);
