// function which do some specific task

// function declaration
// function functionName(params) {
// function work
// }

// function isEven(a){
//     return a%2===0;
// }
// console.log(isEven(5));

// function expression 
// when we assign a function with variable is known as function expression
// const isEven = function(a)
// {
//     return a%2===0;
// };
// console.log(isEven(4));

// arrow function
// const isEven = (a) => {
//     return a%2===0;
// }
// if there is only one parameter then
// const isEven = a =>{
//     return a%2===0;
// }
// if there zero parameter and more than one parameter then you have to use paranthesis
// const print = () => {
//     console.log("hello");
// }
// if there is only one statement in body then we can remove angular brackets and return
// const isEven = a => a%2===0;
// const print = () => console.log("hello");

// hoisting
// hello();

// function hello(){
//     console.log("hello");
// }
// as you can see the function hello is working before defining it
// but this behaviour doesnt work in function expression and arrow function
// and this behaviour is known as hoisting

// when we define a variable in var and try to acess it before declaring then it will show undefined but in let and const case it give error
// console.log(hello); ///undefined will be print
// var hello = "hello";
// console.log(hello);  ///give error in both when we use let and we use const
// let hello = "hello";

// function inside function 
// means we can make no. of functions inside a function by any of method like function declaration ,function expression, arrow function

// lexical scope means variable value see in their own scope if not find it will start searching outside scope where it is defined
// const myValue = 1;
// const myApp = () =>
// {
//     // const myValue = 2;
//     const myFunc = function()
//     {
//         // const myValue = 3;
//         console.log("inside myfunc", myValue);
//     }
//     console.log("myapp");
//     myFunc();
// }
// myApp();

// block scope and function scope
// let and const are block scope
// var is function scope 

// default parameters
// const sum = (a,b) =>
// {
//     if(a === undefined)
//     {
//         a=0;
//     }
//     if (b === undefined)
//     {
//         b=0;
//     }
//     return a+b;
// }
// or
// const sum = (a=0,b=0) =>
// {
//     return a+b;
// }
// console.log(sum(4));

//rest parameters
// const addNum = (...a) =>                      // ...a ----> make an array to store data
// {
//     let total=0;
//     for(let num of a)
//     {
//         total=total+num;
//     }
//     return total;
// }
// const ans = addNum(2,3,4);
// console.log(ans);

// parameter destructuring
// used in 
//objects
//react

// const person = {
//     fname:"priyam",
//     age: 20
// };
// function printObjDetails({fname,age})
// {
//     console.log(fname);
//     console.log(age);
// }
// printObjDetails(person);

// callback functions // whenever you take function as a input  
// function myFun2(name)
// {
//     console.log("inside myfunc2");
//     console.log(`My name is ${name}`)
// };

// function myFunc(callback){
//     console.log("hello....");
//     callback("Priyam");
// };
// myFunc(myFun2);

// function returning function
// function myFunc() {
//     function myFun2() {
//         console.log("inside myfunc2");
//     };
//     return myFun2;
// };
// const ans = myFunc();
// ans();

// callback function and function returning function are higher order function means any function which take function as input or return is higher order function
