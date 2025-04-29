// const fruit = new Map([
//     ['banana', 20],
//     ['orange', 30],
//     ['grape', 40]
// ]);
// console.log(fruit); 

// const fruit = new Map();
// fruit.set('banana', 20);
// fruit.set('orange', 30);
// fruit.set('grape', 40);
// console.log(fruit);


// const fruit = new Map([
//     ['banana', 20],
//     ['orange', 30],
//     ['grape', 40]
// ]);
// console.log(fruit);

// fruit.delete('banana');
// console.log('After deleting banana:', fruit);

// fruit.clear();
// console.log('After clearing:', fruit);

// let text = "";
// let fruit = ["apple", "banana", "cherry"];
// fruit.forEach(function(value, key) {
//     text += key + " = " + value;
// });
// console.log(text);

// let total = 0;
// let numbers = [1, 2, 3, 4, 5];
// for(const x of numbers.values()) {
//     total += x;
// }
// console.log(total); 



// Destructuring 

// const person = {
//     firstname: "Ravi",
//     lastname: "patel",
//     age: 30,
// };
// let { firstname, lastname } = person;
// console.log(firstname); 

// the order of the properties does not matter

//Alias creation

// const person = {
//     firstname: "Ravi",
//     lastname: "patel",
//     age: 30,
// };
// let { lastname:name} = person;
// console.log(name);


// // create string
// let name="grukulTheSchool";
// // Destructuring
// let [a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// // create an array
// const fruit=["banana","orange","grape"];
// // Destructuring
// let [fruit1,fruit2]=fruit;
// console.log(fruit1,fruit2); 

// // Create an array
// const fruit = ["banana", "orange", "grape", "mangoes"];
// // Destructuring
// let [fruit1, fruit2, fruit3] = fruit;

// console.log(fruit1, fruit2, fruit3);

// //create an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Destructuring
// const [a, b, c, ...rest] = numbers;
// console.log(a, b, c); 

// const fruit = new Map([
//     ['banana', 20],
//     ['orange', 30],
//     ['grape', 40]
// ]);
// //destructuring


// let firstName = "Ravi";
// let lastName = "patel";
// //destructuring
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName, lastName);



//exponential operator
// let x = 5;
// let z = x**2;
// console.log(z); 

// let x = 5;
// let z = Math.pow(x, 2);
// console.log(z)

// let x = 5;
// x**=2;
// console.log(x);

// const fruit=["banana","orange","grape"];
// fruit.includes("banana");
// console.log(fruit.includes("banana"));


// //trailing comma 
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);

// const SparseArray = [1,4, , ,, 5, 6, , ];
// console.log(SparseArray.length); 

// const person = {
//     firstName: "Ravi",
//     ,
//     age: 30,
// };