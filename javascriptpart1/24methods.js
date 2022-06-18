// methods
// function inside object

// const person = {
//     fname:"Priyam",
//     age: 20,
//     about: function(){
//         console.log(`My name is ${this.fname} and age is ${this.age}`);
//     }
// };
// person.about();

// function printInfo(){
//     console.log(`My name is ${this.fname} and age is ${this.age}`);
// };

// const person1 = {
//     fname:"Priyam",
//     age: 20,
//     about: printInfo
// };
// const person2 = {
//     fname:"Raghav",
//     age: 22,
//     about: printInfo
// };
// const person3 = {
//     fname:"Riya",
//     age: 19,
//     about: printInfo
// };
// person1.about();
// person2.about();
// person3.about();

// window object is present in js by default
// means if we try to make any function then it is define in window object
// console.log(this);   // it give window object
// function print(){
//     console.log(this);
// };
// print();   // it is same as window.print(); to avoid this use 'use strict'


// call
// const person1 = {
//     fname:"Priyam",
//     age: 20,
//     about: function(email,address)
//     {
//         console.log(this.fname,email);
//     }
// };
// const person2 = {
//     fname:"riyam",
//     age: 13
// };
// person1.about.call(person2,"hjbsbhjcsb@gmail.com","majlis park"); // call take argument of this and other arguments mentioned in function parameter


// function extraInfo(email,address)
// {
//     console.log(this.fname,email,address);
// };
// const person1 = {
//     fname:"Priyam",
//     age: 20
// };
// const person2 = {
//     fname:"riyam",
//     age: 13
// };
// extraInfo.call(person1,"hhjd@gmail.com","majlis park");
// extraInfo.call(person2,"kji@gmail.com","gtb");

//// apply 
// it works same as call but extra arguments passed as array 
// extraInfo.call(person1,["hhjd@gmail.com","majlis park"]);
// extraInfo.call(person2,["kji@gmail.com","gtb"]);

// bind                           // it return a function
// The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value.
// const personInfo1 = extraInfo.bind(person1,"hhjd@gmail.com","majlis park");
// const personInfo2 = extraInfo.bind(person2,"kji@gmail.com","gtb");
// personInfo2();
// personInfo1();



// dont do this mistake
// window.fname = "hcvhjds";
// window.age = 22;
// const person = {
//     fname:"Priyam",
//     age: 20,
//     about: function(){
//         console.log(`My name is ${this.fname} and age is ${this.age}`);
//     }
// };
// const myFunc = person.about;
// myFunc();    // output : My name is hcvhjds and age is 22

// to avoid use bind
// const myFunc1 = person.about.bind(person);
// myFunc1();        // output:    My name is Priyam and age is 20


// in arrow function, this value is one level up
// window.fname = "hcvhjds";
// window.age = 22;
// const person = {
//     fname:"Priyam",
//     age: 20,
//     about: () => {
//         console.log(`My name is ${this.fname} and age is ${this.age}`);
//     }
// };
// person.about();

// short syntax 
// const person = {
//     fname:"Priyam",
//     age: 20,
//     about: function(){
//         console.log(`My name is ${this.fname} and age is ${this.age}`);
//     }
// };
// const person = {
//     fname:"Priyam",
//     age: 20,
//     about(){                                                                           // we can define methods in this way to 
//         console.log(`My name is ${this.fname} and age is ${this.age}`);
//     }
// };