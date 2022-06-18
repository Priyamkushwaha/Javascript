// iterables
// jispe hum for of loop lga skeh
// strings , arrays are iterables

// array like object 
// jinke pass lengh wali property hoti hain
// aur jinko hum index se access kr skte hain
// ex :- string

// sets (it si iterables)
// sets also have its own methods
// no index based access
// order is not guaranteed
// unique items only (no duplicates allowed)

// const uniqueNumbers = new Set([1,2,3,4,1]);
// const uniqueNumbers = new Set("abc"); // can put any iterables
// const uniqueNumbers = new Set();
// const items =["item1","item2","item3"];
// uniqueNumbers.add(1);
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add('a');
// uniqueNumbers.add(items);
// uniqueNumbers.add(items);
// uniqueNumbers.add(["item1","item2"]);
// uniqueNumbers.add(["item1","item2"]);
// console.log(uniqueNumbers);
// console.log(uniqueNumbers.has(items));  // it will give true if argument value is present in that set

// as we know set is iterable therefore we can use for of loop to iterate and .lengh dont work on set
// const myArray = [2,4,6,3,2,4,6,4,53,46,2,4];
// const uniqueArray = new Set(myArray);
// console.log(uniqueArray);
// let len = 0;
// for(let element of uniqueArray)
// {
//     len++;
// };
// console.log(len);

//// map
// map is an iterable
//stored data in ordered fashion
// store key value pair (like object)
// duplicate key is not allowed

// diff between map and object
// object key can be string or symbol
// but map key can be anything like string array number etc..

// note 
// object literal       const obj = {};
// key --> string 
// key --> symbol

// const myMap = new Map([["name","Priyam"],["Age",22],[1,2]]);
// console.log(myMap);
// or
// const myMap = new Map();
// myMap.set("name","Priyam");
// myMap.set("Age",22);
// myMap.set([1,2,3],"2");
// myMap.set({"dkn":3,age:34},5);
// console.log(myMap);
// to access value you have to use .get method
// console.log(myMap.get("name"));
// .keys method give array of all keys present in map
// for(let key of myMap.keys())
// {
//     console.log(key);
// }
// for of loop on map 
// the value is in array 
// for(let value of myMap)
// {
//     console.log(value);
// }
// for(let [key, value] of myMap)    // array destructuring
// {
//     console.log(key, value);
// }

// clone using object.assign
// const obj = {
//     name: "priyam",
//     age: 22,
//     fd: 3
// }
// const obj1 = Object.assign({}, obj);
// console.log(obj1);

// optional chaining
// const person = {
//     name: "Priyam",
//     address: {houseNumber: 23}
// };
// console.log(person?.name);
// console.log(person?.address?.houseNumber);