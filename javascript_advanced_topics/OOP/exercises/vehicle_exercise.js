// function Vehicle(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.isRunning = false;
//   this.turnOn = function() {
//     this.isRunning = true;
//   }
//   this.turnOff = function() {
//     this.isRunning = false;
//   }
//   this.honk = function() {
//     if (this.isRunning === true) return 'beep!';
//   }
// }

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning === true) return 'beep!';
}

vehicle1 = new Vehicle('chevy', 'malibu', 2012);

console.log(vehicle1);           // the entire object
console.log(vehicle1.honk());    // undefined
console.log(vehicle1.isRunning); // false
console.log(vehicle1.turnOn());  // undefined
console.log(vehicle1.isRunning); // true
console.log(vehicle1.honk());    // beep!


