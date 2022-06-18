// const user = {
//     firstName: "Priyam",
//     Age: 22,
//     email: "abc@gmail.com",
//     Address: "kmckmdkc",
//     about: function(){
//         return `${this.firstName} is ${this.Age} year old`;
//     },
//     isAdult: function(){
//         return this.age >=18;
//     }
// }
// to create this type of multiple user create a function

// function createUser(firstName,Age,email,Address){
//     const user = {};
//     user.firstName = firstName;
//     user.Age = Age;
//     user.email = email;
//     user.Address = Address;
//     user.about =  function(){
//         return `${this.firstName} is ${this.Age} year old`;
//     };
//     user.isAdult = function(){
//         return this.Age >= 18;
//     };
//     return user;
// }

// const user1 = createUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());

// if we create millions of user then the methods create millions of time which is not required
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.Age} year old`;
//     },
//     isAdult: function(){
//         return this.Age >= 18;
//     }
// };

// function createUser(firstName,Age,email,Address){
//     const user = {};
//     user.firstName = firstName;
//     user.Age = Age;
//     user.email = email;
//     user.Address = Address;
//     user.about = userMethods.about;
//     user.isAdult = userMethods.isAdult;
//     return user;
// };
// const user1 = createUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());


// here is one more problem if you want to create more methods then you have to create in userMthods and then refernce them in createUser which is not convenient so for this you can use Object.create(objectName)
// this will create empty object with property set __proto__ or [[prototype]] where objectName reference is store so if we try to access those property which define in objectName we can access now, firstly it will search in their own object then go to in __proto__ refrence object
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.Age} year old`;
//     },
//     isAdult: function(){
//         return this.Age >= 18;
//     }
// };

// function createUser(firstName,Age,email,Address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.Age = Age;
//     user.email = email;
//     user.Address = Address;
//     return user;
// };
// const user1 = createUser("Simran",21,"abc@gmail.com","Dwarka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.isAdult());

