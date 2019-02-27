// Function contructor

var john ={
    name: 'John',
    yearOfBirth: 1990,
    job:'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth,
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    }

var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1992, 'developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  //Own Property
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  console.log(ownProps);
  
  //Use of Prototype
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");

  //verify object
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(1);
  myHouse instanceof House;
  
  //Iterate over all properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
  prototypeProps.push(property);
  }
  }
  console.log(ownProps);
  console.log(prototypeProps);

  //check property using constructor
  function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true;
  }  else{
    return false;
  }
  }