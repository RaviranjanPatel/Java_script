// spread function

// let spread =['sachin','pratyakss','ramesh'];
// let message =['javsc','is',...spread,'and'];
// console.log(message);

// function addTwoNumber(x,y){
//     console.log(x+y);
// }

// let arr=[5,9];
// let arr1= [19,11];
// addTwoNumber(...arr,...arr1);


// Rest parameter
// use the discarder parmeters

// function someFunction(param1,param2){
//     console.log(param1,param2);
// }

// someFunction('hii','how r','sachin')


// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }

// someFunction('hii','how r','sachin')


// Returning function

// function addTwoNumber(x,y){
//          console.log(x+y);
//      }
// let result = addTwoNumber(2,1);
// console.log(result);

// arrow function
// let rest=add(4,5);
// console.log(rest);


// logic code
// const addTwoNumber =(a,b)=> a+b; 
// let resultArr=[];
// for(let i =0;i<10;i++){
//     let resulted = addTwoNumber(i,2*i);
//     resultArr.push(resulted);
// }
// console.log(resultArr);

// function testAvailaability(){
//     let y="local Variable!";
//     console.log("Available here:",y)
//     return y;
// }

// let z =testAvailaability()
// // console.log("text not available",y)
// console.log("text not available",z)



// understanding let and var

// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x='local';
//     }
// }

// doingstuff();

// let and const-> show error undeclaration
// while bar show -> undefined which is not error 

// let x = "Acceciable everywere";
// console.log("outside function",x);
// function doingstuff(){
//     let x = "local";
//     console.log(x);
// }
// doingstuff("pranam");
// console.log("next line",x);
// console.log(x);

// function confuseReader(){
//      x = "Guess my scope...";
//     console.log("inside the function",x);
// }
// confuseReader();
// console.log("outside the function", x);

// anonymous function //immediately invoked function instantly(IIFE)
// (function(){
//     console.log("run right away");
// })()

// arrow function is also anonymous function
// (()=>{
//     console.log("run right away");
// })()

// Recursive function
// function logRecursive(nr) {
//     console.log("started function:", nr);
//     if (nr > 0){
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }

// logRecursive(3);


