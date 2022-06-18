// intro to arrays 
// it is a reference type
// collection of different data types
// let a = [1, 2, "abc", null, undefined];
// console.log(a);
// to access particular element in array[index] and indexing start with 0
// console.log(a[1]); it will print 2

// refernce type means object
// how to know that given object is array
// u can use Array.isArray(variableName) it gives true if given arrgument is array or false if not array

//array is mutable means array can be changed after defining 
// primitive data types are immutable but reference data is mutable

// let a = [1, 2, "abc", null, undefined];
// to push in end of the array u can use a.push(element) and element can be any data type
// to pop from end u can use a.pop() no need to pass element because it will pop element from the end and this pop function return the element which it removed from array from last

// to add element in start in array we can use unshift 
// a.unshift(element)
// to remove from start we can use shift
// a.shift() as pop() gives us the element it removed in a same manner shift also return the element it removed 

// push and pop is faster than unshift and shift because in push and pop case the element just need to add in end or removed in end but in unshift and shift case firstly we have to shift all the element for making space in start to add element or to removed we have to shift by one position too

// primitive data type and reference data type 
// primitive data type stores in stack memory so whenever we copy a primitive data type we get another memory for copying that data type
// example
// let a = 7;
// let b = a;
// console.log(a); output 7
// console.log(b); output 7
// a++;
// console.log("after increamating tha a primitive data type variable by 1");
// console.log(a); output 8 
// console.log(b); output 7
// refernce data type stores their value in heap so in stack their variable name just store the address of data stored in haep so whenever we copy refence data type we just copy their address not the data so two different data variable store same address in stack

// how to clone array
// first way is to declare another array then add every element again
// let a = [1, 2, "abc", null, undefined];
// let b = [1, 2, "abc", null, undefined];
// but this above method we usually dont use 
// by using slice() function
// let b = a.slice(0);
// by using concatenate
// let b = [].concat(a);
// by using spread operator
// let b = [...a];

//add all elements of a array in b array but two more elements
// let b = a.slice(0).concat(["one","two"]);
// let b = [].concat(a, ["one","two"]);
// let b = [...a, "one", "two"];

// to traverse in array
// for loop    or you can use different loops too
// for(let i = 0; i<a.length; i++)
// {
//     console.log(a[i]);
// }
// to make empty array 
// let b = [];

// use const for creating array or use const for creating reference type data type because after using const we cant not change the address means we cant assign same variable with another data we can modify it

// while loop in array
// let a = [1, 2, "abc", null, undefined];
// let i=0;
// while (i<a.length) {
//     console.log(a[i]);
//     i++;
// }

// for of loop 
// let a = [1, 2, "abc", null, undefined];
// for (let value of a) {                              //value take value of each element
//     console.log(value);
// }

// for in loop 
// let a = [1, 2, "abc", null, undefined];
// for (let index in a) {                              //index take index of the element
//     console.log(a[index]);
// }

// array destructuring
// simple method 
// const array = ["value1", "value2", "value3"];
// let a1 = array[0];
// let a2 = array[1];
// console.log(a1, a2);
// array destructuring
// let [ v1, v2] = array;
// console.log(v1, v2);
// let [v1, v2, v3, v4, v5] = array;  // v4 and v5 will be undefined
// let [v1, ,v3] = array;  //it store in v3 value3 
// let [v1, ...newArray] = array;
// console.log(v1, newArray);