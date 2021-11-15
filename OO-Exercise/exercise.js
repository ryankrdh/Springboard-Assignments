'use strict';

// ----------------------- PART ONE -----------------------

// Part One
// Create a class for vehicle. Each vehicle instance should have the following properties:

// make
// model
// year

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log(`The ${this.make} goes Beep!`);
    return `The ${this.make} goes Beep!`;
  }
  toString() {
    console.log(
      `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    );
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
// let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
// myFirstVehicle.honk(); // "Beep."

// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.
// let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
// myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

// ----------------------- PART TWO -----------------------

// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
  constructor(make, model, year, wheels) {
    super(make, model, year);
    this.wheels = wheels;
    this.driver = console.log('Driver is Ted');
  }
  numWheels() {
    console.log(`This vehicle has ${this.wheels} wheels`);
    return `returned ${this.wheels} wheels`;
  }
}
let myFirstCar = new Car('Toyota', 'Corolla', 2005, 4);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk(); // "Beep."
myFirstCar.numWheels(); // 4
myFirstCar.driver;

// ----------------------- PART THREE -----------------------

// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
  constructor(make, model, year, wheels) {
    super(make, mode, year, wheels);
    this.wheels = wheels;
  }
}
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk(); // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels; // 2

// ----------------------- PART FOUR -----------------------
