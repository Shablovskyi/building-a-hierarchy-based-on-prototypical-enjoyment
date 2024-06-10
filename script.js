function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getInfo = function() {
  return `${this.year} ${this.make} ${this.model}`;
}

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getCarInfo = function() {
  return `${this.getInfo()}, ${this.numDoors}-door`;
}

function Bicycle(make, model, year, gearNumber) {
  Vehicle.call(this, make, model, year);
  this.gearNumber = gearNumber;
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.getBicycleInfo = function() {
  return `${this.getInfo()}, ${this.gearNumber} gears`;
}


// Марки авто
let car1 = new Car('Honda', 'Accord', 2018, 4);
let car2 = new Car('Ford', 'Mustang', 2021, 2);
let car3 = new Car('Chevrolet', 'Malibu', 2019, 4);
let car4 = new Car('Tesla', 'Model S', 2022, 4);
let car5 = new Car('BMW', '3 Series', 2017, 4);
let car6 = new Car('Audi', 'A4', 2020, 4);

console.log("Авто:")

console.log(car1.getInfo()); 
console.log(car1.getCarInfo()); 

console.log(car2.getInfo()); 
console.log(car2.getCarInfo()); 

console.log(car3.getInfo());
console.log(car3.getCarInfo()); 

console.log(car4.getInfo()); 
console.log(car4.getCarInfo()); 

console.log(car5.getInfo()); 
console.log(car5.getCarInfo()); 

console.log(car6.getInfo()); 
console.log(car6.getCarInfo()); 

// Велосипеди
let bicycle1 = new Bicycle('Trek', 'Marlin 7', 2019, 21);
let bicycle2 = new Bicycle('Specialized', 'Rockhopper', 2020, 18);
let bicycle3 = new Bicycle('Cannondale', 'Trail 8', 2021, 16);
let bicycle4 = new Bicycle('Giant', 'Talon 3', 2022, 24);
let bicycle5 = new Bicycle('Scott', 'Aspect 950', 2018, 27);
let bicycle6 = new Bicycle('Santa Cruz', 'Chameleon', 2021, 12);

console.log("Велосипеди:")
console.log(bicycle1.getInfo()); 
console.log(bicycle1.getBicycleInfo()); 

console.log(bicycle2.getInfo()); 
console.log(bicycle2.getBicycleInfo());

console.log(bicycle3.getInfo()); 
console.log(bicycle3.getBicycleInfo()); 

console.log(bicycle4.getInfo()); 
console.log(bicycle4.getBicycleInfo()); 

console.log(bicycle5.getInfo()); 
console.log(bicycle5.getBicycleInfo()); 

console.log(bicycle6.getInfo()); 
console.log(bicycle6.getBicycleInfo()); 