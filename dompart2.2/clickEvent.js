// const allbtn = document.querySelectorAll(".my-buttons button");
// console.log(allbtn);

// for(let btn of allbtn){
//     btn.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i=0;i<allbtn.length;i++){
//     allbtn[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allbtn.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         console.log(this);
//     })
// })

//////
// event object 
// const firstButton = document.querySelector("#one");

// in arrow function this is one level up

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget);
//     })
// }
//////////
// events behind the scenes
// see in notes
// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 1000000000; i++){      // just put here to delay
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){              // just put here to delay
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")
///////
// practice with click events
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(btn=> {
//     btn.addEventListener("click", (e)=>{
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "grey";
//     })
// })
///////
// little demo project
// see in little-demo.html little-css
// const btn = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");

// function randomColorGenrator(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     return `rgb(${red},${green},${blue})`
// }

// btn.addEventListener("click",()=>{
//     const randomColor = randomColorGenrator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })
///////
// go back to dom2.js