// DOM
// document object model
// firstly browser make a parse tree then create a object called document and then add this document to window object
// in document ,everything present about web page and there are properties and  methods too which we can use like getElemetById etc....
// console.log(window.document);  // it will show a document in human readable way 
// console.dir(document);        // it will show how document actually stored in window object


// getElementById         can select any element which have id
// console.log(document.getElementById("main-heading"));   // basically it will print the object of that element which has id used
// console.dir(document.getElementById("main-heading"));
// const mainHeading = document.getElementById("main-heading"); 
// console.log(mainHeading);


// querySelector                          The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);
// const header = document.querySelector(".header");
// console.log(header);
// to get all elements with same class use querySelectorAll
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);      // give nodelists (array like object)

////////

// change text
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.dir(mainHeading);
// mainHeading.textContent = "text has been changed";
// console.log(mainHeading.textContent);
// text content give every text present in element like hello in this case but inner text give only display text 
// console.log(mainHeading.innerText);             //output: manage your tasks 

///////
// change the styles of element
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color = "red";
// mainHeading.style.backgroundColor = "grey";    // you can not type background-color
///////
// get and set attributes                               with can get any attribute value or can change too
// const aTag = document.querySelector("a");
// console.log(aTag);
// console.log(aTag.getAttribute("href"));
// console.log(aTag.getAttribute("href").slice(1));
// aTag.setAttribute("href","#ghar");
// console.log(aTag.getAttribute("href"));
/////

// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property
// let navItems = document.getElementsByClassName("nav-item");     
// console.log(navItems);                                    // HTMLCollection   (array like object)

// we can't use forEach method to iterate through HTMLCollections
// simple for loop
// for of loop

// for(let i=0; i< navItems.length;i++)
// {
//     console.log(navItems[i]);
// }
// for(let navItem of navItems)
// {
//     console.log(navItem);
// }
// but in HTMLCollection we can use forEach method indirectly
// navItems = Array.from(navItems);      // it change HTMLCollection into array
// navItems.forEach(navItem => console.log(navItem));


// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);                                      // NodeList          (array like object)
// we can use simple loop, for of loop , forEach loop too 
// we can change NodeList into array as we changed HTMLCollection
///////
// innerHtml
// const headline = document.querySelector(".headline");
// console.log(headline);
// console.log(headline.innerHTML);
// headline.innerHTML = "<h2> Inner html changed</h2>";
// headline.innerHTML += "<botton class=\"btn\"> yoyo </botton>";              //  \" ------> "
// console.log(headline.innerHTML);

//////

