// objects are reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create objects

// const person = {
//     name:"Priyam",
//     age:22,
//     hobbies: ["dancing","coding","travelling"]
// };
// console.log(person);

// how to access data from objects
// we can access data with . or by bracket 
// in objects key store as a string
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person["name"]);

// how to add key value to object
// person.gender = "Male";
// console.log(person);
// or
// person["gender"] = "Male";
// console.log(person);

// difference between dot and bracket notation
// const key = "email";
// const person = {
//     name:"Priyam",
//     age:22,
//     "person hobbies": ["dancing","coding","travelling"]
// };
// console.log(person.person hobbies);  it will error msg beacuse space is not allowed in javascript
// console.log(person["person hobbies"]); by this bracket we can access 
// person.key = "hdbchdb@gmail.com"; //it will save key as a key 
// person["key"] = "hdbchdb@gmail.com"; it also store key as a key
// person[key] = "hdbchdb@gmail.com"; it will store key value as a key
// console.log(person);

// how to iterate object
// const person = {
//     name:"Priyam",
//     age:22,
//     "person hobbies": ["dancing","coding","travelling"]
// };

// for in loop
// object.keys()

// for in loop
// for(let key in person)
// {
//     console.log(person[key]);
// }

// object.keys() return array of keys present in object
// for(let key of Object.keys(person))
// {
//     console.log(person[key]);
// }

// computed properties
// const key1 = "objectkey1";
// const key2 = "obejctkey2";

// const value1 = "objectvalue1";
// const value2 = "objectvalue2";

// const obj = {
//     objectkey1 : "objectvalue1",
//     objectkey2 : "objectvalue2"
// }

// const obj = {
//     key : value1,         // this key1 store as key1 not with his value of "objectkey1" so avoid this we need to use [key1]
//     [key2] : value2
// }
// console.log(obj);


// spread operator
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const nerArray = [...array1, ...array2, ..."abc", 69];
// console.log(nerArray);

// spread operator in object
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key1: "value3"   // note key always unique so key1 value overwrite by value3
// }
// console.log(obj1);
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = {
//     key1: "Uniquevalue1",
//     key3: "value3",
//     key4: "value4"
// }
// const newObj = {
//     ...obj1,...obj2, key69:69, ..."abc"
// }
// console.log(newObj);
// const newObj = {
//     ...obj1,...obj2, key69:69, ..."abc", ...[44, 55]
// }
// console.log(newObj);

// object destructuring
// const obj ={
//     name: "BGMI",
//     server: "asia",
//     origin: "china",
//     year: 2000
// }
// const {name, server: var1, ...restobj} = obj;
// console.log(name, var1, restobj);

// object inside array
// very useful in real life

// const users = [
//     {user: 1, name: "priyam", gender: "male"},
//     {user: 2, name: "priyam", gender: "male"},
//     {user: 3, name: "priyam", gender: "male"}
// ]

// for(let oneuser of users)
// {
//     console.log(oneuser.user);
// }

// nested destructuring 
// const users = [
//     {user: 1, name: "priyam", gender: "male"},
//     {user: 2, name: "priyam", gender: "male"},
//     {user: 3, name: "priyam", gender: "male"}
// ];
// const [{name: var2,user}, ,{gender}] = users;
// console.log(var2, gender, user);