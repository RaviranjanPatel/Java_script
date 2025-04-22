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

class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
 greet () {
        console.log("Hi there I'm",  this.firstName);
    }