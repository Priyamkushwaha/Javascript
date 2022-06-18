// array methods

// forEach method     in this it will pass data value and index in callback function
// use callback function as parameter


// const numbers = [2, 3,5,4];

// const myfunc = function(nums,index){
//     console.log(nums,index);
// }
// numbers.forEach(myfunc);

// numbers.forEach(function(num){
//     console.log(num);
// });

// numbers.forEach(users=>{
//     console.log(users);
// });



// Map method
// use callback function as a parameter and pass value and index to function
// it will return a array and callback function should return something to make that array
// const numbers = [2, 3,5,4];

// const newArray = numbers.map( num => {return num*2});
// console.log(newArray);


// filter method
// it also use callback function as a parameter and passed numbers and index as argument but callback function should return boolean value 
// basically it make new array and those value by which callback function return true

// const numbers = [1, 3,4, 6,2 ,4,7,5];
// const newArray = numbers.filter((num)=>{
//     return num%2===0;
// });
// console.log(newArray);

//reduce method
// const numbers = [4,3,5,2,3,4];

// const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,100);
//                            // callback function                              //initial value to accumulator or it will take first value of array defaultly.
// console.log(sum);


// sort method
// it sort acc. to ascii value 
// it change the array in which it used 
// in case of strings it sort smoothly but in case no. you have to use callback function

// const numbers = [2,5,8,3,4,1];
// numbers.sort((a,b)=>{
//     return a-b;                           // a-b sort array no. in increasing order and if you want in decreasing order use b-a
// });
// console.log(numbers);   

// find method return the value in which callback function returning true
// it also take callback function 
// it return first occurence value then stopped
// callback function return boolean 

// const numbers = [2,3,6,3,4];
// const ans = numbers.find(num=>num===3);
// console.log(ans);

// every method return true when callback condition return true for every element present in array
// callback return boolean 

// const numbers = [5,2,6,7,3];
// const ans =  numbers.every(num=>num%2===0);
// console.log(ans);

// some method return true if any element present in array satisfy and give true for callback condition
// callback return boolean
// const numbers = [5,3,7,7,3];
// const ans = numbers.some(num=>num%2===0);
// console.log(ans);

// fill method it will change a array if you use with it 
// value start end-->next to last element you want to include

// const myArray = new Array(10).fill(0);
// console.log(myArray);
// // or
// myArray.fill(4,3,5);
// console.log(myArray);

//splice method 
// start delete insert

// const myArray = ["item1","item2","item3"];

// delete    it will delete element from original array and return the array of deleted element 
// const deletedArray = myArray.splice(1,1);
// console.log(myArray,deletedArray);

// inserting 
// myArray.splice(1,0,"inserted item");
// console.log(myArray);

// deleting and inserting together 
// const deletedItem = myArray.splice(1,2,"inserted item1","inserted item2","abc");
// console.log(myArray,`deleted items ${deletedItem}`);