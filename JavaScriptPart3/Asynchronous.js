// synchronous programming vs asynchronous programming
// synchronous programming   //code execute line by line 
// javaScript is synchronous programming single threaded

// console.log("script start");

// for(let i=0;i<10000;i++)
// {
//     console.log("Hello World");
// }

// console.log("script end");

// Asynchronous
// console.log("script start");

// const id = setTimeout(()=>console.log("inside setTimeOut"), 1000);
// // The setTimeout() is executed only once.
// // If you need repeated executions, use setInterval() instead.
// // Use the clearTimeout() method to prevent the function from starting.
// // To clear a timeout, use the id returned from setTimeout():
// for(let i=0;i<100;i++)
// {
//     console.log("Hello World");
// }

// clearTimeout(id);

// console.log("script end");


///
// setInterval
// console.log("script start");
// setInterval(()=>console.log(Math.random()), 1000);
// console.log("script end");
////
// understand callback
// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// myFunc(() => {
//   console.log("function is doing task 2");
// });

// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
//     if (typeof number1 === "number" && typeof number2 === "number") {
//       onSuccess(number1, number2);
//     } else {
//       onFailure();
//     }
//   }
  
//   function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
//   }
  
//   function onFail(){
//       console.log("Wrong data type");
//       console.log("please pass numbers only")
//   }
//   getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);

/////
// // see in callback.html 
// // callbacks , callback hell, pyramid of doom
// // asynchronous programming
// // callbacks , callback hell, pyramid of doom
// // asynchronous programming
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// // Text       Delay   Color

// // one        1s      Violet
// // two        2s      purple
// // three      2s      red
// // four       1s      Pink
// // five       2s      green
// // six        3s      blue
// // seven      1s      brown

// // callback hell  
// // setTimeout(()=>{
// //   heading1.textContent = "one";
// //   heading1.style.color = "violet";
// //   setTimeout(()=>{
// //     heading2.textContent = "two";
// //     heading2.style.color = "purple";
// //     setTimeout(()=>{
// //       heading3.textContent = "three";
// //       heading3.style.color = "red";
// //       setTimeout(()=>{
// //         heading4.textContent = "four";
// //         heading4.style.color = "pink";
// //         setTimeout(()=>{
// //           heading5.textContent = "five";
// //           heading5.style.color = "green";
// //         },2000)
        
// //       },1000)
      
// //     },2000)
    
// //   },2000)
  
// // },1000)

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },time)
// }
// // pyramid of doom
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{
                    
//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})


//////
// // Promise
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];



// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// // produce 



// // consume 
// // how to consume 

// // friedRicePromise.then(
// //     // jab promise resolve hoga 
// //     (myfriedRice)=>{
// //     console.log("lets eat ", myfriedRice);
// //     },
// //     (error)=>{
// //         console.log(error)
// //     })

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })


// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")

// in promise the browser take this as well as setTimeOUT but promise add in microtask queue and set callback add in callback queue and if in both queue ,something is present to be executed then firstly microtask waork go in stack
/////
// function returning promise

// function ricePromise(){
//     const bucket = ['coffee', 'chips','vegetables','salts','rice'];
//     return new Promise((resolve,reject)=>{
//       if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//           resolve({value:"friedrice"});
//       }else{
//           reject("could not do it");
//       }
//     })
//   }
  
  
//   ricePromise().then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })
////////////
// promise && setTimeout 


// I want to resolve / reject promise after 2 seconds 


// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})
//////////
// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>console.log(value));
// or
// Promise.resolve(5).then(value=>console.log(value));

// then()
// then method hamesha promise return krta hain

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }
// myPromise()
// .then(value=>{
//     console.log(value);
//     value += "bar"
//     return value;   // internally js working like return Promise.resolve(value) and we dont return anything then js will return undefined like return Promise.resolve(undefined)
// }).then(value=>{
//     console.log(value);
//     value+="baaz"
//     return value;
// }).then(value=>{
//     console.log(value)
// })
///////
// callback hell to flat code
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");


// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//               element.textContent = text;
//               element.style.color = color;
//               resolve();
//             }else{
//               reject("element not found");
//             }
//           },time)
//     })  
//   }

// changeText(heading1, "one", "red", 1000)
//   .then(()=>changeText(heading2, "two", "purple", 1000))
//   .then(()=>changeText(heading3, "three", "green", 1000))
//   .then(()=>changeText(heading4, "four", "orange", 1000))
//   .then(()=>changeText(heading5, "four", "orange", 1000))
//   .then(()=>changeText(heading6, "four", "orange", 1000))
//   .then(()=>changeText(heading7, "four", "orange", 1000))
//   .then(()=>changeText(heading8, "four", "orange", 1000))
//   .then(()=>changeText(heading9, "four", "orange", 1000))
//   .then(()=>changeText(heading10, "four", "orange", 1000))
//   .catch((error)=>{
//       alert(error);
//   })
////////
// BASIC THEORY 

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)
///////