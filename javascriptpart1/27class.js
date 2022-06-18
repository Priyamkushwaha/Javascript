// class
// class CreateUser {
//     constructor(firstName, Age, email, Address) {
//         this.firstName = firstName;
//         this.Age = Age;
//         this.email = email;
//         this.Address = Address;
//     }
//     about(){
//         return `${this.firstName} is ${this.Age} year old`;
//     }
//     isAdult(){
//         return this.Age >= 18;
//     }
// }
// const user1 = new CreateUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());

// extends keyword      // to inherited the class property
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     isEat(){
//         console.log(`${this.name} is eating`);
//     }
//     isCute(){
//         return true;
//     }
// }

// class dog extends Animal{

// }
// const tommy = new dog("sirkit",4);
// console.log(tommy);
// console.log(tommy.isCute());

// super keyword      // used to call parent class constructor 
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     isEat(){
//         console.log(`${this.name} is eating`);
//     }
//     isCute(){
//         return true;
//     }
// }

// class dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed = speed;
//     }
//     run(){
//         console.log(`${this.name} is running in ${this.speed}kmps`);
//     }
// }
// const tommy = new dog("sirkit",4,42);
// console.log(tommy);
// tommy.run();

// if we call any method or value from sub class firstly it will search in sub class then it go to parent class 



// getter and setter
// class person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new person("Priyam","Kushwaha",22);
// console.log(person1.firstName);
// console.log(person1.fullName());     // to use this function as property you can use by using get 

// class person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new person("Priyam","Kushwaha",22);
// console.log(person1.firstName);
// console.log(person1.fullName);   


// setter
// class person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         const [firstName , lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new person("Priyam","Kushwaha",22);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.fullName = "Simran Pandit";
// console.log(person1.firstName);
// console.log(person1.lastName);

// static methods and properties          // those methods and properties created by static can access by class not by instance so to access these methods you dont need to make any object
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     static classInfo(){
//         console.log("this is static method");
//     }
//     static classDesc = "this is static property";
//     isEat(){
//         console.log(`${this.name} is eating`);
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1 = new Animal("sirkit",4);
// // animal1.classInfo();       // cant be access by object
// Animal.classInfo();
// console.log(Animal.classDesc);