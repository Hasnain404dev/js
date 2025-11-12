// Create a parent object with some properties
const animal = {
    eats: true,
    walk() {
        console.log('Animal walking!');
    }
};

// Create a rabbit object
const rabbit = {
    jumps: true
};

// Set animal as the prototype of rabbit
rabbit.__proto__ = animal;

// Now rabbit can use properties from animal
console.log(rabbit.eats);     // true (inherited from animal)
console.log(rabbit.jumps);    // true (own property)
rabbit.walk();               // "Animal walking!" (method inherited from animal)

// Let's see the prototype chain
console.log(rabbit.__proto__ === animal);  // true
console.log(rabbit.__proto__.__proto__ === Object.prototype);  // true
console.log(rabbit.__proto__.__proto__.__proto__ === null);  // true

// A more modern way to create prototypes (recommended)
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats);    // true (inherited from animal)
console.log(dog.barks);   // true (own property)
dog.walk();             // "Animal walking!" (inherited method)