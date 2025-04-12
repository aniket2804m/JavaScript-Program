// Selecting Elements:-
// Returns the elements as an html Collection or empty cllection.
let id=document.getElementById("mainImg");
console.log(id);

// Selecting Elements by Class Name:-
let clas= document.getElementsByClassName("oldImg");

for (let i = 0; i<clas.length; i++) {
    clas[i].src = "spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}

// Selecting Elements by Tag Name :- 
// Return the Elements as an html Collection or empty collection 
let tag =document.getElementsByTagName("p").innerText = "Aniket";
console.log(tag);

// Query Selectors:- Allows us to use any css selector.
let query =document.querySelector('p');       //parament selector
console.log(query);

let query2 =document.querySelector('#mainImg');  //id selector
console.log(query2);

let query3 =document.querySelector('.box');  //class selector
console.log(query3);

// Using Properties & Methods :-
// innerText :- Shows the visible text contained in a node.
let inner = para.innerText = "abc";
console.log(inner);

let inner1 = para.innerText = "I am <b>Aniket Suryawanshi</b>";
console.log(inner1);

// textContent :- Shows all the full text.
let content = mainImg.textContent;
console.log(content);

// innerHtml :- Shows the full markup.
let inner2 = para.innerHtml = "I am Aniket Suryawanshi";
console.log(inner2);

// Manipulating Attributs:-
let img = document.querySelector('img');
console.log(img);

// getAttribute :-
let get = img.getAttribute('id');
console.log(get);

// setAttribute :-
let set = img.getAttribute('id', 'anikets');
console.log(set);

// Style Property :-
let imag = document.querySelector('img');
console.log(imag);

let heading = document.querySelector('h1');
console.log(heading);

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "blue";
}
console.log(links);

// Classlist Property :-
// classlist.add() to add new classes
// classlist.remove() to add remove classes
// classlist.contains() to check if class exists
// classlist.toggle() to between add & remove
