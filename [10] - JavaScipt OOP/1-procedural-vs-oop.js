// Procedural VS OOP
// Less Parameters = Best Function

// Procedural Programming
// the variables(data) and functions are seperate entities.
let make = "Toyota";
let model = "Camry";

function startCar(make, model) {
  console.log(`${make} ${model} started.`);
}
console.log("== Procedural approach ==");
startCar(make, model);

// Object Oriented Programming (OOP)
// Grouping the related information and functionalities into a single unit.

const car = {
  make: "Toyota",
  model: "Camry",
  start() {
    console.log(`${this.make} ${this.model} started.`);
  },
  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  },
};

console.log("== OOP approach ==");
car.start();
car.stop();
