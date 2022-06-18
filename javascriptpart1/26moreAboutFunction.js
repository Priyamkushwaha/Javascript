// function can behave like function or object too
// function provide name property which tell the function name
// function hello(){
//     console.log("jdds");
// };
// console.log(hello.name);
// we can create our own property 
// hello.ourOwnProperty = "yoyo";
// console.log(hello.ourOwnProperty);


// function provide more useful property

// its provide prototype which is object to use 
// and only function provide this property
// console.log(hello.prototype); // {}
// how to create property in prototype
// hello.prototype.abc =  "bhd";
// hello.prototype.func = function(){
//     console.log("djjd");
// };
// console.log(hello.prototype);



// use of prototype

// function createUser(firstName,Age,email,Address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.Age = Age;
//     user.email = email;
//     user.Address = Address;
//     // user.about = userMethods.about;
//     // user.isAdult = userMethods.isAdult;
//     return user;
// };
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.Age} year old`;
// };
// createUser.prototype.isAdult =  function(){
//     return this.Age >= 18;
// };
// const user1 = createUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());


// new keyword
// create empty object this = {}
// return object
// set prototype in proto means const user = Object.create(createUser.prototype);
// function CreateUser(firstName,Age,email,Address){                 // constructor function // there is convetion that if we create something with new keyword we write that constructor function first letter capital like Set Map etc..
//     this.firstName = firstName;
//     this.Age = Age;
//     this.email = email;
//     this.Address = Address;
//     // user.about = userMethods.about;
//     // user.isAdult = userMethods.isAdult;
// };
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.Age} year old`;
// };
// CreateUser.prototype.isAdult =  function(){
//     return this.Age >= 18;
// };
// const user1 = new CreateUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());

// hasOwnProperty // it return true if object has that property not his proto reference object
// for(let key in user1){
//    if(user1.hasOwnProperty(key)){
//        console.log(key);
//    }
// }

/// more about prototype
// const numbers = [1,23,4];
// if you do numbers. you see methods to you in array ,where from these methods coming, from prototype but as we study only function has prototype property 
// this because 
// const numbers = new Array(1,2,3) // internally javascript create array like this so this new keyword set refernce of prototype in proto where all these methods are define
// and one more thing is that the array prototype is in array not in object beacuse you can change prototype in array
// console.log(Object.getPrototypeOf(numbers)); // which is in array 

// function hello (){
//     console.log("yoy");
// };
// console.log(hello.prototype);
// // to change in array
// hello.prototype = [];
// hello.prototype.push(1);
// console.log(hello.prototype);