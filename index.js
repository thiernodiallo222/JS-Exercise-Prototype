/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
};
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
};
Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
  // return this.stomack;
};

Person.prototype.poop = function () {
  
  return this.stomach = [];
};

Person.prototype.toString = function () {
  // return(`${this.name}, ${this.age}`);
  return (this.name + ", " + this.age);
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
};
Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
};

Car.prototype.drive = function (distance) {
  if (this.tank >= 1/29* distance) {
    this.odometer = distance;
    // 1/29 is the gaz consumption ratio in miles per galon. 
    this.tank = (this.tank - (1/29) * distance);
  } else {
    return `I ran out of fuel at ${this.odometer} miles !`;
  }
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype);

function Baby(name, age, favoriteToy) {
  Person.call(this, favoriteToy);
  this.favoriteToy = favoriteToy;
  this.name = name;
  this.age = age;
};

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
  // return "Playing with " + this.favoriteToy;
};

// Baby calling method from Person so it can use it
// Baby.prototype = Object.create(Person.prototype);
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. This can be used as a global scope. When it is invoked outside of any scope, it is a global scop, called global binding, and in that case, it refers to the window object
  2. When it is invocked within the scope of an object, it refers to that object, and it is then called implicit binding.
  3. When calling the constructor, to create a new object out of it, the this new key word is also invoked and that invoks the this keyword.
  4. Lastly, the this key word is invoked in a subclass in the .call methode designed to bin it to the subclass to allow the subclass to inherit all the properties of the superclass and of itself.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
 