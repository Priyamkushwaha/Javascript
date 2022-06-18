// classList,add,remove,toggle classes
// const sectionToDo = document.querySelector(".section-todo");
// console.log(sectionToDo);
// console.log(sectionToDo.classList);  //DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']
// sectionToDo.classList.add("bg-dark");
// sectionToDo.classList.remove("bg-dark");
// console.log(sectionToDo.classList.contains("container"));                     // give true if given class is present
// sectionToDo.classList.toggle("bg-dark");                          // it will add class if not present or remove if present
// sectionToDo.classList.toggle("bg-dark"); 

//////
// add new html elements to page
// innerHtml to add html element
// const todolist = document.querySelector(".todo-list");
// console.log(todolist.innerHTML);
// todolist.innerHTML += "<li>New Todo</li>";
// todolist.innerHTML += "<li>other new Todo</li>";

// when you should use it , when you should not
// dont use to add new element but can be used to remove element 
//////
// document.createElement()
// append      // if you want to add any element in the selected element end child node
// prepend     // if you want to add any element in the selected element top child node
// remove      // you can remove any element by this method
// const newToDoItem = document.createElement("li");
// // const newToDoItemText = document.createTextNode("teach");
// // newToDoItem.append(newToDoItemText);
// // or above two line can be replaced by one below single line
// newToDoItem.textContent = "teach";
// console.log(newToDoItem);
// const todolist = document.querySelector(".todo-list");
// todolist.append(newToDoItem);    // it will add in end
// todolist.prepend(newToDoItem);  // it add in top 
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// before 
// after
// const newToDoItem = document.createElement("li");
// newToDoItem.textContent = "teach";
// const todolist = document.querySelector(".todo-list");
// todolist.before(newToDoItem);  // before add element above the selected element not in the selected element
// todolist.after(newToDoItem);   // after add element below the selected element not in the selected element 


//// another method to add html element in page
// selectedElement.insertAdjacentHTML("where","html");
// beforebegin   --->  add element above the selected element not in the selected element
// afterbegin -->       add any element in the selected element top child node
// beforeend  --->     add any element in the selected element end child node
// afterend  --->    add element below the selected element not in the selected element 

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li> teach</li>");

////// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new node";
// ul.append(li);
// ul.prepend(li);
// above two line has only one node so ya toh append hoga ya prepend dono ek sath ni ho payega
// for this situation you can make same node by cloning
// const li2 = li.cloneNode(true);   // we write true for deep cloning
// ul.append(li);
// ul.prepend(li2);
//////// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector('.first-todo');
// console.log(referenceNode);
// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);
// ul.replaceChild(li,referenceNode);
// ul.removeChild(referenceNode);
///// static list vs live list
 // querySelectorAll hamein static list degi  
 // getElementsBySomething hamien live list degi
 
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);
///// how to get the dimension of element
// height width
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// const infoHeight = info.height;
// console.log(info);
// console.log(infoHeight);
/////// intro to events 
// event ko 3 tariko se add kr skte hain 
// 1)  you can add event in html page as attribute
/* <button class="btn btn-headline" onclick="console.log('you clicked me!')">Learn More</button> */
// 2) 
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = ()=> console.log("clicked me!");
// but with this way we can only add one event
// 3) method --> addEventListener
// btn.addEventListener("click", ()=>console.log("clicked me!!"));
////// this keyword
// const btn = document.querySelector(".btn-headline");
// function myfunc(){
//     console.log("clicked me!!");
//     console.log(this);              // btn 
// }

// btn.addEventListener("click", myfunc);

// btn.addEventListener("click", function(){
//     console.log("clicked me!!");
//     console.log(this);             // btn
// });

// btn.addEventListener("click", ()=>{
//     console.log("clicked me!!");
//     console.log(this);            //window because in arrow function this value is one level up 
// });                               
//////// click event on multiple buttons
// go to clickEvent.html   and clickEvent.js 
//////////////
// keypress event
// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// });

// mouseover event
// const mainBtn = document.querySelector(".btn-headline");

// mainBtn.addEventListener("mouseover",()=>console.log("mouseover event occured!!"))
// mainBtn.addEventListener("mouseleave",()=>console.log("mouseleave event occured!!"))

/////////
// event bubbling(event propagation)
// event capturing
// event delegation
// console.log("hello world");

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

// /// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });
/////////
// project using event delegation
// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTodoText = todoInput.value;
//   const newLi = document.createElement("li");
//   const newLiInnerHtml = `
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`;
//   newLi.innerHTML = newLiInnerHtml;
//   todoList.append(newLi);
//   todoInput.value = "";
// });

// todoList.addEventListener("click", (e) => {
//   // check if user clicked on done button
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
//   if (e.target.classList.contains("done")) {
//     const liSpan = e.target.parentNode.previousElementSibling;
//     liSpan.style.textDecoration = "line-through";
//   }
// });