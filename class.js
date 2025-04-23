//classes are a blueprint for creating objects with shared properties and methods.
//This development reduce the complexity of application and increase maintainability by a huge margin.

// class ClassName {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("agr1", "agr2");
// console.log(obj.prop1); 
// console.log(obj.prop2);

// class Dog {
//     constructor(dogname, color, weight, breed) {
//         this.dogname = dogname;
//         this.color = color;
//         this.weight = weight;
//         this.breed = breed;
//     }
// } 
//     let dog = new Dog("Sachin", "black", 20, "bulldog");
//     console.log(dog.dogname);
//     console.log(dog.color);
//     console.log(dog.weight);
//     console.log(dog.breed);

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let person = new Person("Maaike");
// console.log(person.firstName); 

// class Person {
//     constructor(firstName, lastName = "Doe") {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let person = new Person("John"); 
// console.log(person.firstName);
// console.log(person.lastName);

// Function on the class are called methods with function keyword.

// class Person {
//         constructor(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }
//  greet () {
//         console.log("Hi there I'm",  this.firstName);
//     }


// functions on a class are called methods. when definig these methods,
// we don't use the function keyword. we start directly with the name.

//  class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hi there I'm",  this.firstName);
//     }
// }
//     let person = new Person("Ravi", "Sachin");
//     person.greet(); 

// constructor with two argeuemnets

// class Ravi{
//     constructor(firstName,lastName= "doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         console.log(this.firstName,"and",this.lastName);
//     }

//     greet(){
//         console.log("Sachin is also my bro am me is",this.firstName)
//     }

//     compliment(name,object){
//         return "taht is a wonderful " + object + ","+ name;
//     }

// }

// let obj = new Ravi("Ravi");
// let undef=obj.greet();
// let compliment =obj.compliment("taj","car");
// console.log(compliment);
// console.log(undef);

// class Person {
//         constructor(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }
//     let p = new Person("Ravi", "Sachin");
//     console.log(p.firstName); 


// class Person {
//     #firstName; 
//     #lastName;
// constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(name) {
//         this.#firstName = name;
//     }
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(name) {
//         this.#lastName = name;
//     }
// }
// let person = new Person("Ravi", "Sachin");
// person.firstName = "John"; 
// console.log(person.firstName);


// Inheritance 
// type of inheritance 
// 1. single inheritance
// 2. multilevel inheritance
// 3. multiple inheritance
// 4. hierarchical inheritance
// 5. hybrid inheritance

// Abstraction is the concept of hiding the complex implementation details.

// class vehicle {
//     constructor(color, curretSpeed, maxSpeed) {
//         this.color = color;
//         this.curretSpeed = curretSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.curretSpeed);
//     }
//     accelerate(amount) {
//         this.curretSpeed += amount;
//     }
// }

// class Motorcycle extends vehicle {
//     constructor(color, curretSpeed, maxSpeed, fuel) {
//         super(color, curretSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     dowheelie() {
//         console.log("driving on one wheel");
//     }
// }

// let motor = new Motorcycle("red", 50, 120, "petrol");
// motor.move();
// motor.accelerate(50);
// motor.dowheelie();
// console.log(motor.curretSpeed);
// console.log(motor.color);
// console.log(motor.maxSpeed);
// console.log(motor.fuel);


// Prototypes 

//  class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hi there I'm",  this.firstName);
//     }
//  }
//  Person.prototype.introduce = function() {
//     console.log("Hello, my name is", this.firstName);
// }
// let person = new Person("Ravi", "Sachin");
// console.log(person.firstName);
// person.introduce(); 
